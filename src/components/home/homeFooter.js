import { El } from "../../utils/el";

export function footerHome() {
	return El({
		element: "div",
		className:
			"flex gap-9 items-center fixed bottom-0 left-6 pt-2 z-10 bg-white h-[66px] w-full",

		children: [
			El({
				element: "div",
				className: "flex flex-col items-center",
				children: [
					El({
						element: "img",
						src: "/src/assests/images/Vector (2).png",
						className: "w-6 h-6",
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
						src: "/src/assests/images/bag (1).png",
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
						className: "w-6 h-6",
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
	});
}
