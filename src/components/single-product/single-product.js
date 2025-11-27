import { loadCart } from "../../api/load-cart/load-cart";
import { BASE_URL } from "../../constants/BASE-URL";
import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { updateCounter } from "../../utils/update-counter";
let selectedColor = null;
let selectedSize = null;
async function getProductId() {
	let token = localStorage.getItem("token");
	let params = new URLSearchParams(window.location.search);
	let id = params.get("id");
	const response = await fetch(`${BASE_URL}/sneaker/item/${id}`, {
		headers: { Authorization: `Bearer ${token}` },
	});
	const data = await response.json();
	console.log(data);

	return data;
}
//single product
export function singleproduct() {
	let product = El({
		element: "div",
		className: "w-[428px] h-[926px]",
		id: "singleproduct",
	});
	product.append(productInfo(), productDescription(), header(), totalPrice());
	getProductId();
	return product;
}
//header
export function header() {
	let headerContainer = El({
		element: "div",
		className: "bg-[#f3f3f3] w-full h-[390px]",
	});
	getProductId().then((product) => {
		headerContainer.append(
			El({
				element: "div",

				children: [
					El({
						element: "img",
						src: "src/assests/images/Vector.png",
						className:
							"w-5.5 h-3.5 absolute left-6 top-10 opacity-65 cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									router.navigate("/home");
								},
							},
						],
					}),
					El({
						element: "img",
						src: product.imageURL,
						className: " w-[340px] h-[340px] absolute left-10 top-5 m-auto",
					}),
					El({
						element: "img",
						src: "src/assests/images/Screenshot (1106).png",
						className: "w-25 h-4 absolute top-90 left-[164px]",
					}),
				],
			})
		);
	});

	return headerContainer;
}
//product info
function productInfo() {
	const container = El({
		element: "div",
		className: "flex flex-col absolute top-[420px] left-6 gap-2.5",
	});
	getProductId().then((product) => {
		container.append(
			El({
				element: "div",
				className: "flex items-center justify-between w-[380px]",
				children: [
					El({
						element: "div",
						innerText: product.name,
						className: "text-[28px] font-bold w-[300px]",
					}),
					El({
						element: "img",
						src: "src/assests/images/heart-svgrepo-com.svg",
						className: "right-7 w-6 h-6",
					}),
				],
			}),
			El({
				element: "div",
				className: "flex items-center gap-4",
				children: [
					El({
						element: "div",
						className: "bg-[#f3f3f3] px-2 py-1 rounded-lg",
						innerHTML: "5.371 sold",
					}),
					El({
						element: "div",
						className: "flex items-center gap-4",
						children: [
							El({
								element: "img",
								src: "/src/assests/images/star-half-stroke-filled-svgrepo-com.svg",
								className: "w-5 h-5",
							}),
							El({
								element: "div",
								innerHTML: "4.3 (5,389 reviews)",
							}),
						],
					}),
				],
			}),
			El({
				element: "img",
				src: "/src/assests/images/grayLine.png",
				className: "h-3 opacity-20",
			})
		);
	});

	return container;
}
//product description
function productDescription() {
	let activeBrandButton1 = null;
	let activeBrandButton2 = null;
	let descriptionContainer = El({
		element: "div",
	});
	getProductId().then((product) => {
		descriptionContainer.append(
			El({
				element: "div",
				className:
					" flex flex-col gap-2.5 absolute top-[570px] left-6 w-[380px]",
				children: [
					El({
						element: "div",
						innerHTML: "Description",
						className: "text-[20px] font-semibold",
					}),
					El({
						element: "div",
						className: "text-[16px]",
						innerHTML: `Lorem ipsum dolor sit amet consectetur adipisicing elit. In iusto minusmaiores possimus <strong>view more ...</strong>`,
					}),
					El({
						element: "div",
						className: "flex items-center justify-between w-[220px] gap-10",
						children: [
							El({
								element: "div",
								className: "flex flex-col gap-2",
								children: [
									El({
										element: "div",
										innerHTML: "size",
										className: "font-semibold text-[22px]",
									}),
									El({
										element: "div",
										className: "flex gap-3",
										children: product.sizes.split("|").map((item) => {
											return El({
												element: "div",
												className:
													" selectedSize rounded-[50%] border w-10 h-10 flex items-center justify-center",
												innerHTML: item,
												selectedSize: item,
												eventListener: [
													{
														event: "click",
														callback: (e) => {
															const selectSize = e.target;
															selectedSize = selectSize.innerHTML;
															if (
																activeBrandButton1 &&
																activeBrandButton1 !== selectSize
															) {
																activeBrandButton1.classList.remove(
																	"bg-black",
																	"text-white"
																);
																activeBrandButton1.classList.add(
																	"bg-white",
																	"text-black"
																);
															}
															selectSize.classList.add(
																"bg-black",
																"text-white"
															);
															selectSize.classList.remove(
																"bg-white",
																"text-black"
															);
															activeBrandButton1 = selectSize;
														},
													},
												],
											});
										}),
									}),
								],
							}),
							El({
								element: "div",
								className: "flex flex-col gap-2 w-[99%]",
								children: [
									El({
										element: "div",
										innerHTML: "color",
										className: "font-semibold text-[22px]",
									}),
									El({
										element: "div",

										className:
											"flex gap-2.5  flex-nowrap overflow-x-scroll hide-scrollbar",
										children: product.colors.split("|").map((item) => {
											return El({
												element: "div",
												className: ` selectColor rounded-[50%] w-10 h-10 border flex items-center justify-center shrink-0`,
												style: `background-color: ${item}`,
												selectedColor: item,
												eventListener: [
													{
														event: "click",
														callback: (e) => {
															const selectColor = e.target;
															selectedColor = item;

															if (
																activeBrandButton2 &&
																activeBrandButton2 !== selectColor
															) {
																activeBrandButton2.innerHTML = "";
															}
															selectColor.innerHTML = "✔";
															activeBrandButton2 = selectColor;
														},
													},
												],
											});
										}),
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "flex items-center gap-5",
						children: [
							El({
								element: "div",
								innerHTML: "Quantity",
								className: "font-medium text-[18px]",
							}),
							El({
								element: "div",
								className:
									"flex items-center justify-center gap-5 bg-[#f3f3f3] rounded-4xl w-35 py-2 ",
								children: [
									El({
										element: "button",
										innerHTML: "-",
										className: "text-[22px] font-semibold",
										eventListener: [
											{
												event: "click",
												callback: () => {
													let counterEl = document.getElementById("counter");
													let totalPriceEl =
														document.getElementById("totalPrice");

													let result = updateCounter({
														count: Number(counterEl.innerHTML),
														price: product.price,
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
										innerHTML: 1,
										className: "text-[22px] font-semibold",
										id: "counter",
									}),
									El({
										element: "button",
										innerHTML: "+",
										className: "text-[22px] font-semibold",
										eventListener: [
											{
												event: "click",
												callback: () => {
													let counterEl = document.getElementById("counter");
													let totalPriceEl =
														document.getElementById("totalPrice");

													let result = updateCounter({
														count: Number(counterEl.innerHTML),
														price: product.price,
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
					El({
						element: "img",
						src: "/src/assests/images/grayLine.png",
						className: "h-3 opacity-20",
					}),
				],
			})
		);
	});
	return descriptionContainer;
}
//total price
function totalPrice() {
	let priceContainer = El({
		element: "div",
	});
	getProductId().then((product) => {
		priceContainer.append(
			El({
				element: "div",
				className:
					"flex items-center justify-between absolute top-[850px] left-6  w-[380px]",
				children: [
					El({
						element: "div",

						children: [
							El({
								element: "div",
								innerHTML: "Total price",
								className: "text-gray-500",
							}),
							El({
								element: "div",
								innerHTML: `$ ${product.price}.00`,
								className: "text-2xl font-semibold",
								id: "totalPrice",
							}),
						],
					}),
					El({
						element: "div",
						className:
							" bg-black flex gap-4 items-center rounded-4xl px-16 py-3 shadow-xl",
						children: [
							El({
								element: "img",
								src: "/src/assests/images/cartwhite.svg",
								className: "w-6 h-6",
							}),
							El({
								element: "div",
								innerHTML: "Add to Cart",
								className:
									"text-white text-[18px] font-semibold transition-all",
								eventListener: [
									{
										event: "click",
										callback: () => {
											let singleproduct =
												document.getElementById("singleproduct");
											addToCart(product);
											loadCart();
											selectedColor = null;
											selectedSize = null;
										},
									},
								],
							}),
						],
					}),
				],
			})
		);
	});
	return priceContainer;
}
//message that product added to cart
function addedMessage() {
	return El({
		element: "div",
		className:
			"fixed top-9 left-15 w-[70%] bg-gray-200 flex justify-center items-center gap-3 h-[100px] rounded-lg shadow-2xl",
		children: [
			El({
				element: "div",
				className: "rounded-full shadow-2xs border-green-500 border-2",
				innerHTML: "✔",
			}),
			El({
				element: "div",
				className: "text-green-500",
				innerHTML: "Added to Cart!",
			}),
		],
	});
}
// fuction for add product to cart
async function addToCart(product) {
	const token = localStorage.getItem("token");
	const quantity = +document.getElementById("counter").innerHTML;
	if (!selectedSize || !selectedColor) {
		alert("please select color and size");
		return;
	}
	const res = await fetch(`${BASE_URL}/cart`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify({
			sneakerId: Number(product.id),
			quantity: quantity,
		}),
	});

	const data = await res.json();
	console.log(data);
	let singleproduct = document.getElementById("singleproduct");
	singleproduct.append(addedMessage());
	setTimeout(() => {
		router.navigate("/cart");
	}, 2000);
}
