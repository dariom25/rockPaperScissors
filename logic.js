const availableChoices = ["rock", "paper", "scissors"]

function getComputerChoice(availableChoices) {
    let randomIndex = Math.floor(Math.random() * availableChoices.length);
    let computersChoice = availableChoices[randomIndex];
    return computersChoice
}

function getPlayersChoice(availableChoices) {
    let playersChoice = prompt("Please type either rock, paper or scissors.");
    return playersChoice
}

function checkIfPlayersChoiceIsValid(playersChoice) {
    playersChoice = playersChoice.toLocaleLowerCase();
    if (availableChoices.includes(playersChoice)) {
        console.log("Die Antwort ist valide.")
    } else {
        console.log("Die Antwort ist nicht valide.")
    }
}

//get the computers choice
//get the players choice
    //lower all letters of the players prompt
    //check if the the players answer is valid
//compare the computers and players choice
//determine who wins