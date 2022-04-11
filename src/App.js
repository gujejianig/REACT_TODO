import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/Pagination/index";
import AddTask from "./components/addTask/index";
import Todos from "./components/Todos/index";

const App = () => {
	const [todos, setTodos] = useState([]);
	const todosPerPage = 10;
	const [activePage, setActivePage] = useState(1);
	let end = activePage * todosPerPage;
	let start = end - todosPerPage;

	const removeHandler = (id) => {
		setTodos(todos.filter((todoItem) => todoItem.id !== id));
		if ((todos.length - 1) % todosPerPage === 0 && (todos.length - 1) / todosPerPage === activePage - 1) {
			setActivePage(activePage - 1);
		}
	};

	const editHandler = (id, inputValue) => {
		const selected = todos.map((todo) => {
			if (todo.id === id && inputValue.length > 0) {
				return {
					...todo,
					task: inputValue,
				}
			}
			return todo;
		});
		setTodos(selected);
	};


	const checkboxHandler = (id) => {
		const selectedTodo = todos.map((todo) => {
			if (todo.id === id) {
				return {
					...todo,
					done: !todo.done,
				}
			}
			return todo;
		});
		setTodos(selectedTodo);
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
						removeHandler={removeHandler}
						checkboxHandler={checkboxHandler}
						editHandler={editHandler}
					/>);
				})}
			</>
			<Pagination
				setActivePage={setActivePage}
				activePage={activePage}
				todos={todos}
				todosPerPage={todosPerPage}
			/>

		</div>
	</>);
};
//
export default App;
