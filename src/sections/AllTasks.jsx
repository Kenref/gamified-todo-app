import { useState } from "react";
import IndividualTodo from "../components/IndividualTodo";

function AllTasks({ tasks }) {
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

export default AllTasks;
