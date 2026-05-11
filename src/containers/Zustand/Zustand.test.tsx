import { render, screen } from "@testing-library/react";
import Zustand from "./Zustand";

describe("Biome container test", () => {
	it("should render Biome link", () => {
		render(<Zustand />);

		expect(screen.getByRole("img")).toHaveAttribute("alt", "Zustand logo");
	});
});
