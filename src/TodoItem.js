import React from 'react';
import "./ListTodo.css";

const TodoItem = (props) =>
{
  return(
    <li key={props.todoID} onClick={() => props.deleteTodo(props.todoID)} styleName="listitem">{props.action}</li>
  );
}

export default TodoItem;
