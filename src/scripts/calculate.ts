const calculate = (equation: string) => {
  equation = equation.replace(/[\(\)]/g, "");
  let newEq: Array<string> = [""];

  // Get array of floats and operations
  for (let i = 0; i < equation.length; i++) {
    if (equation[i].match(/[^\+\-\*\/\^]/g)) {
      newEq = newEq
        .slice(0, -1)
        .concat(newEq[newEq.length - 1].concat(equation[i]));
    } else {
      newEq.push(equation[i], "");
    }
  }

  console.log(newEq);

  const result: Array<Number> = [];
  const reserve = [];
  for (let i = 0; i < newEq.length; i++) {
    const num = parseFloat(newEq[i]);
    if (isNaN(num)) {
      reserve.push(newEq[i]);
    } else {
      result.push(num);
      if (result.length === 2) {
        const b = result.pop();
        const a = result.pop();
        const sym = reserve.pop();
        console.log(result);
        console.log(a, sym, b);
        switch (sym) {
          case "+":
            result.push(a + b);
            break;
          case "-":
            result.push(a - b);
            break;
          case "*":
            result.push(a * b);
            break;
          case "/":
            result.push(a / b);
            break;
          case "^":
            result.push(a ** b);
            break;
          default:
            break;
        }
      }
    }
  }

  console.log(result);
  return result[0].toString();
};

export default calculate;
