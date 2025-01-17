const elso = document.getElementById('elso');
const masodik = document.getElementById('masodik');
const eredmeny = document.getElementById('eredmeny');
const elsoMinusz = document.getElementById('elsoMinusz');
const elsoPlusz = document.getElementById('elsoPlusz');
const masodikMinusz = document.getElementById('masodikMinusz');
const masodikPlusz = document.getElementById('masodikPlusz');

elsoMinusz.addEventListener('click', () => {
    let value = parseInt(elso.textContent);
    let total = parseInt(eredmeny.textContent);
    elso.textContent = value - 1;
    eredmeny.textContent = total - 1;
});

elsoPlusz.addEventListener('click', () => {
    let value = parseInt(elso.textContent);
    let total = parseInt(eredmeny.textContent);
    elso.textContent = value + 1;
    eredmeny.textContent = total + 1;
});

masodikMinusz.addEventListener('click', () => {
    let value = parseInt(masodik.textContent);
    let total = parseInt(eredmeny.textContent);
    masodik.textContent = value - 1;
    eredmeny.textContent = total - 1;
});

masodikPlusz.addEventListener('click', () => {
    let value = parseInt(masodik.textContent);
    let total = parseInt(eredmeny.textContent);
    masodik.textContent = value + 1;
    eredmeny.textContent = total + 1;
});