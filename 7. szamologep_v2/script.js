const elsoMinusz = document.getElementById('elsoMinusz');
const elsoPlusz = document.getElementById('elsoPlusz');
const elso = document.getElementById('elso');

const masodikMinusz = document.getElementById('masodikMinusz');
const masodikPlusz = document.getElementById('masodikPlusz');
const masodik = document.getElementById('masodik');

const muveletek = document.getElementsByClassName('muvelet');
const eredmeny = document.getElementById('eredmeny');

elsoMinusz.addEventListener('click', () => szamokModosit(elso, -1));
elsoPlusz.addEventListener('click', () => szamokModosit(elso, 1));
masodikMinusz.addEventListener('click', () => szamokModosit(masodik, -1));
masodikPlusz.addEventListener('click', () => szamokModosit(masodik, 1));

function szamokModosit(elem, irany) {
    elem.textContent = parseInt(elem.textContent) + irany;
}

Array.from(muveletek).forEach(muvelet => {
    muvelet.addEventListener('click', () => szamol(muvelet.textContent));
});

function szamol(muvelet) {
    const a = parseInt(elso.textContent);
    const b = parseInt(masodik.textContent);

    switch(muvelet) {
        case '+':
            eredmeny.textContent = a + b;
            break;
        case '-':
            eredmeny.textContent = a - b;
            break;
        case '×':
            eredmeny.textContent = a * b;
            break;
        case '÷':
            eredmeny.textContent = b === 0 ? '0-val nem osztunk!' : Math.round((a / b) * 100) / 100; // 2 tizedesjegyre kerekítés Math.round-al
            //eredmeny.textContent = b === 0 ? '0-val nem osztunk!' : (a / b).toFixed(2); // ez is 2 tizedesjegyre kerekít
            break; 
    }
}