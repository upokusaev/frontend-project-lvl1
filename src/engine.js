import readlineSync from 'readline-sync';
import { getQuestion, getAnswer } from './tools';

const numberOfRounds = 3;

const startEngine = (description, createDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const playerName = readlineSync.question("What's your name?\n");
  console.log(`Hello, ${playerName}!\n`);

  const playGame = (roundCounter) => {
    if (roundCounter === 0) {
      console.log(`Congratulations, ${playerName}!`);
      return;
    }
    const gameData = createDataGame();
    const question = getQuestion(gameData);
    const trueAnswer = getAnswer(gameData);
    const playerAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (playerAnswer !== trueAnswer) {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
      console.log(`Let's try again, ${playerName}!\n`);
      return;
    }
    console.log('Correct!\n');
    playGame(roundCounter - 1);
  };

  playGame(numberOfRounds);
};

export default startEngine;
