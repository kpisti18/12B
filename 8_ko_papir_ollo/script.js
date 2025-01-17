// a html-ben lévő szövegek változtatásához
const mainTitle = document.getElementById('mainTitle');
const subTitle = document.getElementById('subTitle');
const playerChoiceDisplay = document.getElementById('playerChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const playerScoreDisplay = document.getElementById('playerScore');
const computerScoreDisplay = document.getElementById('computerScore');

// a kő-papír-olló eseményekhez
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// változók létrehozása a számításokhoz
let playerScore = 0;
let computerScore = 0;
let player = '';
let computer = '';

// tömbök létrehozása az ikonokhoz és a választásokhoz
const choices = ['rock', 'paper', 'scissors'];
const icons = ['✊', '✋', '✌'];

// eseményfigyelők hozzáadása a klikkelésekhez
rock.addEventListener('click', () => {
    player = choices[0];
    playerChoiceDisplay.textContent = icons[0];

    computerRandom(); // a számítógép választ egy fegyvert
    const result = playRound(player, computer); // létrehozzuk a result (eredmény) nevű konstanst, ami a playRound függvény értékével tér vissza, ami lehet 'win', 'draw' vagy 'lose'. A paraméterekben pedig átadjuk a játékos és a computer választását
    updateScore(result); // frissítsük a megfelelő eredménnyel a képernyőt
    checkGameEnd(); // megkérdezzük, hogy szeretnék-e új játékot
});

paper.addEventListener('click', () => {
    player = choices[1];
    playerChoiceDisplay.textContent = icons[1];

    computerRandom();
    const result = playRound(player, computer);
    updateScore(result);
    checkGameEnd();
});

scissors.addEventListener('click', () => {
    player = choices[2];
    playerChoiceDisplay.textContent = icons[2];

    computerRandom();
    const result = playRound(player, computer);
    updateScore(result);
    checkGameEnd();
});

// a számítógép véletlen fegyverének kiválasztása
function computerRandom() {
    let random = Math.floor(Math.random() * choices.length);
    computer = choices[random];
    computerChoiceDisplay.textContent = icons[random];
}

// egy forduló lejátszása
function playRound(player, computer) {
    if (player === computer) {
        return 'draw';
    }
    if (
        player === 'rock' && computer === 'scissors' || 
        player === 'paper' && computer === 'rock' || 
        player === 'scissors' && computer === 'paper'
    ) {
        return 'win';
    } 
    return 'lose';
}    

// az eredmény frissítése
function updateScore(result) {
    if (result === 'win') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        mainTitle.textContent = 'Győztél!';
        subTitle.textContent = 'Csak így tovább!';
    } else if (result === 'lose') {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        mainTitle.textContent = 'Vesztettél!';
        subTitle.textContent = 'Fel a fejjel!';
    } else {
        mainTitle.textContent = 'Döntetlen!';
        subTitle.textContent = 'Majdnem megvolt!';
    }
}

// új játék indításának megkérdezése
function checkGameEnd() {
    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore > computerScore ? 'Győztél' : 'Vesztettél';
        const playAgain = confirm(`${winner}! Szeretnél új játékot játszani?`);

        if (playAgain) {
            resetGame(); // a játék alaphelyzetbe hozása
        } else {
            noMoreGame(); // ha nem akarunk többet játszani
        }
    }
}

// a játék alaphelyzetbe állítása
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerChoiceDisplay.textContent = '❔';
    computerChoiceDisplay.textContent = '❔';
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    mainTitle.textContent = 'Válaszd ki a fegyvered';
    subTitle.textContent = 'Az első 5 pontig megy a harc';
}

// ha nem akarunk többé játsznai, kikapcsoljuk a választási lehetőségeket
function noMoreGame() {
  rock.style.pointerEvents = 'none';
  paper.style.pointerEvents = 'none';
  scissors.style.pointerEvents = 'none';  
}