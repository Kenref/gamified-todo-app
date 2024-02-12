import flatpickr from "flatpickr";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
// update and add more features to this
function IndividualTodo({ task, deleteTask, setTasks, tasks }) {
	const dueDatePickerRef = useRef(null);
	const dueTimePickerRef = useRef(null);

	useEffect(() => {
		const date = flatpickr(dueDatePickerRef.current, {
			enableTime: false,
			altInput: true,
			minDate: "today",
			dateFormat: "d/m/Y",
			onClose: (selectedDates, dateStr) => {
				setTasks((currentTasks) => {
					return currentTasks.map((currentTask) => {
						if (currentTask.id === task.id) {
							return { ...currentTask, dueDate: dateStr };
						}
						return currentTask;
					});
				});
			},
		});

		const time = flatpickr(dueTimePickerRef.current, {
			enableTime: true,
			noCalendar: true,
			altInput: true,
			minDate: "today",
			dateFormat: "h:iK",
			onClose: (selectedDates, dateStr) => {
				setTasks((currentTasks) => {
					return currentTasks.map((currentTask) => {
						if (currentTask.id === task.id) {
							return { ...currentTask, dueTime: dateStr };
						}
						return currentTask;
					});
				});
			},
		});

		return () => {
			date.destroy();
			time.destroy();
		};
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
				<div className="container">
					<div className="d-inline-flex">
						<input
							className="form-control"
							ref={dueDatePickerRef}
							placeholder={task.dueDate}
						/>
						<input
							className="form-control"
							ref={dueTimePickerRef}
							placeholder={task.dueTime}
						/>
					</div>
				</div>
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
