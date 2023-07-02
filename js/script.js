//Ivoke Ids from index.html
const firstInput = document.getElementById("digit_1");
const secondInput = document.getElementById("digit_2");
const addSign = document.getElementById("addition");
const subSign = document.getElementById("subtraction");
const multSign = document.getElementById("multiplication");
const divSign = document.getElementById("division");
const powSign = document.getElementById("power");
const clearSign = document.getElementById("clear");
const totalValue = document.getElementById("result");
const firstInputErrorText = document.getElementById("input-error-1");

// 1. Не показывать алерт, а отображать как ошибку под инпутом
// 2. Изменить стили
// 3. переписать остальные функции как addSign

function add() {
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  return usersNumber1 + usersNumber2;
}

function updateResult (newResult) {
  totalValue.innerHTML = newResult.toFixed(2);
}

// variant 1 - use keypress
document.body.addEventListener("keyup", (event) => {
  if (event.code === "Equal" && event.shiftKey) {
    updateResult(add())
  }
});

firstInput.addEventListener("input", (event) => {
  const value = event.target.value;

  if (isNaN(Number(value))) {
    firstInput.value = value.replace(/[^\d.-]+/g, '');
  }

  if (!value) {
    event.target.style.border = "1px solid red";
    firstInputErrorText.style.display = "inline";
  } else {
    firstInput.style.border = "none";
    firstInputErrorText.style.display = "none";
  }
});

addSign.addEventListener("click", function (event) {
  if (firstInput.value === "" || secondInput.value === "") {
    return;
  }

  updateResult(add());
});

subSign.addEventListener("click", function () {
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  if (usersNumber1 == "" || usersNumber2 == "") {
    alert("Input 1 OR Input 2 is empty");
  }

  totalValue.innerHTML = (usersNumber1 - usersNumber2).toFixed(2);

  if (usersNumber1 == "" || usersNumber2 == "") {
    totalValue.innerHTML = null;
  }
});

multSign.addEventListener("click", function () {
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  if (usersNumber1 == "" || usersNumber2 == "") {
    alert("Input 1 OR Input 2 is empty");
  }

  totalValue.innerHTML = (usersNumber1 * usersNumber2).toFixed(2);

  if (usersNumber1 == "" || usersNumber2 == "") {
    totalValue.innerHTML = null;
  }
});

divSign.addEventListener("click", function () {
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  if (usersNumber1 == "" || usersNumber2 == "") {
    alert("Input 1 OR Input 2 is empty");
  }

  totalValue.innerHTML = (usersNumber1 / usersNumber2).toFiaxed(2);

  if (usersNumber1 == "" || usersNumber2 == "") {
    totalValue.innerHTML = null;
  }
});

powSign.addEventListener("click", function () {
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  if (usersNumber1 == "" || usersNumber2 == "") {
    alert("Input 1 OR Input 2 is empty");
  }

  totalValue.innerHTML = Math.pow(usersNumber1, usersNumber2);

  if (usersNumber1 == "" || usersNumber2 == "") {
    totalValue.innerHTML = null;
  }
});

clearSign.addEventListener("click", function () {
  firstInput.value = "";
  secondInput.value = "";
  result.innerHTML = null;
});
