'use strict';

let secretNumber = Math.trunc(Math.random() * 21);
let highScore = 0;
let score  = 20;

document.querySelector('.check').addEventListener('click', function () {
    const guess  = Number (document.querySelector('.guess').value);

  // when there is no inputs  
  if (!guess) {
    document.querySelector('.message').textContent = '⚠⚠ No number';
  }

// when the player wins 
else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';#

    if (score > highScore) {
        highScore = score;
        document.querySelector('.highScore').textContent = highScore;
    }
}

// when input is too high
else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📉 Too high'

    if (score > 1 )
}

// when input is too low
else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📈 Too low'
}


 })






