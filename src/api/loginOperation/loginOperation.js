import { BASE_URL } from "../constants";
import { router } from "../utils/router";

export async function LoginUser() {
	const usernameInput = document.getElementById("login-username");
	const passwordInput = document.getElementById("login-password");
	const Message = document.getElementById("login-message");

	if (!usernameInput || !passwordInput || !Message) {
		console.error("Required DOM elements not found.");
		return;
	}

	const username = usernameInput.value;
	const password = passwordInput.value;

	try {
		const response = await fetch(`${BASE_URL}/auth/login`, {
			method: "POST",
			body: JSON.stringify({ username, password }),
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
			},
		});

		const data = await response.json();
		console.log(data);

		if (response.ok && data.token) {
			localStorage.setItem("token", data.token);
			localStorage.setItem("username", username);
			localStorage.setItem("userEntered", "true");
			Message.innerText = "login successfuly";
			router.navigate("/home");
			return data;
		} else {
			let loginMessage = "username or password is uncorrect!";
			Message.innerText = loginMessage;
			return data;
		}
	} catch (error) {
		console.log(error);
		Message.innerText = "connection error";
	}
}
