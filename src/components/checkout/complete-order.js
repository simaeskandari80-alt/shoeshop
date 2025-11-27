import { El } from "../../utils/el";
import { router } from "../../utils/router";
export function CompleteOrder() {
	return El({
		element: "div",

		children: [
			El({
				element: "div",
				className:
					"fixed bg-[#535861] flex justify-center items-center  inset-0 z-0",
			}),
			El({
				element: "div",
				className:
					"bg-white absolute top-[231px] left-12 right-12 h-[470px] flex flex-col items-center gap-5 rounded-[40px] z-10",
				children: [
					El({
						element: "img",
						src: "/src/assests/images/payment-confirm.jpg",
						className: "z-20",
					}),
					El({
						element: "div",
						innerHTML: "Order Successful!",
						className: "font-bold text-2xl",
					}),
					El({
						element: "div",
						innerHTML: "You have Successfuly made order",
					}),
					El({
						element: "div",
						className: "flex flex-col gap-2.5",
						children: [
							El({
								element: "button",
								className:
									" bg-black text-white py-4 rounded-3xl font-semibold w-[272px]",
								innerHTML: "View Order",
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
								element: "button",
								className:
									" bg-[#e7e7e7] py-4 rounded-3xl font-semibold w-[272px]",
								innerHTML: "View E-Recipt",
								eventListener: [
									{
										event: "click",
										callback: () => {
											router.navigate("/home");
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
