import TaskList from "./TaskList";
import PropTypes from "prop-types";

function MainSection({ tasks }) {
	return <TaskList tasks={tasks} />;
}

MainSection.propTypes = {
	tasks: PropTypes.array,
};

export default MainSection;
