import TaskList from "./TaskList";
import PropTypes from "prop-types";

function MainSection({ folders, tasks, setTasks }) {
	return <TaskList folders={folders} tasks={tasks} setTasks={setTasks} />;
}

MainSection.propTypes = {
	folders: PropTypes.array,
	tasks: PropTypes.array,
	setTasks: PropTypes.func,
};

export default MainSection;
