import { render, screen } from "@testing-library/react";
import TestButtonComponent from "./TestButtonComponent";

describe("TestButtonComponent", () => {
	it("should render the title", () => {
		render(<TestButtonComponent title="Test Button" />);

		expect(screen.getByRole("button")).toHaveTextContent("Test Button");
	});
});
