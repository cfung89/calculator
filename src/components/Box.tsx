import { Dispatch, SetStateAction } from "react";
import calculate from "../scripts/calculate";
import "./Box.css";

interface IBox {
  calc: string;
  setCalc: Dispatch<SetStateAction<string>>;
}

const Box = ({ calc, setCalc }: IBox) => {
  const handleBoxChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    if (value.length <= 31) {
      setCalc(value.replace(/([^\/\*\-\+\^\(\)\.[0-9])/g, ""));
    }
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setCalc(calculate(calc));
  };

  return (
    <form onSubmit={onSubmit}>
      <input className="textbox" value={calc} onChange={handleBoxChange} />
    </form>
  );
};

export default Box;
