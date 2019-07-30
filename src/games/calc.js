#!/usr/bin/env node
import { buildData, getRandomNum } from '../tools';
import startEngine from '../engine';

const description = 'What is the result of the expression?';

const calcAnswer = (num1, num2, operatorIndex) => {
  switch (operatorIndex) {
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

const calcGame = () => {
  const num1 = getRandomNum(1, 20);
  const num2 = getRandomNum(1, 10);
  const strOperators = '+-*';
  const operatorIndex = getRandomNum(0, strOperators.length - 1);
  const question = `${num1} ${strOperators[operatorIndex]} ${num2}`;
  const trueAnswer = calcAnswer(num1, num2, operatorIndex);
  const dataGame = buildData(question, trueAnswer);
  return dataGame;
};

export default () => {
  startEngine(description, calcGame);
};
