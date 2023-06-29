const availableChoices = ["rock", "paper", "scissors"]
//const computerSelection = getComputerChoice()
//const playerSelection = getPlayersChoice()

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

function playRound(playerSelection, computerSelection) {
    console.log("The computer chose: " + computerSelection);
    console.log("You chose: " + playerSelection)
    if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Computer loses! Rock beats scissors.")
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Computer loses! Paper beats rock.")
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("Computer loses! Scissors beat paper.")
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! Scissors beat paper.")
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! Rock beats scissors.")
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! Paper beats rock.")
    } else {
        console.log("It's a draw.")
    }
}

function game() {
    let counter = 0
    while (counter < 5) {
        playRound(getPlayersChoice(), getComputerChoice(availableChoices))
        counter++
    }
}

//get the computers choice
//get the players choice
//check if the the players answer is valid
    //lower all letters of the players prompt
    //check if prompt is rock, paper or scissors
//compare the computers and players choice
//determine who wins
//start the loop again