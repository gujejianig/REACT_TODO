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

  // remove Task from the list
  const removeHandler = (id) => {




    todos.map((todo) => {
      if(todo.editMode) {
        todo.editMode = false
        console.log('helllo')

      }
    })


    // // Reduce pagination by one when the last item is deleted from the last page
    if ((todos.length - 1) % 5 === 0 && activePage === lastBtnPagination) {
      setActivePage(activePage - 1);
    }
  };

  const editHandler = (id, inputValue) => {
    const selected = todos.map((todo) => {
      if (todo.id === id) {
        console.log(inputValue?.length)
        !todo.editMode ? (todo.editMode = true) : (todo.editMode = false);
        if (todo.editMode) {
          setEditing(true);
        }
        else if (!todo.editMode && inputValue.length > 0) {
          console.log("save==>", inputValue);
          todo.task = inputValue;
          setEditing(false);
        }
        else {
          todo.editMode = true
          setEditing(true)
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
