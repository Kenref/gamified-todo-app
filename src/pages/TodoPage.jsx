import SideBar from "../components/SideBar";
import TodoSection from "../components/Todos";

function TodoPage() {
	return (
		<div className="row g-0">
			<div className="col-2">
				<SideBar />
			</div>
			<div className="col-10">
				<TodoSection />
			</div>
		</div>
	);
}

export default TodoPage;
