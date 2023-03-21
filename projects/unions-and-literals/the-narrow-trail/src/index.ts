export function runCommands() {
	// Declare your variables and runtime logic here! ✨
	let food = 5;
	let water = 5;
	let day = 1;
	let availableResource: "food" | "water" | undefined;

	while (day < 8) {
		const diceRoll = Math.random() * 6 + 1;
		switch (diceRoll) {
			case 1:
				availableResource = "food";
				break;
			case 2:
				availableResource = "water";
				break;
			case 3:
				if (!availableResource) {
					availableResource = "water";
				} else {
					availableResource === "food"
						? (food += diceRoll)
						: (water += diceRoll);
					availableResource = undefined;
				}
				break;
			case 4:
				if (!availableResource) {
					availableResource = "food";
				} else {
					availableResource === "food"
						? (food += diceRoll)
						: (water += diceRoll);
					availableResource = undefined;
				}
				break;
			case 5:
				if (!availableResource) {
					availableResource = "water";
				} else {
					availableResource === "food"
						? (food += diceRoll)
						: (water += diceRoll);
					availableResource = undefined;
				}
				break;
			case 6:
				if (!availableResource) {
					availableResource = "food";
				} else {
					availableResource === "food"
						? (food += diceRoll)
						: (water += diceRoll);
					availableResource = undefined;
				}
				break;
		}

		food -= 1;
		water -= 1;

		if (water < 1 || food < 1) {
			return false;
		}
		day += 1;
	}
	return true;
}
