


//2nd round: wenn 1. runde gespielt, aber untentschieden, dann sind score noch null, deshalb visual bug
//visual bugs when winning and then clicking a button


//new code here

let playerScore = 0;
let computerScore = 0;
let round = 0;

//reference all buttons and add an eventlistener to them
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    if (round == 0) {// checks if it is the first round
        displaySelections(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        displayScore();
    } else {
        if (playerScore < 5 && computerScore < 5) {// checks if somebody has won
            removeRoundMesseage();
            removeScoreMessage();
            removeSelections();
            displaySelections(playerSelection, computerSelection);
            playRound(playerSelection, computerSelection);
            displayScore();
            if (playerScore == 5) {
                removeRoundMesseage();
                winGameMessage();
                playerScore = 0;
                computerScore = 0;
            } else if (computerScore == 5) {
                removeRoundMesseage();
                winGameMessage();
                playerScore = 0;
                computerScore = 0;
            }
        } 

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
        round++;
    } else if (playerSelection == 1 && computerSelection == 0) {
        resultText.textContent = "Player wins!";
        winningMessage.appendChild(resultText);
        playerScore++;  
        round++;  
    } else if (playerSelection == 2 && computerSelection == 1) {
        resultText.textContent = "Player wins!";
        winningMessage.appendChild(resultText);
        playerScore++;
        round++;
    } else if (playerSelection == 1 && computerSelection == 2) {
        resultText.textContent = "Computer wins!";
        winningMessage.appendChild(resultText);
        computerScore++;
        round++;
    } else if (playerSelection == 2 && computerSelection == 0) {
        resultText.textContent = "Computer wins!";
        winningMessage.appendChild(resultText);
        computerScore++;
        round++;
    } else if (playerSelection == 0 && computerSelection == 1) {
        resultText.textContent = "Computer wins!";
        winningMessage.appendChild(resultText);
        computerScore++;
        round++;
    } else {
        resultText.textContent = "It's a draw!";
        winningMessage.appendChild(resultText);
        round++;
    }
}

function displayScore() {
    const scoreMessage = document.querySelector(".score")
    let score = document.createElement("p");
    score.classList.add("score-text");
    score.textContent = `Player:\n ${playerScore}\n Computer:\n ${computerScore}`;
    scoreMessage.appendChild(score);
}

function removeRoundMesseage() {
    const resultTexts = document.querySelector(".result-text");
    resultTexts.remove();
}

function removeScoreMessage() {
    const scoreTexts = document.querySelector(".score-text");
    scoreTexts.remove();
}

function removeSelections() {
    const imgsPlayer = document.querySelectorAll(".player > img");
    imgsPlayer.forEach((imgPlayer) => {
        imgPlayer.remove();
    });

    const imgsComputer = document.querySelectorAll(".computer > img");
    imgsComputer.forEach((imgComputer) => {
        imgComputer.remove();
    });
}

function winGameMessage() {
    if (playerScore == 5) {
        const playerWinsButton = document.createElement("p");
        playerWinsButton.textContent = "Player wins the game! Click, to play another one.";
        playerWinsButton.classList.add("result-text");
        const winningMessage = document.querySelector(".winning-message");
        winningMessage.appendChild(playerWinsButton);
    } else if (computerScore == 5) {
        const computerWinsButton = document.createElement("p");
        computerWinsButton.textContent = "Pc wins the game! Click, to play another one.";
        computerWinsButton.classList.add("result-text");
        const winningMessage = document.querySelector(".winning-message");
        winningMessage.appendChild(computerWinsButton);
    }
}