import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { store } from "../../utils/store";
export function Shipping() {
	let shippingContainer = El({
		element: "div",
	});
	shippingContainer.append(
		shippingHeader(),
		shippingOptions(),
		shippingFooter()
	);
	return shippingContainer;
}
function shippingHeader() {
	return El({
		element: "div",
		className: "flex items-center gap-5 absolute left-6 top-[60px]",
		children: [
			El({
				element: "img",
				src: "/src/assests/images/Vector.png",
				className: "w-5 h-5",
				eventListener: [
					{
						event: "click",
						callback: () => {
							router.navigate("/checkout");
						},
					},
				],
			}),
			El({
				element: "div",
				innerHTML: "Choose Shipping",
				className: "text-3xl font-semibold",
			}),
		],
	});
}
function shippingOptions() {
	return El({
		element: "div",
		className: " flex flex-col",
		children: [
			El({
				element: "div",
				className:
					"bg-white rounded-2xl shadow-[4px_5px_10px_rgba(0,0,0,0.2)] absolute top-[130px] left-6 right-6 h-[110px] flex flex-col  justify-center gap-5 p-2",
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
										src: "/src/assests/images/shipping-economy.svg",
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
														innerHTML: "Economy",
														className: "font-bold text-[18px]",
													}),
												],
											}),
											El({
												element: "div",
												innerHTML: "Estimated Arrival,Dec 20-23",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								innerHTML: "$10",
								className: "font-bold",
							}),
							El({
								element: "input",
								type: "radio",
								className: "w-5 h-5  accent-black",
								name: "shipping",
								value: "economy",
								eventListener: [
									{
										event: "change",
										callback: () => {
											store.setState("selectShipping", {
												title: "Economy",
												arival: "EEstimated Arrival,Dec 20-23",
												price: "10",
												imageUrl: "/src/assests/images/shipping-economy.svg",
											});
										},
									},
								],
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"bg-white rounded-2xl shadow-[4px_5px_10px_rgba(0,0,0,0.2)] absolute top-[260px] left-6 right-6 h-[110px] flex flex-col  justify-center gap-5 p-2",
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
										src: "/src/assests/images/shipping-regular.svg",
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
														innerHTML: "Regular",
														className: "font-bold text-[18px]",
													}),
												],
											}),
											El({
												element: "div",
												innerHTML: "Estimated Arrival,Dec 20-22",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								innerHTML: "$15",
								className: "font-bold",
							}),
							El({
								element: "input",
								type: "radio",
								className: "w-5 h-5 accent-black",
								name: "shipping",
								value: "regular",
								eventListener: [
									{
										event: "change",
										callback: () => {
											store.setState("selectShipping", {
												title: "Regular",
												arival: "Estimated Arrival,Dec 20-22",
												price: "15",
												imageUrl: "src/assests/images/shipping-regular.svg",
											});
										},
									},
								],
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"bg-white rounded-2xl shadow-[4px_5px_10px_rgba(0,0,0,0.2)] absolute top-[390px] left-6 right-6 h-[110px] flex flex-col p-3 justify-center gap-5",
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
										src: "/src/assests/images/shipping-cargo.svg",
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
														innerHTML: "Cargo",
														className: "font-bold text-[18px]",
													}),
												],
											}),
											El({
												element: "div",
												innerHTML: "Estimated Arrival,Dec 19-20",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								innerHTML: "$20",
								className: "font-bold",
							}),
							El({
								element: "input",
								type: "radio",
								className: "w-5 h-5  accent-black",
								name: "shipping",
								value: "cargo",
								eventListener: [
									{
										event: "change",
										callback: () => {
											store.setState("selectShipping", {
												title: "Cargo",
												arival: "Estimated Arrival,Dec 19-20",
												price: "20",
												imageUrl: "src/assests/images/shipping-cargo.svg",
											});
										},
									},
								],
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"bg-white rounded-2xl shadow-[4px_5px_10px_rgba(0,0,0,0.2)] absolute top-[520px] left-6 right-6 h-[110px] flex flex-col p-2  justify-center gap-5",
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
										src: "/src/assests/images/shipping-express.svg",
										className: "w-12 h-12 ",
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
														innerHTML: "Express",
														className: "font-bold text-[18px]",
													}),
												],
											}),
											El({
												element: "div",
												innerHTML: "Estimated Arrival,Dec 18-19",
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								innerHTML: "$30",
								className: "font-bold",
							}),

							El({
								element: "input",
								type: "radio",
								className: "w-5 h-5  accent-black",
								name: "shipping",
								value: "express",
								eventListener: [
									{
										event: "change",
										callback: () => {
											store.setState("selectShipping", {
												title: "Express",
												arival: "Estimated Arrival,Dec 18-19",
												price: "30",
												imageUrl: "src/assests/images/shipping-express.svg",
											});
										},
									},
								],
							}),
						],
					}),
				],
			}),
		],
	});
}
function shippingFooter() {
	return El({
		element: "div",
		className:
			"rounded-t-4xl fixed bottom-0 left-0 bg-white h-[120px] w-full flex flex-col gap-6 shadow-[0_-1px_30px_rgba(0,0,0,0.1)] ",
		children: [
			El({
				element: "button",
				className:
					"absolute left-6 right-6 top-6 bg-black text-white py-4 rounded-3xl font-semibold",
				innerHTML: "Apply",
				eventListener: [
					{
						event: "click",
						callback: () => {
							router.navigate("/checkout");
						},
					},
				],
			}),
		],
	});
}
