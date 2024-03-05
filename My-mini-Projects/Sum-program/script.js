const number1 = document.querySelector('.num1');
const number2 = document.querySelector('.num2');
const sumButton = document.querySelector('.sum-button');
const outputOfSum = document.querySelector('.output');

sumButton.addEventListener('click', function () {
  const num1 = Number(number1.value);
  const num2 = Number(number2.value);
  const sum = num1 + num2;
  console.log(sum);
  outputOfSum.innerHTML = `Sum : ${sum}`;
});
