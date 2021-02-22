import React from "react";
import { KEYBOARD_BUTTONS } from "../constants";
import { ButtonRow } from "./ButtonRow";

export const Keyboard = (props) => {
  const handleClick = (button) => {
    console.log("Keyboard says: " + button);
    props.onClick(button);
  };

  var themeKeyboard =
    props.theme === "apple" || props.theme === "ios"
      ? `${props.theme}-keyboard divide-y divide-gray-900`
      : `${props.theme}-keyboard divide-y-4 divide-white`;

  return (
    <div className={themeKeyboard}>
      {KEYBOARD_BUTTONS.map((row, index) => {
        // TODO Convertir a KEYBOARD_ROWS
        return (
          <ButtonRow
            row={row}
            key={index}
            theme={props.theme}
            onClick={(button) => handleClick(button)}
            className={""}
          />
        );
      })}
    </div>
  );
};

// export const Keyboard = KEYBOARD_BUTTONS.map((row) => {

//     const handleClick = () => {
//         props.onClick(props.content);
//       };

//     <div
//       className={`${
//         theme === "apple" || theme === "ios"
//           ? "divide-x divide-gray-900"
//           : "divide-x-4 divide-white"
//       } w-full`}
//       key={row}
//     >
//       {row.map((button) => {

//         const themeButton =
//           isNaN(button) && button !== ","
//           ? theme + "-btn-fn"
//           : theme + "-btn";

//         const themeZero =
//           button === 0
//           ? theme + "-0"
//           : " ";

//         const themeTopRow =
//           ["AC", "±", "%"].includes(button)
//           ? theme + "-btn-top"
//           : " ";

//         const themeEqual =
//           button === "="
//           ? theme + "-eq"
//           : " ";

//         const newLocal = 'devide-x-4';
//         return (
//           <Button
//             buttonClass={`
//             ${themeButton}
//             ${themeTopRow}
//             ${themeZero}
//             ${themeEqual}
//           `}
//             buttonContainer={newLocal}
//             content={button}
//             key={button.toString()}
//             onClick={() => handleClick(button)}
//           ></Button>
//         );
//       })}
//     </div>
// });
