import { car, cdr, cons } from '@hexlet/pairs';

export const getQuestion = data => car(data);
export const getAnswer = data => cdr(data);
export const buildData = (question, answer) => cons(String(question), String(answer));

export const getRandomNum = (min, max) => {
  const rand = Math.floor(min + Math.random() * (max + 1 - min));
  return rand;
};
