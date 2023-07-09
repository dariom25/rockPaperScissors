

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
    alert("button.id");
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
//take computers/players choice as argument as int
function createImageFromChoice(choice) {
    let img = document.createElement("img");
    if (choice === 0) {
        img.setAttribute("src", "images/rock.png")
    } else if (choice === 1) {
        img.setAttribute("src", "images/paper.png")
    } else if (choice === 2) {
        img.setAttribute("src", "images/scissors.png")
    };
    return img
}
//create new image element
//IF image = rock/0
    //set image in image-element to rock
//ELSE IF image = paper/1
    //set image in image-element to paper
//ELSE IF image = scissors/2
    //set image in image-element to scissors
//return image-element

