const moodImage = document.getElementById('moodImage');
const moodSlider = document.getElementById('moodSlider');

//console.log(moodImage, moodSlider);


window.addEventListener('DOMContentLoaded', () => {
    moodImage.src = './img/4.png';
});

moodSlider.addEventListener('input', () => {
    const sliderValue = parseInt(moodSlider.value) + 1;
    //console.log(typeof(sliderValue));
    
    moodImage.src = `./img/${sliderValue}.png`;
    //console.log(moodImage); 
});