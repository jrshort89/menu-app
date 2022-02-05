import React, { useState } from "react";

interface EditInlineTextProps {
	value: string;
	classes?: string;
	numberInput?: boolean;
	textArea?: boolean;
}

export default function EditInlinText({
	value,
	classes,
	numberInput,
	textArea,
}: EditInlineTextProps) {
	const [editValue, setEditValue] = useState(value);
	const [editable, setEditable] = useState(false);

	const onKeyDown = (event: any) => {
		if (event.key === "Enter" || event.key === "Escape") {
			event.target.blur();
		}
	};

	const onBlur = (event: any) => {
		if (editValue.trim() === "") {
			setEditValue("");
		} else {
			setEditable(event.target.value);
		}
		setEditable(false);
	};
	return (
		<>
			{editable ? (
				!textArea ? (
					<input
						onChange={(e: any) => setEditValue(e.target.value)}
						className={classes}
						value={editValue}
						onBlur={onBlur}
						onKeyDown={onKeyDown}
						autoFocus={true}
						type={numberInput ? "number" : "text"}
					/>
				) : (
					<textarea
						onChange={(e: any) => setEditValue(e.target.value)}
						className={classes + " w-full h-full"}
						value={editValue}
						onBlur={onBlur}
						onKeyDown={onKeyDown}
						autoFocus={true}
						rows={8}
					/>
				)
			) : (
				<div onClick={(e) => setEditable(true)} className={classes}>
					{numberInput && "$"}
					{editValue}
				</div>
			)}
		</>
	);
}
