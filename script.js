"use strict";

function getComputerChoice() {
  const imgContainer = document.querySelector('.computers-choice div');
  const imgOfComputerChoice = document.createElement('img');
  const existingImage = document.querySelector('.computers-choice img');
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

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

// function getHumanChoice() {
//   let humanChoice = prompt("Please choose between rock, paper, or scissors");
//   return humanChoice.toLowerCase();
// }

let computerScore = 0;
let playerScore = 0;

function playRound(computerChoice, humanChoice) {

  const scoreBox = document.querySelector('.score');
  const displayWinner = document.createElement('div');
  const displayScore = document.createElement('p');
  const existingWinner = document.querySelector('.score div');
  const existingScore = document.querySelector('.score p');

  if (existingWinner) {
    scoreBox.removeChild(existingWinner);
  }

  if(existingScore) {
    scoreBox.removeChild(existingScore);
  }

  if ((computerChoice === 'rock' && humanChoice === 'paper') ||
  (computerChoice === 'paper' && humanChoice === 'scissors') ||
  (computerChoice === 'scissors' && humanChoice === 'rock')) {
    displayWinner.textContent = 'You won'
    playerScore++;
  } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
  (computerChoice === 'paper' && humanChoice === 'rock') || 
  (computerChoice === 'scissors' && humanChoice === 'paper')) {
    displayWinner.textContent = 'You lost'
    computerScore++;
  } else {
    displayWinner.textContent = 'Draw'
  }
  
  displayScore.textContent = `Computer: ${computerScore}      Player: ${playerScore}`;
  scoreBox.appendChild(displayScore);
  scoreBox.insertBefore(displayWinner, document.querySelector('.score p'));

  if (computerScore === 3 || playerScore === 3) {
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
