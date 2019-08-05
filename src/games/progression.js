import { buildData, getRandomNum } from '../tools';
import startEngine from '../engine';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateGameData = () => {
  const firstNumber = getRandomNum(1, 9);
  const step = getRandomNum(2, 7);
  const hiddenNumberIndex = getRandomNum(0, progressionLength - 1);
  const genProgression = (currentNumber, lengthCounter, strProgression) => {
    if (lengthCounter > progressionLength - 1) return strProgression.trim();
    if (lengthCounter === hiddenNumberIndex) {
      return genProgression(currentNumber + step, lengthCounter + 1, `${strProgression} ..`);
    }
    return genProgression(currentNumber + step, lengthCounter + 1, `${strProgression} ${currentNumber + step}`);
  };
  const question = genProgression(firstNumber - step, 0, '');
  const answer = String((step * hiddenNumberIndex) + firstNumber);
  return buildData(question, answer);
};

export default () => {
  startEngine(description, generateGameData);
};
