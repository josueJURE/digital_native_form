

function checkLuhnCardNumber (cardNumberString) {
    let sum = 0;
    let isSecond = false;
    for (let i = cardNumberString.length - 1; i >= 0; i--) {
      let digit = Number(cardNumberString[i]);
      if (isSecond) {
        digit = digit * 2;
      }
      // Add two digits to handle cases that make two cardNumberLength
      // after doubling
      sum += Math.floor(digit / 10);
      sum += digit % 10;
      isSecond = !isSecond;
    }
    return (sum % 10 === 0);
  }