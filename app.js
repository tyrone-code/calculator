//each num has to correlate to a userInput a user clicks on screen.

let add = function (num1, num2) {
  return num1 + num2;
};

let subtract = function (num1, num2) {
  return num1 - num2;
};

let multiply = function (num1, num2) {
  return num1 * num2;
};

let divide = function (num1, num2) {
  return num1 / num2;
};

let operate = function (operation, number1, number2) {
  return operation(number1, number2);
};

console.log(operate(multiply, 2, 4));
