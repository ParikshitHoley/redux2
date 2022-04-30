import React from "react";
import style from "./TodoItem.module.css";
const TodoItem = ({ value, deleteTodo }) => {
  return (
    <div className={style.div}>
        <div>
          <h1>{value.title}</h1>
          <button onClick={() => deleteTodo(value.id)}>Delete</button>
        </div>
    </div>
  );
};

export default TodoItem;
