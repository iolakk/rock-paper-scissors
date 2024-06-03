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
    
console.log(getComputerChoice());