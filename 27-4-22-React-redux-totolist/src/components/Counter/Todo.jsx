import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import style from "./Todo.module.css"
import {
  AddItem,
  AllTodoData,
  deleteData,
} from "../../Redux/Counter/TodoActions";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
const Todo = () => {
  const [inputValue, setInputValue] = useState("");
  const myState = useSelector((state) => state.TodoList.list);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      id: uuidv4(),
      title: inputValue,
      status :false
    };
    dispatch(AddItem(payload));
    axios
      .post(" http://localhost:8080/todo", payload)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setInputValue("");
  };

  const deleteTodo = (id) => {
    let newList = myState.filter((elem) => {
      return elem.id !== id;
    });
    console.log(id);
    dispatch(deleteData(newList));
    axios
      .delete(`http://localhost:8080/todo/${id}`)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(myState.list);
  };
  React.useEffect(() => {
    axios
      .get("http://localhost:8080/todo")
      .then(function (response) {
        dispatch(AllTodoData(response.data));
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <h1>Todolist</h1>
<div className={style.form}>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button>Add</button>
      </form>

      {myState.map((elem) => {
      return <TodoItem key={elem.id} value={elem} deleteTodo={deleteTodo}/>;
      })}
    </div>
    </div>
    
  );
};

export default Todo;
