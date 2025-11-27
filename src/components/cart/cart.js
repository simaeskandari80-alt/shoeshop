import { loadCart } from "../../api/load-cart/load-cart";
import { BASE_URL } from "../../constants/BASE-URL";
import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { Modal, openModal } from "../base/modal";
//cart
export function Cart() {
	let cartContainer = El({
		element: "div",
		className: "flex flex-col gap-2",
		id: "cartContainer",
	});
	const cartItems = El({
		element: "div",
		id: "cartItems",
	});
	cartContainer.append(headerCart(), optionsInCart());
	footerCart().then((wrapper) => {
		cartContainer.appendChild(wrapper);
	});
	setTimeout(() => {
		cartContainer.appendChild(Modal());
	}, 2000);
	return cartContainer;
}
//header
function headerCart() {
	return El({
		element: "div",
		className:
			"flex items-center justify-between absolute left-6 right-6 top-[50px]",
		children: [
			El({
				element: "div",
				className: "flex items-center gap-5",
				children: [
					El({
						element: "img",
						src: "src/assests/images/logo.png",
						className: "w-5 h-7",
					}),
					El({
						element: "div",
						innerHTML: "My Cart",
						className: "text-3xl font-semibold",
					}),
				],
			}),
			El({
				element: "img",
				src: "src/assests/images/search-alt-svgrepo-com.svg",
				className: "w-10 h-8 opacity-70 ",
			}),
		],
	});
}
//cartOption
export function optionsInCart() {
	let wrapper = El({
		element: "div",
		id: "wrapperOptionInCard",
		className:
			"absolute top-[110px] left-6 right-6 flex flex-col gap-4 mb-[220px]",
	});
	let selectedItems = loadCart();
	selectedItems.then((res) => {
		res.forEach((item) => {
			let cardItem = El({
				element: "div",
				className:
					"bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-3xl flex items-center gap-4  p-2 cartItem",
				children: [
					El({
						element: "div",
						className: "bg-[#f3f3f3] w-25 h-25 rounded-2xl m-3",
						children: [
							El({
								element: "img",
								src: item.sneaker.imageURL,
								className: "",
							}),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col gap-2",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-15",
								children: [
									El({
										element: "div",
										innerHTML: item.sneaker.name,
										className: "text-[16px] font-bold",
									}),
									El({
										element: "img",
										src: "src/assests/images/trash-blank-svgrepo-com.svg",
										className: "w-7 h-7 opacity-80",
										eventListener: [
											{
												event: "click",
												callback: () => {
													openModal(item);
												},
											},
										],
									}),
								],
							}),
							El({
								element: "div",
								className: "flex items-center gap-2",
								children: [
									El({
										element: "div",
										className: "rounded-full bg-black w-5 h-5",
									}),
									El({
										element: "div",
										innerHTML: "Black",
									}),
									El({
										element: "div",
										innerHTML: "|",
									}),
									El({
										element: "div",
										innerHTML: `Size = 41`,
									}),
								],
							}),
							El({
								element: "div",
								className: "flex items-center justify-between",
								children: [
									El({
										element: "div",
										innerHTML: `$ ${item.sneaker.price * item.quantity}.00`,
										className: "totalPriceCart font-bold text-[18px]",
									}),
									El({
										element: "div",
										className:
											"flex items-center justify-center gap-5 bg-[#f3f3f3] rounded-4xl w-30 px-0.5 py-1",
										children: [
											El({
												element: "button",
												innerHTML: "-",
												className: "text-[22px] font-semibold",
												eventListener: [
													{
														event: "click",
														callback: async (e) => {
															const parent = e.target.closest(".cartItem");
															let counterEl =
																parent.querySelector(".countercart");
															let totalPriceEl =
																parent.querySelector(".totalPriceCart");
															let newCount = Number(counterEl.innerHTML) - 1;
															if (newCount < 1) return;
															counterEl.innerHTML = newCount;
															totalPriceEl.innerHTML = `$ ${
																newCount * item.sneaker.price
															}.00`;
															await updateCartQuantity(item.id, newCount);
															await totalPriceAfterChange();
														},
													},
												],
											}),
											El({
												element: "span",
												innerHTML: item.quantity,
												className: "text-[22px] font-semibold countercart",
											}),
											El({
												element: "button",
												innerHTML: "+",
												className: "text-[22px] font-semibold",
												eventListener: [
													{
														event: "click",
														callback: async (e) => {
															const parent = e.target.closest(".cartItem");
															let counterEl =
																parent.querySelector(".countercart");
															let totalPriceEl =
																parent.querySelector(".totalPriceCart");
															let newCount = Number(counterEl.innerHTML) + 1;
															counterEl.innerHTML = newCount;
															totalPriceEl.innerHTML = `$ ${
																newCount * item.sneaker.price
															}.00`;
															await updateCartQuantity(item.id, newCount);
															await totalPriceAfterChange();
														},
													},
												],
											}),
										],
									}),
								],
							}),
						],
					}),
				],
			});
			wrapper.appendChild(cardItem);
		});
	});
	return wrapper;
}
//cart footer
async function footerCart() {
	let cart = await loadCart();
	return El({
		element: "div",
		className:
			"rounded-t-4xl fixed bottom-0 left-0 bg-white h-[200px] w-full flex flex-col gap-6 shadow-[0_-1px_30px_rgba(0,0,0,0.1)] ",
		children: [
			El({
				element: "div",
				className: "flex items-center justify-around mt-4",
				children: [
					El({
						element: "div",
						children: [
							El({
								element: "div",
								innerHTML: "total price",
							}),
							El({
								element: "div",
								className: "font-bold text-2xl",
								innerHTML: `$ ${calculateTotalPrice(cart)}.00`,
								id: "totalPriceInCart",
							}),
						],
					}),
					El({
						element: "div",
						className:
							" bg-black flex gap-4 items-center rounded-4xl px-16 py-3 shadow-xl",
						eventListener: [
							{
								event: "click",
								callback: () => {
									if (cart.length === 0) {
										return;
									}

									router.navigate("/checkout");
								},
							},
						],
						children: [
							El({
								element: "div",
								innerHTML: "Checkout",
								className:
									"text-white text-[18px] font-semibold transition-all",
							}),
							El({
								element: "img",
								src: "/src/assests/images/right-arrow-svgrepo-com.svg",
								className: "w-8 h-6",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex gap-9 items-center justify-center z-20 bg-white w-full my-1",

				children: [
					El({
						element: "div",
						className: "flex flex-col items-center",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/home");
								},
							},
						],
						children: [
							El({
								element: "img",
								src: "src/assests/images/home-svgrepo-com.svg",
								className: "w-6 h-6 opacity-70",
							}),
							El({ element: "div", innerHTML: "Home" }),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col items-center",
						children: [
							El({
								element: "img",
								src: "src/assests/images/cart1-svgrepo-com (1).svg",
								className: "w-6 h-6",
							}),
							El({ element: "div", innerHTML: "Cart" }),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col items-center",
						children: [
							El({
								element: "img",
								src: "src/assests/images/cart2 (1).png",
								className: "w-6 h-6",
							}),
							El({ element: "div", innerHTML: "Orders" }),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col items-center",
						children: [
							El({
								element: "img",
								src: "src/assests/images/wallet2 (1).png",
								className: "w-6 h-6 opacity-70",
							}),
							El({ element: "div", innerHTML: "Wallet" }),
						],
					}),
					El({
						element: "div",
						className: "flex flex-col items-center",
						children: [
							El({
								element: "img",
								src: "src/assests/images/person (1).png",
								className: "w-6 h-6",
							}),
							El({ element: "div", innerHTML: "Profile" }),
						],
					}),
				],
			}),
		],
	});
}
//delete card
export async function deleteCard(id) {
	let token = localStorage.getItem("token");
	const res = await fetch(`${BASE_URL}/cart/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	});
	return res;
}
//update cart QUantity
export async function updateCartQuantity(id, quantity) {
	const token = localStorage.getItem("token");

	const res = await fetch(`${BASE_URL}/cart/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({ quantity }),
	});

	return res.json();
}
//calculate Total price
export function calculateTotalPrice(cart) {
	return cart.reduce(
		(sum, item) => sum + item.sneaker.price * item.quantity,
		0
	);
}
// total Price After Change
export async function totalPriceAfterChange() {
	let cart = await loadCart();
	let totalPrice = document.getElementById("totalPriceInCart");
	totalPrice.innerHTML = `$ ${calculateTotalPrice(cart)}.00`;
}
