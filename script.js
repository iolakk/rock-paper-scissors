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

    console.log(`You went: ${humanChoice}`);
    console.log(`Computer went: ${computerChoice}`);

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

    return result;
}

buttonsBlock.addEventListener('click', (event) => {
    let target = event.target;
    
    switch(target.id){
        case "rock":
            console.log("You chose rock");
            break;
    }
});

/*function playGame(){
    let roundsAmount = +prompt("How many rounds do you want to play?");

    humanScore = 0;
    computerScore = 0;

    for (let i = 1; i <= roundsAmount; i++){
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
    
        console.log(playRound(humanSelection, computerSelection));
        console.log("----[Score]----");
        console.log(`Player: ${humanScore} CPU: ${computerScore}`);
    }
}

playGame();
*/




