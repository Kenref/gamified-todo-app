import PropTypes from "prop-types";

function Modal({ title, body, formID, showModal, setShowModal }) {
	return (
		<div
			className="modal-backdrop"
			style={{
				backgroundColor: "rgba(0, 0, 0, 0.5)",
			}}
			// TODO when you click outside it closes the modal
			// onClick={() => setShowModal(false)}
		>
			<div
				className={`modal ${showModal ? "show" : ""}`}
				tabIndex="-1"
				style={{ display: showModal ? "block" : "none" }}
			>
				<div className="modal-dialog ">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5">{title}</h1>
							<button
								type="button"
								className="btn-close"
								onClick={() => setShowModal(!showModal)}
							></button>
						</div>
						<div className="modal-body">{body}</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								onClick={() => setShowModal(!showModal)}
							>
								Cancel
							</button>
							<button className="btn btn-primary" type="submit" form={formID}>
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

Modal.propTypes = {
	// title: PropTypes.string,
	// body: PropTypes.string,
	showModal: PropTypes.bool,
	setShowModal: PropTypes.func,
};

export default Modal;

//TODO modal closes when clicked outside of
