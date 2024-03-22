import { Hole } from './hole.js';

const gameBoard = document.getElementById('game-board');

const holes = [];
const numHoles = 9;

for (let i = 0; i < numHoles; i++) {
    const hole = new Hole();
    holes.push(hole);
    gameBoard.appendChild(hole.element);
}

function startGame() {
    setInterval(() => {
        const randomIndex = Math.floor(Math.random() * numHoles);
        holes[randomIndex].showMole();
    }, 1000);
}

startGame();
