const availableChoices = ["Rock", "Paper", "Scissors"]

function getComputerChoice(availableChoices) {
    let randomIndex = Math.floor(Math.random() * availableChoices.length);
    let computersChoice = availableChoices[randomIndex];
    return computersChoice
}

//get the computers choice
//get the players choice
//compare the computers and players choice
//determine who wins