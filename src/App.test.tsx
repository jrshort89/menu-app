import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import MenuCardForm from "./components/MenuCardForm";

test("renders title", () => {
	render(<App />);
	const title = screen.getByText(/Amazing Menu/i);
	expect(title).toBeInTheDocument();
});

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
	const titleInput = screen.getByPlaceholderText("Description");
	fireEvent.change(titleInput, { target: { value: "New description" } });
	expect(titleInput).toHaveValue("New description");
});

test("Price input works", () => {
	render(<MenuCardForm setMenuItems={() => {}} />);
	const titleInput = screen.getByPlaceholderText("Price");
	fireEvent.change(titleInput, { target: { value: 100 } });
	expect(titleInput).toHaveValue(100);
});

test("Image URL input works", () => {
	render(<MenuCardForm setMenuItems={() => {}} />);
	const titleInput = screen.getByPlaceholderText("Image URL");
	fireEvent.change(titleInput, { target: { value: "New image" } });
	expect(titleInput).toHaveValue("New image");
});
