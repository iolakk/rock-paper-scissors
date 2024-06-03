function getRandomInt() {
    return Math.floor(Math.random() * 3);
}

function getComputerChoice() {
    let randomNum = getRandomInt();
    let choice;

    switch (randomNum) {
        case 0:
            choice = "Rock";
            break;

        case 1:
            choice = "Paper";
            break;

        case 2:
            choice = "Scissors"
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

console.log(getHumanChoice());