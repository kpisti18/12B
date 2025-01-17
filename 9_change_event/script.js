const select = document.getElementById('city');

select.addEventListener('change', () => {
    const selected = select.value;
    const image = document.getElementById('image');
    const demo = document.getElementById('demo');

    //console.log(selected, image);
    
    // hozzunk létre egy új img html tag-et
    const img = document.createElement('img');
    img.src = `./img/${selected}.jpg`;
    img.alt = selected;
    img.title = selected;   

    //image.append(img); hozzáfűzés
    image.replaceChildren(img); //ezzel kitöröljük az előtte benne lévő elemeket

    demo.textContent = selected;
});