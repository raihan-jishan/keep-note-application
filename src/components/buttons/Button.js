import React from "react";
import { Link } from "react-router-dom";
import "../../styles/button.css";
const Button = (props) => {
  return (
    <div className="button">
      <Link to={props.path} className="addBtn">
        {props.name}  <i className={props.icon}></i>
      </Link>
    </div>
  );
};

export default Button;
