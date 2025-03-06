const getRandomMathProblem = () => {
  const operators = ['+', '-', '*', '/'];
  const numbers = [1, 2, 3, 4];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const number1 = numbers[Math.floor(Math.random() * numbers.length)];
  const number2 = numbers[Math.floor(Math.random() * numbers.length)];

  let mathProblem;

  if (operator === '+') {
    mathProblem = `${number1} + ${number2}`;
  } else if (operator === '-') {
    mathProblem = `${number1} - ${number2}`;
  } else if (operator === '*') {
    mathProblem = `${number1} * ${number2}`;
  } else {
    mathProblem = `${number1} / ${number2}`;
  }

  return mathProblem;
};
