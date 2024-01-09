function Todos() {
	return (
		<div className="col-md-10 ml-sm-auto col-lg-10 px-4 pt-3">
			<ul className="list-unstyled list-group">
				<li className="list-group-item d-flex justify-content-between align-items-start">
					{/*change the style of this checkbox (copy pasted)  */}
					<input
						className="form-check-input me-1"
						type="checkbox"
						value=""
						id="firstCheckbox"
					/>
					<div className="ms-2 me-auto">
						<div className="fw-bold">Subheading</div>
						Content for list item
					</div>
				</li>
			</ul>
		</div>
	);
}

export default Todos;
