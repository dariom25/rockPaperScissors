const availableChoices = ["rock", "paper", "scissors"]

function getComputerChoice(availableChoices) {
    let randomIndex = Math.floor(Math.random() * availableChoices.length);
    let computersChoice = availableChoices[randomIndex];
    return computersChoice
}

function getPlayersChoice(availableChoices) {
    let playersChoice = prompt("What do you choose? rock, paper or scissors?");
    console.log(playersChoice)
}

//get the computers choice
//get the players choice
    //lower all letters of the players prompt
    //check if the the players answer is valid
//compare the computers and players choice
//determine who wins