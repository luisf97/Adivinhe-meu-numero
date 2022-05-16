'use strict';

let secretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(event) {
      const guess = Number(document.querySelector('.guess').value)

      if (!guess) {
        displayMessage('Digite um número!')

      } else if(guess === secretNumber) {
        displayMessage('Número correto!')
        document.querySelector('body').style.backgroundColor = "#60b347"
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if(guess != secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Muito alto...' : 'Muito baixo...')
            score--
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Você perdeu o jogo!')
            document.querySelector('.score').textContent = 0;
        }
      }
})

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20) +1;
    displayMessage('Começar adivinhando...')
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem'
})
