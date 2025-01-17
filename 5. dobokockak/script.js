const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const total = document.getElementById('total');

dice1.addEventListener('click', () => {
    rollDice(dice1);
});

dice2.addEventListener('click', () => {
    rollDice(dice2);
});

function rollDice(dice) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.textContent = randomNumber;
    total.textContent = Number(dice1.textContent) + Number(dice2.textContent);
}