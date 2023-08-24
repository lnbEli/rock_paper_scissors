//DOM

const options = document.querySelectorAll(".btn");
const compChoice = document.querySelector(".comp-choice");
options.forEach((btn) => {
  btn.addEventListener("click", getPlayerChoice);
});
const compScoreHTML = document.querySelector(".computer-score");
const playerScoreHTML = document.querySelector(".player-score");
const winner = document.querySelector(".results");
const gameOver = document.querySelector(".game-over");

// create function with array of choices that than can pick one at random

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//create function to select option, checks spelling and makes text case-insensitive.No longer need to check speeling as using buttons.

function getPlayerChoice() {
  let playerSelection = this.dataset.name;
  return checkWinnerOfGame(playerSelection);
}

// function to play round of game checking players selections
//comp, player

function checkWinnerOfGame(player) {
  gamesPlayed++;

  let comp = getComputerChoice();

  if (comp === "rock" && player === "scissors") {
    winner.textContent = "You lose! Rock beats Scissors";
    compChoice.textContent = comp;
    compScore++;
    compScoreHTML.textContent = compScore;
  } else if (comp === "rock" && player === "paper") {
    winner.textContent = "You Win! Paper beats rock";
    compChoice.textContent = comp;
    playerScore++;
    playerScoreHTML.textContent = playerScore;
  } else if (comp === "scissors" && player === "rock") {
    winner.textContent = "You Win! Rock beats Scissors";
    compChoice.textContent = comp;
    playerScore++;
    playerScoreHTML.textContent = playerScore;
  } else if (comp === "scissors" && player === "paper") {
    winner.textContent = "You Loose! Scissors beats Paper";
    compChoice.textContent = comp;
    compScore++;
    compScoreHTML.textContent = compScore;
  } else if (comp === "paper" && player === "rock") {
    winner.textContent = "You Loose! Paper beats Rock";
    compChoice.textContent = comp;
    compScore++;
    compScoreHTML.textContent = compScore;
    //return (winner.textContent = "comp");
  } else if (comp === "paper" && player === "scissors") {
    winner.textContent = "You Win! Scissors beats Paper";
    compChoice.textContent = comp;
    playerScore++;
    playerScoreHTML.textContent = playerScore;
  } else {
    winner.textContent = "draw";
    compChoice.textContent = comp;
    compScoreHTML.textContent = compScore;
    playerScoreHTML.textContent = playerScore;
  }
  keepScores();
}

//create function that plays 5 rounds(loops)and reports winner at the end.

let compScore = 0;
let playerScore = 0;
let gamesPlayed = 0;

function keepScores() {
  if (gamesPlayed === 5 && compScore === playerScore) {
    gameOver.textContent = `Draw ${playerScore}:${compScore}`;
    openModal();
  } else if (gamesPlayed === 5 && compScore > playerScore) {
    gameOver.textContent = `You loose ${playerScore}:${compScore}`;
    openModal();
  } else if (gamesPlayed === 5 && compScore < playerScore) {
    gameOver.textContent = `You win ${playerScore}:${compScore}`;
    openModal();
  } else {
    return;
  }
}

//Add modal window that pops up when match won

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
}

span.addEventListener("click", resetGame);

//add function that closes modal window and resets game

function resetGame() {
  compScore = 0;
  playerScore = 0;
  gamesPlayed = 0;
  compChoice.textContent = "????";
  winner.textContent = "????";
  compScoreHTML.textContent = compScore;
  playerScoreHTML.textContent = playerScore;
}
