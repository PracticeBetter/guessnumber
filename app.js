'use strict';
// variables
const randomNumberPicked = document.querySelector('.guess');
const checkBut = document.querySelector('.check');
const message = document.querySelector('.start-guessing');

// let score = 20;
// let highscore = 0;

function init() {
  let score = 20;
  let highscore = 0;
  let randomNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.check').addEventListener('click', function () {
    const userGuess = Number(document.querySelector('.user-guess').value);
    // Entered invalid number
    if (!userGuess) {
      message.textContent = 'Please enter a valid number';
      // If guessed right
    } else if (userGuess === randomNumber) {
      message.textContent = 'You Win!';
      randomNumberPicked.textContent = randomNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
      // If guessed wrong
    } else if (userGuess !== randomNumber) {
      if (score > 1) {
        userGuess > randomNumber
          ? (message.textContent = 'Too High!')
          : (message.textContent = 'Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.score').textContent = 0;
        message.textContent = 'You lost!';
      }
    }
  });
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    message.textContent = 'Start guessing...';
    document.querySelector('.user-guess').value = '';
    document.querySelector('.score').textContent = score;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').textContent = '?';
  });
}

init();
