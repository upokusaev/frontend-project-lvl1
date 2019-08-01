#!/usr/bin/env node
import { buildData, getRandomNum } from '../tools';
import startEngine from '../engine';

const description = 'What number is missing in the progression?';

const generateGameData = () => {
  const firstNumber = getRandomNum(1, 9);
  const step = getRandomNum(2, 7);
  const progressionLength = 10;
  const hiddenNumberIndex = getRandomNum(1, progressionLength);
  const genProgression = (currentNumber, lengthCounter, strProgression, hiddenNumber) => {
    if (lengthCounter > progressionLength) {
      const question = strProgression;
      const answer = hiddenNumber;
      return buildData(question, answer);
    }
    if (lengthCounter === hiddenNumberIndex) {
      return genProgression(currentNumber + step, lengthCounter + 1, `${strProgression} ..`, currentNumber + step);
    }
    return genProgression(currentNumber + step, lengthCounter + 1, `${strProgression} ${currentNumber + step}`, hiddenNumber);
  };
  return genProgression(firstNumber, 1, '');
};

export default () => {
  startEngine(description, generateGameData);
};
