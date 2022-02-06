import React, { useState } from "react";
import { MenuItem } from "../dummyData";
import EditInlinImage from "./EditInlineImage";
import EditInlinText from "./EditInlinText";
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
		<>
			<div
				data-testid="Menu Card"
				className="hover:border-4 mb-6 w-3/4 border-2 flex flex-col lg:flex-row items-center rounded-lg"
			>
				{showModal && <Modal onConfirm={confirmDeleteHandler} />}
				<EditInlinImage value={imageSource} title={title} />
				<div className="w-full mx-6 justify-center self-center">
					<EditInlinText
						testid="Title"
						value={title}
						classes="w-full font-bold"
					/>
					<br />
					<EditInlinText testid="Description" textArea value={description} />
					<br />
					<div className="flex justify-between w-max">
						<EditInlinText
							numberInput
							value={price.toString()}
							classes="font-bold"
						/>
						<button data-testid="Delete" onClick={() => setShowModal(true)}>
							X
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
