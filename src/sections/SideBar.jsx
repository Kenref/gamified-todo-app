function SideBar() {
	const plusIcon = (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="16"
			height="16"
			fill="currentColor"
			className="bi bi-plus-square"
			viewBox="0 0 16 16"
		>
			<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
			<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
		</svg>
	);

	return (
		<div
			className="col-md-2 d-none d-md-block bg-body-tertiary"
			style={{ height: "100vh" }}
		>
			<div className="btn-group row mt-3">
				<strong className="text-center">Views</strong>
				<button className="btn">Dashboard</button>
				<button className="btn">Inbox</button>
				<button className="btn">Today</button>
				<button className="btn">All</button>
				<button className="btn">Completed</button>
			</div>
			<div className="btn-group row mt-5">
				<span className="text-center d-flex justify-content-between">
					<strong>Folders</strong>
					{plusIcon}
				</span>
				<button className="btn">Folder 1</button>
				<button className="btn">Folder 2</button>
				<button className="btn">Folder 3</button>
			</div>
		</div>
	);
}
export default SideBar;

// className="bg-primary col-2 h-100"
