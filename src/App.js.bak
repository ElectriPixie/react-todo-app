import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import withAuth from './withAuth';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Todo from './Todo';
import "./App.css";

class App extends Component{
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: "",
      token: ""
    }
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser = (user, token) => {
    console.log("Setting Token: ", token);
    this.setState({
      loggedIn: true,
      username: user,
      token: token
    });
  }

  render(){
    const AuthTodo = withAuth(Todo);
    return(
    <div styleName="App">
    <Router>
      <Switch>
        <Route exact path="/" render={(props) => <AuthTodo {...props} token={this.state.token} />} />
        <Route path="/login" render={(props) => <LoginForm {...props} loginUser={this.loginUser}/>} />
        <Route path="/register" render={(props) => <RegisterForm {...props} loginUser={this.loginUser} />} />
      </Switch>
    </Router>
    </div>
    );
  }
}

export default hot(module)(App);
