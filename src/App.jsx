import { useState } from "react";
import NavBar from "./sections/NavBar";
import SideBar from "./sections/SideBar";
import MainSection from "./sections/MainSection";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [navBarMessage, setNavBarMessage] = useState("Click to add message");

	const [folders, setFolders] = useState([
		{ id: uuidv4(), folderName: "folder1" },
		{ id: uuidv4(), folderName: "folder2" },
	]);

	//store tasks in state which is mapped in AllTasks.jsx - any new tasks are automatically shown on screen
	const [tasks, setTasks] = useState([
		{ id: uuidv4(), todoTitle: "Task 1", todoComments: "Comments here" },
		{ id: uuidv4(), todoTitle: "Task 2", todoComments: "Comments here" },

		{
			id: uuidv4(),
			todoTitle: "I can change this to whatever I want",
			todoComments: "use a state to map out",
		},
	]);
	//TODO move tasklist to individual components
	return (
		<div>
			{/* Consider adding the navbar with ui elements to the bottom */}
			<NavBar
				navBarMessage={navBarMessage}
				setNavBarMessage={setNavBarMessage}
				tasks={tasks}
				setTasks={setTasks}
			/>
			<div className="container-fluid">
				<div className="row">
					<SideBar folders={folders} setFolders={setFolders} />
					<MainSection tasks={tasks} />
				</div>
			</div>
		</div>
	);
}

export default App;

// nav bar: a goal for the day/focus , tasks, dashboard,

// sticky top
