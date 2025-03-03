import { Math } from 'mathjs';

const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateMathProblem = () => {
  const num1 = getRandomInt(0, 20);
  const num2 = getRandomInt(0, 20);
  return `${num1} + ${num2}`;
};
