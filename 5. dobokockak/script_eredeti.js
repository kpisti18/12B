const dice1 = document.getElementById('dice1');
const dice2 = document.getElementById('dice2');
const total = document.getElementById('total');

dice1.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random()*6)+1;
    dice1.textContent = randomNumber; 
    total.textContent = randomNumber + Number(dice2.textContent);
});

dice2.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    dice2.textContent = randomNumber;
    total.textContent = randomNumber + Number(dice1.textContent);
});

