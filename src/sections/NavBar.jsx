import AddItemBar from "../components/AddItemBar";
import NavBarMessage from "../components/NavBarMessage";
import PropTypes from "prop-types";

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
				<AddItemBar tasks={tasks} setTasks={setTasks} />
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
