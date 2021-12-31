let numbers = document.querySelectorAll(".number");
let output = document.querySelector(".output");
let acButton = document.querySelector(".AC");
let cButton = document.querySelector(".C");
let equalsButton = document.querySelector(".equals");
let operations = document.querySelectorAll(".operation");

//Adds character when buttons get pressed
function addTextToOuputDiv(e) {
  output.innerText += e.target.innerText;
}

//Resets calculator
function deleteCompleteOutputText(e) {
  output.innerText = "";
}

//Removes last character
function deleteOneCharacterInOutput(e) {
  output.innerText = output.innerText.substring(0, output.innerText.length - 1);
}

//Main calculation when "=" is pressed
function calculate(e) {
  let num1 = parseInt(output.innerText.substring(0, 1));
  let num2 = parseInt(output.innerText.substring(1, 2));
  let operation = output.innerText.substring(2, 3);

  switch (operation) {
    case "+":
      if (num1 + num2 < 99999999) {
        output.innerText = num1 + num2;
      } else {
        output.innerText = "ERR!";
      }

      break;
    case "-":
      output.innerText = num1 - num2;
      break;
    case "*":
      if (num1 * num2 < 99999999) {
        output.innerText = num1 * num2;
      } else {
        output.innerText = "ERR!";
      }
      break;
    case "/":
      if (num1 / num2 < 99999999) {
        output.innerText = num1 / num2;
      } else {
        output.innerText = "ERR!";
      }
      break;
  }
}

// ----Adding EventListeners to every button----

//EventListeners for number buttons
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", addTextToOuputDiv);
}

//EventListeners for operation button
for (var i = 0; i < operations.length; i++) {
  operations[i].addEventListener("click", addTextToOuputDiv);
}

//EventListener for complete deletion button
acButton.addEventListener("click", deleteCompleteOutputText);

//EventListener for deletion button
cButton.addEventListener("click", deleteOneCharacterInOutput);

//EventListener for equals button
equalsButton.addEventListener("click", calculate);
