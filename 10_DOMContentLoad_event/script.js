// Városok listája
const cities = [
    { name: "Berlin", value: "berlin"},
    { name: "Tokyo", value: "tokyo" },
    { name: "Rio", value: "rio" },
    { name: "Nairobi", value: "nairobi" },
    { name: "Lisszabon", value: "lisbon" },
    { name: "Moszkva", value: "moscow" },
    { name: "Denver", value: "denver" },
    { name: "Stockholm", value: "stockholm" },
    { name: "Helsinki", value: "helsinki" },
    { name: "Professzor", value: "professor" },
];

const select = document.getElementById('city');

window.addEventListener('DOMContentLoaded', betolt); // referencia hivatkozás, nem függvényhívás, azaz nem betolt()
select.addEventListener('change', kep); // itt is referencia hivatkozás, azaz nem kep()

function betolt() {
    for (const city of cities) {
        // <option> </option> tag létrehozása
        const option = document.createElement('option');
        // <option value="város_neve"> </option> létrehozása
        option.value = city.value;
        // <option value="város_neve">város_neve</option> létrehozása
        option.textContent = city.name;

        if (city.name === 'Professzor') {
            option.selected = true;
        }
        // a <select> tag gyerekelemének tesszük meg az option-t
        // <select>
        //    <option value="város_neve">város_neve</option>
        // </select>
        select.append(option);
    }
}

function kep() {
    const selected = select.value;
    const image = document.getElementById('image');
    const demo = document.getElementById('demo');
    
    // <img> tag létrehozása
    const img = document.createElement('img');
    // <img src="./img/${selected}.jpg"> létrehozása
    img.src = `./img/${selected}.jpg`;
    // <img src="./img/${selected}.jpg" alt="valami"> létrehozása
    img.alt = selected;
    // <img src="./img/${selected}.jpg" alt="valami" title="valami"> létrehozása
    img.title = selected;

    // az image változóba, ami egy <div id="image"> </div>, belefűzzük az img változót mint gyerekelem, de úgy, hogy előtte a div-ben lévő elemeket kicseréljük az újra (a korábbi elemek eltünnek a div-ből).
    image.replaceChildren(img);
    // itt pedig csak a szöveget adjuk hozzá a demo változóhoz, ami egy <span id="demo"></span> tag.
    demo.textContent = selected;
}