let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    const choice = prompt("Enter your choice: Rock, Paper, or Scissors").trim().toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice.charAt(0).toUpperCase() + choice.slice(1);
    } else {
        alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return `it's a tie! You both chose ${humanChoice}.`;
    }

    if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        humanScore++;
        return `You win! ${humanChoice} beats ${computerChoice}.`; 
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        alert(playRound(humanChoice, computerChoice));
        alert(`Score: Human ${humanScore} - ${computerScore} Computer`);
    }

    if (humanScore > computerScore) {
        alert("Congratulations! You are the overall winner");
    } else if (humanScore < computerScore) {
        alert("Better luck next time! The computer is the overall winner.")
    } else {
        alert("It's an overall tie!")
    }
}