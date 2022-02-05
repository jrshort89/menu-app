import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders title", () => {
	render(<App />);
	const title = screen.getByText(/Hello Menu/i);
	expect(title).toBeInTheDocument();
});

test("renders 3 menu items initially", async () => {
	render(<App />);
	const menuCards = await screen.findAllByTestId("Menu Card");
	expect(menuCards).toHaveLength(3);
});
