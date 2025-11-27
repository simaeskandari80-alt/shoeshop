import { El } from "../../utils/el";
import { router } from "../../utils/router";
import { store } from "../../utils/store";
export function shippingAddress() {
	let shippingAddressContainer = El({
		element: "div",
	});
	shippingAddressContainer.append(
		shippingAddressHeader(),
		shippingAddressOptions(),
		shippingAddressFooter()
	);
	return shippingAddressContainer;
}
function shippingAddressHeader() {
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
				innerHTML: "Shipping Address",
				className: "text-3xl font-semibold",
			}),
		],
	});
}
function shippingAddressOptions() {
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
										element: "div",
										className: "rounded-full bg-gray-300 w-16 h-16 relative",
										children: [
											El({
												element: "img",
												src: "/src/assests/images/location-filled-svgrepo-com.svg",
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
														innerHTML: "Home",
														className: "font-bold text-[18px]",
													}),
													El({
														element: "div",
														className:
															"bg-[#f3f3f3] px-2 py-0.5 rounded-lg font-medium",
														innerHTML: "Default",
													}),
												],
											}),
											El({
												element: "div",
												innerHTML: "61480 Sunbrook Park,Pc 5679",
											}),
										],
									}),
								],
							}),
							El({
								element: "input",
								type: "radio",
								className: "w-5 h-5  accent-black",
								name: "shippingAddress",
								value: "home",
								eventListener: [
									{
										event: "change",
										callback: () => {
											store.setState("selectAddress", {
												title: "Home",
												address: "61480 Sunbrook Park, PC 5679",
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
										element: "div",
										className: "rounded-full bg-gray-300 w-16 h-16 relative",
										children: [
											El({
												element: "img",
												src: "/src/assests/images/location-filled-svgrepo-com.svg",
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
														innerHTML: "Office",
														className: "font-bold text-[18px]",
													}),
												],
											}),
											El({
												element: "div",
												innerHTML: "6993 Meadow Valley Terra,PC 3637",
											}),
										],
									}),
								],
							}),
							El({
								element: "input",
								type: "radio",
								className: "w-5 h-5  accent-black",
								name: "shippingAddress",
								value: "office",
								eventListener: [
									{
										event: "change",
										callback: () => {
											store.setState("selectAddress", {
												title: "Office",
												address: "6993 Meadow Valley Terra,PC 3637",
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
										element: "div",
										className: "rounded-full bg-gray-300 w-16 h-16 relative",
										children: [
											El({
												element: "img",
												src: "/src/assests/images/location-filled-svgrepo-com.svg",
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
														innerHTML: "Apartment",
														className: "font-bold text-[18px]",
													}),
												],
											}),
											El({
												element: "div",
												innerHTML: "21833 Meadow Clyde Gallegher,pc 4662",
											}),
										],
									}),
								],
							}),
							El({
								element: "input",
								type: "radio",
								className: "w-5 h-5  accent-black",
								name: "shippingAddress",
								value: "Apartment",
								eventListener: [
									{
										event: "change",
										callback: () => {
											store.setState("selectAddress", {
												title: "Apartment",
												address: "21833 Meadow Clyde Gallegher,pc 4662",
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
										element: "div",
										className: "rounded-full bg-gray-300 w-16 h-16 relative",
										children: [
											El({
												element: "img",
												src: "/src/assests/images/location-filled-svgrepo-com.svg",
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
														innerHTML: "Parent's House",
														className: "font-bold text-[18px]",
													}),
												],
											}),
											El({
												element: "div",
												innerHTML: "5259 Blue Bill Park,PC 4627",
											}),
										],
									}),
								],
							}),
							El({
								element: "input",
								type: "radio",
								className: "w-5 h-5 accent-black",
								name: "shippingAddress",
								value: "parent",
								eventListener: [
									{
										event: "change",
										callback: () => {
											store.setState("selectAddress", {
												title: "Parent's House",
												address: "5259 Blue Bill Park,PC 4627",
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
				element: "button",
				innerHTML: "Add New Address",
				className:
					" bg-gray-300 absolute top-[650px] left-6 right-6 rounded-3xl py-4 font-bold",
			}),
		],
	});
}
function shippingAddressFooter() {
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
