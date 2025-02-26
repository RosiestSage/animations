const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const canvasW = canvas.width;
const canvasH = canvas.height;
let colors_firstrow = ["green", "lightblue", "yellow", "red", "orange"]
let colors_secrow = ["purple", "pink", "blue", "orange"]


function game(){
    drawRoad();
    drawCircle();
    drawCars();

}




function drawRoad(){
    ctx.fillStyle = "grey";
    ctx.fillRect(0, canvasH / 2-175, canvasW, 350);
    for (let i = 0; i < canvasW; i++){
        if (i % 20 == 0 && i > 0){
            if (!isOdd(i / 20)){
                ctx.fillStyle = "grey";
                ctx.fillRect(i, canvasH / 2 -10, i, 10);
            }  
            else{
                ctx.fillStyle = "white";
                ctx.fillRect(i, canvasH / 2 - 10, i, 10);
            }

        }
    }
}

function drawCircle(){
    ctx.beginPath();
    ctx.arc(canvasW /2 , canvasH / 2, 90, 0, 2 * Math.PI);
    ctx.fillStyle = "lightgrey";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();

    ctx.lineWidth = 5;
    ctx.arc(canvasW /2 , canvasH / 2, 70, 0, 2 * Math.PI);
    ctx.strokeStyle = "white";
    ctx.stroke();
}


function isOdd(n) {
    return Math.abs(n % 2) == 1;
}

function drawCars(){
    for (let i = 0; i < 2; i++){
        for (k=0; k <6; k++){
            drawSlut(k, i);
            drawVehicle(k *200, i);
            
        }
    }
}

function drawSlut(eltolas, sor){
    switch (sor){
        case 0:
            eltolas = eltolas *200
            ctx.fillStyle = "lightgrey";
            ctx.fillRect(eltolas + 20, 0, 160, 125);
            break;
        case 1:
            eltolas = eltolas *200
            ctx.fillStyle = "lightgrey";
            ctx.fillRect(eltolas + 20, canvasH - 125, 160, 125);
            break;
    }

}

function drawVehicle(eltolas, sor){

    switch (sor){
        case 0:
            let random = Math.floor(Math.random() * 5)
            ctx.fillStyle = colors_firstrow[random];
            ctx.fillRect(eltolas + 20, 30, 160, 80);
            ctx.fillStyle = "black";
            ctx.fillRect(eltolas + 70, 40, 60, 65);
            for (let i = 0; i  < 2; i ++){
                for (let k = 0; k < 2; k++){
                    ctx.fillRect(eltolas + 45 + (k*70), (i * 70 )+ 25, 40, 20);
                }
            }

            ctx.fillStyle = "red";
            ctx.fillRect(eltolas + 20, 50, 10, 40);
            ctx.fillStyle = "yellow";
            ctx.fillRect(eltolas + 170, 50, 10, 40);
            break;
        case 1:
            let veletlen = Math.floor(Math.random() * 4)
            ctx.fillStyle = colors_secrow[veletlen];
            ctx.fillRect(eltolas + 20, canvasH - 110, 160, 80);
            ctx.fillStyle = "black";
            ctx.fillRect(eltolas + 70, canvasH - 102, 60, 65);
            for (let i = 0; i  < 2; i ++){
                for (let k = 0; k < 2; k++){
                    ctx.fillRect(eltolas + 45 + (k*70), canvasH - (45 + i* 70) , 40, 20);
                }
            }
            ctx.fillStyle = "red";
            ctx.fillRect(eltolas + 20, 510, 10, 40);
            ctx.fillStyle = "yellow";
            ctx.fillRect(eltolas + 170, 510, 10, 40);
            break;
    }

}
