const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let canvasW = canvas.width;
let canvasH = canvas.height;
let storeyLength = 150;
let buildingHeights = [1, 3, 5]
let placement = 0;
let height = 75;

function drawBuilding(){
    buildingHeights.forEach(element => {
        groundFloor(element);
        for (let i = 0; i < element; i++){
            levels();
        }
        roof(element);
        height = 75;
        placement += 150;
    });

}


function groundFloor(){
    ctx.fillStyle = "grey";
    ctx.fillRect(placement, canvasH - 75, storeyLength, 75);
    ctx.fillStyle = "red";
    ctx.fillRect(placement + 60, canvasH - 60, 25, canvasH);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.moveTo(placement, canvasH - 75);
    ctx.lineTo(placement + 150, canvasH - 75);
    ctx.stroke();

}

function levels(){
    height += 75
    ctx.fillStyle = "grey";
    ctx.fillRect(placement, canvasH -height, storeyLength, 75);    
    
    ctx.beginPath(); 
    ctx.lineWidth = 2;
    ctx.moveTo(placement, canvasH -height);
    ctx.lineTo(placement + 150, canvasH - height);
    ctx.stroke();
    windows();

}

function windows(){
    ctx.fillStyle = "lightblue";
    ctx.fillRect(placement + 15, canvasH -height + 20, storeyLength - 110, 40);
    ctx.fillRect(placement + 90, canvasH -height + 20, storeyLength - 110, 40);
}


function roof(){
    //teto
    ctx.beginPath();    
    ctx.moveTo(placement, canvasH - height);  
    ctx.lineTo(placement + 150, canvasH - height); 
    ctx.lineTo(placement + 75 , canvasH - height- 75 );  

    ctx.fillStyle = 'red';
    ctx.fill();

    ctx.closePath();     

    //szin
    ctx.beginPath();
    ctx.arc(placement + 75, canvasH - height -25, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'lightblue';
    ctx.fill();
    ctx.stroke();


    // keresztek
    ctx.beginPath();
    ctx.moveTo(placement + 55, canvasH - height -25);
    ctx.lineTo(placement + 95, canvasH - height -25)
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(placement +75, canvasH - height - 5);
    ctx.lineTo(placement +75, canvasH - height - 45);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();
}


drawBuilding()