let humanScore = 0;
let computerScore = 0;
const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorButton = document.getElementById("scissorsBtn");
const roundResult = document.getElementById("RoundResultsMessage");
const userScoreBoard = document.getElementById("userScoreboard");
const computerScoreBoard = document.getElementById("computerScoreboard");
const newGameButton = document.getElementById("newGameBtn");

function getComputerChoice() {
    let computerAction = Math.floor(Math.random() * 3);
    switch (computerAction) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

rockButton.addEventListener("click", function () {
    playGame("rock");
    animateButton("rockBtn");
});

paperButton.addEventListener("click", function () {
    playGame("paper");
    animateButton("paperBtn");
});

scissorButton.addEventListener("click", function () {
    playGame("scissors");
    animateButton("scissorsBtn");
});

function playRound(humanChoice, computerChoice) {
    let resultMessage;
    if (humanChoice === computerChoice) {
        resultMessage = "TIE! You and Computer both selected " + computerChoice + ".";
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            resultMessage = "Computer Wins! " + computerChoice + " beats " + humanChoice + ".";
            computerScore++;
        } else {
            resultMessage = "You Win! " + humanChoice + " beats " + computerChoice + ".";
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            resultMessage = "Computer Wins! " + computerChoice + " beats " + humanChoice + ".";
            computerScore++;
        } else {
            resultMessage = "You Win! " + humanChoice + " beats " + computerChoice + ".";
            humanScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            resultMessage = "Computer Wins! " + computerChoice + " beats " + humanChoice + ".";
            computerScore++;
        } else {
            resultMessage = "You Win! " + humanChoice + " beats " + computerChoice + ".";
            humanScore++;
        }
    }
    roundResult.textContent = resultMessage;
    return { humanScore, computerScore };
}

function updateScoreBoard(userScore, computerScore) {
    userScoreBoard.textContent = userScore;
    computerScoreBoard.textContent = computerScore;
}

function endGame() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
    newGameButton.style.display = "inline";
}

function newGame() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorButton.disabled = false;
    newGameButton.style.display = "none";
    roundResult.textContent = '';
    humanScore = 0;
    computerScore = 0;
    updateScoreBoard(humanScore, computerScore);
}

newGameButton.addEventListener("click", newGame);

function playGame(humanInput) {
    let userChoice = humanInput;
    let computerChoice = getComputerChoice();
    let scores = playRound(userChoice, computerChoice);
    humanScore = scores.humanScore;
    computerScore = scores.computerScore;
    updateScoreBoard(humanScore, computerScore);
    if (humanScore >= 5 || computerScore >= 5) {
        endGame();
    }
}

function animateButton(buttonId) {
    const button = document.getElementById(buttonId).querySelector('img');
    button.classList.add('animate-move');
    button.addEventListener('animationend', () => {
        button.classList.remove('animate-move');
    }, { once: true });
}
