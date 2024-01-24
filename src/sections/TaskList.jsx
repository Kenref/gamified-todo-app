import IndividualTodo from "../components/IndividualTodo";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function TaskList({ folders, tasks, setTasks }) {
	return (
		<div className="col-md-10 ml-sm-auto col-lg-10 px-4 pt-3 tasklist-colour">
			<ul className="list-unstyled list-group">
				{tasks.map((task) => (
					<IndividualTodo
						key={task.id}
						id={`todo-${task.id}`} // Unique id for each todo item
						task={task}
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

// include a quick add section when you click below the tasks
