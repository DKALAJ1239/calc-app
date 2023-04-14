//importing react and css sheet
import React, { useState } from "react";
import "../src/styleCalc.css";

//creating the over arching function, 'Calculator'
function Calculator() {
  const [operand1, setOperand1] = useState("");
  const [operand2, setOperand2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const nullChar = "";

  // Creates the function input, allowing for the actual input which is displayed
  function fncInput(value) {
    if (operator === "") {
      setOperand1(operand1 + value);
      setResult("");
    } else {
      setOperand2(operand2 + value);
      setResult("");
    }
    setResult("");
  }

  // funcOperator is similar to handleOperator
  function fncOperator(value) {
    if (operand1 !== "" && operand2 === "") {
      setOperator(value);
      // setOperand1("");
    }
  }

  // To create a function that makes a result based on operation1 and operation2
  function fncResult() {
    if (operator !== "" && operand2 !== "") {
      const op1 = parseFloat(operand1);
      const op2 = parseFloat(operand2);
      let res;

      // Used switch cases to add, mult, divide, and subtract the op1 and op2
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

      // Partially how the operands would be added together or cleared
      setOperand1(res.toString());
      setOperand2("");
      setOperator("");
      setResult("");
    }
  }

  // The clear functionality. Press AC and all the operands and the result is restarted as fresh
  function fncClear() {
    setOperand1("");
    setOperand2("");
    setOperator("");
    setResult("");
  }

  // Retrun statement --> Video in doc I added help me understand a lot better
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
        {/* How the operands and answer would be displayed */}
        <div className="calculator-screen">
          {result !== "" && operator === "" ? result : ""}
          {operand1 !== "" ? operand1 : ""}
          {operator !== "" ? operator : ""}
          {operand2 !== "" ? operand2 : ""}
        </div>
        {/* All buttons used */}
        <div className="buttons-keys">
          {/* <div className="button-keys"> */}
          <button
            type="button"
            className="operators"
            onClick={() => fncOperator("+")}
          >
            +
          </button>
          <button
            type="button"
            className="operators"
            onClick={() => fncOperator("-")}
          >
            -
          </button>
          <button
            type="button"
            className="operators"
            onClick={() => fncOperator("*")}
          >
            &times;
          </button>
          <button
            type="button"
            className="operators"
            onClick={() => fncOperator("/")}
          >
            ÷
          </button>
          {/* </div> */}
          {/* <div className="button-keys"> */}
          <button type="button" onClick={() => fncInput("7")}>
            7
          </button>
          <button type="button" onClick={() => fncInput("8")}>
            8
          </button>
          <button type="button" onClick={() => fncInput("9")}>
            9
          </button>
          <button type="button" onClick={() => fncInput("4")}>
            4
          </button>
          <button type="button" onClick={() => fncInput("5")}>
            5
          </button>
          <button type="button" onClick={() => fncInput("6")}>
            6
          </button>
          <button type="button" onClick={() => fncInput("1")}>
            1
          </button>
          <button type="button" onClick={() => fncInput("2")}>
            2
          </button>
          <button type="button" onClick={() => fncInput("3")}>
            3
          </button>
          <button type="button" onClick={() => fncInput("0")}>
            0
          </button>
          <button
            type="button"
            className="decimal"
            onClick={() => fncInput(".")}
          >
            .
          </button>
          {/* </div> */}
          {/* <div className="button-keys"> */}
          <button type="button" className="all-clear" onClick={fncClear}>
            AC
          </button>
          <button
            type="button"
            className="operators"
            id="equal-sign"
            onClick={fncResult}
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


// Export.
export default Calculator;
