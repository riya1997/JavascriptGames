//Javascript code for Rock paper Scissor Game
let playerScore = 0;
let computerScore = 0;

function rockGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];

  let compChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log("you chose:", playerChoice);
  console.log("computer chose:", compChoice);
  if (compChoice === playerChoice) {
    console.log("It's a draw!");
  } else if (
    (playerChoice === "rock" && compChoice == "scissors") ||
    (playerChoice === "paper" && compChoice == "rock") ||
    (playerChoice === "scissors" && compChoice == "paper")
  ) {
    console.log("You Win");
    playerScore++;
  } else {
    console.log("You Lose");
    computerScore++;
  }
  console.log("Your Score:", playerScore);
  console.log("Computer Score:", computerScore);
}

const args = process.argv.slice(2);
let playerChoice = args[0];
if (["rock", "paper", "scissors"].includes(playerChoice))
  rockGame(playerChoice);
else console.log("wrong choice. Choose rock or paper or scissors");
