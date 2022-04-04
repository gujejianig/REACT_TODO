import {Button} from "react-bootstrap";
import React from "react";


const Todo = ({todos, start, end, setEditInputValue, checkboxHandler, removeHandler, editHandler}) => {
	return (
		<>
			{todos.slice(start, end)?.map((item) => {
				return (
					<div
						key={item.id}
						className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center"
					>
						{item.editMode ? (
							<input
								defaultValue={item.task}
								onChange={(e) => setEditInputValue(e.target.value)}
							/>
						) : (
							<span
								className={`todoTag ${item.done ? 'lineThrougher' : ''}`}

							>
                {item.task}
              </span>
						)}
						<input onChange={() => checkboxHandler(item.id)} type="checkbox" />
						<Button
							onClick={() => removeHandler(item.id)}
							className="m-lg-2"
							size="sm"
							variant="danger"
						>
							{item.editMode ? "cancel" : "remove"}
						</Button>
						<Button
							onClick={() => editHandler(item.id)}
							className=""
							size="sm"
							variant="info"
						>
							{item.editMode ? "save" : "edit"}
						</Button>
					</div>
				);
			})}
		</>
	)
}

export default Todo