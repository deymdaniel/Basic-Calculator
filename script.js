const input = document.querySelector(".input");
input.innerHTML = "";

const output = document.querySelector(".output");
output.innerHTML = "0";

const numBtn = document.getElementsByClassName("num");

const operationBtn = document.getElementsByClassName("operation");

//clear button
const clear = document.querySelector(".clear");
clear.onclick = function () {
  input.innerHTML = "";
  output.innerHTML = "0";
};

//number buttons
function numClick() {
  for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].onclick = function () {
      var btnVal = numBtn[i].innerHTML;
      input.innerHTML += btnVal;
    };
  }
}

//operation buttons
function operationClick() {
  for (let i = 0; i < operationBtn.length; i++) {
    operationBtn[i].onclick = function () {
      var operator = operationBtn[i].innerHTML;
      if (
        !(
          input.innerHTML.includes("+") ||
          input.innerHTML.includes("-") ||
          input.innerHTML.includes("/") ||
          input.innerHTML.includes("*")
        )
      ) {
        input.innerHTML += operator;
      }
    };
  }
}

function equals() {
  const equalsBtn = document.querySelector(".equal");
  equalsBtn.onclick = function () {
    if (input.innerHTML.includes("+")) {
      if (!(output.innerHTML = 0)) {
        output.innerHTML =
          +output.innerHTML +
          +input.innerHTML.split("+")[0] +
          +input.innerHTML.split("+")[1];
      }
      output.innerHTML =
        +input.innerHTML.split("+")[0] + +input.innerHTML.split("+")[1];
    }

    input.innerHTML = "";
  };
}

numClick();
operationClick();
equals();
