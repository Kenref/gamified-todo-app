import AllTasks from "./AllTasks";
import PropTypes from "prop-types";

function MainSection({ tasks }) {
	return <AllTasks tasks={tasks} />;
}

MainSection.propTypes = {
	tasks: PropTypes.array,
};

export default MainSection;
