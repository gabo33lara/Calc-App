import './App.css';
import Screen from './components/Screen';
import Button from './components/Button';
import ClearButton from './components/ButtonClear';
import freeCodeCampLogo from './img/FreeCodeCamp-logo.png';
import {useState} from 'react';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const renderInput = value => {
    setInput(input + value);
  }

  const calculateResult = () => {
    if(input) {
      const result = evaluate(input);
      const songUrl = 'https://www.youtube.com/watch?v=jzy2dgEUOhY';
      const renderScreen = evaluate(input) === Infinity ? <a href={songUrl}>Listen changa song</a> : result;
      setInput(renderScreen);
    } else {
      alert('Select values to calculate first!');
    }
  }

  const handleClear = () => {
    setInput('');
  }

  return (
    <div className="App">
        <div className="freecodecamp-logo-container">
          <img className="freecodecamp-logo" alt="FreeCodeCamp Logo" src={freeCodeCampLogo} />
        </div>
        <div className="calculator-container">
          <Screen input={input} />
          <div className="row">
            <Button handleClick={renderInput}>1</Button>
            <Button handleClick={renderInput}>2</Button>
            <Button handleClick={renderInput}>3</Button>
            <Button handleClick={renderInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={renderInput}>4</Button>
            <Button handleClick={renderInput}>5</Button>
            <Button handleClick={renderInput}>6</Button>
            <Button handleClick={renderInput}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={renderInput}>7</Button>
            <Button handleClick={renderInput}>8</Button>
            <Button handleClick={renderInput}>9</Button>
            <Button handleClick={renderInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={calculateResult}>=</Button>
            <Button handleClick={renderInput}>0</Button>
            <Button handleClick={renderInput}>.</Button>
            <Button handleClick={renderInput}>/</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={handleClear}>Clear</ClearButton>
          </div>
        </div>
    </div>
  );
}

export default App;
