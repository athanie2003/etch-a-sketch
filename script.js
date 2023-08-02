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

const sliderDiv = document.createElement('div');
sliderDiv.classList.add('slider');

const slider = document.createElement('input');
slider.type = 'range';
slider.min = '1';
slider.max = '100';
slider.value = '50';


body.appendChild(container);
body.appendChild(btnDiv);
btnDiv.appendChild(drawBtn);
btnDiv.appendChild(colorBtn);
btnDiv.appendChild(darkBtn);
btnDiv.appendChild(clearBtn);
btnDiv.appendChild(eraseBtn);

let divs = [];

function createGrid(num){
    for(let i = 0; i < num*num; i++){
        const div = document.createElement('div');
        div.classList.add('item');
        container.appendChild(div);
        divs.push(div);
        div.addEventListener('mouseover', () => {
            div.style.cssText = "background-color: black;"
        });
    }


}

createGrid(16);
eraseBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.cssText = "background-color: white;";
        });  
    });
})

clearBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.style.cssText = "background-color: white;" ;
        div.addEventListener('mouseover', () => {
            div.style.cssText = "background-color: black;";
        }); 
    });
})

drawBtn.addEventListener('click', () => {
    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.style.cssText = "background-color: black;";
        });  
    });
})

