// Open And Close Modal Functions

// Open Modal Function
let modal;
let modalOverlay;

document.getElementById("open-modal").addEventListener("click", function () {
    modal = document.getElementById("modal");
    modal.style.display = "block";
    modalOverlay = document.getElementById("overlay");
    modalOverlay.style.opacity = 0.5;
});

// Close Modal function

document.getElementById("close-modal-btn").addEventListener("click", function () {
    modal = document.getElementById("modal");
    modal.style.display = "none";
    modalOverlay = document.getElementById("overlay");
    modalOverlay.style.opacity = 0;
});

// Game 

let playerChoice;
let playerScoreSpan;
let computerScoreSpan;
let playerChoiceSpan;
let computerChoiceSpan;
let winnerSpan;
let computerChoice = getComputerChoice();

const elements = document.getElementsByClassName("choice-icons");

for (let element of elements) {
    element.addEventListener("click", function () {
        playerChoice = this.getAttribute("id");
        checkForWinner();
    });
}

// Get Computer Choice

/**
 * The function gets the computer choice based on a random principle
 */
function getComputerChoice() {
    const options = ["fire", "water", "air", "ice"];
    const randomNum = Math.floor(Math.random() * options.length);
    return options[randomNum];
}

// Check for winner function

/**
 * Function that uses switch statements to decide a winner based on the player and the computer choices.
 */
function checkForWinner() {
    switch (playerChoice + computerChoice) {
        case "fireice":
        case "waterfire":
        case "fireair":
        case "icewater":
            console.log(`Player choice is:${playerChoice}. Computer Choice is: ${computerChoice}. ${playerChoice} wins!!`);
            displayPlayerChoice();
            displayComputerChoice();
            win();
            computerChoice = getComputerChoice();
            break;
        case "firewater":
        case "airfire":
        case "waterice":
        case "icefire":
            console.log(`Player choice is:${playerChoice}. Computer Choice is: ${computerChoice}. ${computerChoice} wins!!`);
            displayPlayerChoice();
            displayComputerChoice();
            lose();
            computerChoice = getComputerChoice();
            break;
        case "firefire":
        case "waterwater":
        case "airair":
        case "iceice":
        case "airice":
        case "iceair":
        case "airwater":
        case "waterair":
            console.log(`Player choice is:${playerChoice}. Computer Choice is: ${computerChoice}. ITS a draw!!`);
            displayPlayerChoice();
            displayComputerChoice();
            draw();
            computerChoice = getComputerChoice();
            break;
    }
}

// Add points and adjust the scoreboard.

/**
 * Function that adds one point to the user when they win and display it on the scoreboard.
 */
function win() {
    playerScoreSpan = parseInt(document.getElementById("user-score").innerHTML);
    document.getElementById("user-score").innerHTML = playerScoreSpan + 1;
    console.log("User Wins");
    winnerSpan = document.getElementById("winner-span");
    winnerSpan.innerHTML = `${playerChoice.charAt(0).toUpperCase()}${playerChoice.slice(1)} wins over ${computerChoice.charAt(0).toUpperCase()}${computerChoice.slice(1)}!`;
}

/**Function that adds one point to the computer when it wins and display it on the scoreboard */
function lose() {
    computerScoreSpan = parseInt(document.getElementById("computer-score").innerHTML);
    document.getElementById("computer-score").innerHTML = computerScoreSpan + 1;
    winnerSpan = document.getElementById("winner-span");
    winnerSpan.innerHTML = `${playerChoice.charAt(0).toUpperCase()}${playerChoice.slice(1)} loses to ${computerChoice.charAt(0).toUpperCase()}${computerChoice.slice(1)}!`;
    console.log("computer Wins");
}

/**
 * Function that adds one point to both the player and the computer when it is a draw
 */
function draw() {
    playerScoreSpan = parseInt(document.getElementById("user-score").innerHTML);
    document.getElementById("user-score").innerHTML = playerScoreSpan + 1;
    computerScoreSpan = parseInt(document.getElementById("computer-score").innerHTML);
    document.getElementById("computer-score").innerHTML = computerScoreSpan + 1;
    winnerSpan = document.getElementById("winner-span");
    winnerSpan.innerHTML = `It's a draw!`;
}

/**
 * Function that adjusts the innerHTML of the span to match the player's choice and changes the text to the appropriate color
 */
function displayPlayerChoice() {
    playerChoiceSpan = document.getElementById("user-choice-span");
    if (playerChoice === "fire") {
        playerChoiceSpan.innerHTML = "Fire";
        playerChoiceSpan.style.color = "rgb(255, 0, 0)";
    } else if (playerChoice === "water") {
        playerChoiceSpan.innerHTML = "Water";
        playerChoiceSpan.style.color = "rgb(5, 79, 240)";
    } else if (playerChoice === "air") {
        playerChoiceSpan.innerHTML = "Air";
        playerChoiceSpan.style.color = "rgb(74, 106, 160)";
    } else if (playerChoice === "ice") {
        playerChoiceSpan.innerHTML = "Ice";
        playerChoiceSpan.style.color = "rgb(0, 204, 255)";
    }
}

/**
 * Function that adjusts the innerHTML of the span to match the computer's choice and changes the text to the appropriate color
 */
function displayComputerChoice() {
    computerChoiceSpan = document.getElementById("computer-choice-span");
    if (computerChoice === "fire") {
        computerChoiceSpan.innerHTML = "Fire";
        computerChoiceSpan.style.color = "rgb(255, 0, 0)";
    } else if (computerChoice === "water") {
        computerChoiceSpan.innerHTML = "Water";
        computerChoiceSpan.style.color = "rgb(5, 79, 240)";
    } else if (computerChoice === "air") {
        computerChoiceSpan.innerHTML = "Air";
        computerChoiceSpan.style.color = "rgb(74, 106, 160)";
    } else if (computerChoice === "ice") {
        computerChoiceSpan.innerHTML = "Ice";
        computerChoiceSpan.style.color = "rgb(0, 204, 255)";
    }
}

