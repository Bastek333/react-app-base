import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import Navigation from "./Navigation";

describe("Test Navigation Container", () => {
	it("should render Navigation links", () => {
		render(
			<BrowserRouter>
				<Navigation />
			</BrowserRouter>,
		);

		expect(screen.getByText("Home")).exist;
		expect(screen.getByText("Vite")).exist;
		expect(screen.getByText("React")).exist;
		expect(screen.getByText("Biome")).exist;
	});
});
