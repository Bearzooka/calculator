import React from "react";

export const Button = (props) => {
  const handleClick = () => {
    console.log("Button says:" + props.content);
    props.onClick(props.content);
  };

  return (
    // <div className={props.buttonContainer}>
    <button className={props.buttonClass} onClick={handleClick}>
      {props.content}
    </button>
    // </div>
  );
};
