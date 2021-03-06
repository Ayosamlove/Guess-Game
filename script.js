'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function (e) {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'âNo Number!';
  } else if (guess === number) {
    document.querySelector('.message').textContent = 'ð Correct Number!';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = number;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'ð Number is too high!' : 'ð Number is too low!';
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'ð¥ You lost the game!';

      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', function (e) {
  number = Math.trunc(Math.random() * 20) + 1;

  score = 20;

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'ð¤ Start guessing...';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
