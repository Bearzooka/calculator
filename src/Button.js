import React from "react";

export const Button = (props) => {
 
  const handleClick = () => {
    props.onClick(props.content);
  }

  return (
    <button
      className={props.buttonClass}
      onClick={handleClick}
    >
      {props.content}
    </button>
  );
};
