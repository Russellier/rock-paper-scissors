"use strict";

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  switch(randomNumber) {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice =  'paper';
      break;
    case 2:
      computerChoice =  'scissors';
      break;
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Please choose between rock, paper, or scissors");
  return humanChoice.toLowerCase();
}

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

  console.log('Computer: ' + computerScore + '   Human: ' + humanScore);
}

playRound();