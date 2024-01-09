function NavBar() {
	return (
		<>
			<nav className="navbar sticky-top bg-body-tertiary pe-2 ps-5">
				<a href="#" className="navbar-brand">
					Website Logo
				</a>
				{/* TODO make it so that if the goal is > certain length it will do a ticker scroll effect */}
				{/* Make it so that you can add todos to the goal section */}
				<div className="navbar-text">Goal of the day or quote</div>
				<form className="d-flex">
					<input className="form-control me-2" placeholder="Add Item" />
					<button className="btn btn-outline-success" type="submit">
						Add
					</button>
				</form>
			</nav>
		</>
	);
}

export default NavBar;
