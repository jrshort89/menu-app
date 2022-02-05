import React, { useState } from "react";

interface EditInlineTextProps {
	title: string;
	value: string;
	classes?: string;
	textArea?: boolean;
}

export default function EditInlinImage({
	title,
	value,
	classes,
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
			<img
				onClick={() => setEditable((e) => !e)}
				className="max-w-md w-auto"
				src={editValue}
				alt={title}
			/>
			{editable && (
				<textarea
					onChange={(e: any) => setEditValue(e.target.value)}
					className={classes + "z-10 absolute"}
					value={editValue}
					onBlur={onBlur}
					onKeyDown={onKeyDown}
					autoFocus
					rows={8}
				/>
			)}
		</>
	);
}
