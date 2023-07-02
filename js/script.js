//Ivoke Ids from index.html
const firstInput = document.getElementById('digit_1')
const secondInput = document.getElementById('digit_2')
const addSign = document.getElementById('addition')
const subSign = document.getElementById('subtraction')
const multSign = document.getElementById('multiplication');
const divSign = document.getElementById('division')
const powSign = document.getElementById('power')
const clearSign = document.getElementById('clear')
let totalValue = document.getElementById('result')



addSign.addEventListener('click', function() {

  //Получить значения с input
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);


  //Если один из инпутов пустой, то выдает alert
  if (usersNumber1 == "" || usersNumber2 == "") {
    alert("Input 1 OR Input 2 is empty");
  }

  //При нажатии на кнопку + получаем ответ
  totalValue = usersNumber1 + usersNumber2;

  //отобразить результат в <p> 
  result.innerHTML = totalValue.toFixed(2);

  if (usersNumber1 == "" || usersNumber2 =="") {
    result.innerHTML = null;
  }

})


subSign.addEventListener('click', function() {
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  if (usersNumber1 == "" || usersNumber2 == "") {
    alert("Input 1 OR Input 2 is empty");
  }

  totalValue = usersNumber1 - usersNumber2;

  result.innerHTML = totalValue.toFixed(2);
  
  if (usersNumber1 == "" || usersNumber2 =="") {
    result.innerHTML = null;
  }

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









