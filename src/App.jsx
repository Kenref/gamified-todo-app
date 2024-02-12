import { useRef, useState } from "react";
import NavBar from "./sections/NavBar";
import SideBar from "./sections/SideBar";
import MainSection from "./sections/MainSection";
import { v4 as uuidv4 } from "uuid";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

function App() {
	const [navBarMessage, setNavBarMessage] = useState(
		"Today I will focus on ..."
	);

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
			dueDate: "February 17, 2024",
			dueTime: "12:00 PM",
		},
		{
			id: uuidv4(),
			folderID: folders[0].id,
			name: "tester tester",
			description: "description here",
			dueDate: "Due date here",
			dueTime: "Time here",
		},
		{
			id: uuidv4(),
			folderID: folders[0].id,
			name: "testing ",
			description: "description here",
			dueDate: "Due date here",
			dueTime: "Time here",
		},
		{
			id: uuidv4(),
			folderID: folders[1].id,
			name: "testing for folder2",
			description: "description here",
			dueDate: "Due date here",
			dueTime: "Time here",
		},
		{
			id: uuidv4(),
			folderID: folders[2].id,
			name: "testing for folder3",
			description: "description here",
			dueDate: "Due date here",
			dueTime: "Time here",
		},
	]);

	const [showDashboard, setShowdashboard] = useState(true);
	const [activeFolderID, setActiveFolderID] = useState(null);

	// remove task function prop drilled down to IndividialTodo.jsx
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
						setShowdashboard={setShowdashboard}
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
						tasks={tasks}
						setTasks={setTasks}
						activeFolderID={activeFolderID}
						deleteTask={deleteTask}
						showDashboard={showDashboard}
					/>
					{/* test if date and time selectors are working */}
					{/* <button onClick={() => console.log(tasks)}>hi</button> */}
				</div>
			</div>
		</div>
	);
}

export default App;

// sticky top
