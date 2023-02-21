import "./Card.css";
import React from "react";

//const Card = (props)=>{      either one is fine
function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
