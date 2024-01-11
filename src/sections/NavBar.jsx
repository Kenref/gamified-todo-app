import AddTaskBar from "../components/AddTaskBar";

function NavBar({ navBarMessage, tasks, setTasks }) {
	return (
		<>
			<nav className="navbar sticky-top bg-body-tertiary pe-2 ps-5">
				<a href="#" className="navbar-brand">
					Website Logo
				</a>
				{/* TODO make it so that if the goal is > certain length it will do a ticker scroll effect */}
				{/* Make it so that you can add todos to the goal section */}
				<div className="navbar-text">{navBarMessage}</div>
				<AddTaskBar tasks={tasks} setTasks={setTasks} />
			</nav>
		</>
	);
}

export default NavBar;
