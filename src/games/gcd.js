#!/usr/bin/env node
import { buildData, getRandomNum } from '../tools';
import startEngine from '../engine';

const description = 'Find the greatest common divisor of given numbers.';

const calcNod = () => {
  const num1 = getRandomNum(1, 200);
  const num2 = getRandomNum(1, 200);
  const maxNum = (num1 >= num2) ? num1 : num2;
  const minNum = (num1 <= num2) ? num1 : num2;
  const calcEuclid = (max, min) => {
    const remainder = max % min;
    if (remainder === 0) return min;
    return calcEuclid(min, remainder);
  };
  const nod = calcEuclid(maxNum, minNum);
  return buildData(`${num1} ${num2}`, nod);
};

export default () => {
  startEngine(description, calcNod);
};
