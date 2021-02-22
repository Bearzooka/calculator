import React from "react";
import { Button } from "./Button";

export const ButtonRow = (props) => {
  const handleClick = (button) => {
    console.log("Row says: " + button);
    props.onClick(button);
  };

  const themeRow =
    props.theme === "apple" || props.theme === "ios"
      ? " divide-x divide-gray-900"
      : " divide-x-4 divide-white";

  return (
    <div className={themeRow}>
      
      {props.row.map((button) => {
        const themeButton =
          isNaN(button) && button !== ","
            ? props.theme + "-btn-fn"
            : props.theme + "-btn";

        const themeZero = button === 0 ? props.theme + "-0" : " ";

        const themeTopRow = ["AC", "±", "%"].includes(button)
          ? props.theme + "-btn-top"
          : " ";

        const themeEqual = button === "=" ? props.theme + "-eq" : " ";

        return (
          <Button
            buttonClass={`
            ${themeButton}
            ${themeTopRow}
            ${themeZero}
            ${themeEqual}
          `}
            content={button}
            buttonContainer={props.theme + "-container"}
            key={button.toString()}
            onClick={() => handleClick(button)}
          />
        );
      })}
    </div>
  );
};
