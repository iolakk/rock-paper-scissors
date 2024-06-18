const body = document.querySelector("body");
const buttonsBlock = document.querySelector(".buttons");

const rockButton = document.createElement("button");
let rockImage = document.createElement("img");
rockImage.src = "images/rock.png";
rockButton.appendChild(rockImage);

const paperButton = document.createElement("button");
let paperImage = document.createElement("img");
paperImage.src = "images/paper.png";
paperButton.appendChild(paperImage);

const scissorsButton = document.createElement("button");
let scissorsImage = document.createElement("img");
scissorsImage.src = "images/scissor.png";
scissorsButton.appendChild(scissorsImage);

rockButton.classList.add("button");
paperButton.classList.add("button");
scissorsButton.classList.add("button");

rockImage.setAttribute("id", "rock");
paperImage.setAttribute("id", "paper");
scissorsImage.setAttribute("id", "scissors");

buttonsBlock.appendChild(rockButton);
buttonsBlock.appendChild(paperButton);
buttonsBlock.appendChild(scissorsButton);

const computerChoiceImage = document.querySelector(".computerChoiceImage");
const playerChoiceImage = document.querySelector(".playerChoiceImage");
const chooseText = document.querySelector("#choose");

const playerScoreText = document.querySelector("#playerScore");
const computerScoreText = document.querySelector("#computerScore");

function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let randomNum = getRandomInt();
    let choice;

    switch (randomNum) {
        case 0:
            choice = "rock";
            break;

        case 1:
            choice = "paper";
            break;

        case 2:
            choice = "scissors"
            break;
    }
    return choice;
}
    
function getHumanChoice() {
    let choice = prompt("Choose: Rock, Paper, Scissors");
    let choiceToLower = choice.toLowerCase();

    if (choiceToLower == "rock" 
    || choiceToLower == "paper"
    || choiceToLower == "scissors") {
        return choiceToLower;
        
    } else {
        getHumanChoice();
    }

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    let result;

    switch(computerChoice){
        case "rock":
            computerChoiceImage.src = "images/rock.png";
            break;
        case "paper":
            computerChoiceImage.src = "images/paper.png";
            break;
        case "scissors":
            computerChoiceImage.src = "images/scissor.png";
            break;
    }

    if (humanChoice == "rock" && computerChoice == "paper"){
        result = "You lose paper beats rock!";
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        result = "You win paper beats rock!";
        humanScore++;
    }

    if (humanChoice == "scissors" && computerChoice == "rock"){
        result = "You lose rock beats scissors!";
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        result = "You win rock beats scissors!";
        humanScore++;
    }

    if (humanChoice == "paper" && computerChoice == "scissors"){
        result = "You lose scissors beat paper!";
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        result = "You win scissors beat paper!";
        humanScore++;
    }

    if (humanChoice == computerChoice) {
        result = "Draw!";
    }

    chooseText.textContent = result;
    playerScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;

    if (humanScore + computerScore == 5){
        const resultText = document.createElement("h1");
    
        if (humanScore > computerScore){
            resultText.textContent = "Player wins!";

        } else resultText.textContent = "CPU wins!";


        body.appendChild(resultText);
        humanScore = 0;
        computerScore = 0;
    }
}

buttonsBlock.addEventListener("click", (event) => {
    let target = event.target;
    let computerSelection = getComputerChoice();
    
    playRound(target.id, computerSelection);
});






