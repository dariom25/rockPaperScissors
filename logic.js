const availableChoices = ["rock", "paper", "scissors"]

function getComputerChoice(availableChoices) {
    let randomIndex = Math.floor(Math.random() * availableChoices.length);
    let computersChoice = availableChoices[randomIndex];
    return computersChoice
}

function getPlayersChoice(availableChoices) {
    let playersChoice = prompt("Please type either rock, paper or scissors.");
    lowerAllLetters(playersChoice);
}

function lowerAllLetters(word) {
    let loweredWord = word.toLowerCase();
    console.log(loweredWord);
    return loweredWord
}
//get the computers choice
//get the players choice
    //lower all letters of the players prompt
    //check if the the players answer is valid
//compare the computers and players choice
//determine who wins