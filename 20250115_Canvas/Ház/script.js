const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function draw(){
    //ház
    ctx.beginPath();
    ctx.fillStyle = 'grey';
    ctx.fillRect(200, 300, 200, 200);


    //ajtó
    ctx.beginPath();
    ctx.fillStyle = 'brown';
    ctx.fillRect(270, 420, 60, 80);
    ctx.lineWidth = 10;
    ctx.strokeStyle = '#666666';
    ctx.stroke();

    //üvegek
    let rectY = 330;
    let rectX = 220;
    ctx.beginPath();
    ctx.fillStyle = 'blue';
    ctx.fillRect(220, 330, 60, 60);
    ctx.fillRect(320, 330, 60, 60);
    ctx.beginPath();

    //üveg keret
    ctx.beginPath();
    ctx.moveTo(rectX, rectY);
    ctx.lineTo(rectX + 60, rectY);
    ctx.lineTo(rectX + 60, rectY + 60);
    ctx.lineTo(rectX, rectY + 60);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();


    rectX += 100;
    ctx.beginPath();
    ctx.moveTo(rectX, rectY);
    ctx.lineTo(rectX + 60, rectY);
    ctx.lineTo(rectX + 60, rectY + 60);
    ctx.lineTo(rectX, rectY + 60);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    //üveg belső
    ctx.beginPath();
    ctx.moveTo(250, 330);
    ctx.lineTo(250, 390)
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(220, 360);
    ctx.lineTo(280, 360);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(350, 330);
    ctx.lineTo(350, 390)
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(320, 360);
    ctx.lineTo(380, 360);
    ctx.closePath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    //tető
    ctx.beginPath();
    ctx.moveTo(300, 100);
    ctx.lineTo(180, 300);
    ctx.lineTo(420, 300);
    ctx.closePath();

    ctx.lineWidth = 10;
    ctx.strokeStyle = '#666666';
    ctx.stroke();

    ctx.fillStyle = "#e4287c";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(300, 230, 40, 0, Math.PI *2)
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 500, 600, 100);
}

draw()