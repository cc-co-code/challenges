console.clear();

let operand1 = 12;
const operand2 = 4;

/*
Mathematical operations
*/
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');

addButton.addEventListener("click", () => {
  const result = operand1 + operand2;
  console.log("Addition result", result);
  // 1. Add the two operands and store the result in a variable. Log the variable's value to the console.
});

subtractButton.addEventListener("click", () => {
  const result = operand1 - operand2;
  console.log("Subtraction result", result);
  // 2. Subtract the two operands and store the result in a variable. Log the variable's value to the console.
});

multiplyButton.addEventListener("click", () => {
  const result = operand1 * operand2;
  console.log("Multiplication result", result);
  // 3. Multiply the two operands and store the result in a variable. Log the variable's value to the console.
});

divideButton.addEventListener("click", () => {
  const result = operand1 / operand2;
  console.log("Division result", result);
  // 4. Divide the two operands and store the result in a variable. Log the variable's value to the console.
});

exponentButton.addEventListener("click", () => {
  const result = operand1 ** operand2;
  console.log("Exponentiation result", result);
  // 5. Raise "operand1" to the value of "operand2" and store the result in a variable. Log the variable's value to the console.
});

moduloButton.addEventListener("click", () => {
  const result = operand1 % operand2;
  console.log("Modulo result", result);
  // 6. Calculate the remainder when dividing "operand1" by "operand2" and store the result in a variable. Log the variable's value to the console.
});

/*
Update the first operand

Please don't forget to think about the declaration of the variable "operand1".
*/
const increaseByOneButton = document.querySelector(
  '[data-js="increase-by-one"]'
);
increaseByOneButton.addEventListener("click", () => {
  operand1 += 1;
  console.log("Operand1 increased by 1:", operand1);
});

const increaseByFiveButton = document.querySelector(
  '[data-js="increase-by-five"]'
);
increaseByFiveButton.addEventListener("click", () => {
  operand1 += 5;
  console.log("operand1 increased by five", operand1);
});

const decreaseByOneButton = document.querySelector(
  '[data-js="decrease-by-one"]'
);
decreaseByOneButton.addEventListener("click", () => {
  operand1 -= 1;
  console.log("operand1 decreased by one", operand1);
});
const decreaseByFiveButton = document.querySelector(
  '[data-js="decrease-by-five"]'
);
decreaseByFiveButton.addEventListener("click", () => {
  operand1 -= 5;
  console.log("operand1 decreased by five", operand1);
});
const multiplyByTwoButton = document.querySelector(
  '[data-js="multiply-by-two"]'
);
multiplyByTwoButton.addEventListener("click", () => {
  operand1 *= 2;
  console.log("operand1 multiplied by two", operand1);
});
const divideByTwoButton = document.querySelector('[data-js="divide-by-two"]');
divideByTwoButton.addEventListener("click", () => {
  operand1 /= 2;
  console.log("operand1 devided by two", operand1);
});

increaseByOneButton.addEventListener("click", () => {
  // 7. Increase the value of "operand1" by 1. Log the new value to the console.
});

increaseByFiveButton.addEventListener("click", () => {
  // 8. Increase the value of "operand1" by 5. Log the new value to the console.
});

decreaseByOneButton.addEventListener("click", () => {
  // 7. Decrease the value of "operand1" by 1. Log the new value to the console.
});

decreaseByFiveButton.addEventListener("click", () => {
  // 8. Decrease the value of "operand1" by 5. Log the new value to the console.
});

multiplyByTwoButton.addEventListener("click", () => {
  // 11. Multiply the value of "operand1" by 2. Log the new value to the console.
});

divideByTwoButton.addEventListener("click", () => {
  // 12. Divide the value of "operand1" by 2. Log the new value to the console.
});
