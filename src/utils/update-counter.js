export function updateCounter({ count, price, operation }) {
	if (operation === "inc") {
		count++;
	} else if (operation === "dec" && count > 1) {
		count--;
	}

	const total = count * price;
	return { count, total };
}
