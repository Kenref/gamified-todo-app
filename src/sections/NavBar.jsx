import Modal from "../components/Modal";
import AddItemBar from "../components/AddItemBar";
import NavBarMessage from "../components/NavBarMessage";
import PropTypes from "prop-types";
import { useState } from "react";

function NavBar({ navBarMessage, setNavBarMessage, tasks, setTasks }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<nav className="navbar sticky-top bg-body-tertiary pe-2 ps-5">
				<a href="#" className="navbar-brand">
					Website Logo
				</a>
				{/* TODO make it so that if the goal is > certain length it will do a ticker scroll effect */}
				{/* Make it so that you can add todos to the goal section */}
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
				<Modal
					title={"Add new Task"}
					body={"Put form here"}
					showModal={showModal}
					setShowModal={setShowModal}
				/>
				{/* <AddItemBar tasks={tasks} setTasks={setTasks} /> */}
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
