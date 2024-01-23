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
			folderID: "folder1",
			name: "testing for folder1",
			comments: "comments here",
		},
		{
			id: uuidv4(),
			folderID: folders[1].id,
			name: "testing for folder2",
			comments: "comments here",
		},
	]);

	//store tasks in state which is mapped in AllTasks.jsx - any new tasks are automatically shown on screen

	//TODO move tasklist to individual components
	return (
		<div>
			{/* Consider adding the navbar with ui elements to the bottom */}
			<NavBar
				navBarMessage={navBarMessage}
				setNavBarMessage={setNavBarMessage}
			/>
			<div className="container-fluid">
				<div className="row">
					<SideBar folders={folders} setFolders={setFolders} />
					<MainSection folders={folders} tasks={tasks} setTasks={setTasks} />
				</div>
			</div>
		</div>
	);
}

export default App;

// nav bar: a goal for the day/focus , tasks, dashboard,

// sticky top
