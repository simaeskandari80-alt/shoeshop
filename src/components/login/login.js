import { El } from "../../utils/el";
import { router } from "../../utils/router";
export function Login() {
	let type = "password";
	function togglePassword() {
		if (type === "password") {
			document.getElementById("login-password").setAttribute("type", "text");
			type = "text";
		} else {
			document
				.getElementById("login-password")
				.setAttribute("type", "password");
			type = "password";
		}
	}
	return El({
		element: "div",
		className: "h-[926px] w-[428px] bg-white",
		children: [
			El({
				element: "div",
				className: "w-[428px] h-14",
				children: [
					El({
						element: "div",
						className: " absolute w-8 h-8 top-3 left-6 ",
						children: [
							El({
								element: "img",
								src: "src/assests/images/Vector.png",
								className: "w-4 h-3.5 absolute top-[9px] left-2",
							}),
						],
					}),
				],
			}),
			El({
				element: "img",
				src: "src/assests/images/logo.png",
				className: "absolute w-[54px] h-[81px] top-[132px] left-[187px]",
			}),
			El({
				element: "div",
				className:
					"  text-[#152536] absolute w-[342px] h-[39px] left-[41px] top-[331px] text-[32px] leading-[100%] font-semibold ",
				innerHTML: "Login to Your Account",
			}),
			El({
				element: "form",
				className:
					"flex flex-col items-center gap-3 p-0 isolate absolute top-[418px] left-6 w-[380px] ",
				children: [
					El({
						element: "div",
						className: "relative",
						children: [
							El({
								element: "input",
								className:
									" flex items-center content-center w-[380px] h-[37px] z-0 rounded-sm pt-2 pl-8 pr-3 pb-2 bg-[#FAFAFA] text-[14px]",
								placeholder: " Username",
								id: "login-username",
							}),
							El({
								element: "img",
								className: "absolute top-3 left-3 w-3.5 h-3.5",
								src: "src/assests/images/envelope-fill.png",
							}),
						],
					}),
					El({
						element: "div",
						className: "relative flex items-center",
						children: [
							El({
								element: "input",
								className:
									" flex items-center content-center w-[380px] h-[37px] z-0 rounded-sm pt-2 pl-8 pr-3 pb-2 bg-[#FAFAFA] text-[14px]",
								placeholder: " Password",
								type: type,
								id: "login-password",
							}),
							El({
								element: "img",
								className: "absolute top-3 left-3 w-3.5 h-3.5",
								src: "src/assests/images/input-prefix.png",
							}),
							El({
								element: "img",
								className: "absolute top-3 left-[350px] flex items-center",
								src: "src/assests/images/input-suffix.png",
								eventListener: [
									{
										event: "click",
										callback: togglePassword,
									},
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "text-gray-500",
						innerText: " ",
						id: "login-message",
					}),
				],
			}),

			El({
				element: "div",
				innerHTML: "Signup",
				className:
					"w-[47px] h-[21px] absolute top-[538px] left-[191px] text-[14px] font-medium leading-[150%] text-black not-italic cursor-pointer",
				eventListener: [
					{
						event: "click",
						callback: () => {
							router.navigate("/SignUp");
						},
					},
				],
			}),
			El({
				element: "button",
				className:
					"flex justify-center items-center gap-2 py-3 px-4 w-[380px] h-[47px] absolute bottom-8 left-6 bg-[#212529] rounded-[30px] border-[#212529] text-white active:bg-[#6e7174]",
				innerHTML: "Signin",
				eventListener: [
					{
						event: "click",
						callback: () => {},
					},
				],
			}),
		],
	});
}
