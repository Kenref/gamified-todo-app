import TaskList from "../components/TaskList";
import PropTypes from "prop-types";
import Dashboard from "./Dashboard";

function MainSection({
	folders,
	tasks,
	setTasks,
	activeFolderID,
	deleteTask,
	showDashboard,
}) {
	return (
		<div className="col-md-10 ml-sm-auto col-lg-10 px-5 pt-3">
			{showDashboard && <Dashboard />}
			{activeFolderID && (
				<h3>
					{folders.find((folder) => folder.id === activeFolderID)?.name ||
						"Folder not found"}
				</h3>
			)}
			<TaskList
				folders={folders}
				tasks={tasks}
				setTasks={setTasks}
				deleteTask={deleteTask}
				activeFolderID={activeFolderID}
			/>
		</div>
	);
}

MainSection.propTypes = {
	folders: PropTypes.array,
	tasks: PropTypes.array,
	setTasks: PropTypes.func,
	activeFolderID: PropTypes.string,
	deleteTask: PropTypes.func,
	showDashboard: PropTypes.bool,
};

export default MainSection;
