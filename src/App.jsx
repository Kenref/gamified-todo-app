import { useState } from "react";
import NavBar from "./sections/NavBar";
import SideBar from "./sections/SideBar";
import MainSection from "./sections/MainSection";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

function App() {
	const [navBarMessage, setNavBarMessage] = useState("Click to add message");

	const [folders, setFolders] = useState([
		{ id: uuidv4(), name: "folder1" },
		{ id: uuidv4(), name: "folder2" },
		{ id: uuidv4(), name: "folder3" },
	]);

	const [tasks, setTasks] = useState([
		{
			id: uuidv4(),
			folderID: folders[0].id,
			name: "testing for folder1",
			comments: "comments here",
		},
		{
			id: uuidv4(),
			folderID: folders[0].id,
			name: "tester tester",
			comments: "comments here",
		},
		{
			id: uuidv4(),
			folderID: folders[0].id,
			name: "testing ",
			comments: "comments here",
		},
		{
			id: uuidv4(),
			folderID: folders[1].id,
			name: "testing for folder2",
			comments: "comments here",
		},
		{
			id: uuidv4(),
			folderID: folders[2].id,
			name: "testing for folder3",
			comments: "comments here",
		},
	]);

	const [activeFolderID, setActiveFolderID] = useState(null);

	const getFolder = (folderID) => {
		return tasks.filter((task) => task.folderID === folderID);
	};

	return (
		<div>
			{/* Consider adding the navbar with ui elements to the bottom */}
			<NavBar
				navBarMessage={navBarMessage}
				setNavBarMessage={setNavBarMessage}
			/>
			<div className="container-fluid">
				<div className="row">
					<SideBar
						folders={folders}
						setFolders={setFolders}
						setActiveFolderID={setActiveFolderID}
					/>
					<MainSection
						folders={folders}
						//filter folder id to be same as activeFolderID
						tasks={tasks.filter((task) => task.folderID === activeFolderID)}
						setTasks={setTasks}
						getFolder={getFolder}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;

// sticky top
