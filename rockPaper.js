const args = process.argv.slice(2);
let playerChoice = args[0];
if (["rock", "paper", "scissors"].includes(playerChoice))
  rockGame(playerChoice);
else console.log("wrong choice. Choose rock or paper or scissors");

function rockGame(playerChoice) {
  const choices = ["rock", "paper", "scissors"];

  let compChoice = choices[Math.floor(Math.random() * choices.length)];

  if (compChoice === playerChoice) {
    console.log("It's a draw!");
  } else if (
    (playerChoice === "rock" && compChoice == "scissors") ||
    (playerChoice === "paper" && compChoice == "rock") ||
    (playerChoice === "scissors" && compChoice == "paper")
  ) {
    console.log(
      `Output: You chose ${playerChoice}. Computer chose ${compChoice}. You win!`,
    );
  } else {
    console.log(
      `Output: You chose ${playerChoice}. Computer chose ${compChoice}. You Lose`,
    );
  }
}
