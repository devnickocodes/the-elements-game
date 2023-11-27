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


let playerChoice;

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
            computerChoice = getComputerChoice();
            break;
    }
}

// Adjust The Scoreboard

/**
 * Function that adds one point to the user when they win.
 */
function win() {
    let userScoreSpan = parseInt(document.getElementById("user-score").innerHTML);
    document.getElementById("user-score").innerHTML = userScoreSpan + 1;
    console.log("User Wins");
}

function lose() {
    let userScoreSpan = parseInt(document.getElementById("computer-score").innerHTML);
    document.getElementById("computer-score").innerHTML = userScoreSpan + 1;
    console.log("computer Wins");
}