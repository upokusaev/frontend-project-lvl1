#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './tools';

const numberGames = 3;

const startEngine = (description, createDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const name = readlineSync.question("What's your name?\n");
  console.log(`Hello, ${name}!\n`);
  const playGame = (count) => {
    if (count === 0) {
      console.log(`Congratulations, ${name}!`);
      return 'Success';
    }
    const dataGame = createDataGame();
    const question = getQuestion(dataGame);
    const trueAnswer = getAnswer(dataGame);
    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (Number(answer) !== Number(trueAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}!\n`);
      return playGame(count);
    }
    console.log('Correct!\n');
    return playGame(count - 1);
  };
  return playGame(numberGames);
};

export default startEngine;
