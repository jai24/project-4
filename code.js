

// document.addEventListener('DOMContentLoaded', function() {
//     display();
// });

function display(value) {
    const overallhide = document.querySelectorAll('.gesture');
    
    // Hide all elements with class 'gesture img'
    overallhide.forEach(img => {
        img.style.display = 'none';
    });

    // Randomly generate a value for the computer's choice (1 for rock, 2 for paper, 3 for scissors)
    let rand = Math.floor(Math.random() * 3) + 1;

    // Function to show the tie scenario
    function tie() {
        document.querySelector('.tie').style.display = 'block';
        document.getElementById('scsc').style.display = 'block';
        document.querySelector('.icon_right').style.display = 'block';
    }

    // Function to show the user win scenario
    function win() {
        document.querySelector('.winwords').style.display = 'block';
        document.querySelector('.win').style.display = 'block';
        document.getElementById('scsc').style.display = 'block';
    }

    // Function to show the user lose scenario
    function lose() {
        document.querySelector('.lose').style.display = 'block';
        document.querySelector('.greenright').style.display = 'block';
        document.getElementById('scsc').style.display = 'block';
        document.getElementById('ppp').style.display = 'block';
    }

    // Check the scenarios based on the random and user values
    if (rand === value) {
        // If it's a tie
        tie();
    } else if ((rand === 1 && value === 2) || (rand === 2 && value === 3) || (rand === 3 && value === 1)) {
        // If user wins
        win();
    } else {
        // If user loses
        lose();
    }
}

const openPopupButton = document.getElementById('openPopupButton');
const closePopupButton = document.getElementById('closePopupButton');
const popupOverlay = document.getElementById('popupOverlay');

// Show the popup when the button is clicked
openPopupButton.addEventListener('click', function() {
    popupOverlay.style.display = 'flex';
});

// Hide the popup when the close button is clicked
closePopupButton.addEventListener('click', function() {
    popupOverlay.style.display = 'none';
});

// Hide the popup when clicking outside the popup content
window.addEventListener('click', function(event) {
    if (event.target === popupOverlay) {
        popupOverlay.style.display = 'none';
    }
});