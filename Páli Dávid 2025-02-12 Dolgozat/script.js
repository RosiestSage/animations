const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')


function drawTrain(){
    drawEngine();
    for (let i = 0; i <3; i ++){
        drawCarts( i * 250); 
    }
}


function drawEngine(){
    //az orra vagy mije
    ctx.beginPath();

    ctx.lineWidth = 2;
    ctx.moveTo(25, canvas.height - 100);
    ctx.lineTo(70, canvas.height - 145);


    ctx.moveTo(25, canvas.height - 100);
    ctx.lineTo(70, canvas.height - 100);
    ctx.stroke();

    //a teste
    ctx.lineWidth = 3;
    ctx.rect(70, canvas.height -220, 270, canvas.height-280);
    ctx.stroke();
    
    //rud
    
    ctx.beginPath();
    
    ctx.lineWidth = 3;
    ctx.moveTo(330, canvas.height - 130);
    ctx.lineTo(1000, canvas.height - 130);
    ctx.stroke();


    ctx.beginPath();
    ctx.moveTo(330, canvas.height - 140);
    ctx.lineTo(1000, canvas.height - 140);
    ctx.stroke()


    //kerekek

    tires(130, canvas.height - 110, 40, 0)
    tires(130, canvas.height - 110, 20, 0);

        // nagykerek
    tires(290, canvas.height - 130, 60, 0)
    tires(290, canvas.height - 130, 60, 30)


    //fülke
    ctx.rect(230, canvas.height -300, 110, canvas.height-320);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    windows(255, canvas.height- 290);
}


function windows(x, y){
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(x, y, 60, canvas.height - 340);
    ctx.rect(x, y, 60, canvas.height - 340);
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.stroke();
}

function tires(x, y, height, decrease){
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x, y, height - decrease, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function drawCarts(placement){
    //test
    ctx.fillStyle = 'white';
    ctx.fillRect(400 + placement, canvas.height -250, 200, canvas.height-250);
    ctx.rect(400 + placement, canvas.height -250, 200, canvas.height-250);
    ctx.stroke();

    //teto
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(380 + placement, canvas.height -270, 240, canvas.height-370);
    ctx.rect(380 + placement, canvas.height -270, 240, canvas.height-370);
    ctx.stroke();

    ctx.closePath();
    ctx.beginPath();

    windows(420 + placement, canvas.height -230);
    windows(520 + placement, canvas.height -230);

    tires(450 + placement, canvas.height -105, 35, 0);
    tires(450 + placement, canvas.height -105, 18, 0);

    tires(550 + placement, canvas.height -105, 35, 0);
    tires(550 + placement, canvas.height -105, 18, 0);

}

ctx.beginPath();
ctx.moveTo(0, canvas.height - 70);
ctx.lineTo(1200, canvas.height - 70);
ctx.stroke()


drawTrain()