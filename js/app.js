const output = document.getElementById("output");
const reset = document.getElementById("reset");
const del = document.getElementById("del");
const result = document.getElementById("eq");
const numbers = [...document.querySelectorAll(".btn-num")];
const operations = [...document.querySelectorAll(".btn-operation")];

let firstNumber = [];
let operation = undefined;
let secondNumber = [];
let computation = null;

const clear = () => {
  output.innerText = 0;
  firstNumber = [];
  operation = undefined;
  secondNumber = [];
};

const compute = () => {
  switch (operation) {
    case "+":
      computation =
        parseFloat(firstNumber.join("")) + parseFloat(secondNumber.join(""));
      break;
    case "-":
      computation =
        parseFloat(firstNumber.join("")) - parseFloat(secondNumber.join(""));
      break;
    case "*":
      computation =
        parseFloat(firstNumber.join("")) * parseFloat(secondNumber.join(""));
      break;
    case "/":
      computation =
        parseFloat(firstNumber.join("")) / parseFloat(secondNumber.join(""));
      break;
    default:
      return;
  }
  output.innerText = computation.toLocaleString();
  firstNumber = [computation];
  secondNumber = [];
  operation = undefined;
};

reset.addEventListener("click", () => {
  clear();
});

del.addEventListener("click", () => {
  if (!operation) {
    if (firstNumber.length > 1) {
      firstNumber.pop();
      output.innerText = Number(firstNumber.join("")).toLocaleString();
    } else {
      clear();
    }
  } else {
    if (secondNumber.length > 1) {
      secondNumber.pop();
      output.innerText = Number(secondNumber.join("")).toLocaleString();
    } else {
      clear();
    }
  }
});

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    if (!operation) {
      if (firstNumber.includes(".") && num.innerText === ".") return;
      if (firstNumber.length === 0 && num.innerText === ".") {
        firstNumber.push("0");
      }
      firstNumber.push(num.innerText);
      output.innerText = Number(firstNumber.join("")).toLocaleString();
    } else {
      if (secondNumber.includes(".") && num.innerText === ".") return;
      if (secondNumber.length === 0 && num.innerText === ".") {
        secondNumber.push("0");
      }
      secondNumber.push(num.innerText);
      output.innerText = Number(secondNumber.join("")).toLocaleString();
    }
  });
});

operations.forEach((el) => {
  el.addEventListener("click", () => {
    if (secondNumber.length > 0) {
      compute();
    }
    if (operation) return;
    if (el.id === "plus") {
      operation = "+";
      output.innerText = output.innerText + " +";
    } else if (el.id === "minus") {
      operation = "-";
      output.innerText = output.innerText + " -";
    } else if (el.id === "div") {
      operation = "/";
      output.innerText = output.innerText + " /";
    } else {
      operation = "*";
      output.innerText = output.innerText + " x";
    }
  });
});

result.addEventListener("click", () => {
  compute();
});

const main = document.querySelector("main");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  if (!main.classList[1]) {
    main.classList.add("theme2");
  } else if (main.classList[1] === "theme2") {
    main.classList.remove("theme2");
    main.classList.add("theme3");
  } else {
    main.classList.remove("theme3");
  }
});
