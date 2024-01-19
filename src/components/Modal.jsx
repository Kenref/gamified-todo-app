import PropTypes from "prop-types";

function Modal({ title, body, showModal, setShowModal }) {
	return (
		<div
			className={`modal ${showModal ? "show" : ""}`}
			style={{ display: showModal ? "block" : "none" }}
			tabIndex="-1"
		>
			<div
				// className="modal-dialog"
				className={`modal-dialog custom-transition ${showModal ? "show" : ""}`}
			>
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
						<button type="button" className="btn btn-primary">
							Add
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

Modal.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	showModal: PropTypes.bool,
	setShowModal: PropTypes.func,
};

export default Modal;
