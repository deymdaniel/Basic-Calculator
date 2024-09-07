const input = document.querySelector(".input");
input.innerHTML = "";

const output = document.querySelector(".output");
output.innerHTML = "0";

const clear = document.querySelector(".clear");
clear.onclick = function () {
  input.innerHTML = "";
};

const numBtn = document.getElementsByClassName("num");

for (let i = 0; i < numBtn.length; i++) {
  numBtn[i].onclick = function () {
    var btnVal = numBtn[i].innerHTML;

    input.innerHTML += btnVal;
  };
}

const funcBtn = document.getElementsByClassName("function");

for (let i = 0; i < funcBtn.length; i++) {
  funcBtn[i].onclick = function () {
    var btnFunc = funcBtn[i].innerHTML;
    if (input.innerHTML.includes(btnFunc)) {
      input.innerHTML = 0;
      input.innerHTML += btnFunc[i];
    }
    input.innerHTML += btnFunc;
  };
}
