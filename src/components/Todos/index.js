import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import "./todos.css";

const Todos = ({
	               item,
	               removeHandler,
	               checkboxHandler,
	               editHandler
               }) => {

	const [editMode, setEditMode] = useState(false);
	const inputRef = useRef(null);


	const onEditClick = () => {
		editHandler(item.id, inputRef.current?.value);
		setEditMode(false);
	}
	return (
		<div className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center">
			{editMode ? (
				<div>
					<input
						ref={inputRef}
						defaultValue={item.task}
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
						onClick={onEditClick}
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
