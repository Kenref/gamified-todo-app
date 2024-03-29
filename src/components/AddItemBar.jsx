//TODO deletable

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

function AddItemBar({ tasks, setTasks }) {
	const [inputData, setInputData] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputData);
		const newTask = {
			id: uuidv4(),
			todoTitle: inputData,
			todoComments: "Comments",
		};
		setTasks([...tasks, newTask]);
	};
	// TODO change so that when on mobile there is a little circle with a + at bottom right for adding tasks
	return (
		<form className="d-flex" onSubmit={(e) => handleSubmit(e)}>
			<input
				className="form-control me-2"
				placeholder="Add Item"
				value={inputData}
				onChange={(e) => setInputData(e.target.value)}
			/>
			<button className="btn btn-outline-success" type="submit">
				Add
			</button>
		</form>
	);
}

AddItemBar.propTypes = {
	tasks: PropTypes.array,
	setTasks: PropTypes.func,
};

export default AddItemBar;
