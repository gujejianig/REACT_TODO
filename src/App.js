import React, {useEffect, useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from "./components/pagination/Pagination";
import SearchForm from "./components/searchForm/SearchForm";
import TodosList from "./components/todoList/TodosList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const todosPerPage = 10;
  const [activePage, setActivePage] = useState(1);

  const [lastBtnPagination, setLastBtnPagination] = useState(null); //highest value from buttons in pagination

  const paginatedList = (activeNumber) => {
    setActivePage(activeNumber);
  };

  return (
    <>
      <div className="Container">
        <SearchForm
          onPaginatedList={setActivePage}
          todosPerPage={todosPerPage}
          todos={todos}
          setTodos={setTodos}
        />
        <TodosList
          lastBtnPagination={lastBtnPagination}
          setActivePage={setActivePage}
          onPaginatedList={paginatedList}
          setTodos={setTodos}
          todosPerPage={todosPerPage}
          activePage={activePage}
          todos={todos}
        />
        <Pagination
          setLastBtnPagination={setLastBtnPagination}
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
