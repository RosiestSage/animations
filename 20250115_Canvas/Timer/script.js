const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
const timeInput = document.getElementById('timeInput');
const setTimeBtn = document.getElementById('setTime')
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');

let countdown = 10;
let timeleft = countdown;
let timer;
let running = false;

function drawBackgroundCircle(){
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI)
    ctx.strokeStyle = "lightgrey";
    ctx.lineWidth = 10;
    ctx.stroke();
}

function drawCountdownArc(){
    const angle = (2 * Math.PI * timeleft / countdown) - (Math.PI / 2);
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 100, -Math.PI/2, angle, false);
    //ctx.strokeStyle = "green";
    ctx.strokeStyle = `hsl(${(timeleft/countdown) * 120}, 100%, 50%)`
    ctx.lineWidth = 10;
    ctx.stroke();
}

function drawTimerText(){
    ctx.font = "bold 36px Arial"
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline= 'middle';
    ctx.fillText(timeleft > 0 ? timeleft: "Time is up", canvas.width /2, canvas.height /2)
}


function updateTimer(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackgroundCircle()
    if (timeleft > 0){
        timeleft--;
        drawCountdownArc();
    }
    else{
        clearInterval(timer);
        running = false;
    }
    drawTimerText();
    if (running){
        startBtn.disabled = true;
    }
    else{
        startBtn.disabled = false;
        
    }
}

drawBackgroundCircle();



startBtn.addEventListener("click", function(event){
    drawCountdownArc();
    timer = setInterval(updateTimer, 1000);
    running = true;
})

setTimeBtn.addEventListener("click", function(event){
    countdown = Number(timeInput.value);
    timeleft = countdown;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTimerText()
    drawBackgroundCircle()
})

pauseBtn.addEventListener("click", function(event){
    clearInterval(timer);
})