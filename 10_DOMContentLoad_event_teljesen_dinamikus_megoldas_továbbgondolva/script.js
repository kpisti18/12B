const cities = [
    { name: "Berlin", value: "Berlin" },
    { name: "Tokyo", value: "Tokyo" },
    { name: "Rio", value: "Rio" },
    { name: "Nairobi", value: "Nairobi" },
    { name: "Lisszabon", value: "Lisbon" },
    { name: "Moszkva", value: "Moscow" },
    { name: "Denver", value: "Denver" },
    { name: "Stockholm", value: "Stockholm" },
    { name: "Helsinki", value: "Helsinki" },
    { name: "Professor", value: "Professor" }
];

window.addEventListener('DOMContentLoaded', betolt);

function betolt() {
    // konténer div létrehozása
    const containerDiv = document.createElement('div');
    containerDiv.classList = 'container';

    // label for city létrehozása
    const labelForCity = document.createElement('label');
    labelForCity.htmlFor = 'city';
    labelForCity.textContent = 'Válassz egy várost';

    // select tag létrehozása
    const selectCity = document.createElement('select');
    selectCity.id = 'city';
    selectCity.name = 'city';

    // az városok option tag-ei
    for (const city of cities) {
        const option = document.createElement('option');
        option.value = city.value;
        option.textContent = city.name;

        selectCity.append(option);
    }

    // a container div-be belefűzzük a gyerekelemeket
    containerDiv.append(labelForCity, selectCity);

    // finish azonosítójú div létrehozása
    const finishDiv = document.createElement('div');
    finishDiv.id = 'finish';

    // p tag létrehozása
    const p = document.createElement('p');
    p.textContent = 'A választottad:';

    // demo azonosítójú span tag létrehozása
    const demoSpan = document.createElement('span');
    demoSpan.id = 'demo';

    // belerakjuk a p tag-be a span taget
    p.append(demoSpan);

    // image id div létrehozása
    const imageDiv = document.createElement('div');
    imageDiv.id = 'image';

    // a finish div gyerekelemeinek összefűzése
    finishDiv.append(p, imageDiv);

    // mivel az összes elemet összefűztük, rakjuk bele a body elem gyerekelmeibe
    document.body.append(containerDiv, finishDiv);

    // meghívjuk a change eseményre a kep függvényt, paraméterben pedig elküldjük a kep function-höz szükséges elemeket
    selectCity.addEventListener('change', () => kep(selectCity, demoSpan, imageDiv));
}

// Külön függvényben szervezzük a kep változtatós funkciót
function kep(selectCity, demoSpan, imageDiv) {
    const selectedValue = selectCity.value; // Kiválasztott város értéke
    demoSpan.textContent = selectedValue;  // Beállítjuk a választott város nevét a span tagbe

    // Új kép elem létrehozása
    const img = document.createElement('img');
    img.src = `./img/${selectedValue.toLowerCase()}.jpg`; // Kép elérési útja
    img.alt = selectedValue;
    img.title = selectedValue;

    // Kicseréljük a div tartalmát az új képre
    imageDiv.replaceChildren(img);
}