let playerScore = 0;
let computerScore = 0;

let rules = { rock: "scissors", paper: "rock", scissors: "paper" };

const outcome = document.querySelector('#round-outcome');
const pScore = document.querySelector('#player-score');
const cScore = document.querySelector('#computer-score');
const winner = document.querySelector('#winner');

function getComputerChoice(obj) {
  return Object.keys(obj)[(Math.random() * Object.keys(obj).length) | 0];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    outcome.textContent = `It's a draw! Both selected ${playerChoice}`;
  } else if(computerChoice === rules[playerChoice]) {
    playerScore++;
    pScore.textContent = playerScore;
    outcome.textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}, you win!`;
  } else {
    computerScore++;
    cScore.textContent = computerScore;
    outcome.textContent = `You chose ${playerChoice}, the computer chose ${computerChoice}, you lose!`;
  }
  checkWinner(playerScore, computerScore);
}

function checkWinner(playerScore, computerScore) {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      winner.textContent =  `You have reached 5 points, you won!`;
    } else {
      winner.textContent =  `The computer has reached 5 points, you lost!`;
    }
  }
}

function game() {
  playerScore = 0;
  computerScore = 0;

  // for (let i = 0; i < 5; i++) {
  //   const playerChoice = prompt("Type your choice:");
  //   const computerChoice = getComputerChoice(rules);

  //   console.log(playRound(playerChoice, computerChoice));
  // }

  return checkWinner(playerScore, computerScore);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    playRound(e.target.id, getComputerChoice(rules))
  });
});


