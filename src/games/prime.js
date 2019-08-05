import { buildData, getRandomNum } from '../tools';
import startEngine from '../engine';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) return false;
  const divider = Math.ceil(number / 2);
  const iter = (div) => {
    if (div >= divider) return true;
    return (number % div === 0) ? false : iter(div + 1);
  };
  return iter(2);
};

const generateGameData = () => {
  const question = getRandomNum(-10, 1000);
  const answer = isPrime(question) ? 'yes' : 'no';
  return buildData(question, answer);
};

export default () => {
  startEngine(description, generateGameData);
};
