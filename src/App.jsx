import { useRef, useState } from "react";
import NavBar from "./sections/NavBar";
import SideBar from "./sections/SideBar";
import MainSection from "./sections/MainSection";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [navBarMessage, setNavBarMessage] = useState("Click to add message");

	const [folders, setFolders] = useState([
		{ id: uuidv4(), name: "Folder 1" },
		{ id: uuidv4(), name: "Folder 2" },
		{ id: uuidv4(), name: "Folder 3" },
	]);
	const [tasks, setTasks] = useState([
		{
			id: uuidv4(),
			folderID: folders[0].id,
			name: "testing for folder1",
			description: "description here",
			date: "date here",
		},
		{
			id: uuidv4(),
			folderID: folders[0].id,
			name: "tester tester",
			description: "description here",
			date: "date here",
		},
		{
			id: uuidv4(),
			folderID: folders[0].id,
			name: "testing ",
			description: "description here",
			date: "date here",
		},
		{
			id: uuidv4(),
			folderID: folders[1].id,
			name: "testing for folder2",
			description: "description here",
			date: "date here",
		},
		{
			id: uuidv4(),
			folderID: folders[2].id,
			name: "testing for folder3",
			description: "description here",
			date: "date here",
		},
	]);

	const [activeFolderID, setActiveFolderID] = useState(null);

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div className="container-fluid">
			<div className="row">
				{/* Consider adding the navbar with ui elements to the bottom */}
				<div className="col-md-2 col-xxl-1 d-none d-md-block px-0">
					<SideBar
						folders={folders}
						setFolders={setFolders}
						setActiveFolderID={setActiveFolderID}
					/>
				</div>
				<div className="col-md-10 col-xxl-11 px-0  background-colour">
					<NavBar
						navBarMessage={navBarMessage}
						setNavBarMessage={setNavBarMessage}
						folders={folders}
						tasks={tasks}
						setTasks={setTasks}
					/>
					<MainSection
						folders={folders}
						//filter folder id to be same as activeFolderID
						tasks={tasks.filter((task) => task.folderID === activeFolderID)}
						setTasks={setTasks}
						activeFolderID={activeFolderID}
						deleteTask={deleteTask}
					/>
				</div>
			</div>
		</div>
	);
}

export default App;

// sticky top
