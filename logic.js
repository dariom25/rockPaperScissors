

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





//new code here

//reference all buttons and add an eventlistener to them
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = getComputerChoice();
    displaySelections(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
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
    console.log(winningMessage)
    let result = document.createElement("p")
    result.classList.add("result-text")

    if (playerSelection == 0 && computerSelection == 2) {
        result.textContent = "Player wins!";
        winningMessage.appendChild(result);
    } else if (playerSelection == 1 && computerSelection == 0) {
        result.textContent = "Player wins!";
        winningMessage.appendChild(result);    
    } else if (playerSelection == 2 && computerSelection == 1) {
        result.textContent = "Player wins!";
        winningMessage.appendChild(result);
    } else if (playerSelection == 1 && computerSelection == 2) {
        result.textContent = "Computer wins!";
        winningMessage.appendChild(result);
    } else if (playerSelection == 2 && computerSelection == 0) {
        result.textContent = "Computer wins!";
        winningMessage.appendChild(result);
    } else if (playerSelection == 0 && computerSelection == 1) {
        result.textContent = "Computer wins!";
        winningMessage.appendChild(result);
    } else {
        result.textContent = "It's a draw!";
        winningMessage.appendChild(result);
    }
}

//next steps:
//1. prevent that images are added --> remove image when calling displaySelections
    //get list of elements which are in the choice-section
    //round-based system where everyround the element is resetted
//2. check who wins the round
//3. Display text which anounces who has won the round
//4. Display text to show the scores
//5. Restyle the choice-section --> put text in paragraph and then add margin-bottom to it