import { El } from "../../utils/el";
import { router } from "../../utils/router";
export function Payment() {
	let shippingContainer = El({
		element: "div",
	});
	shippingContainer.append(
		PaymentMethodHeader(),
		PaymentMethodOptions(),
		PaymentMethodFooter()
	);
	return shippingContainer;
}
function PaymentMethodHeader() {
	return El({
		element: "div",
		className: "flex flex-col absolute top-[60px] left-6 gap-6",
		children: [
			El({
				element: "div",
				className: "flex items-center gap-5 ",
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
			}),
			El({
				element: "div",
				innerHTML: "Select the payment method you want to use",
			}),
		],
	});
}
function PaymentMethodOptions() {
	return El({
		element: "div",
		className: " flex flex-col",
		children: [
			El({
				element: "div",
				className:
					"bg-white rounded-2xl shadow-[4px_5px_10px_rgba(0,0,0,0.2)] absolute top-[170px] left-6 right-6 h-[80px] flex flex-col  justify-center gap-5 p-2",
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
										src: "/src/assests/images/wallet.svg",
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
														innerHTML: "My Wallet",
														className: "font-bold text-[18px]",
													}),
												],
											}),
										],
									}),
								],
							}),
							El({
								element: "div",
								className: "flex gap-3",
								children: [
									El({
										element: "div",
										innerHTML: "$9,379",
									}),
									El({
										element: "input",
										type: "radio",
										className: "w-6 h-6",
									}),
								],
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"bg-white rounded-2xl shadow-[4px_5px_10px_rgba(0,0,0,0.2)] absolute top-[270px] left-6 right-6 h-[80px] flex flex-col  justify-center gap-5 p-2",
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
										src: "/src/assests/images/paypal.svg",
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
														innerHTML: "paypal",
														className: "font-bold text-[18px]",
													}),
												],
											}),
										],
									}),
								],
							}),
							El({
								element: "input",
								type: "radio",
								className: "border-4 w-6 h-6",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"bg-white rounded-2xl shadow-[4px_5px_10px_rgba(0,0,0,0.2)] absolute top-[370px] left-6 right-6 h-[80px] flex flex-col p-3 justify-center gap-5",
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
										src: "/src/assests/images/google.svg",
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
														innerHTML: "Google Pay",
														className: "font-bold text-[18px]",
													}),
												],
											}),
										],
									}),
								],
							}),

							El({
								element: "input",
								type: "radio",
								className: "border-4 w-6 h-6",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"bg-white rounded-2xl shadow-[4px_5px_10px_rgba(0,0,0,0.2)] absolute top-[470px] left-6 right-6 h-[80px] flex flex-col p-2  justify-center gap-5",
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
										src: "/src/assests/images/apple.svg",
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
														innerHTML: "Apple Pay",
														className: "font-bold text-[18px]",
													}),
												],
											}),
										],
									}),
								],
							}),
							El({
								element: "input",
								type: "radio",
								className: "border-4 w-6 h-6",
							}),
						],
					}),
				],
			}),
			El({
				element: "div",
				className:
					"bg-white rounded-2xl shadow-[4px_5px_10px_rgba(0,0,0,0.2)] absolute top-[570px] left-6 right-6 h-[80px] flex flex-col p-2  justify-center gap-5",
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
										src: "/src/assests/images/mastercard.svg",
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
														innerHTML: ".... .... .... .... 4679",
														className: "font-bold text-[18px]",
													}),
												],
											}),
										],
									}),
								],
							}),

							El({
								element: "input",
								type: "radio",
								className: "border-4 w-6 h-6",
							}),
						],
					}),
				],
			}),
		],
	});
}
function PaymentMethodFooter() {
	return El({
		element: "div",
		className:
			"rounded-t-4xl fixed bottom-0 left-0 bg-white h-[120px] w-full flex flex-col gap-6 shadow-[0_-1px_30px_rgba(0,0,0,0.1)] ",
		children: [
			El({
				element: "button",
				className:
					"absolute left-6 right-6 top-6 bg-black text-white py-4 rounded-3xl font-semibold text-[18px] cursor-pointer",
				innerHTML: "Confirm payment",
				eventListener: [
					{
						event: "click",
						callback: () => {
							router.navigate("/checkout/complete");
						},
					},
				],
			}),
		],
	});
}
