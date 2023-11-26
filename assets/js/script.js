






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