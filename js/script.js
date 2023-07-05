
//Ivoke Ids from index.html
const firstInput = document.getElementById('digit_1')
const secondInput = document.getElementById('digit_2')
const addSign = document.getElementById('addition')
const subSign = document.getElementById('subtraction')
const multSign = document.getElementById('multiplication');
const divSign = document.getElementById('division')
const powSign = document.getElementById('power')
const clearSign = document.getElementById('clear')
const totalValue = document.getElementById('result')


//При клике на знак "+" => вызываем функцию прибавления! 
addSign.addEventListener('click', function() {
  
  //Если хотя бы один из инпутов пустой, то выдаст alert
  if (firstInput.value === "" || secondInput.value === "") {
    alert("Input 1 OR Input 2 is empty");
    return;
  }

  //Получить значения с input
  const usersNumber1 = firstInput.value;
  const usersNumber2 = secondInput.value;
  
  //Переформатируем в числа значения с input  
  const num1 = Number(usersNumber1);
  const num2 = Number(usersNumber2);
  
  //При нажатии на кнопку + получаем ответ
  const sum = num1 + num2;

  //отобразить результат в <p> tag
  totalValue.innerHTML = sum; 

})

//При нажатии на знак "-" вызываем функцию вычитания
subSign.addEventListener('click', function() {
  
  //Если хотя бы один input не введен то выдаст ошибку
  if (firstInput.value === "" || secondInput.value === "") {
    alert("Input 1 OR Input 2 is empty");   
    return;
  }
  
  //извлекаем числа из инпутов
  const usersNumber1 = firstInput.value;
  const usersNumber2 = secondInput.value;
  
  //форматируем input в номера
  const num1 = Number(usersNumber1);
  const num2 = Number(usersNumber2);
  
  //Вычитаем числа и получаем конечное число
  const sum = num1 - num2;
  
  //Выводим конечное число в <p> tag
  totalValue.innerHTML = sum;

})

multSign.addEventListener('click', function() {
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  if (usersNumber1 == "" || usersNumber2 == "") {
    alert("Input 1 OR Input 2 is empty");
  }

  totalValue = usersNumber1 * usersNumber2;

  result.innerHTML = totalValue.toFixed(2);
  
  if (usersNumber1 == "" || usersNumber2 =="") {
    result.innerHTML = null;
  }

})

divSign.addEventListener('click', function() {
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  if (usersNumber1 == "" || usersNumber2 == "") {
    alert("Input 1 OR Input 2 is empty");
  }

  totalValue = usersNumber1 / usersNumber2;

  result.innerHTML = totalValue.toFixed(2);
  
  if (usersNumber1 == "" || usersNumber2 =="") {
    result.innerHTML = null;
  }

})


powSign.addEventListener('click', function() {
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  if (usersNumber1 == "" || usersNumber2 == "") {
    alert("Input 1 OR Input 2 is empty");
  }

  let totalValue = Math.pow(usersNumber1, usersNumber2);

  result.innerHTML = totalValue.toFixed(2);

  if (usersNumber1 == "" || usersNumber2 =="") {
    result.innerHTML = null;
  }

})

clearSign.addEventListener('click', function() {
  firstInput.value = "";
  secondInput.value = "";
  result.innerHTML = null;
})









