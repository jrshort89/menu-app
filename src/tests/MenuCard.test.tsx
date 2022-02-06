import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

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

test("Title is editable", () => {
	const inputText = "East Coast Oysters on the Half Shell";
	render(<App />);
	let title = screen.getByText(inputText);
	fireEvent.click(title);
	const inputElement = screen.getByTestId("Edit Input");
	userEvent.type(inputElement, "abc");
	fireEvent.keyDown(inputElement, {
		key: "Enter",
		code: "Enter",
		charCode: 13,
	});
	const newTitle = screen.getByText(inputText + "abc");
	expect(newTitle).toHaveTextContent(inputText + "abc");
});

test("Description is editable", () => {
	const price = "$25";
	render(<App />);
	let priceElement = screen.getByText(price);
	fireEvent.click(priceElement);
	const inputElement = screen.getByTestId("Edit Input");
	userEvent.type(inputElement, "1");
	fireEvent.keyDown(inputElement, {
		key: "Enter",
		code: "Enter",
		charCode: 13,
	});
	const newDescription = screen.getByText("$251");
	expect(newDescription).toHaveTextContent("$251");
});

test("Price is editable", () => {
	const inputText =
		"½ Dozen • Piece Options: • Filet +$16 • Chicken +$7 • Shrimp +$12 • Gulf Crab +$12 • Seared Tuna +$18 • 1 Pc. Oyster +$2 • 1 Pc Shrimp +$3 • 1 Pc. Tostada +$5.50 • 1 Pc. Quail +$5 • 1 Pc. Poached Egg +$6SPLIT Entree +$5";
	render(<App />);
	const price = screen.getByText(inputText);
	fireEvent.click(price);
	const inputElement = screen.getByTestId("Edit Input");
	userEvent.type(inputElement, "abc");
	fireEvent.keyDown(inputElement, {
		key: "Enter",
		code: "Enter",
		charCode: 13,
	});
	const newDescription = screen.getByText(inputText + "abc");
	expect(newDescription).toHaveTextContent(inputText + "abc");
});

test("Image URL is editable", () => {
	const inputText =
		"https://popmenucloud.com/cdn-cgi/image/width=3840,height=3840,fit=scale-down,format=auto,quality=60/zhacvfry/90b5a572-bd27-4673-8dde-b6415918c0fc.jpg";
	render(<App />);
	const image = screen.getAllByTestId("Image")[0];
	fireEvent.click(image);
	const inputElement = screen.getByTestId("Image Input");
	userEvent.type(inputElement, "abc");
	const newDescription = screen.getByText(inputText + "abc");
	expect(newDescription).toHaveTextContent(inputText + "abc");
});
