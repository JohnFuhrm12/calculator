import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState(0);


  return (
    <>
    <div id="page">
      <div id="calculator">
        <div id="display">{display}</div>
        <div id="buttons">
          <div id="row">
            <button id="clear" className="buttonLarge">AC</button>
            <button id="divide" className="buttonSmall">/</button>
            <button id="multiply" className="buttonSmall">X</button>
          </div>
          <div id="row">
            <button id="seven" className="buttonSmall">7</button>
            <button id="eight" className="buttonSmall">8</button>
            <button id="nine" className="buttonSmall">9</button>
            <button id="subtract" className="buttonSmall">-</button>
          </div>
          <div id="row">
            <button id="four" className="buttonSmall">4</button>
            <button id="five" className="buttonSmall">5</button>
            <button id="six" className="buttonSmall">6</button>
            <button id="add" className="buttonSmall">+</button>
          </div>
          <div id="row">
            <button id="one" className="buttonSmall">1</button>
            <button id="two" className="buttonSmall">2</button>
            <button id="three" className="buttonSmall">3</button>
            <button id="sdfsfd" className="buttonSmall">N</button>
          </div>
          <div id="row">
            <button id="zero" className="buttonLarge">0</button>
            <button id="decimal" className="buttonSmall">.</button>
            <button id="equals" className="buttonEquals">=</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
