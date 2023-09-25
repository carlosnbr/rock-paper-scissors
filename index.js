let playerScore;
let computerScore;

let rules = { rock: "scissors", paper: "rock", scissors: "paper" };

function getComputerChoice(obj) {
  return Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice)
    return `It's a draw! Both players chose ${playerChoice}`;

  if (computerChoice === rules[playerChoice]) {
    playerScore++;
    console.log(`Your score: ${playerScore}
    Computer score: ${computerScore}`);
    return `You won this round! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    console.log(`Your score: ${playerScore}
    Computer score: ${computerScore}`);
    return `You lost this round! ${computerChoice} beats ${playerChoice}`;
  }
}

function getWinner(playerScore, computerScore) {
    if (playerScore === computerScore) return "The game ended in a draw!"

    if (playerScore > computerScore) {
      return `You have won the game with ${playerScore} points over ${computerScore}`
    } else {
      return `The computer won the game with ${computerScore} points over ${playerScore}`
    }
}

function game() {
  playerScore = 0;
  computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const playerChoice = prompt("Type your choice:");
    const computerChoice = getComputerChoice(rules);

    console.log(playRound(playerChoice, computerChoice));
  }

  return getWinner(playerScore, computerScore)

}

console.log(game());
