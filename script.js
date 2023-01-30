'use strict';

const number = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const message = document.querySelector('.message');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');

let score = 20;
let highscore = 0;

// Random number from 1 to 20
const generateRandomNumber = () => Math.trunc(Math.random() * 20) + 1;

const displayMessage = (text) => {
  message.textContent = text;
};

let secretNumber = generateRandomNumber();

// Guess number functionallity
btnCheck.addEventListener('click', function () {
  if (score > 1) {
    const guess = Number(document.querySelector('.guess').value);

    // When there's no input
    if (!guess) {
      displayMessage('⛔ No number!');

      // If didn't guess
    } else if (guess !== secretNumber) {
      displayMessage(guess > secretNumber ? '⬆️ Too high!' : '⬇️ Too low!');
      score--;
      scoreEl.textContent = score;

      // If guessed
    } else {
      displayMessage('🎉 You win!');
      number.textContent = secretNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      number.style.width = '30rem';

      // Add a new highscore if current score > highscore
      highscore = score > highscore ? score : highscore;
      highscoreEl.textContent = highscore;
    }
  } else {
    displayMessage('💥 You lost...');
    scoreEl.textContent = 0;
  }
});

// Try again functionality
btnAgain.addEventListener('click', function () {
  secretNumber = generateRandomNumber();
  number.textContent = '?';

  score = 20;
  scoreEl.textContent = score;
  document.querySelector('.guess').value = '';
  highscoreEl.textContent = highscore;

  displayMessage('Start guessing');
  document.querySelector('body').style.backgroundColor = '#222';
  number.style.width = '15rem';
});
