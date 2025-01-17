const decraseBtn = document.getElementById('decraseBtn');
const incraseBtn = document.getElementById('incraseBtn');
const counter = document.getElementById('counter');

console.log(decraseBtn, incraseBtn, counter);

decraseBtn.addEventListener('click', function () {
    let currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue - 1;
});

incraseBtn.addEventListener('click', function () {
    let currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue + 1;
});