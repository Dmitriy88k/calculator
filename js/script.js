
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
  
  //Форматируем input в номера
  const num1 = Number(usersNumber1);
  const num2 = Number(usersNumber2);
  
  //При нажатии на кнопку + получаем ответ
  const sum = num1 + num2;

  //отобразить результат в <p> tag
  totalValue.innerHTML = sum.toFixed(2); 

})

//При нажатии на знак "-" вызываем функцию вычитания!
subSign.addEventListener('click', function() {
  
  //Если хотя бы один из инпутов пустой, то выдаст alert
  if (firstInput.value === "" || secondInput.value === "") {
    alert("Input 1 OR Input 2 is empty");   
    return;
  }
  
  //Получить значения с input
  const usersNumber1 = firstInput.value;
  const usersNumber2 = secondInput.value;
  
  //Форматируем input в номера
  const num1 = Number(usersNumber1);
  const num2 = Number(usersNumber2);
  
  //При нажатии на кнопку - получаем ответ
  const sum = num1 - num2;
  
  //отобразить результат в <p> tag
  totalValue.innerHTML = sum.toFixed(2);

})


//При нажатии на знак "*" вызываем функцию умножения!
multSign.addEventListener('click', function() {
  //Если хотя бы один из инпутов пустой, то выдаст alert
  if (firstInput.value === "" || secondInput.value === "") {
    alert("Input 1 OR Input 2 is empty");

    return;
  }

  //Получить значения с input
  const usersNumber1 = firstInput.value;
  const usersNumber2 = secondInput.value;

  //Форматируем input в номера
  const num1 = Number(usersNumber1);
  const num2 = Number(usersNumber2);

  //При нажатии на кнопку * получаем ответ
  const sum = num1 * num2;

  //отобразить результат в <p> tag
  totalValue.innerHTML = sum.toFixed(2);
  
})


//При нажатии на знак "/" вызываем функцию деления!
divSign.addEventListener('click', function() {

//Если хотя бы один из инпутов пустой, то выдаст alert
  if (firstInput.value === "" || secondInput.value === "") {
    alert("Input 1 OR Input 2 is empty");

    return;
  }

  //Получить значения с input
  const usersNumber1 = firstInput.value;
  const usersNumber2 = secondInput.value;

  //Форматируем input в номера
  const num1 = Number(usersNumber1);
  const num2 = Number(usersNumber2);

  //При нажатии на кнопку "/" получаем ответ
  const sum = num1 / num2;
  
  //отобразить результат в <p> tag
  totalValue.innerHTML = sum.toFixed(2);
})


powSign.addEventListener('click', function() {
  //Если хотя бы один из инпутов пустой, то выдаст alert
  if (firstInput.value === "" || secondInput.value === "") {
    alert("Input 1 OR Input 2 is empty");

    return;
  }

  //Получить значения с input
  const usersNumber1 = firstInput.value;
  const usersNumber2 = secondInput.value;

  //Форматируем input в номера
  const num1 = Number(usersNumber1);
  const num2 = Number(usersNumber2);

  //При нажатии на кнопку "pow" получаем ответ
  const sum = Math.pow(num1, num2);

  //отобразить результат в <p> tag
  totalValue.innerHTML = sum;
})

clearSign.addEventListener('click', function() {
  firstInput.value = "";
  secondInput.value = "";
  result.innerHTML = null;
})









