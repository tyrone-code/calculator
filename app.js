let display = document.getElementById("display");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let plus = document.getElementById("plus");
let subtract = document.getElementById("subtract");
let multiply = document.getElementById("multiply");
let division = document.getElementById("division");
let equals = document.getElementById("equals");

let val1 = 0;
let val2 = 0;
let operatorCondition = false;
let wasOperatorClicked = false;
let operator = "";

plus.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "+";
    display.innerText += "+";
    wasOperatorClicked = true;
  }

  operatorCondition = true;
});
subtract.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "-";
    display.innerText += "-";
    wasOperatorClicked = true;
  }

  operatorCondition = true;
});
multiply.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "x";
    display.innerText += "x";
    wasOperatorClicked = true;
  }

  operatorCondition = true;

  // if operator condition > 1 dont do anything
});

division.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "/";
    display.innerText += "/";
    wasOperatorClicked = true;
  }

  operatorCondition = true;

  // if operator condition > 1 dont do anything
});

one.addEventListener("click", () => {
  if (operatorCondition === false) {
    val1 += 1;
    display.textContent += "1";
  } else if (operatorCondition === true) {
    display.textContent += "1";
    val2 += 1;
  }
});
two.addEventListener("click", () => {
  if (operatorCondition === false) {
    val1 += 2;
    display.textContent += "2";
  } else if (operatorCondition === true) {
    display.textContent += "2";
    val2 += 2;
  }
});
three.addEventListener("click", () => {
  if (operatorCondition === false) {
    val1 += 3;
    display.textContent += "3";
  } else if (operatorCondition === true) {
    display.textContent += "3";
    val2 += 3;
  }
});
four.addEventListener("click", () => {
  if (operatorCondition === false) {
    val1 += 4;
    display.textContent += "4";
  } else if (operatorCondition === true) {
    display.textContent += "4";
    val2 += 4;
  }
});
five.addEventListener("click", () => {
  if (operatorCondition === false) {
    val1 += 5;
    display.textContent += "5";
  } else if (operatorCondition === true) {
    display.textContent += "5";
    val2 += 5;
  }
});
six.addEventListener("click", () => {
  if (operatorCondition === false) {
    val1 += 6;
    display.textContent += "6";
  } else if (operatorCondition === true) {
    display.textContent += "6";
    val2 += 6;
  }
});

seven.addEventListener("click", () => {
  if (operatorCondition === false) {
    val1 += 7;
    display.textContent += "7";
  } else if (operatorCondition === true) {
    display.textContent += "7";
    val2 += 7;
  }
});

eight.addEventListener("click", () => {
  if (operatorCondition === false) {
    val1 += 8;
    display.textContent += "8";
  } else if (operatorCondition === true) {
    display.textContent += "8";
    val2 += 8;
  }
});

nine.addEventListener("click", () => {
  if (operatorCondition === false) {
    val1 += 9;
    display.textContent += "9";
  } else if (operatorCondition === true) {
    display.textContent += "9";
    val2 += 9;
  }
});
let add = function (inputValue1, inputValue2) {
  return inputValue1 + inputValue2;
};

let multiplication = function (inputValue1, inputValue2) {
  return inputValue1 * inputValue2;
};

let subtraction = function (inputValue1, inputValue2) {
  return inputValue1 - inputValue2;
};
let divide = function (inputValue1, inputValue2) {
  return inputValue1 / inputValue2;
};
equals.addEventListener("click", () => {
  if (operator === "+") {
    let result = add(val1, val2);
    display.textContent = result;
  } else if (operator === "x") {
    let result = multiplication(val1, val2);
    display.textContent = result;
  } else if (operator === "-") {
    let result = subtraction(val1, val2);
    display.textContent = result;
  } else if (operator === "/") {
    let result = divide(val1, val2);
    display.textContent = result;
  }
});
