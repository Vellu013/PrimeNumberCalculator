var numero = document.getElementById("number");
calcButton.addEventListener("click", divide);

function divide() {
  var number = parseFloat(numero.value) || 0;
  if(number > 1)
  {
    output.innerHTML = "";
    var divide = 0;
    var preNumber = 0;
    var numberLenght = getLenght(number);
    while(1 == 1) {
      var preNumberLenght = getLenght(number);
      preNumber = number;
      if(number%2 == 0) {
        divide = 2;
        number = number / 2;
      } else if(number%3 == 0)
      {
        divide = 3;
        number = number / 3;
      } else if(number%5 == 0)
      {
        divide = 5;
        number = number / 5;
      } else if(number%7 == 0)
      {
        divide = 7;
        number = number / 7;
      } else if(number%11 == 0)
      {
        divide = 11;
        number = number / 11;
      } else {
        divide = number;
        number = number / number;
      }
      if(preNumber != 1)
      {
        if(numberLenght - preNumberLenght == 0) {
          output.innerHTML += preNumber;
          output.innerHTML += "|";
          output.innerHTML += divide + "<br>";
        }
        if(numberLenght - preNumberLenght != 0) {
          output.innerHTML += preNumber;
          for (var i = 0; i < numberLenght - preNumberLenght; i++) {
            output.innerHTML += "&nbsp&nbsp";
          }
          output.innerHTML += "|" + divide + "<br>";
        }
      }
      if(preNumber == 1)
      {
        output.innerHTML += "1";
        for (var i = 0; i < numberLenght - preNumberLenght; i++) {
          output.innerHTML += "&nbsp&nbsp";
        }
        output.innerHTML += "|";
        break
      }
    } //loop
  }
}







function getLenght(x) {
  return (Math.log10((x ^ (x >> 31)) - (x >> 31)) | 0) + 1;
}
