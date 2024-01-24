import Modal from "../components/Modal";
import NavBarMessage from "../components/NavBarMessage";
import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function NavBar({ navBarMessage, setNavBarMessage, tasks, setTasks }) {
	const modalHeader = "Add new Task";
	const [formData, setFormData] = useState({
		taskName: "",
		taskDescription: "",
	});
	const formID = "taskForm";
	const [showModal, setShowModal] = useState(false);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setTasks([
			...tasks,
			{
				id: uuidv4(),
				name: formData.taskName,
				description: formData.taskDescription,
			},
		]);
		setShowModal(false);
		setFormData({ taskName: "", taskDescription: "" });
	};

	const taskForm = (
		<form onSubmit={handleFormSubmit} id={formID}>
			<div className="mb-3">
				<label htmlFor="taskName" className="form-label">
					Task Name:
				</label>
				<input
					className="form-control"
					id="taskName"
					value={formData.taskName}
					onChange={(e) =>
						setFormData({ ...formData, taskName: e.target.value })
					}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="taskDescription" className="form-label">
					Task Description:
				</label>
				<input
					className="form-control"
					id="taskDescription"
					value={formData.taskDescription}
					onChange={(e) =>
						setFormData({ ...formData, taskDescription: e.target.value })
					}
				/>
			</div>
			<em>Date etc to be here</em>
		</form>
	);

	return (
		<>
			<nav className=" navbar sticky-top bg-body-tertiary pe-2 ps-5">
				<a href="#" className="navbar-brand">
					Website Logo
				</a>

				<NavBarMessage
					navBarMessage={navBarMessage}
					setNavBarMessage={setNavBarMessage}
				/>
				<button
					className="btn border bg-primary text-white"
					onClick={() => setShowModal(!showModal)}
				>
					Add Task
				</button>
				{showModal && (
					<Modal
						title={modalHeader}
						body={taskForm}
						formID={formID}
						showModal={showModal}
						setShowModal={setShowModal}
					/>
				)}
			</nav>
		</>
	);
}

NavBar.propTypes = {
	navBarMessage: PropTypes.string,
	setNavBarMessage: PropTypes.func,
	tasks: PropTypes.array,
	setTasks: PropTypes.func,
};

export default NavBar;

// TODO make it so that if the goal char length is > certain length it will do a ticker scroll effect */

//  TODO Make it so that you can add todos to the goal section */
