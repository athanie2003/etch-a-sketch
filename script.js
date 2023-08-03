const body = document.querySelector('body');

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

body.appendChild(sizeDiv);
sizeDiv.appendChild(p);
sizeDiv.appendChild(textBox);
sizeDiv.appendChild(br);
sizeDiv.appendChild(okBtn);
body.appendChild(container);
body.appendChild(btnDiv);
btnDiv.appendChild(drawBtn);
btnDiv.appendChild(colorBtn);
btnDiv.appendChild(darkBtn);
btnDiv.appendChild(clearBtn);
btnDiv.appendChild(eraseBtn);

let divs = [];

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

createGrid(16);


eraseBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "white";
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
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = "black";
        });  
    });
});

colorBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });  
    });
});

darkBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            const bgColor = window.getComputedStyle(div).backgroundColor;
            console.log(bgColor);
            const regex = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;
            const rgb = bgColor.match(regex);

            const red = parseInt(rgb[1], 10);
            const green = parseInt(rgb[2], 10);
            const blue = parseInt(rgb[3], 10);

            const newRed = Math.max(0, red - Math.round(25.5));
            const newGreen = Math.max(0, green - Math.round(25.5));
            const newBlue = Math.max(0, blue - Math.round(25.5));

            div.style.backgroundColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`;
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

