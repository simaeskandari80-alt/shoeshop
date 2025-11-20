import { El } from "../../utils/el";
export function searchFormHome() {
	return El({
		element: "div",
		className: "relative w-[380px] h-[37px] left-6 top-22",
		children: [
			El({
				element: "input",
				className:
					" flex items-center content-center w-[380px] h-[37px] z-0 rounded-sm pt-2 pl-8 pr-3 pb-2 bg-[#FAFAFA] absolute text-[14px] font-normal",
				placeholder: "Search",
				id: "login-username",
			}),
			El({
				element: "img",
				className: "absolute top-3 left-3 w-4 h-4",
				src: "src/assests/images/search.png",
			}),
		],
	});
}
