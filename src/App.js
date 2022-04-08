import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/pagination/Pagination";
import AddTask from "./components/searchForm/SearchForm";
import Todos from "./components/singleTodo/Todos";

const App = () => {
	const [todos, setTodos] = useState([]);
	const todosPerPage = 10;
	const [activePage, setActivePage] = useState(1);

	let end = activePage * todosPerPage;
	let start = end - todosPerPage;
	const paginatedList = (activeNumber) => {
		setActivePage(activeNumber);
	};

	const removeHandler = (id) => {
		setTodos(todos.filter((todoItem) => todoItem.id !== id));
		if (Math.ceil(todos.length / todosPerPage) >= 1 && todos.length % todosPerPage === 1) {
			setActivePage(activePage - 1);
		}
	};


	return (<>
			<div className="Container">
				<AddTask
					onPaginatedList={setActivePage}
					todosPerPage={todosPerPage}
					todos={todos}
					setTodos={setTodos}
				/>
				<>
					{todos.slice(start, end)?.map((item) => {
						return (<Todos
								key={item.id}
								item={item}
								setTodos={setTodos}
								todos={todos}
								removeHandler={removeHandler}
							/>);
					})}
				</>
				<Pagination
					setActivePage={setActivePage}
					activePage={activePage}
					onPaginatedList={paginatedList}
					todos={todos}
					todosPerPage={todosPerPage}
				/>
			</div>
		</>);
};
//
export default App;
