import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import Todo from "../singleTodo/Todo";

const TodosList = ({
  todos,
  setTodos,
  todosPerPage,
  activePage,
  setActivePage,
  lastBtnPagination,
}) => {
  const [editing, setEditing] = useState(false); // controls if edit mode is on/off
  const [editInputValue, setEditInputValue] = useState(""); // for editing input Value

  // remove Task from the list
  const removeHandler = (id) => {
    if (!editing) {
      setTodos(
        todos.filter((todo) => {
          return todo.id !== id;
        })
      );
    } else {
      const arr = todos.map((todo) => {
        if (todo.id === id) {
          todo.editMode = false;
          setEditing(false);
        }
        return todo;
      });
      setTodos(arr);
    }

    // // Reduce pagination by one when the last item is deleted from the last page
    if ((todos.length - 1) % 5 === 0 && activePage === lastBtnPagination) {
      setActivePage(activePage - 1);
    }
  };

  const editHandler = (id, inputValue) => {
    const selected = todos.map((todo) => {
      if (todo.id === id) {
        !todo.editMode ? (todo.editMode = true) : (todo.editMode = false);
        if (todo.editMode) {
          setEditInputValue(todo.task);
          setEditing(true);
        } else {
          console.log("save==>", inputValue);
          todo.task = inputValue;
          setEditing(false);
        }
      }

      return todo;
    });
    setTodos(selected);
  };
  // console.log(editInputValue);
  const checkboxHandler = (id) => {
    const selectedTodo = todos.map((todo) => {
      if (todo.id === id) {
        !todo.done ? (todo.done = true) : (todo.done = false);
      }
      return todo;
    });
    setTodos(selectedTodo);
  };

  //activePage is responsible for rendering items correctly
  let end = activePage * todosPerPage;
  let start = end - todosPerPage;
  return (
    <>
      {todos.slice(start, end)?.map((item) => {
        return (
          <Todo
            key={item.id}
            item={item}
            setEditInputValue={setEditInputValue}
            checkboxHandler={checkboxHandler}
            editHandler={editHandler}
            removeHandler={removeHandler}
          />
        );
      })}
    </>
  );
};

export default TodosList;
