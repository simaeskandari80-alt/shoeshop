import { BASE_URL } from "../../constants";
import { El } from "../../utils/el";

export async function getBrand() {
	const token = localStorage.getItem("token");
	let response = await fetch(`${BASE_URL}/sneaker/brands`, {
		headers: {
			Accept: "/",
			Authorization: `Bearer ${token}`,
		},
	});
	let data = await response.json();
	console.log(data);
	return data;
}
export async function ShowBrand() {
	let brands = await getBrand();
	console.log(brands);

	let brandContainer = document.createElement("div");
	brandContainer.classList =
		"w-full h-[39px] absolute flex gap-2 left-6 top-[160px] overflow-x-scroll hide-scrollbar w-full";
	brands.map((item) => {
		let buttonBrand = El({
			element: "button",
			className:
				"border-black border-2 rounded-[25px] px-5 py-2.5 flex items-center justify-center w-fit font-semibold text-4 leading-[100%]",
			innerHTML: item,
		});
		brandContainer.appendChild(buttonBrand);
	});
	return brandContainer;
}
export function seeALL() {
	return El({
		element: "div",
		className:
			"flex items-center justify-between w-[380px] h-6 absolute left-6 top-[130px]",
		children: [
			El({
				element: "div",
				innerHTML: "Most Popular",
				className: "text-5 font-semibold w-[131px] h-6",
			}),

			El({
				element: "div",
				innerHTML: "See All",
				className: "text-4 font-semibold ",
			}),
		],
	});
}
