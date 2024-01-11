import IndividualTodo from "../components/IndividualTodo";
import PropTypes from "prop-types";

function TaskList({ tasks }) {
	return (
		<div className="col-md-10 ml-sm-auto col-lg-10 px-4 pt-3">
			<ul className="list-unstyled list-group">
				{tasks.map((task) => (
					<IndividualTodo
						key={task.id}
						id={`todo-${task.id}`} // Unique id for each todo item
						todoTitle={task.todoTitle}
						todoComments={task.todoComments}
					/>
				))}
			</ul>
		</div>
	);
}

TaskList.propTypes = {
	tasks: PropTypes.array,
};

export default TaskList;
