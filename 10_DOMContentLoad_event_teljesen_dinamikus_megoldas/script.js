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
    const selecCity = document.createElement('select');
    selecCity.id = 'city';
    selecCity.name = 'city';

    // az városok option tag-ei
    for (const city of cities) {
        const option = document.createElement('option');
        option.value = city.value;
        option.textContent = city.name;

        selecCity.append(option);
    }

    // a container div-be belefűzzük a gyerekelemeket
    containerDiv.append(labelForCity, selecCity);

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

    // mivel az összefűztük, rakjuk bele a body elem gyerekelmeibe
    document.body.append(containerDiv, finishDiv);

    // a kép megváltoztatásának függvénye
    function kep() {
        const selectedCity = city.value;
        demo.textContent = selectedCity;

        const img = document.createElement('img');
        img.src = `./img/${selectedCity.toLowerCase()}.jpg`;
        img.alt = selectedCity;
        img.title = selectedCity;

        imageDiv.replaceChildren(img);
    }

    // meghívjuk a change eseményre a kep függvényt
    selecCity.addEventListener('change', kep); // referencia hivatkozás
}