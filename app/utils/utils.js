export const add = (num1, num2) => Number(num1) + Number(num2);

export const subtract = (num1, num2) => Number(num1) - Number(num2);

export const multiply = (num1, num2) => Number(num1) * Number(num2);

export const divide = (num1, num2) => {
  if (Number(num2) === 0) {
    throw new Error('Cannot divide by zero');
  }

  return Number(num1) / Number(num2);
};
