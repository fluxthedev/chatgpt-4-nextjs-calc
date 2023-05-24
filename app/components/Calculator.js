'use client';
import { useState, useEffect } from 'react';
import {
  add,
  subtract,
  multiply,
  divide,
  performCalculation,
} from '../utils/utils';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [firstOperand, setFirstOperand] = useState(null);
  const [currentOperation, setCurrentOperation] = useState(null);

  const buttons = [
    '7',
    '8',
    '9',
    '/',
    '4',
    '5',
    '6',
    '*',
    '1',
    '2',
    '3',
    '-',
    '0',
    '.',
    '=',
    '+',
  ];

  const performCalculation = () => {
    if (firstOperand !== null && currentOperation) {
      const secondOperandStartIndex =
        firstOperand.toString().length + 1;
      const secondOperand = parseFloat(
        display.slice(secondOperandStartIndex)
      );

      switch (currentOperation) {
        case '+':
          return add(parseFloat(firstOperand), secondOperand);
        case '-':
          return subtract(parseFloat(firstOperand), secondOperand);
        case '*':
          return multiply(parseFloat(firstOperand), secondOperand);
        case '/':
          try {
            return divide(parseFloat(firstOperand), secondOperand);
          } catch (e) {
            setDisplay(e.message);
          }
          break;
        default:
          break;
      }
    }
  };

  const handleClick = (value) => {
    switch (value) {
      case '+':
      case '-':
      case '*':
      case '/':
        if (firstOperand === null) {
          setFirstOperand(parseFloat(display));
        } else if (currentOperation) {
          setFirstOperand(performCalculation());
        }
        setCurrentOperation(value);
        setDisplay((prev) => prev + value);
        break;
      case '=':
        if (firstOperand !== null && currentOperation) {
          const result = performCalculation();
          setFirstOperand(null);
          setCurrentOperation(null);
          setDisplay(result.toString());
        }
        break;
      case 'C':
        setDisplay('');
        setFirstOperand(null);
        setCurrentOperation(null);
        break;
      default:
        setDisplay((prev) => prev + value);
        break;
    }
  };

  const handleKeyDown = (event) => {
    const key = event.key;

    if (key === 'Enter') {
      handleClick('=');
    } else if (key === 'Backspace') {
      handleClick('C');
    } else if (buttons.includes(key)) {
      handleClick(key);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener when the component is unmounted
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []); // Empty dependency array to only run this effect once on component mount

  return (
    <div className="p-10 flex flex-col items-center w-full max-w-lg mx-auto">
      <Display value={display} />
      <div className="flex flex-wrap justify-center gap-4">
        {buttons.map((button, index) => (
          <Button
            key={index}
            value={button}
            onClick={() => handleClick(button)}
          />
        ))}
        <div className="w-full flex justify-end">
          <Button value="C" onClick={() => handleClick('C')} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
