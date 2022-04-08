import { Button } from "react-bootstrap";
import React, { useState } from "react";
import  "./searchForm.css"

const SearchForm = ({ setTodos, todos, onPaginatedList, todosPerPage }) => {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert("input have no value");
    } else {
      const newItem = { task: inputValue, id: Math.random() };
      // adding to Todos - main data
      setTodos([...todos, newItem]);
      let paginationUpdate = todos.length + 1;
      onPaginatedList(Math.ceil(paginationUpdate / todosPerPage));
    }
    setInputValue("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      submitHandler(event);
    }
  };

  return (
    <div className="d-flex w-100 justify-content-sm-center mt-3">
      <input
        onKeyUp={handleKeyDown}
        value={inputValue}
        className='SearchInput'
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button size="sm" onClick={submitHandler} variant="primary">
        Add
      </Button>
    </div>
  );
};

export default SearchForm;
