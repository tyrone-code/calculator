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
let decimal = document.getElementById("decimal");
let clear = document.getElementById("clear");
let delChar = document.getElementById("removeChar");
let val1 = "";
let val2 = "";
const substr = ".";
let delCharClicked = false;
let operator = "";
plus.disabled = true;
subtract.disabled = true;
multiply.disabled = true;
division.disabled = true;
decimal.disabled = true;
delChar.disabled = true;
equals.disabled = true;

// let charToBeRemoved = "";
// let concatenated = (concatenated += val1);

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
// this is used to calculate the functions at the bottom when equals is clicked depending on what operator
// it will calculate the function based on the operator
// this is to show that if this is true, the final result is calculated if a user clicks on
// another num afterwards it resets the values.
// (clicking on a number)
//eg   if (resultCalculated === true) {
//   display.textContent = "";
//   resultCalculated = false;

//   val1 = "";
//   val2 = "";
// }
// or to add another operator on the result for further calculations
//e.g if plus operator is clicked after the result is shown, add another number again and calculate from the result
// if (resultCalculated === true) {
//   operatorCondition = true; //stays true to add num on left side
//   resultCalculated = false;// false in case we want to calculate again if we click the equals
//   val1 = result; // val1 is now result
//   val2 = "";// val2 is empty because user will populate the second value as value 1 is already the previous result
// }
let resultCalculated = false;
//this is global so that we can interject the result variable anywhere, not good practise but for \
//now as a beginner its viable

let result = 0;

/// used to reset the values if this is true and result is true the nums will reset and clear the values
let val2Result = false;
plus.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "+";
    display.textContent += "+";
    wasOperatorClicked = true;
  }
  if (resultCalculated === true) {
    operatorCondition = true; // so that left side num can be calculated
    resultCalculated = false; // so that num doesn't disappear
    val1 = result.toString(); // result is now val1
    val2 = ""; // val2 is now empty
    // += val1;
  }
  if (operator === "+" && val2Result === true) {
    result = add(val1, val2);
    display.textContent = `${result} + `;
    wasOperatorClicked = true;
    operator = "+";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    val2Result = false;
    val1 = result.toString();

    val2 = "";
    /// += val1;
  } else if (operator === "x" && val2Result === true) {
    result = multiplication(val1, val2);
    display.textContent = `${result} + `;
    wasOperatorClicked = true;
    operator = "+";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
    // += val1;
  } else if (operator === "-" && val2Result === true) {
    result = subtraction(val1, val2);
    display.textContent = `${result} + `;
    wasOperatorClicked = true;
    operator = "+";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result;
    val2 = "";
    // += val1;
  } else if (operator === "÷" && val2Result === true) {
    result = div(val1, val2);
    display.textContent = `${result} + `;
    wasOperatorClicked = true;
    operator = "+";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
    // += val1;
  }
  operatorCondition = true;
});
subtract.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "-";
    display.textContent += "-";
    wasOperatorClicked = true;
    // += "-";
  }
  if (resultCalculated === true) {
    operatorCondition = true;
    resultCalculated = false;
    val1 = result.toString();
    console.log("result was calculated");
    val2 = "";
  }
  if (operator === "+" && val2Result === true) {
    result = add(val1, val2);
    display.textContent = `${result} - `;
    wasOperatorClicked = true;
    operator = "-";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
    // += val1;
  } else if (operator === "x" && val2Result === true) {
    result = multiplication(val1, val2);
    display.textContent = `${result} - `;
    wasOperatorClicked = true;
    operator = "-";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
  } else if (operator === "-" && val2Result === true) {
    result = subtraction(val1, val2);
    display.textContent = `${result} -`;
    wasOperatorClicked = true;
    operator = "-";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
  } else if (operator === "÷" && val2Result === true) {
    result = div(val1, val2);
    display.textContent = `${result} - `;
    wasOperatorClicked = true;
    operator = "-";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
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
    val1 = result.toString();
    console.log("result was calculated");
    val2 = "";
  }
  if (operator === "+" && val2Result === true) {
    result = add(val1, val2);
    display.textContent = `${result} x `;
    wasOperatorClicked = true;
    operator = "x";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
  } else if (operator === "x" && val2Result === true) {
    result = multiplication(val1, val2);
    display.textContent = `${result} x `;
    wasOperatorClicked = true;
    operator = "x";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
  } else if (operator === "-" && val2Result === true) {
    result = subtraction(val1, val2);
    display.textContent = `${result} x`;
    wasOperatorClicked = true;
    operator = "x";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
  } else if (operator === "÷" && val2Result === true) {
    result = div(val1, val2);
    display.textContent = `${result} x `;
    wasOperatorClicked = true;
    operator = "x";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
  }
  operatorCondition = true;
});

