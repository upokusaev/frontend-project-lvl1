#!/usr/bin/env node
import { buildData, getRandomNum } from '../tools';
import startEngine from '../engine';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startPrimeGame = () => {
  const num = getRandomNum(10, 1000);
  const isPrime = (divider, number) => {
    if (divider === 1) return true;
    if (number % divider === 0) return false;
    return isPrime(divider - 1, number);
  };
  const trueAnswer = (isPrime(Math.ceil(Math.sqrt(num)), num)) ? 'yes' : 'no';
  return buildData(num, trueAnswer);
};

export default () => {
  startEngine(description, startPrimeGame);
};
