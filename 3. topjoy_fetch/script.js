const uzenetek = []; // üres lista létrehozása, ebben tároljuk majd el az üziket
const messageBox = document.getElementById('messageBox');
const messageButton = document.getElementById('messageButton');

/* az ablak betöltésekor lefut egy aszinkron függvény */
window.addEventListener('load', async () => {
    // lefetcheljük az adatokat az uzik.csv fájlból (aszinkronban fut, mivel ez időigényesebb feladat)
    const uzik = await fetch('./uzik.csv');
    // itt még egy object a típusa
    console.log(uzik, typeof(uzik));
    
    // konvertáljuk át szöveges adattá
    const uzikText = (await uzik.text()).split('\n');
    console.log(uzikText, typeof(uzikText));
    
    // egy ciklusban végig megyünk az uzikText tömb indexein
    for (let i = 0; i < uzikText.length; i++) {
        // majd az aktuális indexű elemet belepusholjuk az uzenetek listába
        uzenetek.push(uzikText[i]);
    }
});

// miután megvan az uzenetek listánk, a gombra kattintásra bekötünk egy új funkcionalitást
messageButton.addEventListener('click', () => {
    // ha az uzenetek listában van szöveg, azaz nagyobb az hossza mint 0
    if (uzenetek.length > 0) { 
        // akkor létrehozunk egy véletlen számot, ami a tömb egy elemét fogja meghatázoni
        const randomIndex = Math.floor(Math.random() * uzenetek.length);
        // megváltoztatjuk a messageBox konstans tartalmát az uzenetek tömb randomIndexedik elemére
        messageBox.textContent = uzenetek[randomIndex];
    } else {
        messageBox.textContent = 'Nem található üzenet!';
    }
});