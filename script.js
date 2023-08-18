//DOM

const options = document.querySelectorAll(".btn");

// function logText(e) {
//   console.log(this.dataset.name);
// }

options.forEach((el) => {
  el.addEventListener("click", getPlayerChoice);
});

// create function with array of choices that than can pick one at random

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//create function to select option, checks spelling and makes text case-insensitive.

function getPlayerChoice() {
  let playerSelection = this.dataset.name;

  console.log(playerSelection);

  //prompt("Rock, Paper or Scissors?").toLowerCase();

  // while (
  //   playerSelection !== "rock" &&
  //   playerSelection !== "paper" &&
  //   playerSelection !== "scissors"
  // ) {
  //   playerSelection = prompt(
  //     "Please check spelling. Rock, Paper or Scissors?"
  //   ).toLowerCase();
  // }
  return checkWinnerOfGame(playerSelection);
}

// function to play round of game checking players selections
//comp, player

function checkWinnerOfGame(player) {
  let comp = getComputerChoice();
  if (comp === "rock" && player === "scissors") {
    console.log("You lose! Rock beats Scissors");
    return (winner = "comp");
  } else if (comp === "rock" && player === "paper") {
    console.log("You Win! Scissors beats Paper");
    return (winner = "player");
  } else if (comp === "scissors" && player === "rock") {
    console.log("You Win! Rock beats Scissors");
    return (winner = "player");
  } else if (comp === "scissors" && player === "paper") {
    console.log("You Loose! Scissors beats Paper");
    return (winner = "comp");
  } else if (comp === "paper" && player === "rock") {
    console.log("You Loose! Paper beats Rock");
    return (winner = "comp");
  } else if (comp === "paper" && player === "scissors") {
    console.log("You Win! Scissors beats Paper");
    return (winner = "player");
  } else {
    console.log("draw");
    return (winner = "");
  }
}

// create function that plays 5 rounds(loops)and reports winner at the end.

// function game() {
//   let playerSelection;
//   let computerSelection;
//   let winner;
//   let compScore = 0;
//   let playerScore = 0;

//   for (let i = 0; i < 5; i++) {
//     playerSelection = getPlayerChoice();
//     computerSelection = getComputerChoice();
//     winner = checkWinnerOfGame(computerSelection, playerSelection);
//     if (winner === "comp") {
//       compScore++;
//     } else if (winner === "player") {
//       playerScore++;
//     }
//   }
//   return compScore === playerScore
//     ? `Draw ${playerScore}:${compScore}`
//     : compScore > playerScore
//     ? `You loose ${playerScore}:${compScore}`
//     : `You win ${playerScore}:${compScore}`;
// }
