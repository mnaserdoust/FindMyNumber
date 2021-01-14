'use strict';

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!!';
  } else if (guess === number) {
    //if the player wins
    document.querySelector('body').style.backgroundColor = '#16a085';
    document.querySelector('.number').textContent = number;
    document.querySelector('.message').textContent = 'Wooow, Correct!!!';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== number) {
    if (score > 1) {
      //if the guess is high
      document.querySelector('.message').textContent =
        guess < number ? 'Is too low!' : 'Is too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//try again
document.querySelector('.again').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#2c3e50';
});
