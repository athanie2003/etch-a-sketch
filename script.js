const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');

const drawBtn = document.createElement('button');
drawBtn.classList.add('draw');
drawBtn.innerText = 'Draw';

const clearBtn = document.createElement('button');
clearBtn.classList.add('clear');
clearBtn.innerText = 'Clear';

const eraseBtn = document.createElement('button');
eraseBtn.classList.add('erase');
eraseBtn.innerText = 'Erase';

body.appendChild(container);
body.appendChild(drawBtn);
body.appendChild(clearBtn);
body.appendChild(eraseBtn);

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

