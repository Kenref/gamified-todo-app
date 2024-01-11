import React, { useState } from "react";

function NavBarMessage({ navBarMessage, setNavBarMessage }) {
	const [isEditing, setIsEditing] = useState(false);
	const [content, setContent] = useState(navBarMessage);

	const handleContentChange = (e) => {
		setContent(e.target.value);
	};

	const handleBlur = () => {
		setIsEditing(false);
		setNavBarMessage(content);
	};
	//TODO add when you click outside of the box it will enter and also when you press enter it will confirm new message.
	//TODO it should also work when you don't change the message
	if (isEditing) {
		return (
			<input
				value={content}
				onChange={handleContentChange}
				onBlur={handleBlur}
			/>
		);
	}
	return (
		<span
			onClick={() => setIsEditing(true)}
			//set max width for mobile
			style={{ cursor: "pointer", whiteSpace: "normal" }}
		>
			{content}
		</span>
	);
}

export default NavBarMessage;
