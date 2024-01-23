import TaskList from "./TaskList";
import PropTypes from "prop-types";

function MainSection({ folders, tasks, setTasks, getFolder }) {
	return (
		<TaskList
			folders={folders}
			tasks={tasks}
			setTasks={setTasks}
			getFolder={getFolder}
		/>
	);
}

MainSection.propTypes = {
	folders: PropTypes.array,
	tasks: PropTypes.array,
	setTasks: PropTypes.func,
};

export default MainSection;
