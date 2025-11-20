import { El } from "../../utils/el";
import { seeALL, ShowBrand } from "./brands";
import { footerHome } from "./footerHome";
import { HeaderHome } from "./HeaderHome";
import { productCardContainer } from "./products";
import { searchFormHome } from "./search";

export function Home() {
	let homeContainer = El({
		element: "div",
		children: [HeaderHome(), searchFormHome(), footerHome(), seeALL()],
	});
	productCardContainer().then((wrapper) => {
		homeContainer.appendChild(wrapper);
	});
	ShowBrand().then((brands) => {
		homeContainer.appendChild(brands);
	});
	return homeContainer;
}