division.addEventListener("click", () => {
  if (wasOperatorClicked === false) {
    operator = "÷";
    display.textContent += "÷";
    wasOperatorClicked = true;
  }
  if (resultCalculated === true) {
    operatorCondition = true;
    resultCalculated = false;
    val1 = result.toString();
    console.log("result was calculated");
    val2 = "";
  }
  if (operator === "+" && val2Result === true) {
    result = add(val1, val2);
    display.textContent = `${result} ÷ `;
    wasOperatorClicked = true;
    operator = "÷";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
  } else if (operator === "x" && val2Result === true) {
    result = multiplication(val1, val2);
    display.textContent = `${result} ÷ `;
    wasOperatorClicked = true;
    operator = "÷";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
  } else if (operator === "-" && val2Result === true) {
    result = subtraction(val1, val2);
    display.textContent = `${result} ÷`;
    wasOperatorClicked = true;
    operator = "÷";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
  } else if (operator === "÷" && val2Result === true) {
    result = div(val1, val2);
    display.textContent = `${result} ÷ `;
    wasOperatorClicked = true;
    operator = "÷";
    resultCalculated = false; // so that we can click another num
    operatorCondition = true;
    wasOperatorClicked = true;
    val2Result = false;
    val1 = result.toString();
    val2 = "";
  }
  operatorCondition = true;
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
  plus.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  division.disabled = false;
  decimal.disabled = false;
  delChar.disabled = false;
  equals.disabled = false;

  if (resultCalculated === true && delCharClicked === false) {
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
  plus.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  division.disabled = false;
  decimal.disabled = false;
  delChar.disabled = false;
  equals.disabled = false;
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
  plus.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  division.disabled = false;
  decimal.disabled = false;
  delChar.disabled = false;
  equals.disabled = false;
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
  plus.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  division.disabled = false;
  decimal.disabled = false;
  delChar.disabled = false;
  equals.disabled = false;
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
  plus.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  division.disabled = false;
  decimal.disabled = false;
  delChar.disabled = false;
  equals.disabled = false;
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
  plus.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  division.disabled = false;
  decimal.disabled = false;
  delChar.disabled = false;
  equals.disabled = false;
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
  plus.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  division.disabled = false;
  decimal.disabled = false;
  delChar.disabled = false;
  equals.disabled = false;
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
  plus.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  division.disabled = false;
  decimal.disabled = false;
  delChar.disabled = false;
  equals.disabled = false;
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
  plus.disabled = false;
  subtract.disabled = false;
  multiply.disabled = false;
  division.disabled = false;
  decimal.disabled = false;
  delChar.disabled = false;
  equals.disabled = false;
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
let div = function (inputValue1, inputValue2) {
  return new Number(inputValue1) / new Number(inputValue2);
};

equals.addEventListener("click", () => {
  if (operator === "+" && val2Result === true) {
    result = add(val1, val2);
    display.textContent = result;
    resultCalculated = true;
    operatorCondition = false;
    wasOperatorClicked = false;
    val2Result = false;
    console.log(val1);
    console.log(val2);
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
  } else if (operator === "÷" && val2Result === true) {
    result = div(val1, val2);
    display.textContent = result;
    resultCalculated = true;
    operatorCondition = false;
    wasOperatorClicked = false;
    val2Result = false;
  }
  if (val2 === 0 && operator === "÷") {
    display.textContent =
      "you are trying to open up a portal to another dimension are you?";
  }
});

decimal.addEventListener("click", () => {
  if (operatorCondition === false && !val1.includes(substr)) {
    val1 += "."; //pls work
    display.textContent += ".";
  } else if (operatorCondition === true && !val2.includes(substr)) {
    display.textContent += ".";
    val2 += ".";
    val2Result = true;
  }
});
clear.addEventListener("click", () => {
  window.location.reload();
});

delChar.addEventListener("click", () => {
  // delCharClicked = true;
  if (val1 && !operator && !val2) {
    val1 = val1.slice(0, -1);
    display.textContent = val1;
  } else if (val1 && operator && !val2) {
    operator = operator.slice(0, -1);
    wasOperatorClicked = false;
    operatorCondition = false;
    display.textContent = val1 + operator;
  } else if (val1 && operator && val2 && !resultCalculated) {
    val2 = val2.slice(0, -1);
    display.textContent = val1 + operator + val2;
  } else if (resultCalculated) {
    resultCalculated = false;
    operatorCondition = true;
    wasOperatorClicked = true;
    display.textContent = val1 + operator + val2;
  }
  if (val2 === "") {
    val2Result = false;
  } else if (val2 !== "") {
    val2Result = true;
  }
});
