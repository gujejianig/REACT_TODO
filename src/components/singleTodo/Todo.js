import React, {useRef, useState} from "react";
import { Button } from "react-bootstrap";

const Todo = ({ item, checkboxHandler, removeHandler, editHandler }) => {
  const inputRef = useRef("");
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="bg-success bg-opacity-10 rounded-3 p-lg-2 d-flex mt-3 align-items-center">
      {
        editMode ? (
          <button onClick={() => setEditMode(!editMode)}>EDIT</button>
        ) : (
          <div>
            <button onClick={() => setEditMode(!editMode)}>not edit</button>
            <button onClick={() => removeHandler(item.id)}>delete</button>
          </div>
        )
      }
      {/*{editMode? (*/}
      {/*  <input*/}
      {/*    ref={inputRef}*/}
      {/*    defaultValue={item.task}*/}
      {/*  />*/}
      {/*) : (*/}
      {/*  <span*/}
      {/*    style={{*/}
      {/*      fontSize: "24px",*/}
      {/*      minWidth: "100px",*/}
      {/*      textDecoration: item.done ? "line-through" : "",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {item.task}*/}
      {/*  </span>*/}
      {/*)}*/}
      {/*<input onChange={() => checkboxHandler(item.id)} type="checkbox" />*/}
      {/*<Button*/}
      {/*  onClick={() => setEditMode(!editMode)}*/}
      {/*  className="m-lg-2"*/}
      {/*  size="sm"*/}
      {/*  variant="danger"*/}
      {/*>*/}
      {/*  {item.editMode ? "cancel" : "remove"}*/}
      {/*</Button>*/}
      {/*<Button*/}
      {/*  onClick={() => editHandler(item.id, inputRef.current?.value)}*/}
      {/*  className=""*/}
      {/*  size="sm"*/}
      {/*  variant="info"*/}
      {/*>*/}
      {/*  {item.editMode ? "save" : "edit"}*/}
      {/*</Button>*/}
    </div>
  );
};

export default Todo;
