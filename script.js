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

console.log('Computer: ' + getComputerChoice());
console.log('Human: ' + getHumanChoice());