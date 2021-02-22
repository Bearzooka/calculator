import React from "react";
import { Calculator } from "./components/Calculator";
import { ThemePick } from "./components/ThemePick";
import { History } from "./components/History"
import { THEMES } from "./constants";

function App() {
  
  const [theme, setTheme] = React.useState("basic");

  function themeChange(theme) {
    console.log("Previous theme: " + localStorage.getItem("theme"));
    console.log("Selection on the app side." + theme);
    setTheme(theme);
    localStorage.setItem("theme", theme);
  }

  return (
    <div>
      <Calculator theme={theme} />
      {/* <div>
            <div>First operand: {}</div>
            <div>Second operand: {secondOperand}</div>
            <div>Total: {total}</div>
            <div>Calculator state: {calcState}</div> 
          </div> */}
      <History theme={theme} />
      <ThemePick options={THEMES} onChange={(theme) => themeChange(theme)} />
    </div>
  );
}

export default App;
