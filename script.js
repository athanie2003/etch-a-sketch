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

function darken(bgColor){
    const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
    const rgb = bgColor.match(regex);
    console.log(bgColor);

    const red = parseInt(rgb[1], 10);
    const green = parseInt(rgb[2], 10);
    const blue = parseInt(rgb[3], 10);

    const newRed = Math.max(0, red - 25);
    const newGreen = Math.max(0, green - 25);
    const newBlue = Math.max(0, blue - 25);

    return `rgb(${newRed}, ${newGreen}, ${newBlue})`;
}

function erase(div){
    div.style.backgroundColor = "white";
    console.log('testing');
}

createGrid(16);


//buttons
darkBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.removeEventListener('mouseover', draw);
        div.removeEventListener('mouseover', color);
        div.removeEventListener('mouseover', erase);
        div.addEventListener('mouseover', () => {
            const bgColor = window.getComputedStyle(div).backgroundColor;
            div.style.backgroundColor = darken(bgColor);
        }); 
    });
});

eraseBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.removeEventListener('mouseover', draw);
        div.removeEventListener('mouseover', color);
        div.removeEventListener('mouseover', darken);
        div.addEventListener('mouseover', () => {
            erase(div);
        });
    });
});

clearBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.style.backgroundColor = "white" ; 
    });
});

drawBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.removeEventListener('mouseover', draw);
        div.removeEventListener('mouseover', color);
        div.removeEventListener('mouseover', darken);
        div.addEventListener('mouseover', () => {
           draw(div); 
        });
    }); 
});

colorBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.removeEventListener('mouseover', draw);
        div.removeEventListener('mouseover', darken);
        div.removeEventListener('mouseover', erase);
        div.addEventListener('mouseover', () => {
            color(div);
        }); 
    });
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

