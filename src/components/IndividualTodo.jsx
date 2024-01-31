import flatpickr from "flatpickr";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
//TODO next task is to format the date and time so that they can be added to the tasks folder in the correct format
// update and add more features to this
function IndividualTodo({ task, deleteTask }) {
	const datePickerRef = useRef(null);
	const timePickerRef = useRef(null);

	useEffect(() => {
		const date = flatpickr(datePickerRef.current, {
			altInput: true,
			minDate: "today",
			dateFormat: "d.m.Y",
		});
		const time = flatpickr(timePickerRef.current, {
			enableTime: true,
			noCalendar: true,
			dateFormat: "h:iK",
		});
		return () => {
			date.destroy();
			time.destroy();
		};
	}, []);

	return (
		<li
			className="list-group-item d-flex justify-content-between align-items-start"
			style={{ backgroundColor: "#f9fdf3" }}
		>
			{/*change the style of this checkbox (copy pasted)  */}
			<input
				className="form-check-input me-1"
				type="checkbox"
				value=""
				id="firstCheckbox"
				onClick={() => deleteTask(task.id)}
			/>
			<div className="ms-2 me-auto">
				<div className="fw-bold">{task.name}</div>
				<div>{task.description}</div>
				<input
					className="form-control"
					ref={datePickerRef}
					placeholder={task.date}
				/>
				<input
					className="form-control"
					ref={timePickerRef}
					placeholder={task.time}
				/>
			</div>
		</li>
	);
}

IndividualTodo.propTypes = {
	task: PropTypes.object,
	deleteTask: PropTypes.func,
};

export default IndividualTodo;

//TODO delete item, edit item, add tags, other etc add date
//TODO when clicked on the name or description, will be able to edit it
