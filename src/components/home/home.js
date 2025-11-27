import { El } from "../../utils/el";
import { footerHome } from "./homeFooter";
import { HeaderHome } from "./homeHeader";
import { searchFormHome } from "./HomeSearchForm";
import { productCardContainer } from "./product";
import { ShowBrand, seeALL } from "./productBrand";

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
