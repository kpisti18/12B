const hello = document.getElementById('hello');
// console.log(hello);

hello.addEventListener('click', () => {
    const vez = document.getElementById('vez').value.trim();
    const ker = document.getElementById('ker').value.trim();
    //console.log(vez, ker);
    
    if (ker === '') {
        alert('A csillaggal jelölt mezőt kötelező kitölteni!');
    } else {
        alert(`Szia ${vez} ${ker}. \nHogy vagy?`);
    }
});
