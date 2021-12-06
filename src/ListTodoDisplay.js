import React from 'react';
import "./ListTodo.css"

const ListTodoDisplay = (props) => {
  return(
  <div styleName="center">
    <ul styleName="list">
      {props.children}
    </ul>
  </div>
  )
}

export default ListTodoDisplay
