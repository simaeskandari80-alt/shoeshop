import { BASE_URL } from "../constants";
import { router } from "../utils/router";

export async function SignUpUsers() {
	const usernameInput = document.getElementById("username");
	const passwordInput = document.getElementById("password");
	const errorMessage = document.getElementById("log-message");

	if (!usernameInput || !passwordInput || !errorMessage) {
		console.error("Required DOM elements not found.");
		return;
	}

	const username = usernameInput.value;
	const password = passwordInput.value;

	try {
		const response = await fetch(`${BASE_URL}/auth/signup`, {
			method: "POST",
			body: JSON.stringify({ username, password }),
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		});

		const data = await response.json();

		console.log(data);

		if (response.ok) {
			localStorage.setItem("token", data.token);
			errorMessage.innerText = "sign up successfuly complete";
			localStorage.setItem("userEntered", "true");
			router.navigate("/home");
			return data;
		} else {
			errorMessage.innerText = "error in sign up";
			return data;
		}
	} catch (error) {
		console.log(error);
		if (errorMessage) {
			errorMessage.innerText = "error in server connection";
		}
	}
}
