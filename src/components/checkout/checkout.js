import { loadCart } from "../../api/load-cart/load-cart";
import { El } from "../../utils/el";
import { calculateTotalPrice } from "../cart/cart";
import { router } from "../../utils/router";
import { store } from "../../utils/store";
import { CompleteOrder } from "./complete-order";
import { Payment } from "./payment-method";
import { Shipping } from "./shipping";
import { shippingAddress } from "./shipping-address";
export function Checkout(params) {
	const step = params?.step || "address";
	if (step !== "address") {
		return renderCheckout(step);
	}
	store.subscribe("selectShipping", (val) => {
		shippingTypeAfterChange(val);
	});

	let checkoutPage = El({
		element: "div",
		className: "flex flex-col gap-4 absolute left-6 right-6 top-[60px]",
		children: [firstCheckOutHeader(), orderListInCheckout(), chooseShipping()],
	});
	checkoutPromoCode().then((wrapper) => {
		checkoutPage.appendChild(wrapper);
	});
	setTimeout(() => {
		checkoutPage.appendChild(checkoutFooter());
	}, 1000);
	setTimeout(() => {
		showCardInCheckOut();
	}, 0);
	setTimeout(() => {
		const selected = store.getState("selectShipping");
		if (selected) shippingTypeAfterChange(selected);
	}, 0);
	return checkoutPage;
}
// header
function firstCheckOutHeader() {
	const container = El({
		element: "div",
		className: "flex flex-col gap-4",
	});

	function renderAddress() {
		const selected = store.getState("selectAddress") || {
			title: "Home",
			address: "61480 Sunbrook Park, PC 5679",
		};

		container.innerHTML = "";

		container.appendChild(
			El({
				element: "div",
				className: " flex flex-col gap-4",
				children: [
					El({
						element: "div",
						className: "flex items-center justify-between gap-5 ",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-2",
								children: [
									El({
										element: "img",
										src: "src/assests/images/Vector.png",
										className: "w-6 h-6 opacity-85",
										eventListener: [
											{
												event: "click",
												callback: () => {
													router.navigate("/cart");
												},
											},
										],
									}),
									El({
										element: "div",
										innerHTML: "Checkout",
										className: "text-2xl font-bold",
									}),
								],
							}),
							El({
								element: "img",
								src: "src/assests/images/more-circle-svgrepo-com.svg",
								className: "w-8 h-8",
							}),
						],
					}),
					El({
						element: "div",
						innerHTML: "shippingAddress",
						className: "font-semibold text-xl",
					}),
					El({
						element: "div",
						className:
							"bg-white rounded-2xl shadow-[2px_2px_10px_rgba(0,0,0,0.1)] w-full h-[100px] flex flex-col justify-center p-3",
						children: [
							El({
								element: "div",
								className: "flex items-center justify-between",
								children: [
									El({
										element: "div",
										className: "flex items-center gap-2",
										children: [
											El({
												element: "div",
												className:
													"rounded-full bg-gray-300 w-16 h-16 relative",
												children: [
													El({
														element: "img",
														src: "src/assests/images/location-filled-svgrepo-com.svg",
														className: "w-12 h-12 absolute left-2 top-[7.5px]",
													}),
												],
											}),

											El({
												element: "div",
												children: [
													El({
														element: "div",
														className: "flex items-center gap-3",
														children: [
															El({
																element: "div",
																innerHTML: selected.title,
																className: "font-bold text-[18px]",
															}),
														],
													}),
													El({
														element: "div",
														innerHTML: selected.address,
													}),
												],
											}),
										],
									}),
									El({
										element: "img",
										src: "src/assests/images/edit.png",
										className: "w-6 h-6",
										eventListener: [
											{
												event: "click",
												callback: () => {
													router.navigate("/checkout/shippingaddress");
												},
											},
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "img",
						src: "src/assests/images/grayLine.png",
						className: "w-full h-1 opacity-50",
					}),
				],
			})
		);
	}
	renderAddress();
	store.subscribe("selectAddress", renderAddress);

	return container;
}
//orderList
function orderListInCheckout() {
	return El({
		element: "div",
		className: "flex flex-col gap-2 ",
		children: [
			El({
				element: "div",
				innerHTML: "Order List",
				className: "text-[20px] font-semibold",
			}),

			El({
				element: "div",
				id: "checkoutWrapper",
				className: "flex flex-col gap-6",
			}),
		],
	});
}
//chooseShipping
function chooseShipping() {
	const wrapper = El({
		element: "div",
		id: "chooseShippingWrapper",
		children: [
			El({
				element: "div",
				className: "flex flex-col gap-4",
				children: [
					El({
						element: "img",
						src: "src/assests/images/grayLine.png",
						className: "w-full h-1 opacity-50",
					}),
					El({
						element: "div",
						innerHTML: "choose Shipping",
						className: "text-[20px] font-semibold",
					}),
					El({
						element: "div",
						className:
							"bg-white rounde-3xl flex justify-between items-center shadow-[2px_2px_10px_rgba(0,0,0,0.1)] h-[70px] rounded-2xl px-4",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-2",
								children: [
									El({
										element: "img",
										src: "src/assests/images/truck.png",
										className: "w-8 h-8",
									}),
									El({
										element: "div",
										innerHTML: "choose Shipping Type",
										className: "text-[18px] font-semibold",
									}),
								],
							}),
							El({
								element: "img",
								src: "src/assests/images/arrow-next.png",
								className: "w-4 h-4 opacity-70",
								eventListener: [
									{
										event: "click",
										callback: () => {
											router.navigate("/checkout/shipping");
										},
									},
								],
							}),
						],
					}),
					El({
						element: "img",
						src: "src/assests/images/grayLine.png",
						className: "w-full h-1 opacity-50",
					}),
				],
			}),
		],
	});
	return wrapper;
}
//checkoutpromoCode
async function checkoutPromoCode() {
	let selectShipping = store.getState("selectShipping");
	const shipping = selectShipping ? selectShipping.price : 0;
	let cart = await loadCart();
	let price = calculateTotalPrice(cart);
	let total = price + Number(shipping);
	let promoContainer = El({
		element: "div",
		className: "flex flex-col gap-3 mb-4",
		id: "promoContainer",
		children: [
			El({
				element: "div",
				innerHTML: "promo code",
				className: "text-xl font-bold",
			}),
			El({
				element: "div",
				className: "flex justify-between items-center gap-3",
				children: [
					El({
						element: "input",
						className: "bg-[#f7f7f7] rounded-2xl w-full h-12 p-4",
						placeholder: "Enter Promo Code",
						id: "promoInput",
					}),
					El({
						element: "img",
						src: "src/assests/images/plus-circle-svgrepo-com.svg",
						className: "w-12 h-12",
						eventListener: [
							{
								event: "click",
								callback: async () => {
									let discountCode = document.getElementById("promoInput");
									if (discountCode.value === "12345") {
										await renderPromoPart();
									}
								},
							},
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"flex flex-col gap-2.5 bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.1)] p-4 rounded-2xl",
				children: [
					El({
						element: "div",
						className: "flex justify-between items-center ",
						children: [
							El({
								element: "div",
								innerHTML: "Amout",
								className: "text-[18px] font-medium opacity-60",
							}),
							El({
								element: "div",
								innerHTML: `$ ${price}.00`,
								className: "text-[18px] font-medium opacity-90",
							}),
						],
					}),

					El({
						element: "div",
						className: "flex justify-between items-center",
						children: [
							El({
								element: "div",
								innerHTML: "Shipping",
								className: "text-[18px] font-medium opacity-60",
							}),
							El({
								element: "div",
								innerHTML: selectShipping ? `$ ${shipping}` : "-",
								className: "text-[18px] font-medium opacity-90",
							}),
						],
					}),
					El({
						element: "img",
						src: "src/assests/images/grayLine.png",
						className: "w-full h-1 opacity-50",
					}),
					// El({
					// 	element: "img",
					// 	src: "",
					// }),
					El({
						element: "div",
						className: "flex justify-between items-center",
						children: [
							El({
								element: "div",
								innerHTML: "Total",
							}),
							El({
								element: "div",
								innerHTML: `$ ${total}.00`,
							}),
						],
					}),
				],
			}),
		],
	});
	return promoContainer;
}
//checkoutFooter
function checkoutFooter() {
	return El({
		element: "div",
		children: [
			El({
				element: "div",
				className:
					"bg-black flex items-center justify-center gap-3 rounded-4xl py-4 mb-5 shadow-[2px_2px_10px_rgba(0,0,0,0.1)]",
				children: [
					El({
						element: "div",
						innerHTML: "Continue To Payment",
						className: "text-white cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("checkout/payment");
								},
							},
						],
					}),
					El({
						element: "img",
						src: "src/assests/images/right-arrow-svgrepo-com.svg",
						className: "w-4 h-4",
					}),
				],
			}),
		],
	});
}
//shoWCardInCheckout
function showCardInCheckOut() {
	let checkoutWrapper = document.getElementById("checkoutWrapper");
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
			checkoutWrapper.appendChild(cardItem);
		});
	});
	return checkoutWrapper;
}
//Shipping Type After Change
function shippingTypeAfterChange(selectedShipping) {
	const newBox = El({
		element: "div",
		className: "flex flex-col gap-4",
		children: [
			El({
				element: "img",
				src: "src/assests/images/grayLine.png",
				className: "w-full h-1 opacity-50",
			}),
			El({
				element: "div",
				innerHTML: "choose Shipping",
				className: "text-[20px] font-semibold",
			}),
			El({
				element: "div",
				className:
					"bg-white rounded-2xl shadow-[4px_5px_10px_rgba(0,0,0,0.2)] flex flex-col  justify-center gap-5 p-2",
				children: [
					El({
						element: "div",
						className: "flex items-center justify-between",
						children: [
							El({
								element: "div",
								className: "flex items-center gap-2",
								children: [
									El({
										element: "img",
										src: selectedShipping.imageUrl,
										className: "w-12 h-12",
									}),

									El({
										element: "div",
										children: [
											El({
												element: "div",
												className: "flex items-center gap-3",
												children: [
													El({
														element: "div",
														innerHTML: selectedShipping.title,
														className: "font-bold text-[18px]",
													}),
												],
											}),
											El({
												element: "div",
												innerHTML: selectedShipping.arival,
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								innerHTML: `$${selectedShipping.price}`,
								className: "font-bold",
							}),
							El({
								element: "img",
								src: "src/assests/images/edit.png",
								className: "w-6 h-6",
								eventListener: [
									{
										event: "click",
										callback: () => {
											router.navigate("/checkout/shipping");
										},
									},
								],
							}),
						],
					}),
				],
			}),
			El({
				element: "img",
				src: "src/assests/images/grayLine.png",
				className: "w-full h-1 opacity-50",
			}),
		],
	});
	const wrapper = document.getElementById("chooseShippingWrapper");
	if (wrapper) {
		wrapper.innerHTML = "";
		wrapper.appendChild(newBox);
	}
}
//render Checkout
function renderCheckout(step) {
	const wrapper = document.createElement("div");

	switch (step) {
		case "shippingaddress":
			wrapper.append(shippingAddress());
			break;

		case "shipping":
			wrapper.append(Shipping());
			break;

		case "payment":
			wrapper.append(Payment());
			break;

		case "complete":
			wrapper.append(CompleteOrder());
			break;

		default:
			wrapper.innerHTML = "<h2>Invalid step</h2>";
	}

	return wrapper;
}
//render promo part
async function renderPromoPart() {
	let selectShipping = store.getState("selectShipping");
	const shipping = selectShipping ? selectShipping.price : 0;
	let cart = await loadCart();
	let price = calculateTotalPrice(cart);
	let discount = (price * 30) / 100;
	let total = price + Number(shipping) - discount;
	let promoContainer = document.getElementById("promoContainer");
	promoContainer.innerHTML = "";
	promoContainer.append(
		El({
			element: "div",
			className: "flex flex-col gap-3 mb-4",
			children: [
				El({
					element: "div",
					innerHTML: "promo code",
					className: "text-xl font-bold",
				}),
				El({
					element: "div",
					className: "flex justify-between items-center gap-3",
					children: [
						El({
							element: "input",
							className: "bg-[#f7f7f7] rounded-2xl w-full h-12 p-4",
							placeholder: "Enter Promo Code",
							id: "promoInput",
						}),
						El({
							element: "img",
							src: "src/assests/images/plus-circle-svgrepo-com.svg",
							className: "w-12 h-12",
						}),
					],
				}),
				El({
					element: "div",
					className:
						"flex flex-col gap-2.5 bg-white shadow-[2px_2px_10px_rgba(0,0,0,0.1)] p-4 rounded-2xl",
					children: [
						El({
							element: "div",
							className: "flex justify-between items-center ",
							children: [
								El({
									element: "div",
									innerHTML: "Amout",
									className: "text-[18px] font-medium opacity-60",
								}),
								El({
									element: "div",
									innerHTML: `$ ${price}.00`,
									className: "text-[18px] font-medium opacity-90",
								}),
							],
						}),

						El({
							element: "div",
							className: "flex justify-between items-center",
							children: [
								El({
									element: "div",
									innerHTML: "Shipping",
									className: "text-[18px] font-medium opacity-60",
								}),
								El({
									element: "div",
									innerHTML: selectShipping ? `$ ${shipping}` : "-",
									className: "text-[18px] font-medium opacity-90",
								}),
							],
						}),
						El({
							element: "div",
							className: "flex justify-between items-center",
							children: [
								El({
									element: "div",
									innerHTML: "promo",
									className: "text-[18px] font-medium opacity-60",
								}),
								El({
									element: "div",
									innerHTML: `$ ${discount}`,
									className: "text-[18px] font-medium opacity-90",
								}),
							],
						}),
						El({
							element: "img",
							src: "src/assests/images/grayLine.png",
							className: "w-full h-1 opacity-50",
						}),
						// El({
						// 	element: "img",
						// 	src: "",
						// }),
						El({
							element: "div",
							className: "flex justify-between items-center",
							children: [
								El({
									element: "div",
									innerHTML: "Total",
								}),
								El({
									element: "div",
									innerHTML: `$ ${total}.00`,
								}),
							],
						}),
					],
				}),
			],
		})
	);
}
