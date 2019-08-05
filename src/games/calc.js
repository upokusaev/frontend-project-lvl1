import { buildData, getRandomNum } from '../tools';
import startEngine from '../engine';

const description = 'What is the result of the expression?';
const strOperators = '+-*';

const calcAnswer = (num1, num2, indexOperator) => {
  switch (indexOperator) {
    case 0:
      return num1 + num2;
    case 1:
      return num1 - num2;
    case 2:
      return num1 * num2;
    default:
      return num1;
  }
};

const generateGameData = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 10);
  const indexOperator = getRandomNum(0, strOperators.length - 1);
  const question = `${num1} ${strOperators[indexOperator]} ${num2}`;
  const answer = String(calcAnswer(num1, num2, indexOperator));
  return buildData(question, answer);
};

export default () => {
  startEngine(description, generateGameData);
};
