'use strict';

let secretNumber = Math.trunc(Math.random() * 21);
let highScore = 0;
let score  = 20;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess  = Number (document.querySelector('.guess').value);

  // when there is no inputs  
  if (!guess) {
    displayMessage( '⚠⚠ No number')
  }

// when the player wins 
else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number') ;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
        highScore = score;
        document.querySelector('.highScore').textContent = highScore;
    }
}
// When the player loses

// when input is too high
else if (guess > secretNumber) {
    if (score > 1 ){
        displayMessage('📉 Too high'); 
        score = score - 1 ;
        document.querySelector('.score').textContext = score;
    }   else {
        displayMessage('You lost the game');
        document.querySelector('.score').textContent = 0;
    }
}

// when input is too low
else if (guess < secretNumber) {
    if (score > 1 ) {
        displayMessage('📈 Too low');
           score =  score -  1;
           document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;

    }
   
}
 })

 document.querySelector('.again').addEventListener('click', function(){
     score =  20
     secretNumber = Math.trunc(Math.random() * 21);

     document.querySelector('.message').textContent = 'Start Guessing...'
     document.querySelector('.score').textContent= score
     document.querySelector('.number').textContent= '?'
     document.querySelector('.guess').value = '';

     document.querySelector('body').style.backgroundColor = 'black';
     document.querySelector('.number').style.width = '25rem';

 } );





