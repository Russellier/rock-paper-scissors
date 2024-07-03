"use strict";

function getComputerChoice() {
  const imgContainer = document.querySelector('.computers-choice div');
  const imgOfComputerChoice = document.createElement('img');
  const existingImage = document.querySelector('.computers-choice img');
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  if (gameOver) {
    return;
  }

  if (existingImage) {
    imgContainer.removeChild(existingImage);
  }

  switch(randomNumber) {
    case 0:
      computerChoice = 'rock';
      imgOfComputerChoice.src = 'images/rock.png';
      imgOfComputerChoice.style.transform = 'rotate(-90deg)';
      break;
    case 1:
      computerChoice =  'paper';
      imgOfComputerChoice.src = 'images/paper.png';
      imgOfComputerChoice.style.transform = 'rotate(90deg)';
      break;
    case 2:
      computerChoice =  'scissors';
      imgOfComputerChoice.src = 'images/scissors.png';
      imgOfComputerChoice.style.transform = 'rotate(-90deg)';
      break;
  }

  imgContainer.appendChild(imgOfComputerChoice);
  return computerChoice;
}

function getHumanChoice(e) {
  const button = e.target.closest('button');
  let humanChoice;
  if (button) {
    humanChoice = button.className;
  }
  return humanChoice;
}

let computerScore = 0;
let playerScore = 0;
let gameOver = false;

function playRound(computerChoice, humanChoice) {

  const scoreBox = document.querySelector('.score');
  const displayWinner = document.createElement('div');
  const displayScore = document.createElement('p');
  const existingWinner = document.querySelector('.score div');
  const existingScore = document.querySelector('.score p');

  if (gameOver) {
    return;
  }

  if (existingWinner) {
    scoreBox.removeChild(existingWinner);
  }

  if(existingScore) {
    scoreBox.removeChild(existingScore);
  }  

  if ((computerChoice === 'rock' && humanChoice === 'paper') ||
  (computerChoice === 'paper' && humanChoice === 'scissors') ||
  (computerChoice === 'scissors' && humanChoice === 'rock')) {
    playerScore++;
    if (playerScore < 5) {
      displayWinner.textContent = 'You won'
    }

  } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
  (computerChoice === 'paper' && humanChoice === 'rock') || 
  (computerChoice === 'scissors' && humanChoice === 'paper')) {
    computerScore++;
    if (computerScore < 5) {
      displayWinner.textContent = 'You lost'
    }

  } else {
    displayWinner.textContent = 'Draw'
  }
  
  if (computerScore < 5 && playerScore < 5) {
    displayScore.textContent = `Computer: ${computerScore}      Player: ${playerScore}`;
  } else {
      if (computerScore > playerScore) {
        displayWinner.textContent = 'You lost the game.';
      } else {
        displayWinner.textContent = 'You won the game.';
      }
      displayScore.textContent = 'Click restart to play again.'
      gameOver = true;
  }
  scoreBox.appendChild(displayScore);
  scoreBox.insertBefore(displayWinner, document.querySelector('.score p'));

  if (computerScore === 5 || playerScore === 5) {
    console.log(computerScore > playerScore ? 'Game over. Computer wins!' :
      'Game over. You win!');
  }
}

const playersOptions = document.querySelectorAll('.players-options button');

playersOptions.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice(e);
    playRound(computerChoice, humanChoice);
  });
});

const restartBtn = document.querySelector('.restart-button');
restartBtn.addEventListener('click', () => {
  location.reload();
});