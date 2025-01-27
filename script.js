function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
};

function getHumanChoice() {
    const choice = prompt("Enter your choice: Rock, Paper, or Scissors").trim().toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
    };
};



function playGame() {
    let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        return "It's a tie!"
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore++; 
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++; 
    };
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
    };
    
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
