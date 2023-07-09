

function getPlayersChoice() {
    let playersChoice = prompt("Please type either rock, paper or scissors.");
    playersChoice = playersChoice.toLowerCase();
    return playersChoice
}

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

//new code here

//reference all buttons and add an eventlistener to them
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    displayPlayersChoice();
  });
});

//get the computers choice
const availableChoices = ["rock", "paper", "scissors"]
function getComputerChoice(availableChoices) {
    let randomIndex = Math.floor(Math.random() * availableChoices.length);
    let computersChoice = availableChoices[randomIndex];
    return computersChoice
}

//choose correct image for choice
function createImageFromChoice(choice) {
    let img = document.createElement("img");
    if (choice === 0) {
        img.setAttribute("src", "images/rock.png")
    } else if (choice === 1) {
        img.setAttribute("src", "images/paper.png")
    } else if (choice === 2) {
        img.src = "images/scissors.png"
    };
    return img
}

//display image on website
//reference the player-div
function displayPlayersChoice(){
    const playerDiv = document.querySelector(".player");
    playerDiv.appendChild(createImageFromChoice(2));
}

