function SideBar() {
	return (
		<div
			className="col-md-2 d-none d-md-block bg-body-tertiary"
			style={{ height: "100vh" }}
		>
			<div className="btn-group row mt-3">
				<button className="btn">Dashboard</button>
				<button className="btn">Inbox</button>
				<button className="btn">Today</button>
				<button className="btn">All</button>
				<button className="btn">Completed</button>
			</div>
			<div className="btn-group row mt-5">
				<button className="btn">Folder 1</button>
				<button className="btn">Folder 2</button>
				<button className="btn">Folder 3</button>
			</div>
		</div>
	);
}
export default SideBar;

// className="bg-primary col-2 h-100"
