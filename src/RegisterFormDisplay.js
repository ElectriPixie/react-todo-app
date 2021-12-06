import React, { Component} from "react";
import { Link } from "react-router-dom";
import Input from './components/Input';
import Label from './components/Label';
import "./RegisterForm.css";

const RegisterFormDisplay = (props) =>
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
      <Label name="Confirm Password:">
        <input styleName="input" name="confirmPassword" type="password" onChange={props.onChange} value={props.confirmPassword} />
      </Label>
      <br />
      <button styleName="button">Register</button>
    </form>
    <Link to="/login">Login</Link>
    </div>
  );
}

export default RegisterFormDisplay;
