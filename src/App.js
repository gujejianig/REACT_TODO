import React, {useEffect, useRef, useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/pagination/Pagination";
import AddTask from "./components/searchForm/SearchForm";
import Todos from "./components/singleTodo/Todos";

const App = () => {
  const [todos, setTodos] = useState([]);
  const todosPerPage = 10;
  const [activePage, setActivePage] = useState(1);

  const removeHandler = (id) => {
    setTodos(todos.filter(todoItem => todoItem.id !== id));
    const filteredTodo = todos.filter((todo) => {
      if(todo.id === id && todo.editMode ) {
        todo.editMode = false
      } else if(todo.id === id && !todo.editMode) {
        return todo.id!==id
      }
      return todo
    })
    setTodos(filteredTodo)

    if(Math.ceil(todos.length / todosPerPage) >= 1 && todos.length % 10 === 1){
     setActivePage(activePage - 1)
    }
  };

  const editHandler = (id, inputValue) => {
    const selected = todos.map((todo) => {
      if (todo.id === id) {
        !todo.editMode ? (todo.editMode = true) : (todo.editMode = false);
        if (!todo.editMode && inputValue.length > 0) {
          todo.task = inputValue;
        }
        else {
          todo.editMode = true
        }
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

  let end = activePage * todosPerPage;
  let start = end - todosPerPage;


  const paginatedList = (activeNumber) => {
    setActivePage(activeNumber);
  };

  return (
    <>
      <div className="Container">
        <AddTask
          onPaginatedList={setActivePage}
          todosPerPage={todosPerPage}
          todos={todos}
          setTodos={setTodos}
        />
        <>
          {todos.slice(start, end)?.map((item) => {
            return (
              <Todos
                key={item.id}
                item={item}
                checkboxHandler={checkboxHandler}
                editHandler={editHandler}
                removeHandler={removeHandler}
              />
            );
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
    </>
  );
};
//
export default App;
