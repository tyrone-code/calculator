let display = document.getElementById("display");
let zero = document.getElementById("zero");
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

let val1 = "";
let val2 = "";
let operatorCondition = false;
let wasOperatorClicked = false;
let operator = "";
let equalswasClicked = false;
let numVal2WasClicked = false;

let resetValues = function () {
  val = "";
  val2 = "";
};
// let numA = new Number(val1); // "8.1"
// let numbB = new Number(val2);
// console.log(numA + numB); // "9.1"
// var total = numberA + numberA; // 17.2
// console.log(total);
plus.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "+";
    display.innerText += "+";
    wasOperatorClicked = true;
  }
  // if (numVal2WasClicked === true) {
  //   someFunction()
  // }

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

  // if operator condition > 1 dont do anything
});
zero.addEventListener("click", () => {
  if (equalswasClicked == true) {
    display.textContent = "";
    equalswasClicked = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "0";
    display.textContent += "0";
  } else if (operatorCondition === true) {
    display.textContent += "0";
    val2 += "0";
  }
});

one.addEventListener("click", () => {
  if (equalswasClicked == true) {
    display.textContent = "";
    equalswasClicked = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "1";
    display.textContent += "1";
  } else if (operatorCondition === true) {
    numVal2WasClicked = true;
    display.textContent += "1";
    val2 += "1";
  }
});
two.addEventListener("click", () => {
  if (equalswasClicked == true) {
    display.textContent = "";
    equalswasClicked = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "2";
    display.textContent += "2";
  } else if (operatorCondition === true) {
    display.textContent += "2";
    val2 += "2";
  }
});
three.addEventListener("click", () => {
  if (equalswasClicked == true) {
    display.textContent = "";
    equalswasClicked = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "3";
    display.textContent += "3";
  } else if (operatorCondition === true) {
    display.textContent += "3";
    val2 += "3";
  }
});
four.addEventListener("click", () => {
  if (equalswasClicked == true) {
    display.textContent = "";
    equalswasClicked = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "4";
    display.textContent += "4";
  } else if (operatorCondition === true) {
    display.textContent += "4";
    val2 += "4";
  }
});
five.addEventListener("click", () => {
  if (equalswasClicked == true) {
    display.textContent = "";
    equalswasClicked = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "5";
    display.textContent += "5";
  } else if (operatorCondition === true) {
    display.textContent += "5";
    val2 += "5";
  }
});
six.addEventListener("click", () => {
  if (equalswasClicked == true) {
    display.textContent = "";
    equalswasClicked = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "6";
    display.textContent += "6";
  } else if (operatorCondition === true) {
    display.textContent += "6";
    val2 += "6";
  }
});

seven.addEventListener("click", () => {
  if (equalswasClicked == true) {
    display.textContent = "";
    equalswasClicked = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "7";
    display.textContent += "7";
  } else if (operatorCondition === true) {
    display.textContent += "7";
    val2 += "7";
  }
});

eight.addEventListener("click", () => {
  if (equalswasClicked == true) {
    display.textContent = "";
    equalswasClicked = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "8";
    display.textContent += "8";
  } else if (operatorCondition === true) {
    display.textContent += "8";
    val2 += "8";
  }
});

nine.addEventListener("click", () => {
  if (equalswasClicked == true) {
    display.textContent = "";
    equalswasClicked = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "9";
    display.textContent += "9";
  } else if (operatorCondition === true) {
    display.textContent += "9";
    val2 += "9";
  }
});
let add = function (inputValue1, inputValue2) {
  return new Number(inputValue1) + new Number(inputValue2);
};

let multiplication = function (inputValue1, inputValue2) {
  return new Number(inputValue1) * new Number(inputValue2);
};

let subtraction = function (inputValue1, inputValue2) {
  return new Number(inputValue1) - new Number(inputValue2);
};
let divide = function (inputValue1, inputValue2) {
  return new Number(inputValue1) / new Number(inputValue2);
};
equals.addEventListener("click", () => {
  operatorCondition = false;
  wasOperatorClicked = false;
  equalswasClicked = true;
  if (operator === "+") {
    result = add(val1, val2);
    display.textContent = result;
  } else if (operator === "x") {
    result = multiplication(val1, val2);
    display.textContent = result;
  } else if (operator === "-") {
    result = subtraction(val1, val2);
    display.textContent = result;
  } else if (operator === "/") {
    result = divide(val1, val2);
    display.textContent = result;
  }
});
