const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasW = canvas.width;
const canvasH = canvas.height;

let i = 0;
let timer = setInterval(game, 50);


function game(){
    i += 5;
    drawRoad();
    drawCar(i);
    drawLight();
}

// function gamePlay(){
//     drawRoad()
//     drawCar()
// }

function drawLight(){
    ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.roundRect(canvasW /2 -50, canvasH / 2 + 60, canvasW - 600, canvasH - 460, [30]);
    ctx.fill();
    ctx.stroke();
}


function drawCar(i){
    ctx.fillStyle = "red";
    ctx.fillRect(0 + i, canvasH / 2 + 15, canvasW / 16, canvasH / 2 -220);
}


function drawRoad(){
    ctx.fillStyle = "grey";
    ctx.fillRect(0, canvasH / 2 - 50, canvasW, canvasH / 2 -150);
    for (let i = 0; i < canvasW; i++){
        if (i % 50 == 0 && i > 0){
            if (!isOdd(i / 50)){
                ctx.fillStyle = "grey";
                ctx.fillRect(i, canvasH / 2 - 10, i , canvasH / 2 -230);
            }  
            else{
                ctx.fillStyle = "white";
                ctx.fillRect(i, canvasH / 2 - 10, i , canvasH / 2 -230);
            }

           
        }
    }
}



function isOdd(n) {
    return Math.abs(n % 2) == 1;
}


