import { El } from "../../utils/el";
export function HeaderHome() {
	function greeting() {
		let hour = new Date().getHours();
		if (hour >= 5 && hour < 12) {
			return "Good Morning👋";
		} else if (hour >= 12 && hour < 17) {
			return "Good Afternoon👋";
		} else if (hour >= 17 && hour < 21) {
			return "Good Evening👋";
		} else {
			return "Good Night👋";
		}
	}
	let nameUser = localStorage.getItem("username");
	return El({
		element: "div",
		children: [
			El({
				element: "div",
				innerHTML: greeting(),
				className:
					"w-[140px] h-[19px] absolute left-6 top-4 text-[#757475] font-medium text-4",
			}),
			El({
				element: "div",
				className: "flex gap-2.5 absolute left-[340px] top-[31px] w-16 h-6",
				children: [
					El({
						element: "img",
						src: "src/assests/images/bell.svg",
						className: "w-[21px] h-[22.07]",
					}),
					El({
						element: "img",
						src: "src/assests/images/heart (1).svg",
						className: "w-[21px] h-[22.07]",
					}),
				],
			}),
			El({
				element: "div",
				innerHTML: nameUser,
				className: "absolute left-6 top-[45px] font-bold text-4",
			}),
		],
	});
}
