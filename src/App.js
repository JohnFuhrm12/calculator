import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState(0);
  const [previousInput, setPreviousInput] = useState('');
  const [decimalInNum, setDecimalInNum] = useState(false);

  function handleNumber(e) {
    setPreviousInput(e.currentTarget.innerText);
    if (display === 0 && e.currentTarget.innerText !== '0') {
      setDisplay(e.currentTarget.innerText);
    } else if (display === 0 && e.currentTarget.innerText === '0') {
      setDisplay(0);
    } else {
      setDisplay(display + e.currentTarget.innerText);
    }
  };

  function handleDecimal(e) {
    setPreviousInput(e.currentTarget.innerText);
    if (display !== 0 && previousInput !== '.' && !decimalInNum) {
      setDisplay(display + e.currentTarget.innerText);
      setDecimalInNum(true);
    }
  };

  function handleOperator(e) {
    setPreviousInput(e.currentTarget.innerText);
    if (display !== 0 && previousInput !== '+' && previousInput !== '-' && previousInput !== '/' && previousInput !== '*') {
      setDisplay(display + e.currentTarget.innerText);
      setDecimalInNum(false);
    }
  };

  function clear() {
    setDisplay(0);
    setDecimalInNum(false);
  };

  function evaluate() {
    const result = Number.parseFloat(eval(display));
    setDisplay(result);
  };


  return (
    <>
    <div id="page">
      <div id="calculator">
        <div id="display">{display}</div>
        <div id="buttons">
          <div id="row">
            <button onClick={clear} id="clear" className="buttonLarge">AC</button>
            <button onClick={handleOperator} id="divide" className="buttonSmall">/</button>
            <button onClick={handleOperator} id="multiply" className="buttonSmall">*</button>
          </div>
          <div id="row">
            <button onClick={handleNumber} id="seven" className="buttonSmall">7</button>
            <button onClick={handleNumber} id="eight" className="buttonSmall">8</button>
            <button onClick={handleNumber} id="nine" className="buttonSmall">9</button>
            <button onClick={handleOperator} id="subtract" className="buttonSmall">-</button>
          </div>
          <div id="row">
            <button onClick={handleNumber} id="four" className="buttonSmall">4</button>
            <button onClick={handleNumber} id="five" className="buttonSmall">5</button>
            <button onClick={handleNumber} id="six" className="buttonSmall">6</button>
            <button onClick={handleOperator} id="add" className="buttonSmall">+</button>
          </div>
          <div id="row">
            <button onClick={handleNumber} id="one" className="buttonSmall">1</button>
            <button onClick={handleNumber} id="two" className="buttonSmall">2</button>
            <button onClick={handleNumber} id="three" className="buttonSmall">3</button>
            <button id="sdfsfd" className="buttonSmall">N</button>
          </div>
          <div id="row">
            <button onClick={handleNumber} id="zero" className="buttonLarge">0</button>
            <button onClick={handleDecimal} id="decimal" className="buttonSmall">.</button>
            <button onClick={evaluate} id="equals" className="buttonEquals">=</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
