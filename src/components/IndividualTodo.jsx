import PropTypes from "prop-types";
// update and add more features to this
function IndividualTodo({ todoTitle, todoComments }) {
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
				<div className="fw-bold">{todoTitle}</div>
				{todoComments}
			</div>
		</li>
	);
}

IndividualTodo.propTypes = {
	todoTitle: PropTypes.string,
	todoComments: PropTypes.string,
};

// IndividualTodo.defaultProps = {
// 	todoTitle: "Title",
// 	todoComments: "comments",
// };

export default IndividualTodo;

//TODO delete item, edit item, add tags, other etc add date
