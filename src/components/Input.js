import React, { Component} from "react";

const Input = (props) => {
    return(
      <input name={props.name} type={props.type} onChange={props.onChange} value={props.value} />
    );
}

export default Input;
