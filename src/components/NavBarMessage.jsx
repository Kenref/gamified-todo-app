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

	const handleOnClick = () => {
		setIsEditing(true);
	};

	//TODO it should also work when you don't change the message
	// Open input when editing
	if (isEditing) {
		return (
			<div>
				<input
					className="form-control"
					value={content}
					onChange={handleContentChange}
					onBlur={handleBlur}
				/>
			</div>
		);
	}
	// Default state
	return (
		<span
			onClick={handleOnClick}
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
