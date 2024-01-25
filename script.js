const calculator = document.querySelector(".calculatorBody");

for (let i = 1; i < 19; i++) {
  const createBtn = document.createElement("div");
  createBtn.className(i);
  calculator.appendChild(createBtn);
}
