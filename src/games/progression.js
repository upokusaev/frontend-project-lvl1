import { buildData, getRandomNum } from '../tools';
import startEngine from '../engine';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateGameData = () => {
  const firstNumber = getRandomNum(1, 9);
  const step = getRandomNum(2, 7);
  const hiddenNumberIndex = getRandomNum(1, progressionLength);
  const genProgression = (currentNumber, lengthCounter, strProgression) => {
    if (lengthCounter > progressionLength) return strProgression;
    if (lengthCounter === hiddenNumberIndex) {
      return genProgression(currentNumber + step, lengthCounter + 1, `${strProgression} ..`);
    }
    return genProgression(currentNumber + step, lengthCounter + 1, `${strProgression} ${currentNumber + step}`);
  };
  const question = genProgression(firstNumber, 1, '');
  const answer = (step * hiddenNumberIndex) + firstNumber;
  return buildData(question, answer);
};

export default () => {
  startEngine(description, generateGameData);
};
