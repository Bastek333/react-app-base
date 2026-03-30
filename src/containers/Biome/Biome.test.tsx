import { render, screen } from "@testing-library/react";
import Biome from "./Biome";

describe("Biome container test", () => {
	it("should render Biome link", () => {
		render(<Biome />);

		expect(screen.getByRole("img")).toHaveAttribute("alt", "Biome logo");
	});
});
