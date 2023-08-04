const body = document.querySelector('body');

//creating elements
const title = document.createElement('h1');
title.innerText = 'Etch-a-Sketch';

const splitTitle = document.createElement('div');
splitTitle.classList.add('no-title');

const btnDiv = document.createElement('div');
btnDiv.classList.add('btns');

const drawBtn = document.createElement('button');
drawBtn.innerText = 'Draw';

const clearBtn = document.createElement('button');
clearBtn.innerText = 'Clear';

const eraseBtn = document.createElement('button');
eraseBtn.innerText = 'Erase';

const colorBtn = document.createElement('button');
colorBtn.innerText = 'Colourful';

const darkBtn = document.createElement('button');
darkBtn.innerText = 'Darken';

const container = document.createElement('div');
container.classList.add('container');

const sizeDiv = document.createElement('div');
sizeDiv.classList.add('textBox');

const p = document.createElement('p');
p.innerText = 'Choose a size from 1 to 100';

const textBox = document.createElement('input');
textBox.type = 'text';

const br = document.createElement('br');

const okBtn = document.createElement('button');
okBtn.innerText = 'Ok';

//adding to html
body.appendChild(title);
body.appendChild(splitTitle);
splitTitle.appendChild(sizeDiv);
sizeDiv.appendChild(p);
sizeDiv.appendChild(textBox);
sizeDiv.appendChild(br);
sizeDiv.appendChild(okBtn);
splitTitle.appendChild(container);
splitTitle.appendChild(btnDiv);
btnDiv.appendChild(drawBtn);
btnDiv.appendChild(colorBtn);
btnDiv.appendChild(darkBtn);
btnDiv.appendChild(clearBtn);
btnDiv.appendChild(eraseBtn);

let divs = [];


//functions
function createGrid(num){
    const size = (1/num)*100;
    for(let i = 0; i < num*num; i++){
        const div = document.createElement('div');
        div.classList.add('item');
        div.style.cssText = `flex-basis: ${size}%; height: ${size}%;`;
        container.appendChild(div);
        divs.push(div);
        div.style.backgroundColor = "white";
    }
    setupDivEventListeners();
}

function removeGrid(){
    const allDivs = container.querySelectorAll('.item');
        allDivs.forEach(item => {
           container.removeChild(item); 
           divs.pop();
        });
}

function draw(div){
    div.style.backgroundColor = "black";
}

function color(div){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function darken(div){
    const bgColor = window.getComputedStyle(div).backgroundColor;
    //separate numbers from rgb format to array
    const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    const rgb = bgColor.match(regex);

    //old rgb
    const red = parseInt(rgb[1], 10);
    const green = parseInt(rgb[2], 10);
    const blue = parseInt(rgb[3], 10);

    //new rgb
    const newRed = Math.max(0, red - Math.round(red * 0.1));
    const newGreen = Math.max(0, green - Math.round(green * 0.1));
    const newBlue = Math.max(0, blue - Math.round(blue * 0.1));  

    div.style.backgroundColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
    console.log('testing')
}

function erase(div){
    div.style.backgroundColor = "white";
}

function setupDivEventListeners(){
    //add event listeners only once
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            if (currentMode === 'darken') {
                darken(div);
            } else if (currentMode === 'erase') {
                erase(div);
            } else if (currentMode === 'draw') {
                draw(div);
            } else if (currentMode === 'color') {
                color(div);
            }
        });
    });
}

createGrid(16);

//keeps track of current mode
let currentMode = 'draw';



//buttons
darkBtn.addEventListener('click', () => {
    currentMode = 'darken';
});

eraseBtn.addEventListener('click', () => {
    currentMode = 'erase';
});

clearBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.style.backgroundColor = "white" ; 
    });
});

drawBtn.addEventListener('click', () => {
    currentMode = 'draw';
});

colorBtn.addEventListener('click', () => {
    currentMode = 'color';
});

okBtn.addEventListener('click', () => {
    if(Number(textBox.value) >= 1 && 
    Number(textBox.value) <= 100 &&
    Number(textBox.value) % 1 == 0
    ){
        removeGrid();
        createGrid(Number(textBox.value));
    }
    else{
        alert('Invalid Entry!');
    }
    textBox.value = "";
});