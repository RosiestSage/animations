const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(100, 100);
// ctx.lineTo(200, 200);
// ctx.lineWidth = 10;
// ctx.strokeStyle = 'red';
// ctx.stroke();



//vicces bácsi
/*
ctx.beginPath();
ctx.fillStyle = 'red'
ctx.fillRect(100, 100, 600, 400)

ctx.beginPath();
ctx.arc(400, 300, 180, 0, Math.PI *2)
ctx.fillStyle = 'white';
ctx.fill()
ctx.stroke();

*/
let rectX = 100;
let rectY = 100;
let rectWidth = 100;
let rectHeight = 100;



function draw(){
    // ctx.beginPath();
    // ctx.arc(400, 300, 180, 0, Math.PI *2)
    // ctx.fillStyle = 'white';
    // ctx.fill()
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.arc(400, 300, 90, 0, Math.PI *2)
    // ctx.fillStyle = 'black';
    // ctx.fill()
    // ctx.stroke();




    ctx.beginPath();
    ctx.fillStyle = 'red'
    ctx.fillRect(rectX, rectY, rectWidth, rectHeight)

}

function name(params){

}

canvas.addEventListener('mousemove', function(event){
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;
    if (mouseX >= rectX && 
        mouseX <= rectX + rectWidth && 
        mouseY >= rectY && 
        mouseY <= rectY + rectHeight){
            rectX = mouseX - rectWidth /2;
            rectY = mouseY - rectHeight /2;
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            draw();
    }
})

draw();