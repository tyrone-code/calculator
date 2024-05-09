let decimal = document.getElementById("decimal");
let one = document.getElementById("one");

let val1 = "";
let val2 = "";
let plus = function (inputValue1, inputValue2) {
  return new Number(inputValue1) + new Number(inputValue2);
};
one.addEventListener("click", () => {
  val1 += "10";
  console.log(plus("10", val1));
});
decimal.addEventListener("click", () => {
  val1 += ".";
  console.log(val1);
});
