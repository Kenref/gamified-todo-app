import { useState } from "react";

function AddTaskBar() {
	// const [taskName, setTaskName] = useState({ TaskName });

	return (
		<form className="d-flex">
			<input className="form-control me-2" placeholder="Add Item" />
			<button className="btn btn-outline-success" type="submit">
				Add
			</button>
		</form>
	);
}

export default AddTaskBar;
