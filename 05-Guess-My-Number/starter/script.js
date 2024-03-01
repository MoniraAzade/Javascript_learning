'use strict';
/*
console.log(document.querySelector('.message').textContent); //we have multiple .operators, they are executed from left to right.
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
// const x = function () {
//   //this function will be a function expression.
//   console.log(23);
//};
const againBtn = document.querySelector('.again');
againBtn.addEventListener('click', function () {
  window.location.reload();
});
const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No number!';

    //When the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    console.log(document.querySelector('.message').textContent); //we have multiple .operators, they are executed from left to right.
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
}); /*this  addEventListener method here is a special kind of function.
that's bcz as a second argument it expect this event handler function. need to pass
in a function value as an argument. */
