const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const padding = 50;

let points = []
const gridSize = 20; 


function drawLineChart(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'black';
    ctx.moveTo(padding, canvas.height - padding);
    points.forEach(point => {
        ctx.lineTo(padding + canvas.width / gridSize * point.x, canvas.height - canvas.height / gridSize * point.y - padding);
    });

    ctx.stroke();

    points.forEach(point => {
        ctx.beginPath();
        ctx.fillStyle = 'red';

        ctx.arc(padding + canvas.width / gridSize * point.x, canvas.height - canvas.height / gridSize * point.y - padding, 4, 0, Math.PI * 2);
        ctx.fill();
    });
}

// function compare(a, b){
//     // if ( a.x < b.x) return -1;
//     // else if (a.x > b.x) return 1;
//     // return 0;
//     // return a.x - b.x
// }

function addPoint(){
    const xInput = Number(document.getElementById('x').value);
    const yInput = Number(document.getElementById('y').value);

    points.push({x: xInput, y: yInput});

    // points.sort(function (a,b){
    //     return a.x - b.x
    // })

    points.sort((a, b) => a.x - b.x);
    drawLineChart();
}

function reset(){
    points = [];
    drawLineChart();
}

document.getElementById('btnAddPoint').addEventListener('click', addPoint);
document.getElementById('btnReset').addEventListener('click', reset);
