import TaskList from "./TaskList";
import PropTypes from "prop-types";

function MainSection({ folders, tasks, setTasks, activeFolderID }) {
	return (
		<div className="col-md-10 ml-sm-auto col-lg-10 px-5 pt-3">
			{activeFolderID && (
				<h3>
					{folders.find((folder) => folder.id === activeFolderID)?.name ||
						"Folder not found"}
				</h3>
			)}
			<TaskList folders={folders} tasks={tasks} setTasks={setTasks} />
		</div>
	);
}

MainSection.propTypes = {
	folders: PropTypes.array,
	tasks: PropTypes.array,
	setTasks: PropTypes.func,
};

export default MainSection;
