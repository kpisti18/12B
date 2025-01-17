const area = document.getElementById('area');
const demo = document.getElementById('demo');

area.addEventListener('keyup', () => {
    //demo.textContent = '*'.repeat(area.value.length);
    let csillag = '';
    
    for (let i = 0; i < area.value.length; i++) {
        csillag += '*'; 
    }

    demo.textContent = csillag;
});