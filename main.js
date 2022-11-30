const resultsDiv = document.getElementById('results');
const userScoreHTML = document.getElementById('usrScore');
const compScoreHTML = document.getElementById('compScore');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const buttons = document.querySelectorAll('button');

let userScore = 0;
let computerScore = 0;
let scoreDisplayed = false;

function increaseScore(user){
    if(user === 'user'){
        userScore += 1;
        userScoreHTML.textContent = userScore;
    } else if(user === 'computer') {
        computerScore += 1;
        compScoreHTML.textContent = computerScore;
    } else {}
}

function textElement(value) {
    let element = document.createElement('h4');
    element.textContent = value;
    resultsDiv.appendChild(element);
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
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
        textElement('The user won.');
        return 'user';
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        textElement('The computer won.');
        return 'computer';
    } else {
        if(userChoice === "rock" && computerChoice === "scissors") {
            textElement('The user won.');
            return 'user';
        } else if (userChoice === "rock" && computerChoice === "paper") {
            textElement('The computer won.');
            return 'computer';
        } else {
            if(userChoice === "scissors" && computerChoice === "paper") {
                textElement('The user won.')
                return 'user';
            } else if (userChoice === "scissors" && computerChoice === "rock") {
                textElement('The computer won.')
                return 'computer';
            } else {
                textElement("This game is a tie.");
                return 'tie';
            }
        }
    }


}

function play(userChoice) {
    let compChoice = getComputerChoice();
    let winner = playRound(userChoice, compChoice);
    if(winner === 'user') {
        increaseScore('user');
    } else if(winner === 'computer') {
        increaseScore('computer');
    } else {}
}

buttons.forEach(button => button.addEventListener('click', () => {
    if(userScore < 5 && computerScore < 5){
        let playerSelection = button.id;
        play(playerSelection);
        increaseScore();
    } else {
        if(scoreDisplayed === false) {
            if(userScore === 5) {
                textElement('The game is over and the user won!!!');
            } else {
                textElement('The game is over and the computer won.');
            }
            scoreDisplayed = true;
        } else {}
    }
    
}))
