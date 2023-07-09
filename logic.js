

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
    let playerSelection = button.id;
    displaySelections(playerSelection);
  });
});

//get the computers choice
function getComputerChoice() {
    let computersChoice = Math.floor(Math.random() * 3);
    return computersChoice
}

//choose correct image for choice
function chooseImageFromSelection(choice) {
    let img = document.createElement("img");
    if (choice == 0) {
        img.setAttribute("src", "images/rock.png")
    } else if (choice == 1) {
        img.setAttribute("src", "images/paper.png")
    } else if (choice == 2) {
        img.setAttribute("src", "images/scissors.png")
    };
    return img
}

//display image on website
function displaySelections(playerSelection){
    const playerDiv = document.querySelector(".player");
    playerDiv.appendChild(chooseImageFromSelection(playerSelection));
    const computerDiv = document.querySelector(".computer");
    computerDiv.appendChild(chooseImageFromSelection(getComputerChoice()));
}

//next steps:
//1. prevent that images are added --> remove image when calling displaySelections
//2. check who wins the round
//3. Display text which anounces who has won the round
//4. Display text to show the scores
//5. Restyle the choice-section --> put text in paragraph and then add margin-bottom to it