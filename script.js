let numbers = document.querySelectorAll(".number");
let output = document.querySelector(".output");
let acButton = document.querySelector(".AC");
let cButton = document.querySelector(".C");
let equalsButton = document.querySelector(".equals");

function addTextToOuputDiv(e) {
  output.innerText += e.target.innerText;
}

function deleteCompleteOutputText(e) {
  output.innerText = "";
}

function deleteOneCharacterInOutput(e) {
  output.innerText = output.innerText.substring(0, output.innerText.length - 1);
}

for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", addTextToOuputDiv);
}

acButton.addEventListener("click", deleteCompleteOutputText);
cButton.addEventListener("click", deleteOneCharacterInOutput);

// TODO: Implement calculation function
// equalsButton.addEventListener("click", calculate);
