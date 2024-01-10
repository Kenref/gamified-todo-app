import { useState } from "react";
import IndividualTodo from "../components/IndividualTodo";

function Inbox() {
	return (
		<div className="col-md-10 ml-sm-auto col-lg-10 px-4 pt-3">
			<ul className="list-unstyled list-group">
				<IndividualTodo />
				<IndividualTodo
					todoTitle={"I can change this to whatever I want"}
					todoComments={"I can also use a state here"}
				/>
			</ul>
		</div>
	);
}

export default Inbox;
