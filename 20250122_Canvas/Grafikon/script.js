const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");


const width = 50;
let height;

let colours = ["red", "green", "yellow", "blue", "grey", "orange"]
let used = ["red", "green", "yellow", "blue", "grey", "orange"]
let colour = 0;

let distance = 480

//hozzáadás
function draw(){
    Adatok();
    
    
    colour = Math.floor(Math.random() * colours.length)
    ctx.fillStyle = colours[colour];
    colours.splice(colour, 1)
    if (colours.length == 0){
        colours = used;
    }
    ctx.fillRect(canvas.width - distance, canvas.height -50, width, -height);
    distance -= 80;
    
}

function Adatok(){
    ctx.font = "20px serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("Adatok", canvas.width / 2, canvas.height -10);
}


document.getElementById('submit').addEventListener("click", function(){
    height = document.getElementById('dataInput').value;
    document.getElementById('dataInput').value = "";
    draw()
})



//reset
document.getElementById('reset').addEventListener('click', function(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
});



Adatok()
