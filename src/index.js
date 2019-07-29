import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const askName = () => {
  const userName = readlineSync.question("What's your name?\n");
  console.log(`Hello, ${userName}!\n`);
  return userName;
};
export const isEven = () => {
  let countTrue = 0;
  const name = askName();
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  while (countTrue < 3) {
    const num = Math.ceil((Math.random() + 0.01) * 100);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if ((num % 2 === 0 && answer === 'yes') || (num % 2 !== 0 && answer === 'no')) {
      countTrue += 1;
      console.log('Correct!\n');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${(num % 2 === 0) ? 'yes' : 'no'}'.\nLet's try again, ${name}!\n`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};
