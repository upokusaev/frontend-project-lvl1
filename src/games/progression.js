#!/usr/bin/env node
import { buildData, getRandomNum } from '../tools';
import startEngine from '../engine';

const description = 'What number is missing in the progression?';

const startProgression = () => {
  const startNum = getRandomNum(1, 9);
  const stepNum = getRandomNum(2, 7);
  const genProgression = (start, step) => {
    const longProgression = 10;
    const indexHideNum = getRandomNum(1, longProgression);
    const iter = (count, acc, num, hideNum) => {
      if (count === 0) return buildData(acc, hideNum);
      if (count === indexHideNum) return iter(count - 1, `${acc} ${'..'}`, num + step, num + step);
      return iter(count - 1, `${acc} ${String(num + step)}`, num + step, hideNum);
    };
    return iter(longProgression, '', start);
  };
  return genProgression(startNum, stepNum);
};

export default () => {
  startEngine(description, startProgression);
};
