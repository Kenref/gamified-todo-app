import React, { useState } from "react";
import PropTypes from "prop-types";

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
				className="form-control"
				style={{ maxWidth: "10rem" }}
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

NavBarMessage.propTypes = {
	navBarMessage: PropTypes.string,
	setNavBarMessage: PropTypes.func,
};

export default NavBarMessage;
