const demo = document.getElementById('demo');
let isImageDisplayed = false; // Állapotjelző

demo.addEventListener('mouseover', (event) => {
    // Csak akkor hajtjuk végre a cserét, ha az egér először lépett a #demo elemre (nem az img-re)
    if (!isImageDisplayed && event.target === demo) {
        const random = Math.ceil(Math.random() * 5);

        const img = document.createElement('img');
        img.src = `./img/${random}.jpg`;
        img.alt = 'kep';

        demo.replaceChildren(img);
        isImageDisplayed = true; // Állapotot frissítjük
    }
});

demo.addEventListener('mouseout', (event) => {
    // Csak akkor állítjuk vissza a szöveget, ha az egér valóban elhagyta a #demo elemet
    if (event.relatedTarget === null || !demo.contains(event.relatedTarget)) {
        const p = document.createElement('p');
        p.textContent = 'Hanyasra értékellek?';

        demo.replaceChildren(p);
        isImageDisplayed = false; // Állapotot visszaállítjuk
    }
});