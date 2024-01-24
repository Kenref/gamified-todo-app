import PropTypes from "prop-types";
// update and add more features to this
function IndividualTodo({ task }) {
	return (
		<li className="list-group-item d-flex justify-content-between align-items-start">
			{/*change the style of this checkbox (copy pasted)  */}
			<input
				className="form-check-input me-1"
				type="checkbox"
				value=""
				id="firstCheckbox"
			/>
			<div className="ms-2 me-auto">
				<div className="fw-bold">{task.name}</div>
				{task.description}
			</div>
		</li>
	);
}

IndividualTodo.propTypes = {
	task: PropTypes.object,
};

export default IndividualTodo;

//TODO delete item, edit item, add tags, other etc add date
//TODO when clicked on the name or description, will be able to edit it
