import React, { useState } from "react";
import "../src/styleCalc.css";

function Calculator() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const nullChar = "";

  function handleInput(value) {
    if (operator === "") {
      setOperand1(operand1 + value);
      setResult("");
    } else {
      setOperand2(operand2 + value);
      setResult("");
    }
    setResult("");
  }

  function handleOperator(value) {
    if (operand1 !== "" && operand2 === "") {
      setOperator(value);
      // setOperand1("");
    }
  }

  function handleResult() {
    if (operator !== "" && operand2 !== "") {
      const op1 = parseFloat(operand1);
      const op2 = parseFloat(operand2);
      let res;

      switch (operator) {
        case "+":
          res = op1 + op2;
          break;
        case "-":
          res = op1 - op2;
          break;
        case "*":
          res = op1 * op2;
          break;
        case "/":
          res = op1 / op2;
          break;
        default:
          return;
      }

      // setResult(res.toString());
      // setOperand1(
      //   operand1 + " " + operator + " " + operand2 + " = " + res.toString()
      // );
      // setOperand2("");
      // setOperator("");
      setOperand1(res.toString());
      setOperand2("");
      setOperator("");
      setResult("");
    }
  }

  function handleClear() {
    setOperand1("");
    setOperand2("");
    setOperator("");
    setResult("");
  }

  return (
    <div className="react-calc">
      <div className="calculator">
        {/* <div className="calculator-screen">
          {operand1} {operator} {operand2} {operand2 !== "" && "="} {result}
        </div> */}
        {/* <div className="calculator-screen">
          {operand1 !== "" ? operand1 : "0"}
          {operator !== "" ? ` ${operator} ` : ""}
          {operand2 !== "" ? operand2 : ""}
          {result !== "" ? ` = ${result}` : ""}
        </div> */}
        <div className="calculator-screen">
          {result !== "" && operator === "" ? result : ""}
          {operand1 !== "" ? operand1 : ""}
          {operator !== "" ? operator : ""}
          {operand2 !== "" ? operand2 : ""}
        </div>
        <div className="buttons-keys">
          {/* <div className="button-keys"> */}
          <button
            type="button"
            className="operators"
            onClick={() => handleOperator("+")}
          >
            +
          </button>
          <button
            type="button"
            className="operators"
            onClick={() => handleOperator("-")}
          >
            -
          </button>
          <button
            type="button"
            className="operators"
            onClick={() => handleOperator("*")}
          >
            &times;
          </button>
          <button
            type="button"
            className="operators"
            onClick={() => handleOperator("/")}
          >
            ÷
          </button>
          {/* </div> */}
          {/* <div className="button-keys"> */}
          <button type="button" onClick={() => handleInput("7")}>
            7
          </button>
          <button type="button" onClick={() => handleInput("8")}>
            8
          </button>
          <button type="button" onClick={() => handleInput("9")}>
            9
          </button>
          <button type="button" onClick={() => handleInput("4")}>
            4
          </button>
          <button type="button" onClick={() => handleInput("5")}>
            5
          </button>
          <button type="button" onClick={() => handleInput("6")}>
            6
          </button>
          <button type="button" onClick={() => handleInput("1")}>
            1
          </button>
          <button type="button" onClick={() => handleInput("2")}>
            2
          </button>
          <button type="button" onClick={() => handleInput("3")}>
            3
          </button>
          <button type="button" onClick={() => handleInput("0")}>
            0
          </button>
          <button
            type="button"
            className="decimal"
            onClick={() => handleInput(".")}
          >
            .
          </button>
          {/* </div> */}
          {/* <div className="button-keys"> */}
          <button type="button" className="all-clear" onClick={handleClear}>
            AC
          </button>
          <button
            type="button"
            className="operators"
            id="equal-sign"
            onClick={handleResult}
          >
            =
          </button>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <Calculator />
//     </div>
//   );
// }

export default Calculator;
