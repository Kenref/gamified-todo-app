import IndividualTodo from "../components/IndividualTodo";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function TaskList({ folders }) {
	const [tasks, setTasks] = useState([
		{ id: uuidv4(), title: "Task 1", comments: "Comments here" },
		{ id: uuidv4(), title: "Task 2", comments: "Comments here" },
		{
			id: uuidv4(),
			title: "I can change this to whatever I want",
			comments: "use a state to map out",
		},
	]);

	// const addTask = (task) => {
	// 	setTasks([...tasks, task]);
	// };

	return (
		<div className="col-md-10 ml-sm-auto col-lg-10 px-4 pt-3">
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
