// 1. kinyerjük a szükséges elemeket, és eltároljuk őket külön állandókban, hogy később könnyen felhasználhassuk őket
const screen = document.getElementById('screen');
const dice = document.getElementById('dice');

// 2. a kijelző állandóhoz bekötünk egy új eseményfigyelőt, ami a klikkelésre fog csinálni valamit
// 3. a klikkelés hatására egy új funkcionalitást (függvényt) készítünk
screen.addEventListener('click', function() {
    // 4. legeneráljuk a véletlen számot
    // a Math.random() egy 0 és 1 közötti tört számot fog generálni (0,1 - 0,9)
    // a Math.floor() lefelé kerekít
    // hozzáadunk a végén +1-et, hogy ne 0 és 5 közötti számot kapjunk
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumber);
    
    // 5. a dice id-ba beleírjuk a véletlen számot
    // document.getElementById('dice').innerHTML = randomNumber;
    dice.innerHTML = randomNumber;
    //vagy dice.innerText = randomNumber; vagy dice.textContent = randomNumber;
});