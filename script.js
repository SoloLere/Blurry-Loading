const loadText = document.querySelector('.loading-text');
const background = document.querySelector('.bg');

let count = 0;

let counter = setInterval(blurrring, 30);

function blurrring() {
    count ++ 

    if (count > 99) clearInterval(counter);

    loadText.textContent = `${count} %`;
    loadText.style.opacity = scale(count, 0, 100, 1, 0);

    background.style.filter = `blur(${scale(count, 0,100,30,0)}px)`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}