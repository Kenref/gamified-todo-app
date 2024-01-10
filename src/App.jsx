import { useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import MainSection from "./components/Todos";

function App() {
	const [navBarMessage, setNavBarMessage] = useState("Todays focus here");

	return (
		<div>
			{/* Consider adding the navbar with ui elements to the bottom */}
			<NavBar navBarMessage={navBarMessage} />
			<div className="container-fluid">
				<div className="row">
					<SideBar />
					<MainSection />
				</div>
			</div>
		</div>
	);
}

export default App;

// nav bar: a goal for the day/focus , tasks, dashboard,

// sticky top
