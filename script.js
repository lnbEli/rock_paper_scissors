// create function with array of choices that than can pick one at random

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//create function to select option, checks spelling and makes text case-insensitive.

function getPlayerChoice() {
  let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();

  while (
    playerSelection !== "rock" &&
    playerSelection !== "paper" &&
    playerSelection !== "scissors"
  ) {
    playerSelection = prompt(
      "Please check spelling. Rock, Paper or Scissors?"
    ).toLowerCase();
  }
  return playerSelection;
}

// function to play round of game checking players selections

function checkWinnerOfGame(comp, player) {
  if (comp === "rock" && player === "scissors") {
    return "You lose! Rock beats Scissors";
  } else if (comp === "rock" && player === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (comp === "scissors" && player === "rock") {
    return "You Win! Rock beats Scissors";
  } else if (comp === "scissors" && player === "paper") {
    return "You Loose! Scissors beats Paper";
  } else if (comp === "paper" && player === "rock") {
    return "You Loose! Paper beats Rock";
  } else if (comp === "paper" && player === "scissors") {
    return "You Win! Scissors beats Paper";
  } else {
    return "draw";
  }
}
