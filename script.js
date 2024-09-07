const input = document.querySelector(".input");
input.innerHTML = "";

const output = document.querySelector(".output");
output.innerHTML = "0";

var firstVal = 0;

var operator;

var secondVal = 0;

//clear button
const clear = document.querySelector(".clear");
clear.onclick = function () {
  input.innerHTML = "";
};

//number buttons
function numClick() {
  const numBtn = document.getElementsByClassName("num");
  for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].onclick = function () {
      var btnVal = numBtn[i].innerHTML;
      input.innerHTML += btnVal;
    };
  }
}

//operation buttons
function operationClick() {
  const operationBtn = document.getElementsByClassName("operation");
  for (let i = 0; i < operationBtn.length; i++) {
    operationBtn[i].onclick = function () {
      var operator = operationBtn[i].innerHTML;
      input.innerHTML += operator;
    };
  }
}

function getFirstVal() {
  numClick();
  operationClick();
}

getFirstVal();
