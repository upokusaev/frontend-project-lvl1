import readlineSync from 'readline-sync';

export const askName = () => {
    const userName = readlineSync.question("What's your name?\n");
    console.log(`Hello, ${userName}!`);
};