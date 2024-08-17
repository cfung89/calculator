import { useState, useEffect, useRef } from "react";
import Button from "./components/Button";
import Box from "./components/Box";
import "./App.css";

function App() {
  const [calc, setCalc] = useState<string>("");
  const inputRef = useRef(null);
  const symbols = [
    "(",
    ")",
    "^",
    "CE",
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  // useEffect(() => {
  //   // Moving cursor to the end
  //   inputRef.current.selectionStart = inputRef.current.value.length;
  //   inputRef.current.selectionEnd = inputRef.current.value.length;
  // }, [calc]);

  return (
    <div>
      <h1>Calculator</h1>
      <Box calc={calc} setCalc={setCalc} />
      <div className="grid-container">
        {symbols.map((sym) => (
          <Button key={sym} name={sym} calc={calc} setCalc={setCalc} />
        ))}
      </div>
    </div>
  );
}

export default App;
