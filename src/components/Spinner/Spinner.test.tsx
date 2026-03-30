import { render } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
	it("should render", () => {
		const { container } = render(<Spinner />);
		expect(container.firstChild).toHaveClass("spinner-container");
		expect(container.firstChild?.firstChild).toHaveClass("spinner");
	});
});
