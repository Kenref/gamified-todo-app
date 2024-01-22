import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../components/Modal";

function SideBar({ folders, setFolders }) {
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

	const [showModal, setShowModal] = useState(false);

	//try to remove row from the divs if not needed
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
				<span className="text-center">
					<strong>Folders</strong>
				</span>
				{folders.map((folder) => (
					<button key={folder.id} className="btn">
						{folder.name}
					</button>
				))}
				<button
					className="btn border bg-primary text-white"
					onClick={() => setShowModal(!showModal)}
				>
					{plusIcon}
				</button>
				{showModal && (
					<Modal
						title={"Add new folder"}
						body={"Put the form here"}
						showModal={showModal}
						setShowModal={setShowModal}
					/>
				)}
			</div>
		</div>
	);
}

SideBar.propTypes = {
	folders: PropTypes.array,
	setFolders: PropTypes.func,
};

export default SideBar;
