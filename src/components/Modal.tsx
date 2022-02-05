import React, { useState } from "react";

interface ModalProps {
	onConfirm: (confirmDelete: boolean) => void;
}

export default function Modal({ onConfirm }: ModalProps) {
	const onPressYes = () => onConfirm(true);

	const onPressNo = () => onConfirm(false);

	return (
		<div className="flex h-full w-full items-center justify-center modal z-10 left-0 top-0 fixed">
			<div className="border-2 p-10 rounded-lg bg-white">
				<div>Are you sure?</div>
				<div className="w-max flex justify-around">
					<button data-testid="Modal No" onClick={onPressNo}>
						No
					</button>
					<button data-testid="Modal Yes" onClick={onPressYes}>
						Yes
					</button>
				</div>
			</div>
		</div>
	);
}
