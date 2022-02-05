import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { MenuItem } from "../dummyData";

interface MenuCardFormProps {
	setMenuItems: Dispatch<SetStateAction<MenuItem[]>>;
}

export default function MenuCardForm({ setMenuItems }: MenuCardFormProps) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const onClickAdd = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const item = {
			title: title,
			description: description,
			price: price,
			imageSource: imageUrl,
		} as unknown as MenuItem;
		setMenuItems((m) => [item, ...m]);
		resetForm();
	};

	const resetForm = () => {
		setTitle("");
		setDescription("");
		setPrice("");
		setImageUrl("");
	};

	const onChangeTitle = (e: FormEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value);
	};

	const onChangeDescription = (e: FormEvent<HTMLInputElement>) => {
		setDescription(e.currentTarget.value);
	};

	const onChangePrice = (e: FormEvent<HTMLInputElement>) => {
		setPrice(e.currentTarget.value);
	};

	const onChangeImageUrl = (e: FormEvent<HTMLInputElement>) => {
		setImageUrl(e.currentTarget.value);
	};

	return (
		<div className="flex justify-center">
			<form
				className="flex flex-col w-3/4 md:w-3/4 lg:w-1/3"
				onSubmit={(event) => onClickAdd(event)}
			>
				<input
					value={title}
					onChange={onChangeTitle}
					required
					placeholder="Title"
					className="rounded-md mb-4"
					type="text"
				/>
				<input
					value={description}
					onChange={onChangeDescription}
					required
					placeholder="Description"
					className="rounded-md mb-4"
					type="text"
				/>
				<input
					value={price}
					onChange={onChangePrice}
					type="number"
					required
					placeholder="Price"
					className="rounded-md mb-4"
				/>
				<input
					value={imageUrl}
					onChange={onChangeImageUrl}
					required
					placeholder="Image URL"
					className="rounded-md mb-4"
					type="text"
				/>
				<button
					type="submit"
					className="self-center w-1/2 border-2 rounded-md mb-8"
				>
					Add menu item
				</button>
			</form>
		</div>
	);
}
