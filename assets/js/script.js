// Open And Close Modal Functions

// Open Modal Function

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
let userScoreSpan;
let computerScoreSpan;

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
            win();
            computerChoice = getComputerChoice();
            break;
        case "firewater":
        case "airfire":
        case "waterice":
        case "icefire":
            console.log(`Player choice is:${playerChoice}. Computer Choice is: ${computerChoice}. ${computerChoice} wins!!`);
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
            draw();
            computerChoice = getComputerChoice();
            break;
    }
}

// Add points and ajust the scoreboard.

/**
 * Function that adds one point to the user when they win and display it on the scoreboard.
 */
function win() {
    userScoreSpan = parseInt(document.getElementById("user-score").innerHTML);
    document.getElementById("user-score").innerHTML = userScoreSpan + 1;
    console.log("User Wins");
}

/**Function that adds one point to the computer when it wins and display it on the scoreboard */
function lose() {
    computerScoreSpan = parseInt(document.getElementById("computer-score").innerHTML);
    document.getElementById("computer-score").innerHTML = computerScoreSpan + 1;
    console.log("computer Wins");
}

function draw() {
    userScoreSpan = parseInt(document.getElementById("user-score").innerHTML);
    document.getElementById("user-score").innerHTML = userScoreSpan + 1;
    computerScoreSpan = parseInt(document.getElementById("computer-score").innerHTML);
    document.getElementById("computer-score").innerHTML = computerScoreSpan + 1;
}