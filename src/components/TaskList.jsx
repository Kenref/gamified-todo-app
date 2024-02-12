import IndividualTodo from "./IndividualTodo";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function TaskList({ folders, tasks, setTasks, deleteTask, activeFolderID }) {
	const filteredTasks = tasks.filter(
		(task) => task.folderID === activeFolderID
	);

	return (
		<div>
			<ul className="list-unstyled list-group">
				{filteredTasks.map((individualTask) => (
					<IndividualTodo
						key={individualTask.id}
						id={`todo-${individualTask.id}`} // Unique id for each todo item
						task={individualTask}
						deleteTask={deleteTask}
						tasks={tasks}
						setTasks={setTasks}
					/>
				))}
			</ul>
		</div>
	);
}

TaskList.propTypes = {
	tasks: PropTypes.array,
	deleteTask: PropTypes.func,
	setTasks: PropTypes.func,
	activeFolderID: PropTypes.string,
};

export default TaskList;

// include a quick add section when you click below the tasks
