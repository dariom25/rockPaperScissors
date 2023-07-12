

function getPlayersChoice() {
    let playersChoice = prompt("Please type either rock, paper or scissors.");
    playersChoice = playersChoice.toLowerCase();
    return playersChoice
}

function playRounds(playerSelection, computerSelection) {
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


//2nd round: player paper; pc scissors == visual bug


//new code here

let playerScore = 0;
let computerScore = 0;

//reference all buttons and add an eventlistener to them
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    if (playerScore == 0 && computerScore == 0) {// checks if it is the first round
        displaySelections(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        displayScore();
    } else {
        if (playerScore < 5 && computerScore < 5) {// checks if somebody has won
            removeElements();
            displaySelections(playerSelection, computerSelection);
            playRound(playerSelection, computerSelection);
            displayScore();
        } else if (playerScore == 5) {
            alert("Player won.");
            removeElements();
            playerScore = 0
            computerScore = 0
        } else if (computerScore == 5) {
            alert("Computer won.");
            removeElements();
            playerScore = 0
            computerScore = 0
        };
    };

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
function displaySelections(playerSelection, computerSelection){
    const playerDiv = document.querySelector(".player");
    playerDiv.appendChild(chooseImageFromSelection(playerSelection));
    const computerDiv = document.querySelector(".computer");
    computerDiv.appendChild(chooseImageFromSelection(computerSelection));
}

//check who wins
function playRound(playerSelection, computerSelection) {
    const winningMessage = document.querySelector(".winning-message");
    let resultText = document.createElement("p");
    resultText.classList.add("result-text");
    if (playerSelection == 0 && computerSelection == 2) {
        resultText.textContent = "Player wins!";
        winningMessage.appendChild(resultText);
        playerScore++;
    } else if (playerSelection == 1 && computerSelection == 0) {
        resultText.textContent = "Player wins!";
        winningMessage.appendChild(resultText);
        playerScore++;    
    } else if (playerSelection == 2 && computerSelection == 1) {
        resultText.textContent = "Player wins!";
        winningMessage.appendChild(resultText);
        playerScore++;
    } else if (playerSelection == 1 && computerSelection == 2) {
        resultText.textContent = "Computer wins!";
        winningMessage.appendChild(resultText);
        computerScore++;
    } else if (playerSelection == 2 && computerSelection == 0) {
        resultText.textContent = "Computer wins!";
        winningMessage.appendChild(resultText);
        computerScore++;
    } else if (playerSelection == 0 && computerSelection == 1) {
        resultText.textContent = "Computer wins!";
        winningMessage.appendChild(resultText);
        computerScore++;
    } else {
        resultText.textContent = "It's a draw!";
        winningMessage.appendChild(resultText);
    }
}

function displayScore() { //wenn text hinzugefügt wird, verschiebt sich das ganze design
    const scoreMessage = document.querySelector(".score")
    let score = document.createElement("p");
    score.classList.add("result-text");
    score.textContent = `Player:\n ${playerScore}\n Computer:\n ${computerScore}`;
    scoreMessage.appendChild(score);
}

function removeElements() {
    const resultTexts = document.querySelectorAll(".result-text");
    resultTexts.forEach((resultText) => {
        resultText.remove()
    });
    const imgPlayer = document.querySelector(".player > img")
    imgPlayer.remove()
    const imgComputer = document.querySelector(".computer > img")
    imgComputer.remove()
}