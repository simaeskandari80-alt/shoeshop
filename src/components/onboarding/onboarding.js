import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { El } from "../../utils/el";
import { router } from "../../utils/router";
//onboarding
export function OnBoarding() {
	let step = 1;
	const container = El({
		element: "div",
		className: "w-[428px] h-[926px] relative",
	});

	function renderpage() {
		container.innerHTML = "";
		if (step === 1) {
			container.append(OnBoardingPage1());
			setTimeout(() => {
				step = 2;
				renderpage();
			}, 2000);
		} else if (step === 2) {
			container.append(OnBoardingPage2());
			setTimeout(() => {
				step = 3;
				renderpage();
			}, 2000);
		} else {
			container.append(OnBoardingSwiper());
		}
	}

	renderpage();
	return container;
}
function OnBoardingPage1() {
	let page1 = El({
		element: "div",
		className: "w-[428px] h-[926px]",
		children: [
			El({
				element: "img",
				src: "src/assests/images/Group 2.png",
				className: "w-[231px] h-[63px] absolute top-[392px] left-[99px]",
			}),
			El({
				element: "div",
				className:
					"w-15 h-15 border-8 absolute top-[761px] left-[190px] border-gray-50 border-t-black border-l-black border-r-black rounded-full animate-spin ",
			}),
		],
	});
	return page1;
}
//onboardingpagge2
function OnBoardingPage2() {
	let page2 = El({
		element: "div",
		className: "relative w-[428px] h-[926px] ",
		children: [
			El({
				element: "div",
				className:
					"bg-[url('src/assests/images/wallpaper1.png')] z-0 inset-0 absolute bg-cover",
			}),
			El({
				element: "div",
				className:
					"absolute inset-0 z-10 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0)]",
			}),
			El({
				element: "div",
				className: " absolute text-white z-20",
				children: [
					El({
						element: "div",
						innerHTML: "Welcome to 👋",
						className:
							"w-[281px] h-12 absolute left-8 top-[629px] font-semibold text-[40px]",
					}),
					El({
						element: "div",
						innerHTML: "Shoea",
						className:
							"w-[222px] h-[87px] absolute left-8 top-[693px] font-bold text-[72px]",
					}),
					El({
						element: "div",
						innerHTML:
							"The best sneakers & shoes e-commerse app of the century for your fashion needs!",
						className:
							"w-[364px] h-11 absolute left-[31px] top-[808px] font-semibold text-[16px]",
					}),
				],
			}),
		],
	});

	return page2;
}
// onboarding swiper
export function OnBoardingSwiper() {
	let swiperContainer = El({
		element: "div",
		className: "swiper w-full max-w-[428px] h-[926px]",
		children: [
			El({
				element: "div",
				className: "swiper-wrapper",
				children: [
					El({
						element: "div",
						className: "swiper-slide",
						children: [
							El({
								element: "div",
								children: [
									El({
										element: "img",
										className:
											"w-[430px] h-[657px] absolute -left-0.5 top-[-55px]",
										src: "src/assests/images/wallpaper2.png",
									}),
									El({
										element: "div",
										className:
											"absolute w-[428px] h-[324px] bottom-0 left-[calc(50% - 428px/2) bg-white",
										children: [
											El({
												element: "div",
												innerHTML:
													"We provide high quality products just for you",
												className:
													"text-[32px] font-semibold leading-[100%] w-[380px] h-[91px] absolute top-8 left-6 text-center",
											}),
											El({
												element: "div",
												className:
													"flex gap-1 w-[102px] h-[23px] absolute top-[182px] left-[163px]",
												children: [
													El({
														element: "img",
														src: "src/assests/images/blackLine.png",
													}),
													El({
														element: "img",
														src: "src/assests/images/grayLine.png",
													}),
													El({
														element: "img",
														src: "src/assests/images/grayLine.png",
													}),
												],
											}),
											El({
												element: "button",
												className:
													"next-btn flex justify-center items-center gap-2 py-3 px-4 w-[380px] h-[47px] absolute bottom-8 left-6 bg-[#212529] rounded-[30px] border-[#212529] text-white",
												innerHTML: "Next",
											}),
										],
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "swiper-slide",
						children: [
							El({
								element: "img",
								className: "w-[430px] h-[657px] absolute -left-0.5 top-[-55px]",
								src: "src/assests/images/wallpaper3.png",
							}),
							El({
								element: "div",
								className:
									"absolute w-[428px] h-[324px] bottom-0 left-[calc(50% - 428px/2) bg-white",
								children: [
									El({
										element: "div",
										innerHTML: "Your satisfaction is our number one periority",
										className:
											"text-[32px] font-semibold leading-[100%] w-[380px] h-[91px] absolute top-8 left-6 text-center",
									}),
									El({
										element: "div",
										className:
											"flex gap-1 w-[102px] h-[23px] absolute top-[182px] left-[163px]",
										children: [
											El({
												element: "img",
												src: "src/assests/images/grayLine.png",
											}),
											El({
												element: "img",
												src: "src/assests/images/blackLine.png",
											}),
											El({
												element: "img",
												src: "src/assests/images/grayLine.png",
											}),
										],
									}),
									El({
										element: "button",
										className:
											"next-btn flex justify-center items-center gap-2 py-3 px-4 w-[380px] h-[47px] absolute bottom-8 left-6 bg-[#212529] rounded-[30px] border-[#212529] text-white",
										innerHTML: "Next",
									}),
								],
							}),
						],
					}),
					El({
						element: "div",
						className: "swiper-slide",
						children: [
							El({
								element: "img",
								className: "w-[430px] h-[657px] absolute -left-0.5 top-[-55px]",
								src: "src/assests/images/wallpaper4.png",
							}),
							El({
								element: "div",
								className:
									"absolute w-[428px] h-[324px] bottom-0 left-[calc(50% - 428px/2)] bg-white",
								children: [
									El({
										element: "div",
										innerHTML:
											"Let’s fulfill your fashion needs with shoearight now!",
										className:
											"text-[32px] font-semibold leading-[100%] w-[380px] h-[91px] absolute top-8 left-6 text-center",
									}),
									El({
										element: "div",
										className:
											"flex gap-1 w-[102px] h-[23px] absolute top-[182px] left-[163px]",
										children: [
											El({
												element: "img",
												src: "src/assests/images/grayLine.png",
											}),
											El({
												element: "img",
												src: "src/assests/images/grayLine.png",
											}),
											El({
												element: "img",
												src: "src/assests/images/blackLine.png",
											}),
										],
									}),

									El({
										element: "button",
										className:
											"next-btn flex justify-center items-center gap-2 py-3 px-4 w-[380px] h-[47px] absolute bottom-8 left-6 bg-[#212529] rounded-[30px] border-[#212529] text-white",
										innerHTML: "Get Started",
									}),
								],
							}),
						],
					}),
				],
			}),
		],
	});
	const swiper = new Swiper(swiperContainer, {
		slidesPerView: 1,
		spaceBetween: 20,
		pagination: {
			el: swiperContainer.querySelector(".custom-pagination"),
			clickable: true,
			renderBullet: (index, className) =>
				`<span class="custom-bullet ${className}"></span>`,
		},
	});
	swiperContainer.querySelectorAll(".next-btn").forEach((btn) => {
		btn.addEventListener("click", () => {
			if (swiper.activeIndex < swiper.slides.length - 1) {
				swiper.slideNext();
			} else {
				localStorage.setItem("onboardingSeen", "true");
				router.navigate("/login");
			}
		});
	});
	return swiperContainer;
}
