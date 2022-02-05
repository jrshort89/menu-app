import React, { Dispatch, SetStateAction, useState } from "react";
import { MenuItem } from "../dummyData";
import Modal from "./Modal";

interface MenuCardProps {
	menuItem: MenuItem;
	deleteItem: (item: string) => void;
}

export default function MenuCard({
	deleteItem,
	menuItem: { title, imageSource, description, price },
}: MenuCardProps) {
	const [showModal, setShowModal] = useState(false);

	const confirmDeleteHandler = (confirmDelete: boolean) => {
		if (confirmDelete) {
			deleteItem(title);
		}
		setShowModal(false);
	};
	return (
		<div
			data-testid="Menu Card"
			className="hover:border-4 mb-6 w-3/4 border-2 flex flex-col lg:flex-row items-center rounded-lg"
		>
			{showModal && <Modal onConfirm={confirmDeleteHandler} />}
			<img className="max-w-md w-auto" src={imageSource} alt={title} />
			<div className="w-full mx-6 justify-center self-center">
				<div className="font-bold">{title}</div>
				<br />
				<div>{description}</div>
				<br />
				<div className="flex justify-between w-max">
					<div className="font-bold">${price}</div>
					<button data-testid="Delete" onClick={() => setShowModal(true)}>
						x
					</button>
				</div>
			</div>
		</div>
	);
}
