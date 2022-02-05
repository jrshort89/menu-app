import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import MenuCardForm from "../components/MenuCardForm";

test("Renders inputs", () => {
	render(<MenuCardForm setMenuItems={() => {}} />);
	const titleInput = screen.getByPlaceholderText("Title");
	const descriptionInput = screen.getByPlaceholderText("Description");
	const priceInput = screen.getByPlaceholderText("Price");
	const imageInput = screen.getByPlaceholderText("Image URL");
	expect(titleInput).toBeInTheDocument();
	expect(descriptionInput).toBeInTheDocument();
	expect(priceInput).toBeInTheDocument();
	expect(imageInput).toBeInTheDocument();
});

test("Title input works", () => {
	render(<MenuCardForm setMenuItems={() => {}} />);
	const titleInput = screen.getByPlaceholderText("Title");
	fireEvent.change(titleInput, { target: { value: "New Title" } });
	expect(titleInput).toHaveValue("New Title");
});

test("Description input works", () => {
	render(<MenuCardForm setMenuItems={() => {}} />);
	const descriptionInput = screen.getByPlaceholderText("Description");
	fireEvent.change(descriptionInput, { target: { value: "New description" } });
	expect(descriptionInput).toHaveValue("New description");
});

test("Price input works", () => {
	render(<MenuCardForm setMenuItems={() => {}} />);
	const priceInput = screen.getByPlaceholderText("Price");
	fireEvent.change(priceInput, { target: { value: 100 } });
	expect(priceInput).toHaveValue(100);
});

test("Image URL input works", () => {
	render(<MenuCardForm setMenuItems={() => {}} />);
	const imageInput = screen.getByPlaceholderText("Image URL");
	fireEvent.change(imageInput, { target: { value: "New image" } });
	expect(imageInput).toHaveValue("New image");
});

test("Price should only allow numbers", () => {
	render(<MenuCardForm setMenuItems={() => {}} />);
	const titleInput = screen.getByPlaceholderText("Price");
	fireEvent.change(titleInput, { target: { value: "abc" } });
	expect(titleInput).toHaveValue(null);
});

test("Menu Card form submits new item properly", () => {
	render(<App />);
	const titleInput = screen.getByPlaceholderText("Title");
	const descriptionInput = screen.getByPlaceholderText("Description");
	const priceInput = screen.getByPlaceholderText("Price");
	const imageInput = screen.getByPlaceholderText("Image URL");
	const addButton = screen.getByText("Add menu item");
	fireEvent.change(titleInput, { target: { value: "New image" } });
	fireEvent.change(descriptionInput, { target: { value: "New description" } });
	fireEvent.change(priceInput, { target: { value: 100 } });
	fireEvent.change(imageInput, { target: { value: "New image" } });
	fireEvent.click(addButton);
	const menuCards = screen.getAllByTestId("Menu Card");
	expect(menuCards).toHaveLength(4);
});
