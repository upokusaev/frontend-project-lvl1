#!/usr/bin/env node
import { buildData, getRandomNum } from '../tools';
import startEngine from '../engine';

const description = 'Find the greatest common divisor of given numbers.';

const calcNod = (num1, num2) => {
  const maxNum = Math.max(num1, num2);
  const minNum = Math.min(num1, num2);
  const calcRemainder = (max, min) => {
    const remainder = max % min;
    return (remainder === 0) ? min : calcRemainder(min, remainder);
  };
  return calcRemainder(maxNum, minNum);
};

const generateGameData = () => {
  const num1 = getRandomNum(1, 200);
  const num2 = getRandomNum(1, 200);
  const question = `${num1} ${num2}`;
  const answer = calcNod(num1, num2);
  return buildData(question, answer);
};

export default () => {
  startEngine(description, generateGameData);
};
