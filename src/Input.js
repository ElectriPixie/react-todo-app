import React, { Component } from 'react';
import axios from 'axios';
import "./Input.css";

class Input extends Component {
  state = { action: "" }
  addTodo = (e) => {
    e.preventDefault();
    const task = {action: this.state.action}
    if(task.action && task.action.length > 0){
      console.log("Sending Token: ", this.props.token);
      axios.post('http://localhost:4000/todo', task, { headers: {Authorization: "Bearer " + this.props.token } })
        .then( res => {
          if(res.data){
           this.props.getTodos();
           this.setState({action: ""})
          }
        })
        .catch(err => console.log(err))
    }else{
      console.log('input field required')
    }
  }

  handleChange = (e) => {
    this.setState({
      action: e.target.value
    })
  }
  
  render() {
    let { action } = this.state;
    return (
      <div styleName="center">
        <form onSubmit={this.addTodo}>
        <input styleName="input" type="text" onChange={this.handleChange} value={action} />
        <br />
        <button styleName="button" onClick={this.addTodo}>add todo</button>
        </form>
      </div>
    )
  }
}

export default Input
