import React from "react";
import { Screen } from "./Screen";
import { Keyboard } from "./Keyboard";
import { CALC_STATES } from "../constants";

export const Calculator = (props) => {
  const [screenValue, setScreenValue] = React.useState(0);
  const [calcState, setCalcState] = React.useState(CALC_STATES.NEW);
  const [decimalPosition, setDecimalPosition] = React.useState(0);
  const [firstOperand, setFirstOperand] = React.useState(0);
  const [secondOperand, setSecondOperand] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const [theme] = React.useState("basic");

  var operation = {}

  const handleNumber = (number) => {
    console.log(number);
    if (decimalPosition === 0) {
      return screenValue * 10 + number;
    } else {
      let updateValue =
        Number(screenValue) + number / Math.pow(10, decimalPosition);
      setDecimalPosition(decimalPosition + 1);
      return updateValue.toFixed(decimalPosition);
    }
  };

  const handleAC = () => {
    setFirstOperand(0);
    setSecondOperand(0);
    setTotal(0);
    setDecimalPosition(0);
    setCalcState(CALC_STATES.NEW);
    operation = {}
    return 0;
  };

  const handleTotal = (firstOperand, secondOperand) => {
    var result;
    switch (calcState) {
      case CALC_STATES.ADDITION:
        result =  firstOperand + secondOperand;
        break;
      case CALC_STATES.SUBSTRACTION:
        result = firstOperand - secondOperand;
        break;
      case CALC_STATES.MULTIPLICATION:
        result = firstOperand * secondOperand;
        break;
      case CALC_STATES.DIVISION:
        result = firstOperand / secondOperand;
        break;
      default:
        return "E";
        break;
    }
    operation["result"] = result;
    return result
  };

  const handleClick = (button) => {
    let newValue = 0;
    console.log("Calculator says: " + button);
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
        operation["firstOperand"] = screenValue;
        operation["operator"] = "+";
        setCalcState(CALC_STATES.ADDITION);
        setDecimalPosition(0);
        break;
      case "-":
        newValue = 0;
        setFirstOperand(screenValue);
        operation["firstOperand"] = screenValue;
        operation["operator"] = "-";
        setCalcState(CALC_STATES.SUBSTRACTION);
        setDecimalPosition(0);
        break;
      case "x":
        newValue = 0;
        setFirstOperand(screenValue);
        operation["firstOperand"] = screenValue;
        operation["operator"] = "x";
        setCalcState(CALC_STATES.MULTIPLICATION);
        setDecimalPosition(0);
        break;
      case "÷":
        newValue = 0;
        setFirstOperand(screenValue);
        operation["firstOperand"] = screenValue;
        operation["operator"] = "-";
        setCalcState(CALC_STATES.DIVISION);
        setDecimalPosition(0);
        break;
      case "±":
        newValue = screenValue * -1;
        break;
      case "=":
        if (firstOperand) {
          setSecondOperand(screenValue);
          operation["secondOperand"] = screenValue;
          newValue = handleTotal(firstOperand, screenValue);
          localStorage.setItem("operation", JSON.stringify(operation))
          
        } else {
          newValue = screenValue;
        }
        setCalcState(CALC_STATES.NEW);
        break;
      default:
        newValue = "E";
        setFirstOperand(0);
        setSecondOperand(0);
        setTotal(0);
        setCalcState(CALC_STATES.NEW);
        break;
    }
    setScreenValue(newValue);
  };

  return (
    <div className={theme + "-container"}>
      <div className="py-10 mt-10 mx-auto w-72 calculator">
        <div>
          <Screen value={screenValue} className={props.theme} />
          <Keyboard
            theme={props.theme}
            onClick={(button) => handleClick(button)}
          />
        </div>

        <div>
          <div>First operand: {firstOperand}</div>
          <div>Second operand: {secondOperand}</div>
          <div>Total: {total}</div>
          <div>Calculator state: {calcState}</div>
        </div>
      </div>
    </div>
  );
};
