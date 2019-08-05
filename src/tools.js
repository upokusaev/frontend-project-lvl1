import { car, cdr, cons } from '@hexlet/pairs';

export const getQuestion = data => car(data);
export const getAnswer = data => cdr(data);
export const buildData = (question, answer) => cons(question, answer);

export const getRandomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));
