import { BASE_URL } from "../../constants/BASE-URL";
export async function searchSneakers(name) {
	let token = localStorage.getItem("token");
	let res = await fetch(`${BASE_URL}/sneaker?page=1&limit=10&search=${name}`, {
		method: "GET",
		headers: { Accept: "/", Authorization: `Bearer ${token}` },
	});
	let data = await res.json();
	return data.data;
}
