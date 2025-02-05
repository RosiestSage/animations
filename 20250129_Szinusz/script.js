const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

function drawAxes(){
    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.stroke();
}


let sinCheck;
let cosCheck;
let tanCheck;
let cotanCheck;

function drawWaves(){
    const amplitude = Number(document.getElementById('amplitude').value);
    const frequency = Number(document.getElementById('frequency').value);


    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;

    sinCheck = document.getElementById('sin').checked;
    cosCheck = document.getElementById('cos').checked;
    tanCheck = document.getElementById('tan').checked;
    cotanCheck = document.getElementById('cotan').checked;


    if (sinCheck == true){
        for (let x = 0; x < width; x++){
            const angle = (Math.PI * 2 * x ) * frequency / width * -1;
            const y = height / 2 - Math.sin(angle) * amplitude;
            drawCurves(x, y);
        }
        ctx.stroke();
    }

    if (cosCheck == true){
        for (let x = 0; x < width; x++){
            const angle = (Math.PI * 2 * x ) * frequency / width + Math.PI;
            const y = height / 2 - Math.cos(angle) * amplitude;
            drawCurves(x, y);

        }
        ctx.stroke();
    }

    if (tanCheck == true){
        for (let x = 0; x < width; x++){
            const angle = (Math.PI * 2 * x ) * frequency / width + Math.PI;
            const y = height / 2 - Math.tan(angle) * amplitude;
            drawCurves(x, y);
            if (y < 0){
                ctx.closePath();
                console.log("szex")
            }
        }
        ctx.stroke();
    }
}

function drawCurves(x, y){
    if (x == 0){
        ctx.moveTo(x, y);
    }
    else{
        ctx.lineTo(x, y);
    }
}

function draw(){
    drawAxes()
    drawWaves()
}

drawAxes()
drawWaves()

