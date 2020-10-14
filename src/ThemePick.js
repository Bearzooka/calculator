import React from "react";

export const ThemePick = (props) => {
 
  const handleChange = (theme) => {
    console.log("Selection on the component side: " + theme)
    props.onChange(theme.toLowerCase());
  }

  return (
    <div>
    <legend>Theme: </legend>
    <select
      className={props.selectClass}
      onChange={event => handleChange(event.target.value)}
    >
        {props.options.map((theme) =>
        <option key={theme}>{theme[0].toUpperCase() + theme.substring(1)}</option>)}
    </select>
    </div>
  );
};
