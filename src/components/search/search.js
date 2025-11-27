import { debounce } from "lodash";
import { searchSneakers } from "../../api/search-sneakers";
import { El } from "../../utils/el";
import { router } from "../../utils/router";
//search form
export function SearchForm() {
	let recent = JSON.parse(localStorage.getItem("recentSearches")) || [];
	let showRecent = false;
	const container = El({
		element: "div",
		className: "p-4 flex flex-col gap-4 absolute top-10 w-full",
	});
	const backArrow = El({
		element: "img",
		src: "src/assests/images/Vector.png",
		className: "w-5.5 h-3.5 opacity-65 cursor-pointer",
		eventListener: [
			{
				event: "click",
				callback: () => {
					router.navigate("/home");
				},
			},
		],
	});
	const input = El({
		element: "input",
		className:
			"w-full h-[50px] bg-[#FAFAFA] rounded-xl pl-10 pr-3 text-[20px] font-medium",
		placeholder: "Search",
	});

	const searchBox = El({
		element: "div",
		className: "relative flex items-center",
		children: [
			input,
			El({
				element: "img",
				src: "src/assests/images/search-alt-svgrepo-com.svg",
				className: "absolute w-6 h-6 left-3 top-3 opacity-55",
			}),
			El({
				element: "img",
				src: "src/assests/images/unnamed.png",
				className: "absolute w-8 h-8 left-[350px] top-3",
			}),
		],
	});
	const recentHeader = El({
		element: "div",
		children: [
			El({
				element: "div",
				className: "flex justify-between items-center mt-2",
				children: [
					El({
						element: "div",
						innerText: "Recent",
						className: "font-bold text-[18px] cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									showRecent = true;
									renderRecent();
								},
							},
						],
					}),
					El({
						element: "div",
						innerText: "Clear All",
						className: "font-bold text-[18px] cursor-pointer",
						eventListener: [
							{
								event: "click",
								callback: () => {
									if (!showRecent) return;
									recent = [];
									localStorage.setItem("recentSearches", JSON.stringify([]));
									renderRecent();
								},
							},
						],
					}),
				],
			}),
			El({
				element: "img",
				src: "src/assests/images/grayLine.png",
				className: "w-full h-3 opacity-45",
			}),
		],
	});
	const recentList = El({
		element: "div",
		className: "flex flex-col gap-2",
	});

	const resultsBox = El({
		element: "div",
		className: "flex flex-wrap gap-2 items-center justify-center",
	});
	function renderRecent() {
		resultsBox.innerHTML = "";
		recentList.innerHTML = "";
		recent.forEach((item, index) => {
			recentList.append(
				El({
					element: "div",
					className: "flex justify-between items-center p-2 rounded-xl",
					children: [
						El({
							element: "div",
							innerText: item,
							className: "text-xl opacity-75 font-medium cursor-pointer",
							eventListener: [
								{
									event: "click",
									callback: () => {
										showRecent = false;
										handleSearch();
									},
								},
							],
						}),
						El({
							element: "div",
							className:
								"border flex flex-col justify-center items-center w-8 h-8 rounded-xl",
							children: [
								El({
									element: "div",
									innerText: "×",
									className: "text-[22px] text-center cursor-pointer font-bold",
									eventListener: [
										{
											event: "click",
											callback: () => {
												recent.splice(index, 1);
												localStorage.setItem(
													"recentSearches",
													JSON.stringify(recent)
												);
												renderRecent();
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
	}

	function renderResults(data) {
		recentList.innerHTML = "";
		resultsBox.innerHTML = "";
		updateHeader(recentHeader, `Result for "${input.value}"`, "0 found");
		if (!data || data.length === 0) {
			resultsBox.append(
				El({
					element: "div",
					className: "flex flex-col items-center mt-10",
					children: [
						El({
							element: "img",
							src: "src/assests/images/NoSearch.png",
							className: "w-80 h-80 opacity-80",
						}),
						El({
							element: "div",
							innerText: "Not Found",
							className: "text-2xl font-bold mt-4",
						}),
						El({
							element: "div",
							innerText:
								"Sorry, the Keyword you entered cannot be found please check again or search with another keyword",
							className: "text-lg font-semibold mt-4 text-center",
						}),
					],
				})
			);
			return;
		}
		data.forEach((item) => {
			updateHeader(
				recentHeader,
				`Result for "${input.value}"`,
				`${data.length} found`
			);
			resultsBox.append(
				El({
					element: "div",
					className: "w-[182px] h-[290px] bg-white flex flex-col gap-3 mb-5",
					children: [
						El({
							element: "div",
							className: "w-[182px] h-[182px] rounded-3xl",
							children: [
								El({
									element: "img",
									src: item.imageURL,
									className:
										"w-[182px] h-[182px] rounded-3xl object-cover cursor-pointer",
									eventListener: [
										{
											event: "click",
											callback: () => {
												router.navigate(`/product?id=${item.id}`);
											},
										},
									],
								}),
							],
						}),
						El({
							element: "div",
							innerHTML: item.name,
							className: "w-[182px] h-6 text-5 font-bold",
						}),
						El({
							element: "div",
							className: "flex items-center gap-2 mt-3.5",
							children: [
								El({
									element: "img",
									src: "src/assests/images/star-half-stroke-filled-svgrepo-com.svg",
									className: "w-6 h-6",
								}),
								El({ element: "div", innerHTML: "4.8" }),
								El({
									element: "div",
									className:
										"bg-[#F5F5F5] py-1 px-1.5 flex justify-between items-center rounded-lg",
									innerHTML: "8,174 sold",
								}),
							],
						}),
						El({
							element: "div",
							innerHTML: `$ ${item.price}.00`,
							className: "text-4 font-semibold",
						}),
					],
				})
			);
		});
	}
	const handleSearch = debounce(async () => {
		const value = input.value.trim();
		if (value === "") {
			resultsBox.innerHTML = "";
			return;
		}
		showRecent = false;
		const res = await searchSneakers(value);
		if (res && res.length > 0) {
			if (!recent.includes(value)) {
				recent.unshift(value);
				localStorage.setItem("recentSearches", JSON.stringify(recent));
				recent = recent.slice(0, 10);
				localStorage.setItem("recentSearches", JSON.stringify(recent));
			}
		}
		renderResults(res);
	}, 500);

	input.addEventListener("change", handleSearch);
	container.append(backArrow, searchBox, recentHeader, recentList, resultsBox);
	return container;
}
//update header
function updateHeader(recentHeader, title, count) {
	recentHeader.innerHTML = "";

	recentHeader.append(
		El({
			element: "div",
			className: "flex justify-between items-center mt-2",
			children: [
				El({
					element: "div",
					innerText: title,
					className: "font-semibold text-[18px]",
				}),
				El({
					element: "div",
					innerText: count,
					className: "font-semibold text-[18px]",
				}),
			],
		})
	);
}
