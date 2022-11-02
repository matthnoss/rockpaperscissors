function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if(randomNumber > 2) {
        randomNumber = 2;
    } else if(randomNumber < 0) {
        randomNumber = 0;
    }

    switch(randomNumber) {
        case 0:
            computerChoice = "rock"
            return "rock";
        
        case 1:
            computerChoice = "paper"
            return "paper";

        case 2:
            computerChoice = "scissors"
            return "scissors";

        default:
            computerChoice = "confused"
            return "confused";
    }

}

function playRound(userChoice, computerChoice) {

    let customMessage = "The computer chose "  + computerChoice + ", and the user chose " + userChoice + ".";
    console.log(customMessage);

    if(userChoice === "paper" && computerChoice === "rock") {
        console.log("The user won.");
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        console.log("The computer won.");
    } else {
        if(userChoice === "rock" && computerChoice === "scissors") {
            console.log("The user won.");
        } else if (userChoice === "rock" && computerChoice === "paper") {
            console.log("The computer won.");
        } else {
            if(userChoice === "scissors" && computerChoice === "paper") {
                console.log("The user won.");
            } else if (userChoice === "scissors" && computerChoice === "rock") {
                console.log("The computer won.");
            } else {
                console.log("This game is a tie.");
            }
        }
    }


}

function play() {
    let compChoice = getComputerChoice();
    let userChoice = prompt("Enter your choice: ");
    userChoice = userChoice.toLowerCase();
    playRound(userChoice, compChoice);
}

function game() {
    for (let i = 1; i <= 5; i++) {
        play();
    }
}