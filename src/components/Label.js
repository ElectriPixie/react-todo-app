import React, { Component} from "react";

const Label = (props) => {
  return(
    <label>{props.name}
    {props.children}
    </label>
  );
}

export default Label;
