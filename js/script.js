//Ivoke Ids from index.html
const firstInput = document.getElementById('digit_1')
const secondInput = document.getElementById('digit_2')
const addSign = document.getElementById('addition')
const subSign = document.getElementById('subtraction')
const multSign = document.getElementById('multiplication');
let totalValue = document.getElementById('result')


addSign.addEventListener('click', function() {

  //Получить значения с input
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  //Если один из инпутов пустой, то выдает alert
  if (usersNumber1 == "" | usersNumber2 == "") {
    alert("Input 1 OR Input 2 is empty");
  }

  //При нажатии на кнопку + получаем ответ
  totalValue = usersNumber1 + usersNumber2;

  //отобразить результат в <p> 
  result.innerHTML = totalValue;

  if (usersNumber1 == "" | usersNumber2 =="") {
    result.innerHTML = null;
  }


})


function subFunction () {
  const usersNumber1 = Number(firstInput.value);
  const usersNumber2 = Number(secondInput.value);

  totalValue = usersNumber1 - usersNumber2;
  result.innerHTML = totalValue;
}  










