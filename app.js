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
// this is to allow us to determine if its the first num on the left side or right side,
// if it turns true, the program will add number on the right side. if false, add on the left side
//e.g   if (operatorCondition === false) {
//     val1 += "0";
//     display.textContent += "0";
//   } else if (operatorCondition === true) {
//     display.textContent += "0";
//     val2 += "0";
//     val2Result = true;
//   }
// });
let operatorCondition = false;
// this allows us to add only one operator at a time. if it turns true no operator will be appended
// if a user presses a operator it will turn true e.g
// plus.addEventListener("click", () => {
//   if (wasOperatorClicked === false) {
//     operator = "+";
//     display.textContent += "+";
//     wasOperatorClicked = true;
//   }

//   operatorCondition = true;
// });
let wasOperatorClicked = false;
// this is used to calculate the functions at the bottom when equals is clicked
let operator = "";
//onsole.log(result);
// this is to show that if this is true, the final result is calculated if a user clicks on
// another num afterwards it resets the values.
//eg   if (resultCalculated === true) {
//   display.textContent = "";
//   resultCalculated = false;

//   val1 = "";
//   val2 = "";
// }
let resultCalculated = false;
let result = 0;
let val2Result = false;
let equalsWasClicked = false;
console.log(resultCalculated);
plus.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "+";
    display.textContent += "+";
    wasOperatorClicked = true;
  }
  if (resultCalculated === true) {
    operatorCondition = true;
    resultCalculated = false;
    val1 = result;
    console.log("result was calculated");
    val2 = "";
    // result = add(val1, val2);
    // val1 = result;
    // val2 = "";
    // display.textContent = val1;
    // wasOperatorClicked = false;
    // operatorCondition = false;
    // val2Result = false;
  }

  // if (equalsWasClicked === true) {
  //   console.log("equals was clicked!");
  // }

  operatorCondition = true;
});
subtract.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "-";
    display.textContent += "-";
    wasOperatorClicked = true;
  }
  if (resultCalculated === true) {
    operatorCondition = true;
    resultCalculated = false;
    val1 = result;
    console.log("result was calculated");
    val2 = "";
  }
  operatorCondition = true;
});
multiply.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "x";
    display.textContent += "x";
    wasOperatorClicked = true;
  }
  if (resultCalculated === true) {
    operatorCondition = true;
    resultCalculated = false;
    val1 = result;
    console.log("result was calculated");
    val2 = "";
  }
  operatorCondition = true;

  // if operator condition > 1 dont do anything    operator = "";
});

division.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "/";
    display.textContent += "/";
    wasOperatorClicked = true;
  }
  if (resultCalculated === true) {
    operatorCondition = true;
    resultCalculated = false;
    val1 = result;
    console.log("result was calculated");
    val2 = "";
  }

  // if operator condition > 1 dont do anything
});
zero.addEventListener("click", () => {
  if (resultCalculated === true) {
    display.textContent = "";
    resultCalculated = false;

    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "0";
    display.textContent += "0";
  } else if (operatorCondition === true) {
    display.textContent += "0";
    val2 += "0";
    val2Result = true;
  }
});

one.addEventListener("click", () => {
  if (resultCalculated === true) {
    display.textContent = "";
    resultCalculated = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "1";
    display.textContent += "1";
  } else if (operatorCondition === true) {
    display.textContent += "1";
    val2 += "1";
    val2Result = true;
  }
});
two.addEventListener("click", () => {
  if (resultCalculated === true) {
    display.textContent = "";
    resultCalculated = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "2";
    display.textContent += "2";
  } else if (operatorCondition === true) {
    display.textContent += "2";
    val2 += "2";
    val2Result = true;
  }
});
three.addEventListener("click", () => {
  if (resultCalculated === true) {
    display.textContent = "";
    resultCalculated = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "3";
    display.textContent += "3";
  } else if (operatorCondition === true) {
    display.textContent += "3";
    val2 += "3";
    val2Result = true;
  }
});
four.addEventListener("click", () => {
  if (resultCalculated === true) {
    display.textContent = "";
    resultCalculated = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "4";
    display.textContent += "4";
  } else if (operatorCondition === true) {
    display.textContent += "4";
    val2 += "4";
    val2Result = true;
  }
});
five.addEventListener("click", () => {
  if (resultCalculated === true) {
    display.textContent = "";
    resultCalculated = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "5";
    display.textContent += "5";
  } else if (operatorCondition === true) {
    display.textContent += "5";
    val2 += "5";
    val2Result = true;
  }
});
six.addEventListener("click", () => {
  if (resultCalculated === true) {
    display.textContent = "";
    resultCalculated = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "6";
    display.textContent += "6";
  } else if (operatorCondition === true) {
    display.textContent += "6";
    val2 += "6";
    val2Result = true;
  }
});

seven.addEventListener("click", () => {
  if (resultCalculated === true) {
    display.textContent = "";
    resultCalculated = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "7";
    display.textContent += "7";
  } else if (operatorCondition === true) {
    display.textContent += "7";
    val2 += "7";
    val2Result = true;
  }
});

eight.addEventListener("click", () => {
  if (resultCalculated === true) {
    display.textContent = "";
    resultCalculated = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "8";
    display.textContent += "8";
  } else if (operatorCondition === true) {
    display.textContent += "8";
    val2 += "8";
    val2Result = true;
  }
});

nine.addEventListener("click", () => {
  if (resultCalculated === true) {
    display.textContent = "";
    resultCalculated = false;
    val1 = "";
    val2 = "";
  }
  if (operatorCondition === false) {
    val1 += "9";
    display.textContent += "9";
  } else if (operatorCondition === true) {
    display.textContent += "9";
    val2 += "9";
    val2Result = true;
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
  equalsWasClicked = true;
  if (operator === "+" && val2Result === true) {
    result = add(val1, val2);
    display.textContent = result;
    resultCalculated = true;
    console.log(resultCalculated);
    operatorCondition = false;
    wasOperatorClicked = false;
    val2Result = false;
  } else if (operator === "x" && val2Result === true) {
    result = multiplication(val1, val2);
    display.textContent = result;
    resultCalculated = true;
    operatorCondition = false;
    wasOperatorClicked = false;
    val2Result = false;
  } else if (operator === "-" && val2Result === true) {
    result = subtraction(val1, val2);
    display.textContent = result;
    resultCalculated = true;
    operatorCondition = false;
    wasOperatorClicked = false;
    val2Result = false;
  } else if (operator === "/" && val2Result === true) {
    result = divide(val1, val2);
    display.textContent = result;
    resultCalculated = true;
    operatorCondition = false;
    wasOperatorClicked = false;
    val2Result = false;
  }
});
