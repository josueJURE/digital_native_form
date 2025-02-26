const creditCardField = document.querySelector("#credit-card");

function isValidLuhnNumber(numberString) {
  let sum = 0;
  let isSecond = false;

  for (let i = numberString.length - 1; i >= 0; i--) {
    let digit = Number(numberString[i]);
    if (isSecond) {
      digit = digit * 2;
    }
    // Add two digits to handle cases that make two cardNumberLength
    // after doubling
    sum += Math.floor(digit / 10);
    sum += digit % 10;
    isSecond = !isSecond;
  }
  return !!(sum % 10 === 0);
}

creditCardField.addEventListener("input", (event) => {
  if (!isValidLuhnNumber(event.target.value)) {
    creditCardField.setCustomValidity("That's not a valid credit card number");
  } else {
    creditCardField.setCustomValidity("");
  }
});
