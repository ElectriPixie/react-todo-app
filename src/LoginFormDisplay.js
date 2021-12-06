import React, { Component} from "react";
import { Link } from "react-router-dom";
import Input from './components/Input';
import Label from './components/Label';
import "./LoginForm.css";

const LoginFormDisplay = (props) =>
{
  return(
    <div styleName="flex-center">
    <form onSubmit={props.onSubmit} styleName="form">
      <Label name="Username: ">
        <input styleName="input" name="username" type="text" onChange={props.onChange} value={props.username} />
      </Label>
      <br />
      <Label name="Password: ">
        <input styleName="input" name="password" type="password" onChange={props.onChange} value={props.password} />
      </Label>
      <br />
      <button styleName="button" >Login</button>
    </form>
    <Link to="/register">Register</Link>
    </div>
  );
}

export default LoginFormDisplay;
