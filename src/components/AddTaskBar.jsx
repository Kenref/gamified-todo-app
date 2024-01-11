import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function AddTaskBar({ tasks, setTasks }) {
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

export default AddTaskBar;
