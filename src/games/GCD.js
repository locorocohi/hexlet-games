import { getRandomInteger, getGCD } from '../utils.js';
import runGame from '../index.js';

const desc = 'Find the greatest common divisor of given numbers.';

const getQA = () => {
  const firstArgument = getRandomInteger(1, 100);
  const secondArgument = getRandomInteger(1, 100);
  const question = `${firstArgument} ${secondArgument}`;
  const correctAnswer = String(getGCD(firstArgument, secondArgument));

  return [question, correctAnswer];
};

export default () => runGame(desc, getQA);