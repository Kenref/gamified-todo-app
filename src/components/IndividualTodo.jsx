import flatpickr from "flatpickr";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
//TODO next task is to format the date and time so that they can be added to the tasks folder in the correct format
// update and add more features to this
function IndividualTodo({ task, deleteTask, setTasks, tasks }) {
	const dueDateTimePickerRef = useRef(null);

	useEffect(() => {
		const date = flatpickr(dueDateTimePickerRef.current, {
			enableTime: true,
			altInput: true,
			minDate: "today",
			dateFormat: "d/m/Y H:i",
			onClose: (selectedDates, dateStr) => {
				setTasks((currentTasks) => {
					return currentTasks.map((currentTask) => {
						if (currentTask.id === task.id) {
							// Note: Depending on how flatpickr returns dateStr, you might need to adjust this.
							// If dateStr is an array, ensure you're setting the date correctly.
							// For a single date selection, it should be fine as is.
							return { ...currentTask, dueDateTime: dateStr };
						}
						return currentTask;
					});
				});
			},
		});
		return () => date.destroy();
	}, []);

	return (
		<li className="list-group-item d-flex justify-content-between align-items-start custom-task-colour">
			{/*change the style of this checkbox (copy pasted)  */}
			<input
				className="form-check-input me-1"
				type="checkbox"
				value=""
				id="firstCheckbox"
				onClick={() => deleteTask(task.id)}
			/>
			<div className="ms-2 me-auto row">
				<div className="fw-bold">{task.name}</div>
				<div>{task.description}</div>
				<input
					className="form-control"
					ref={dueDateTimePickerRef}
					placeholder={task.dueDateTime}
				/>
			</div>
		</li>
	);
}

IndividualTodo.propTypes = {
	task: PropTypes.object,
	deleteTask: PropTypes.func,
	setTasks: PropTypes.func,
};

export default IndividualTodo;

//TODO delete item, edit item, add tags, other etc add date
//TODO when clicked on the name or description, will be able to edit it
