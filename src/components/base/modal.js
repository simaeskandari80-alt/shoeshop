import { loadCart } from "../../api/load-cart/load-cart";
import { El } from "../../utils/el";
import { deleteCard, totalPriceAfterChange } from "../cart/cart";
//modal in cart
export function Modal(cancleBtnText = "cancle", okBtnText = "yes remove") {
	let modalContainer = El({
		element: "div",
		id: "modalContainer",
		className: "invisible",
		children: [
			El({
				element: "div",
				className:
					"fixed bg-[#4f545d] flex justify-center items-center opacity-80 inset-0",
			}),
			El({
				element: "div",
				className:
					"bg-white fixed bottom-0 h-[380px] w-full rounded-t-[50px] flex flex-col gap-3 items-center ",
				children: [
					El({
						element: "img",
						src: "src/assests/images/grayLine.png",
						className: "flex items-center  w-10 opacity-35",
					}),
					El({
						element: "div",
						innerHTML: "Remove From Cart?",
						className: "font-bold text-2xl opacity-90",
					}),
					El({
						element: "img",
						src: "src/assests/images/grayLine.png",
						className: "w-[380px] h-2 opacity-20",
					}),
					El({
						element: "div",
						className:
							"bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1)] rounded-3xl flex items-center gap-4  p-2 cartItem w-[380px]",
						id: "modalProduct",
					}),
					El({
						element: "img",
						src: "src/assests/images/grayLine.png",
						className: "w-[380px] h-2 opacity-20",
					}),
					El({
						element: "div",
						className: "flex gap-4 w-[380px]",
						children: [
							El({
								element: "button",
								innerHTML: cancleBtnText,
								className: "bg-[#e7e7e7] rounded-4xl w-[50%] py-4",
								eventListener: [
									{
										event: "click",
										callback: () => {
											closeModal();
										},
									},
								],
							}),
							El({
								element: "button",
								innerHTML: okBtnText,
								className: "bg-black rounded-4xl w-[50%] text-white py-4",
								id: "removeBtn",
								eventListener: [
									{
										event: "click",
										callback: () => {},
									},
								],
							}),
						],
					}),
				],
			}),
		],
	});
	return modalContainer;
}
//close modal
function closeModal() {
	document.getElementById("modalContainer").classList.add("invisible");
}
//open modal
export function openModal(item) {
	let modal = document.getElementById("modalContainer");
	let modalProduct = document.getElementById("modalProduct");
	let removeBtn = document.getElementById("removeBtn");
	modalProduct.innerHTML = "";
	let modalItem = El({
		element: "div",
		className: "flex items-center gap-4 w-full",
		children: [
			El({
				element: "div",
				className: "bg-[#f3f3f3] w-25 h-25 rounded-2xl m-3",
				children: [
					El({
						element: "img",
						src: item.sneaker.imageURL,
						className: "w-full h-full object-cover rounded-2xl",
					}),
				],
			}),
			El({
				element: "div",
				className: "flex flex-col gap-2",
				children: [
					El({
						element: "div",
						className: "text-[16px] font-bold",
						innerHTML: item.sneaker.name,
					}),
					El({
						element: "div",
						className: "flex items-center gap-2",
						children: [
							El({
								element: "div",
								className: "rounded-full bg-black w-5 h-5",
							}),
							El({ element: "div", innerHTML: "Black" }),
							El({ element: "div", innerHTML: "|" }),
							El({ element: "div", innerHTML: `Size = 41` }),
						],
					}),
					El({
						element: "div",
						className: "flex items-center justify-between w-60",
						children: [
							El({
								element: "div",
								className: "font-bold",
								innerHTML: `$${item.sneaker.price * item.quantity}.00`,
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
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});

	modalProduct.appendChild(modalItem);

	removeBtn.onclick = async () => {
		await deleteCard(item.id);
		await totalPriceAfterChange();
		closeModal();
		let wrapperOptionInCard = document.getElementById("wrapperOptionInCard");
		wrapperOptionInCard.innerHTML = "";
		let selectedItems = loadCart();
		selectedItems.then((res) => {
			res.forEach((item) => {
				console.log(item);

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
											className: "totalPriceCart",
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
															callback: (e) => {
																const parent = e.target.closest(".cartItem");

																let counterEl =
																	parent.querySelector(".countercart");
																let totalPriceEl =
																	parent.querySelector(".totalPriceCart");

																let result = updateCounter({
																	count: Number(counterEl.innerHTML),
																	price: item.sneaker.price,
																	operation: "dec",
																});

																counterEl.innerHTML = result.count;
																totalPriceEl.innerHTML = `$ ${result.total}.00`;
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
															callback: (e) => {
																const parent = e.target.closest(".cartItem");

																let counterEl =
																	parent.querySelector(".countercart");
																let totalPriceEl =
																	parent.querySelector(".totalPriceCart");

																let result = updateCounter({
																	count: Number(counterEl.innerHTML),
																	price: item.sneaker.price,
																	operation: "inc",
																});

																counterEl.innerHTML = result.count;
																totalPriceEl.innerHTML = `$ ${result.total}.00`;
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
				wrapperOptionInCard.appendChild(cardItem);
			});
		});
	};

	modal.classList.remove("invisible");
}
