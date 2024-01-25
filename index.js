// @ts-check
import readlineSync from 'readline-sync';
import half from './src/half.js';

export default half;

const calculator = {};

calculator.read = () => {
  calculator.a = readlineSync.question('type in first number: ');
  calculator.b = readlineSync.question('type in second number: ');
};

calculator.sum = () => Number(calculator.a) + Number(calculator.b);
calculator.mul = () => Number(calculator.a) * Number(calculator.b);

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
