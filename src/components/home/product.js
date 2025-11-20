import { El } from "../../utils/el";
export async function productCardContainer() {
	return El({
		element: "div",
		className: "bg-white w-[380px] h-screen absolute left-6 top-[210px] ",
		children: [await productCard()],
	});
}

export const getSneakers = async () => {
	const token = localStorage.getItem("token");
	const response = await fetch(
		"http://localhost:3000/sneaker?page=1&limit=100",
		{
			method: "GET",
			headers: {
				Accept: "/",
				Authorization: `Bearer ${token}`,
			},
		}
	);
	const data = await response.json();
	console.log(data);
	return data;
};
export async function productCard() {
	const res = await getSneakers();
	const sneakers = res.data;
	const wrapper = document.createElement("div");
	wrapper.classList = "flex flex-wrap gap-2 items-center justify-center";
	sneakers.forEach((item) => {
		const card = El({
			element: "div",
			className: "w-[182px] h-[244px] bg-white flex flex-col gap-4 mb-5",
			children: [
				El({
					element: "div",
					className: "w-[182px] h-[182px]  rounded-3xl",
					children: [
						El({
							element: "img",
							src: item.imageURL,
							className: "w-[182px] h-[182px] rounded-3xl",
						}),
					],
				}),
				El({
					element: "div",
					innerHTML: item.name,
					className:
						"w-[182px] h-6 text-5 font-bold leading-[100%] text-[#152536]",
				}),
				El({
					element: "div",
					innerHTML: `$ ${item.price}.00`,
					className: "w-22 h-[19px] text-4 font-semibold leading-[100%]",
				}),
			],
		});

		wrapper.appendChild(card);
	});
	console.log(wrapper);

	return wrapper;
}
