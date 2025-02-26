import {Number} from "./number.js"

const table = [
    [],
    [],
    []
];


window.addEventListener('load', () =>{
    for  ( let i = 0; i < 3; i ++){
        for (let j = 0; j < 3; j++){
            if ( i != 2 || j != 2){
                let number = new Number(i*3 + j+1, table);
                number.setPosition(i, j);
                table[i].push(number);
            }
            else{
                table[i].push(null);
            }
    
        }
    }
    createGrid();
});

function createGrid(){
    const div = document.createElement("div");
    div.classList.add("grid-container");
    for (let i = 0; i <3; i++){
        const row = document.createElement("div");
        row.classList.add("grid-row");
        for (let j = 0; j< 3; j++){
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.innerText = table[i][j]?.value ?? '';
            row.appendChild(gridItem);
        }
        div.appendChild(row);
    }


    document.querySelector('body').appendChild(div);
}

console.log(table);
