const body = document.querySelector('body');

const btnDiv = document.getElementsByClassName('btns');

const drawBtn = document.createElement('button');
drawBtn.innerText = 'Draw';

const clearBtn = document.createElement('button');
clearBtn.innerText = 'Clear';

const eraseBtn = document.createElement('button');
eraseBtn.innerText = 'Erase';

const container = document.createElement('div');
container.classList.add('container');

body.appendChild(container);
btnDiv[0].appendChild(drawBtn);
btnDiv[0].appendChild(clearBtn);
btnDiv[0].appendChild(eraseBtn);

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

