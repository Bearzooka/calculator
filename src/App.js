import React from "react";
// import "./App.css";
// import "./output.css";
import { Button } from "./Button";
import { Screen } from "./Screen";
import { ThemePick } from "./ThemePick";
import { KEYBOARD_BUTTONS } from "./constants";

const calcStates = {
  NEW: "new",
  ADDITION: "addition",
  SUBSTRACTION: "substraction",
  MULTIPLICATION: "multiplication",
  DIVISION: "division",
  DECIMAL: "decimal",
};

function App() {
  const [screenValue, setScreenValue] = React.useState(0);
  const [calcState, setCalcState] = React.useState(calcStates.NEW);
  const [decimalPosition, setDecimalPosition] = React.useState(0);
  const [firstOperand, setFirstOperand] = React.useState(0);
  const [secondOperand, setSecondOperand] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const themes = ["basic", "apple"];
  const [theme, setTheme] = React.useState("basic");

  function handleNumber(number) {
    console.log(number);
    if (decimalPosition === 0) {
      return screenValue * 10 + number;
    } else {
      let updateValue =
        Number(screenValue) + number / Math.pow(10, decimalPosition);
      setDecimalPosition(decimalPosition + 1);
      return updateValue.toFixed(decimalPosition);
    }
  }

  function handleAC() {
    setFirstOperand(0);
    setSecondOperand(0);
    setTotal(0);
    setDecimalPosition(0);
    setCalcState(calcStates.NEW);
    return 0;
  }

  function handleTotal(firstOperand, secondOperand) {
    switch (calcState) {
      case calcStates.ADDITION:
        return firstOperand + secondOperand;
        break;
      case calcStates.SUBSTRACTION:
        return firstOperand - secondOperand;
        break;
      case calcStates.MULTIPLICATION:
        return firstOperand * secondOperand;
        break;
      case calcStates.DIVISION:
        return firstOperand / secondOperand;
        break;
      default:
        return "E";
        break;
    }
  }

  function handleClick(button) {
    let newValue = 0;
    console.log(button);
    switch (button) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
        newValue = handleNumber(button);
        break;
      case "AC":
        newValue = handleAC();
        break;
      case ",":
        if (decimalPosition < 1) {
          newValue = screenValue.toFixed(1);
          setDecimalPosition(1);
        } else {
          newValue = Number(screenValue).toFixed(decimalPosition - 1);
        }
        break;
      case "+":
        newValue = 0;
        setFirstOperand(screenValue);
        setCalcState(calcStates.ADDITION);
        setDecimalPosition(0);
        break;
      case "-":
        newValue = 0;
        setFirstOperand(screenValue);
        setCalcState(calcStates.SUBSTRACTION);
        setDecimalPosition(0);
        break;
      case "x":
        newValue = 0;
        setFirstOperand(screenValue);
        setCalcState(calcStates.MULTIPLICATION);
        setDecimalPosition(0);
        break;
      case "÷":
        newValue = 0;
        setFirstOperand(screenValue);
        setCalcState(calcStates.DIVISION);
        setDecimalPosition(0);
        break;
      case "±":
        newValue = screenValue * -1;
        break;
      case "=":
        if (firstOperand) {
          setSecondOperand(screenValue);
          newValue = handleTotal(firstOperand, screenValue);
        } else {
          newValue = screenValue;
        }
        setCalcState(calcStates.NEW);
        break;
      default:
        newValue = "E";
        setFirstOperand(0);
        setSecondOperand(0);
        setTotal(0);
        setCalcState(calcStates.NEW);
        break;
    }
    setScreenValue(newValue);
  }

  function themeChange(theme) {
    console.log("Selection on the app side." + theme);
    setTheme(theme);
  }

  const keyboard = KEYBOARD_BUTTONS.map((row) => (
    <div
      className={`${
        theme === "apple"
          ? "divide-x divide-gray-900"
          : "divide-x-4 divide-white"
      } w-full`}
      key={row}
    >
      {row.map((button) => {
        const themeButton =
          isNaN(button) && button !== "," ? theme + "-btn-fn" : theme + "-btn";
        const themeZero = button === 0 ? theme + "-0" : " ";
        const themeTopRow = ["AC", "±", "%"].includes(button)
          ? theme + "-btn-top"
          : " ";
        const themeEqual = button === "=" ? theme + "-eq" : " ";
        return (
          <Button
            buttonClass={`
            ${themeButton}
            ${themeTopRow}
            ${themeZero}
            ${themeEqual}
          `}
            content={button}
            key={button.toString()}
            onClick={() => handleClick(button)}
          ></Button>
        );
      })}
    </div>
  ));

  return (
    <div className={theme + "-container container "}>
      <div className="mt-10 mx-auto w-72 calculator">
        <Screen value={screenValue} className={theme + "-screen"} />
        <div
          className={`${
            theme === "apple"
              ? "divide-y divide-gray-900"
              : " divide-y-4 divide-white"
          }`}
        >
          {keyboard}
        </div>
        <div className="grid-rows-5">
          <div>First operand: {firstOperand}</div>
          <div>Second operand: {secondOperand}</div>
          <div>Total: {total}</div>
          <div>Calculator state: {calcState}</div>
          <ThemePick
            options={themes}
            onChange={(theme) => themeChange(theme)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
