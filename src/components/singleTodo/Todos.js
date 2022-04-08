import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./todos.css";

const Todos = ({
	               item,
	               setTodos,
	               todos,
	               removeHandler
               }) => {
	const [editMode, setEditMode] = useState(false);
	const inputRef = useRef(null);


	const editHandler = (id, inputValue, editMode) => {
		const selected = todos.map((todo) => {
			if (todo.id === id && editMode && inputValue.length > 0) {
				todo.task = inputValue;
				setEditMode(false);
			}
			return todo;
		});
		setTodos(selected);
	};

	const checkboxHandler = (id) => {
		const selectedTodo = todos.map((todo) => {
			if (todo.id === id) {
				!todo.done ? (todo.done = true) : (todo.done = false);
			}
			return todo;
		});
		setTodos(selectedTodo);
	};

	return (
		<div className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center">
			{editMode ? (
				<div>
					<input
						ref={inputRef}
						defaultValue={item.task}
						// onChange={setEditInputValue(inputRef.current?.value)}
					/>
					<Button
						onClick={() => setEditMode(false)}
						className="m-lg-2"
						size="sm"
						variant="danger"
					>
						cancel
					</Button>
					<Button
						onClick={() =>
							editHandler(item.id, inputRef.current?.value, editMode)
						}
						className=""
						size="sm"
						variant="info"
					>
						save
					</Button>
				</div>
			) : (
				<div>
          <span className={`todoTag ${item.done ? "splitText" : ""}`}>
            {item.task}
          </span>
					<input onChange={() => checkboxHandler(item.id)} type="checkbox" />
					<Button
						onClick={() => removeHandler(item.id)}
						className="m-lg-2"
						size="sm"
						variant="danger"
					>
						remove
					</Button>
					<Button
						onClick={() => setEditMode(true)}
						className=""
						size="sm"
						variant="info"
					>
						edit
					</Button>
				</div>
			)}
		</div>
	);
};

export default Todos;
