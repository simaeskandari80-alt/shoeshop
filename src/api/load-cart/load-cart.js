import { BASE_URL } from "../../constants/BASE-URL";
export async function loadCart() {
	const token = localStorage.getItem("token");
	const res = await fetch(`${BASE_URL}/cart`, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const items = await res.json();
	console.log(items);
	return items;
}
