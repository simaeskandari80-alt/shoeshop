import { CartPage } from "./pages/cart/cart";
import { HomePage } from "./pages/home/home";
import { LoginPage } from "./pages/login/login";
import { onboardingPage } from "./pages/onboarding/onboarding";
import { SignupPage } from "./pages/signup/signup";
import { SingleproductPage } from "./pages/single-product/single-product";
import "./style.css";
import { router } from "./utils/router";
let app = document.getElementById("app");
router.addRoute("/onboarding", onboardingPage);
router.addRoute("/login", LoginPage);
router.addRoute("/signup", SignupPage);
router.addRoute("/home", HomePage);
router.addRoute("/cart", CartPage);
router.addRoute("/product", SingleproductPage);
const onboardingSeen = localStorage.getItem("onboardingSeen");
const userEntered = localStorage.getItem("userEntered");
if (!onboardingSeen) {
	router.addRoute("/onboarding", onboardingPage);
	router.navigate("/onboarding");
} else if (!userEntered) {
	router.addRoute("/login", LoginPage);
	router.navigate("/login");
} else {
	router.addRoute("/home", HomePage);
	router.navigate("/home");
}
router.init(app);
