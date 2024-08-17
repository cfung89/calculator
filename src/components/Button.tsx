import { Dispatch, SetStateAction } from "react";
import calculate from "../scripts/calculate";
import "./Button.css";

interface IButton {
  name: string;
  calc: string;
  setCalc: Dispatch<SetStateAction<string>>;
}

const Button = ({ name, calc, setCalc }: IButton) => {
  function onButton() {
    if (name === "CE") {
      setCalc(calc.slice(0, -1));
    } else if (name === "=") {
      setCalc(calculate(calc));
    } else if (calc.length <= 30) {
      setCalc(calc.concat(name));
    }
  }

  return (
    <div className="grid-item" onClick={onButton}>
      {name}
    </div>
  );
};

export default Button;
