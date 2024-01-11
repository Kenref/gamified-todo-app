import { useState } from "react";
import NavBar from "./sections/NavBar";
import SideBar from "./sections/SideBar";
import MainSection from "./sections/MainSection";
import { v4 as uuidv4 } from "uuid";

function App() {
	const [navBarMessage, setNavBarMessage] = useState("Todays focus here");

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

	// const [taskName, setTaskName] = useState("");

	return (
		<div>
			{/* Consider adding the navbar with ui elements to the bottom */}
			<NavBar navBarMessage={navBarMessage} tasks={tasks} setTasks={setTasks} />
			<div className="container-fluid">
				<div className="row">
					<SideBar />
					<MainSection tasks={tasks} />
				</div>
			</div>
		</div>
	);
}

export default App;

// nav bar: a goal for the day/focus , tasks, dashboard,

// sticky top
