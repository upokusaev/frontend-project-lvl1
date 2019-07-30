#!/usr/bin/env node
import { buildData, getRandomNum } from '../tools';
import startEngine from '../engine';

const description = 'Answer "yes" if number even otherwise answer "no".\n';

export const isEven = () => {
  const num = getRandomNum(1, 100);
  const trueAnswer = (num % 2 === 0) ? 'yes' : 'no';
  const dataGame = buildData(num, trueAnswer);
  return dataGame;
};

export default () => {
  startEngine(description, isEven);
};
