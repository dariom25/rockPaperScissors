const availableChoices = ["rock", "paper", "scissors"]
const computerSelection = getComputerChoice()
const playerSelection = getPlayersChoice()

function getComputerChoice(availableChoices) {
    let randomIndex = Math.floor(Math.random() * availableChoices.length);
    let computersChoice = availableChoices[randomIndex];
    return computersChoice
}

function getPlayersChoice() {
    let playersChoice = prompt("Please type either rock, paper or scissors.");
    return playersChoice
}

function checkIfPlayersChoiceIsValid(playersChoice, availableChoices) {
    playersChoice = playersChoice.toLowerCase();
    if (availableChoices.includes(playersChoice) === true) {
        //can this be left empty?
    } else {
        getPlayersChoice(availableChoices)
    } 
} //improve funct --> what is the goal? what does it do at the moment?



//get the computers choice
//get the players choice
//check if the the players answer is valid
    //lower all letters of the players prompt
    //check if prompt is rock, paper or scissors
//compare the computers and players choice
//determine who wins
//start the loop again