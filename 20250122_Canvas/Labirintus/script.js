const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 0, 1, 5, 0, 0, 1, 1],
    [1, 0, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 0, 1, 0, 5, 1, 1, 0, 1, 1],
    [1, 0, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 5, 1, 1, 0, 1, 0, 8],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const tileSize = canvas.width / maze.length;

let playerX = 0;
let playerY = 1;
let szabadSzinek = [0, 2, 5, 9] 
let alma = 0;


function drawMaze(){
    for (let i = 0; i < maze.length; i++){
        for (let j = 0; j < maze[i].length; j++){
            if (maze[i][j] === 1){
                ctx.fillStyle = "black";
                ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
            }
            else if(maze[i][j] === 8 || maze[i][j] === 9){
                if (alma != 3){
                    ctx.fillStyle = "grey";
                }
                else{
                    ctx.fillStyle = "green";
                    maze[i][j] = 9;
                }
                ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);                
            }
            else if(maze[i][j] === 5){
                ctx.fillStyle = "red";
                ctx.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);                
            }
        }
    }
}

function drawPlayer(){
    ctx.fillStyle = "blue";
    ctx.fillRect(playerX * tileSize, playerY * tileSize, tileSize, tileSize);
}

function movePlayer(event){
    switch (event.key){
        case "ArrowUp":
            for (let i = 0; i < szabadSzinek.length; i++)
                if (maze[playerY - 1][playerX] === szabadSzinek[i]){
                    playerY--;
                    break;
                }
            break;
        case "ArrowDown":
            for (let i = 0; i < szabadSzinek.length; i++){
                if (maze[playerY + 1][playerX] === szabadSzinek[i]){
                    playerY++;
                    break;
                }
            }
            break;
        case "ArrowLeft":
            for (let i = 0; i < szabadSzinek.length; i++){
                if (maze[playerY][playerX - 1] === szabadSzinek[i]){
                    playerX--;
                    break;
                }
            }
            break;
        case "ArrowRight":
            for (let i = 0; i < szabadSzinek.length; i++){
               if (maze[playerY][playerX + 1] === szabadSzinek[i]){
                    playerX++;
                    break;
                }
            }   
            break;
    }
    if (maze[playerY][playerX] === 5){
        almaCounter(1);
        maze[playerY][playerX] = 2;
    }


    if (maze[playerY][playerX] === 9){
        alert("You win");
        maze[playerY][playerX] = 8;
        almaCounter(-alma);
        for (let i = 0; i < maze.length; i++){
            for (let j = 0; j < maze[i].length; j++){
                if (maze[i][j] === 2){
                    maze[i][j] = 5;
                }
            }
        }
        playerX = 0;
        playerY = 1;
    }
    update()
}

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawMaze();
    drawPlayer();
}

function almaCounter(param){
    alma += param;
    document.getElementById('almaCounter').innerHTML = `Almák: ${alma}`;
}

window.addEventListener("keydown", movePlayer)
almaCounter(0)
update()