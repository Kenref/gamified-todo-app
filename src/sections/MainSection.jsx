import TaskList from "./TaskList";
import PropTypes from "prop-types";

function MainSection({ folders }) {
	return <TaskList folders={folders} />;
}

MainSection.propTypes = {
	folders: PropTypes.array,
};

export default MainSection;
