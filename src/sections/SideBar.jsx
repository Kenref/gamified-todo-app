import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../components/Modal";

function SideBar({ folders, setFolders, setActiveFolderID }) {
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

	//TODO consider merging all of the form variables

	// const [modalState, setModalState] = useState({
	// 	header: "Add new folder",
	// 	formData: "{folderName: ""}",
	// 	formID: "folderForm",
	// 	showModal: false,
	// });

	const modalHeader = "Add new folder";
	const [formData, setFormData] = useState({ folderName: "" });
	const formID = "folderForm";
	const [showModal, setShowModal] = useState(false);

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setFolders([...folders, { id: uuidv4(), name: formData.folderName }]);
		setShowModal(false);
		setFormData({ folderName: "" });
	};

	const form = (
		<form onSubmit={handleFormSubmit} id={formID}>
			<div>
				<label htmlFor="folderName" className="form-label">
					Folder Name:
				</label>
				<input
					className="form-control"
					id="folderName"
					value={formData.folderName}
					onChange={(e) => setFormData({ folderName: e.target.value })}
				/>
			</div>
		</form>
	);

	//try to remove row from the divs if not needed
	return (
		<div className="sidebar-colour ps-3" style={{ height: "100vh" }}>
			{/* TODO consider adding a accented background colour for name/logo */}
			<h4 className="pt-3">APP NAME</h4>
			<div className="row mt-3 text-start">
				<strong>Views</strong>
				<button className="btn">Dashboard</button>
				<button className="btn ">Inbox</button>
				<button className="btn">Today</button>
				<button className="btn">All</button>
				<button className="btn">Completed</button>
			</div>
			<div className=" row mt-5 ">
				<span className="d-flex justify-content-between align-items-center ">
					<strong>Folders</strong>
					<button
						className="btn"
						style={{ color: "#101a0f" }}
						onClick={() => setShowModal(!showModal)}
					>
						{plusIcon}
					</button>
				</span>
				{folders.map((folder) => (
					<button
						key={folder.id}
						className="btn"
						onClick={() => setActiveFolderID(folder.id)}
					>
						{folder.name}
					</button>
				))}

				{showModal && (
					<Modal
						title={modalHeader}
						body={form}
						formID={formID}
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
	setActiveFolderID: PropTypes.func,
};

export default SideBar;
