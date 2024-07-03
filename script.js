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
let humanScore = 0;

function playRound(computerChoice, humanChoice) {

  const score = document.querySelector('.score');
  const displayWinner = document.createElement('div');
  const existingWinner = document.querySelector('.score div');

  if (existingWinner) {
    score.removeChild(existingWinner);
  }

  if ((computerChoice === 'rock' && humanChoice === 'paper') ||
  (computerChoice === 'paper' && humanChoice === 'scissors') ||
  (computerChoice === 'scissors' && humanChoice === 'rock')) {
    console.log('You win!');
    displayWinner.textContent = 'You won'
    humanScore++;
  } else if ((computerChoice === 'rock' && humanChoice === 'scissors') ||
  (computerChoice === 'paper' && humanChoice === 'rock') || 
  (computerChoice === 'scissors' && humanChoice === 'paper')) {
    console.log('You lose!');
    displayWinner.textContent = 'You lost'
    computerScore++;
  } else {
    console.log('DRAW!');
    displayWinner.textContent = 'Draw'
  }

  score.insertBefore(displayWinner, document.querySelector('.score p'));

  if (computerScore === 3 || humanScore === 3) {
    console.log(computerScore > humanScore ? 'Game over. Computer wins!' :
      'Game over. You win!');
  }

  console.log('Computer: ' + computerScore + '   Human: ' + humanScore);
}

const playersOptions = document.querySelectorAll('.players-options button');

playersOptions.forEach((choice) => {
  choice.addEventListener('click', (e) => {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice(e);
    playRound(computerChoice, humanChoice);
  });
});
