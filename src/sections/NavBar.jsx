import AddTaskBar from "../components/AddTaskBar";
import NavBarMessage from "../components/NavBarMessage";

function NavBar({ navBarMessage, setNavBarMessage, tasks, setTasks }) {
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
				<AddTaskBar tasks={tasks} setTasks={setTasks} />
			</nav>
		</>
	);
}

export default NavBar;
