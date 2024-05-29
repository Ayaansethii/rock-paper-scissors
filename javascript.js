console.log("Welcome to Rock paper sissors!");
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


console.log("Welcome to Rock Paper Scissors!");

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

function getHumanChoice() {
    let userInput;
    do {
        userInput = prompt("Enter your selection (rock/paper/scissors):").toLowerCase();
        if (userInput !== "rock" && userInput !== "scissors" && userInput !== "paper") {
            alert("Invalid input! Please enter rock, paper, or scissors.");
        }
    } while (userInput !== "rock" && userInput !== "scissors" && userInput !== "paper");
    return userInput;
}



function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    if (humanChoice === computerChoice) {
        console.log("TIE! You and Computer both selected " + computerChoice + ".");
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
            console.log("Computer Wins! " + computerChoice + " beats " + humanChoice + ".");
            computerScore++;
        } else {
            console.log("You Win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
            console.log("Computer Wins! " + computerChoice + " beats " + humanChoice + ".");
            computerScore++;
        } else {
            console.log("You Win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
            console.log("Computer Wins! " + computerChoice + " beats " + humanChoice + ".");
            computerScore++;
        } else {
            console.log("You Win! " + humanChoice + " beats " + computerChoice + ".");
            humanScore++;
        }
    }
    return { humanScore, computerScore };
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    
        let scores = playRound(humanChoice, computerChoice, humanScore, computerScore);
        humanScore = scores.humanScore;
        computerScore = scores.computerScore;
    }
    console.log("Final Scores:");
    console.log("You: " + humanScore);
    console.log("Computer: " + computerScore);
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game.");
    } else if (computerScore > humanScore) {
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();



