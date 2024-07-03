"use strict";

function getComputerChoice() {
  const imgContainer = document.querySelector('.computers-choice div');
  const imgOfComputerChoice = document.createElement('img');
  const existingImage = document.querySelector('.computers-choice img');
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  if (existingImage) {
    console.log("There's an image");
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
  if (computerChoice === 'rock' && humanChoice === 'paper') {
    console.log('You win! Paper beats rock.');
    humanScore++;
  }
  else if (computerChoice === 'rock' && humanChoice === 'scissors') {
    console.log('You lose! Rock beats scissors.');
    computerScore++;
  }
  else if (computerChoice === 'paper' && humanChoice === 'rock') {
    console.log('You lose! Paper beats rock.');
    computerScore++;
  }
  else if (computerChoice === 'paper' && humanChoice === 'scissors') {
    console.log('You win! Scissors beats paper.');
    humanScore++;
  }
  else if (computerChoice === 'scissors' && humanChoice === 'rock') {
    console.log('You win! Rock beats scissors.');
    humanScore++;
  }
  else if (computerChoice === 'scissors' && humanChoice === 'paper') {
    console.log('You lose! Scissors beats paper.');
    computerScore++;
  }
  else {
    console.log('DRAW!');
  }

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

const score = document.querySelector('.score');
const displayWinner = document.createElement('div');
displayWinner.textContent = 'insert winner here'
score.appendChild(displayWinner);