import React, { Component } from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';
import "./Todo.css";

class Todo extends Component {
  constructor(){
    super()
    this.state = { todos: [] }
    this.deleteTodo = this.deleteTodo.bind(this);
  } 
  
  componentDidMount(){
    this.getTodos();
  }
  
  getTodos = () => {
    axios.get('http://localhost:4000/todo', { headers: {Authorization: "Bearer " + this.props.token } })
      .then( res => {
        if(res.data){
          this.setState({
            todos: res.data
          })
        }
      })
      .catch(err => console.log(err))
  }
 
  deleteTodo = (id) => {
    axios.delete(`http://localhost:4000/todo/${id}`, { headers: {Authorization: "Bearer " + this.props.token } })
      .then(res => {
        if(res.data){
          this.getTodos()
        }
      })
  }

  render() {
    let { todos } = this.state;
    
    return(
      <div styleName="flex-center">
        <h1 styleName="header">My Todos</h1>
        <Input getTodos={this.getTodos} token={this.props.token} />
        <ListTodo todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default Todo;
