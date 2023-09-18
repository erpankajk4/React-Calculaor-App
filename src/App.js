import React, { useState } from 'react';
import './App.css';

function App() {
    // Define and initialize state variables
  const [display1, setDisplay1] = useState(''); // To display calculations
  const [display2, setDisplay2] = useState('0'); // To display the result
  const [tempResult, setTempResult] = useState('0'); // To display the previous result
  const [currentInput, setCurrentInput] = useState(''); // Current user input
  const [result, setResult] = useState(null); // Store the result of calculations

  // Function to handle number button clicks
  const handleNumberClick = (num) => {
    setCurrentInput((prevInput) => prevInput + num);
    setDisplay2(currentInput);
  };

   // Function to handle operation button clicks
  const handleOperationClick = (operator) => {
    if (result) {
      setDisplay1(currentInput + operator);
      setCurrentInput('');
      setDisplay2('');
    }
    else if (currentInput) {
      setDisplay1((prevDisplay1) => prevDisplay1 + currentInput + operator);
      let n = eval(display1 + currentInput).toString();
      setTempResult(n);
      setCurrentInput('');
    }
    setResult(null);
  };

 // Function to handle decimal dot button click
  const handleDotClick = () => {
    if (currentInput.indexOf('.') === -1) {
      setCurrentInput((prevInput) => prevInput + '.');
    }
  };

    // Function to handle "AC" (All Clear) button click
  const handleAllClear = () => {
    setDisplay1('');
    setDisplay2('0');
    setTempResult('');
    setCurrentInput('');
  };

 // Function to handle "CE" (Last Entity Clear) button click
  const handleLastEntityClear = () => {
    setDisplay2('0');
    setCurrentInput('');
  };

    // Function to handle "=" (Equals) button click
  const handleEquals = () => {
    if (currentInput === ".") return;

    if (currentInput) {
      setDisplay1((prevDisplay1) => prevDisplay1 + currentInput);
      const result = eval(display1 + currentInput).toString();
      setDisplay2(result);
      setCurrentInput(result);
      setResult(result);
      setTempResult('');
    }
  };

  // console.log("display1 :", display1);
  // console.log("display2 :", display2);
  // console.log("tempResult :", tempResult);
  // console.log("currentInput :", currentInput);
  // console.log("___________________");

  return (
    <div className="App">
      <header>
        <h1>Calculator Using React Hooks</h1>
      </header>
      <section>
        <div className="display">
          <div className="display-1">{display1 || 0}</div>
          <div className="display-2">{currentInput || display2}</div>
          <div className="temp-result">{tempResult}</div>
        </div>

        {/* Calculator buttons */}
        <div className="container">
          {/* Rows of buttons */}
          <div className="row">
            <button className="btn btn-2 all-clear" onClick={handleAllClear}>
              AC
            </button>
            <button
              className="btn btn-1 operation"
              onClick={() => handleOperationClick('%')}
            >
              %
            </button>
            <button
              className="btn btn-1 operation"
              onClick={() => handleOperationClick('/')}
            >
              /
            </button>
          </div>
          {/* Rows of buttons */}
          <div className="row">
            <button className="btn btn-1 number" onClick={() => handleNumberClick('7')}>
              7
            </button>
            <button className="btn btn-1 number" onClick={() => handleNumberClick('8')}>
              8
            </button>
            <button className="btn btn-1 number" onClick={() => handleNumberClick('9')}>
              9
            </button>
            <button
              className="btn btn-1 operation"
              onClick={() => handleOperationClick('*')}
            >
              X
            </button>
          </div>
          {/* Rows of buttons */}
          <div className="row">
            <button className="btn btn-1 number" onClick={() => handleNumberClick('4')}>
              4
            </button>
            <button className="btn btn-1 number" onClick={() => handleNumberClick('5')}>
              5
            </button>
            <button className="btn btn-1 number" onClick={() => handleNumberClick('6')}>
              6
            </button>
            <button
              className="btn btn-1 operation"
              onClick={() => handleOperationClick('-')}
            >
              -
            </button>
          </div>
          {/* Rows of buttons */}
          <div className="row">
            <button className="btn btn-1 number" onClick={() => handleNumberClick('1')}>
              1
            </button>
            <button className="btn btn-1 number" onClick={() => handleNumberClick('2')}>
              2
            </button>
            <button className="btn btn-1 number" onClick={() => handleNumberClick('3')}>
              3
            </button>
            <button
              className="btn btn-1 operation"
              onClick={() => handleOperationClick('+')}
            >
              +
            </button>
          </div>
          {/* Rows of buttons */}
          <div className="row">
            <button className="btn btn-1 number" onClick={() => handleNumberClick('0')}>
              0
            </button>
            <button className="btn btn-1 dot" onClick={handleDotClick}>
              .
            </button>
            <button className="btn btn-2 equals" onClick={handleEquals}>
              =
            </button>
          </div>
        </div>
        <button
          className="btn btn-2 last-entity-clear"
          style={{ width: '95%' }}
          onClick={handleLastEntityClear}
        >
          CE
        </button>
      </section>
    </div>
  );
}

export default App;
