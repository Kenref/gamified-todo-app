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

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			setIsEditing(false);
			setNavBarMessage(content);
		}
	};

	// Open input when editing
	if (isEditing) {
		return (
			<div>
				<input
					autoFocus
					className="form-control"
					value={content}
					onChange={handleContentChange}
					onBlur={handleBlur}
					onKeyDown={handleKeyDown}
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
