import React from 'react';
import ListTodoDisplay from "./ListTodoDisplay";
import TodoItem from "./TodoItem";
import NoTodo from "./NoTodo";

const ListTodo = (props) => {
  return(
      <ListTodoDisplay> 
      { props.todos && props.todos.length > 0 ?
        (
          props.todos.map(todo => {
            return (
              <TodoItem todoID={todo._id} deleteTodo={props.deleteTodo} action={todo.action} />
            )
          })
        ):(
          <NoTodo/>
        )
      }
      </ListTodoDisplay>
  );
}

export default ListTodo
