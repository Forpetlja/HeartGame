// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

const hearts = document.querySelectorAll('.heart');
const lastHeart = hearts[hearts.length - 1];
const message = document.getElementById('message');
let currentHeartIndex = 0;

function showNextHeart() {
    if (currentHeartIndex < hearts.length) {
        hearts[currentHeartIndex].style.display = 'block';
    }
}

function setupHeartHover(heart) {
    heart.addEventListener('mouseenter', () => {
        heart.style.display = 'none';

        if (heart === lastHeart) {
            message.innerText = "I love youuuuuuu! 💙";
            message.style.color = "#FFFFFF";
            document.getElementById('game-container').style.backgroundImage = "url('/css/cute2.gif')";
        } else {
            message.innerText = '';
        }

        currentHeartIndex++;
        if (currentHeartIndex < hearts.length) {
            showNextHeart();
        } else {
            endGame();
        }
    });
}

hearts.forEach(setupHeartHover);
showNextHeart();

function endGame() {
    
}




