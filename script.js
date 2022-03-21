'use strict';

// cria o numero aleatorio entre 1 e 20 --- random gera entre 0 e 1 -- * 20 vai entre 0 e 19 -- +1 para ir de 0 a 20
// trunc remove os decimais
let winningNumber = Math.trunc(Math.random() * 20 + 1);
let userScore = 20;
let highScore = 0;

function updateMessage(newMsg) {
  document.querySelector('.message').textContent = newMsg;
}

function updateScore(newScr) {
  document.querySelector('.score').textContent = newScr;
}

// seleciona o botao e cria um evento que ao clicar nele executa a funcao
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // transforma para numero pq eh string

  if (userScore > 1) {
    // analisa o valor do guess para caso o jogador nao coloque nada, 0 eh falso portando tem q usar o !guess
    if (!guess) {
      updateMessage('No Number 🛑!! ');
      userScore--;
      updateScore(userScore);

      // winning number!  setando o highscore do usuario
    } else if (guess === winningNumber) {
      updateMessage('Congratulations you won ✔✔ !');
      document.querySelector('.number').textContent = guess;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30 rem';
      let userHighScore = Number(
        document.querySelector('.highscore').textContent
      );
      if (userScore > userHighScore) {
        document.querySelector('.highscore').textContent = userScore;
      }

      // menor que o winning number, remove 1 do userScore e coloca ele na tela pra ter um contador de pontos
    } else if (guess !== winningNumber) {
      updateMessage(
        winningNumber > guess
          ? 'The number is higher ⬆ ! '
          : 'The number is lower ⬇ !'
      );
      userScore--;
      updateScore(userScore);
    }
  } else {
    updateMessage('You Lost the Game! ');
    userScore = 0;
    updateScore(userScore);
  }
});

// ao clicar no botao again zerar os parametros pros iniciais!!
document.querySelector('.again').addEventListener('click', function () {
  winningNumber = Math.trunc(Math.random() * 20 + 1);
  updateMessage('Start guessing...');
  updateScore('20');
  userScore = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});
