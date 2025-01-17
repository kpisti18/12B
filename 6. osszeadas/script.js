const eredmeny = document.getElementById('eredmeny');
const elsoMinusz = document.getElementById('elsoMinusz');
const elsoPlusz = document.getElementById('elsoPlusz');
const masodikMinusz = document.getElementById('masodikMinusz');
const masodikPlusz = document.getElementById('masodikPlusz');

elsoMinusz.addEventListener('click', () => {
    updateNumber('elso', -1);
});

elsoPlusz.addEventListener('click', () => {
    updateNumber('elso', 1);
});

masodikMinusz.addEventListener('click', () => {
    updateNumber('masodik', -1);
});

masodikPlusz.addEventListener('click', () => {
    updateNumber('masodik', 1);
});

function updateNumber(id, newValue) {
    const element = document.getElementById(id);
    let value = parseInt(element.textContent);
    element.textContent = value + newValue;
    calculateTotal();
}

function calculateTotal() {
    const elso = parseInt(document.getElementById('elso').textContent);
    const masodik = parseInt(document.getElementById('masodik').textContent);
    eredmeny.textContent = elso + masodik;
}