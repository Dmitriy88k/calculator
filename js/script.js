
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
const warningSign = document.getElementById('warning')





//При клике на знак "+" => вызываем функцию прибавления! 
addSign.addEventListener('click', function() {
  
  //Если хотя бы один из инпутов пустой, то выдаст alert
  if (!firstInput.value) {
    firstInput.style.border = '2px solid red';
    warningSign.style.visibility = 'visible';
    firstInput.placeholder="Enter a number";
  }

  if (!secondInput.value) {
    secondInput.style.border = '2px solid red';
    warningSign.style.visibility = 'visible';
    secondInput.placeholder="Enter a number";
  }

  if (firstInput.value === "" || secondInput.value === "") {
    
    return;
  }

  firstInput.style.border = 'none';
  secondInput.style.border = 'none';
  warningSign.style.display = 'none';
  firstInput.placeholder = 'Input 1';
  secondInput.placeholder = 'Input 2';

  //Получить значения с input
  const usersNumber1 = firstInput.value;
  const usersNumber2 = secondInput.value;
  
  //Форматируем input в номера
  const num1 = Number(usersNumber1);
  const num2 = Number(usersNumber2);
  
  //При нажатии на кнопку + получаем ответ
  const sum = num1 + num2;

  //отобразить результат в <p> tag
  totalValue.innerHTML = sum; 

})

//При нажатии на знак "-" вызываем функцию вычитания!
subSign.addEventListener('click', function() {
  
  //Если хотя бы один из инпутов пустой, то выдаст alert
  if (!firstInput.value) {
    firstInput.style.border = '2px solid red';
    warningSign.style.visibility = 'visible';
    firstInput.placeholder="Enter a number";
  }

  if (!secondInput.value) {
    secondInput.style.border = '2px solid red';
    warningSign.style.visibility = 'visible';
    secondInput.placeholder="Enter a number";
  }

  if (firstInput.value === "" || secondInput.value === "") {
    
    return;
  }

  firstInput.style.border = 'none';
  secondInput.style.border = 'none';
  warningSign.style.display = 'none';
  firstInput.placeholder = 'Input 1';
  secondInput.placeholder = 'Input 2';
  
  //Получить значения с input
  const usersNumber1 = firstInput.value;
  const usersNumber2 = secondInput.value;
  
  //Форматируем input в номера
  const num1 = Number(usersNumber1);
  const num2 = Number(usersNumber2);
  
  //При нажатии на кнопку - получаем ответ
  const sum = num1 - num2;
  
  //отобразить результат в <p> tag
  totalValue.innerHTML = sum;

})


//При нажатии на знак "*" вызываем функцию умножения!
multSign.addEventListener('click', function() {

  //Если хотя бы один из инпутов пустой, то выдаст alert
  if (!firstInput.value) {
    firstInput.style.border = '2px solid red';
    warningSign.style.visibility = 'visible';
    firstInput.placeholder="Enter a number";
  }

  if (!secondInput.value) {
    secondInput.style.border = '2px solid red';
    warningSign.style.visibility = 'visible';
    secondInput.placeholder="Enter a number";
  }

  if (firstInput.value === "" || secondInput.value === "") {
    
    return;
  }

  firstInput.style.border = 'none';
  secondInput.style.border = 'none';
  warningSign.style.display = 'none';
  firstInput.placeholder = 'Input 1';
  secondInput.placeholder = 'Input 2';

  //Получить значения с input
  const usersNumber1 = firstInput.value;
  const usersNumber2 = secondInput.value;

  //Форматируем input в номера
  const num1 = Number(usersNumber1);
  const num2 = Number(usersNumber2);

  //При нажатии на кнопку * получаем ответ
  const sum = num1 * num2;

  //отобразить результат в <p> tag
  totalValue.innerHTML = sum;
  
})


//При нажатии на знак "/" вызываем функцию деления!
divSign.addEventListener('click', function() {

  //Если хотя бы один из инпутов пустой, то выдаст alert
  if (!firstInput.value) {
    firstInput.style.border = '2px solid red';
    warningSign.style.visibility = 'visible';
    firstInput.placeholder="Enter a number";
  }

  if (!secondInput.value) {
    secondInput.style.border = '2px solid red';
    warningSign.style.visibility = 'visible';
    secondInput.placeholder="Enter a number";
  }

  if (firstInput.value === "" || secondInput.value === "") {
    
    return;
  }

  firstInput.style.border = 'none';
  secondInput.style.border = 'none';
  warningSign.style.display = 'none';
  firstInput.placeholder = 'Input 1';
  secondInput.placeholder = 'Input 2';


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
  if (!firstInput.value) {
    firstInput.style.border = '2px solid red';
    warningSign.style.visibility = 'visible';
    firstInput.placeholder="Enter a number";
  }

  if (!secondInput.value) {
    secondInput.style.border = '2px solid red';
    warningSign.style.visibility = 'visible';
    secondInput.placeholder="Enter a number";
  }

  if (firstInput.value === "" || secondInput.value === "") {
    
    return;
  }

  firstInput.style.border = 'none';
  secondInput.style.border = 'none';
  warningSign.style.display = 'none';
  firstInput.placeholder = 'Input 1';
  secondInput.placeholder = 'Input 2';

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
  firstInput.style.border = 'none';
  secondInput.style.border = 'none';
  warningSign.style.visibility = 'hidden';
  firstInput.placeholder = 'Input 1';
  secondInput.placeholder = 'Input 2';
})









