import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("Menu Card confirm delete works", () => {
	render(<App />);
	const deleteButton = screen.getAllByTestId("Delete");
	fireEvent.click(deleteButton[0]);
	const modalYesButton = screen.getByTestId("Modal Yes");
	fireEvent.click(modalYesButton);
	const menuCards = screen.getAllByTestId("Menu Card");
	expect(menuCards).toHaveLength(2);
});

test("Menu Card cancel delete works", () => {
	render(<App />);
	const deleteButton = screen.getAllByTestId("Delete");
	fireEvent.click(deleteButton[0]);
	const modalYesButton = screen.getByTestId("Modal No");
	fireEvent.click(modalYesButton);
	const menuCards = screen.getAllByTestId("Menu Card");
	expect(menuCards).toHaveLength(3);
});
