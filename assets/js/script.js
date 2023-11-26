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
        console.log('playerChoice = ' + playerChoice);
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



