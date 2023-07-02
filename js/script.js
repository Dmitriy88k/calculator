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
const firstInputErrorText = document.getElementById('input-error-1')

// 1. Не показывать алерт, а отображать как ошибку под инпутом
// 2. Изменить стили
// 3. переписать остальные функции как addSign

firstInput.addEventListener('input', (event) => {
  const value = event.target.value

  if (!value) {
    event.target.style.border = "1px solid red";
    firstInputErrorText.style.display = 'inline';
  } else {
    firstInput.style.border = "none";
    firstInputErrorText.style.display = 'none';
  }
})

addSign.addEventListener("click", function () {
  if (firstInput.value === "" || secondInput.value === "") {
    return;
  }

  //Получить значения с input
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  //При нажатии на кнопку + получаем ответ
  const sum = usersNumber1 + usersNumber2;

  //отобразить результат в <p>
  totalValue.innerHTML = sum;
});

subSign.addEventListener("click", function () {
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  if (usersNumber1 == "" || usersNumber2 == "") {
    alert("Input 1 OR Input 2 is empty");
  }

  totalValue.innerHTML = usersNumber1 - usersNumber2;

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

  totalValue.innerHTML = usersNumber1 * usersNumber2;

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

  totalValue.innerHTML = usersNumber1 / usersNumber2;

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

  totalValue.innerHTML = Math.pow(usersNumber1, usersNumber2)

  if (usersNumber1 == "" || usersNumber2 == "") {
    totalValue.innerHTML = null;
  }
});

clearSign.addEventListener("click", function () {
  firstInput.value = "";
  secondInput.value = "";
  result.innerHTML = null;
});
