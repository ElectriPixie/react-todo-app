import React, { Component } from 'react';
import RegisterFormDisplay from './RegisterFormDisplay';
import axios from 'axios';

class RegisterForm extends Component{ 
  constructor(){
    super();
    this.state = {username: "", password: "", confirmPassword: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    console.log(this.state);
    e.preventDefault(e);
    axios.post('http://localhost:4000/register', 
    { "username": this.state.username, "password": this.state.password, "confirmPassword": this.state.confirmPassword }
    )
    .then( res => {
      if (res.status === 200) {
        console.log("User Created Successfully");
        console.log("Recieved Token: ", res.data.token);
        this.props.loginUser(res.data.user, res.data.token);
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error Creating User');
    });
  }

  render(){
    return(
      <RegisterFormDisplay onChange={this.handleChange} onSubmit={this.handleSubmit} username={this.state.username} password={this.state.password} confirmPassword={this.confirmPassword} />
    );
  }
}

export default RegisterForm;
