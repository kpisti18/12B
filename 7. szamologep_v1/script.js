const elsoMinusz = document.getElementById('elsoMinusz');
const elsoPlusz = document.getElementById('elsoPlusz');
const elso = document.getElementById('elso');

const masodikMinusz = document.getElementById('masodikMinusz');
const masodikPlusz = document.getElementById('masodikPlusz');
const masodik = document.getElementById('masodik');

const muveletek = document.getElementsByClassName('muvelet');
//console.log(elsoMinusz, elsoPlusz, elso);
//console.log(masodikMinusz, masodikPlusz, masodik);
console.log(muveletek);
//console.log(typeof(muveletek[0]));
const eredmeny = document.getElementById('eredmeny');

elsoMinusz.addEventListener('click', () => {
    elso.textContent = parseInt(elso.textContent) - 1;
});

elsoPlusz.addEventListener('click', () => {
    elso.textContent = parseInt(elso.textContent) + 1;
});

masodikMinusz.addEventListener('click', () => {
    masodik.textContent = parseInt(masodik.textContent) - 1;
});

masodikPlusz.addEventListener('click', () => {
    masodik.textContent = parseInt(masodik.textContent) + 1;
});

for (let i = 0; i < muveletek.length; i++) {
    muveletek[i].addEventListener('click', () => {
        if (muveletek[i].textContent === '+') {
            eredmeny.textContent = parseInt(elso.textContent) + parseInt(masodik.textContent);
        } else if (muveletek[i].textContent === '-') {
            eredmeny.textContent = parseInt(elso.textContent) - parseInt(masodik.textContent);
        } else if (muveletek[i].textContent === '×') {
            eredmeny.textContent = parseInt(elso.textContent) * parseInt(masodik.textContent);
        } else if (muveletek[i].textContent === '÷') {
            if (parseInt(masodik.textContent) === 0) {
                eredmeny.textContent = '0-val nem osztunk!';
            } else {
                eredmeny.textContent = parseInt(elso.textContent) / parseInt(masodik.textContent);
            }
        }
    });
}