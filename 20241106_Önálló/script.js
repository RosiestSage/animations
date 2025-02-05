let kokvany = "white";
let kokvany1 = "white";
let kokvany2 = "white";


function hover(parameter){
    const color = document.getElementById("szin").value;
    let mezo;
    switch (parameter){
        case 1:
            mezo = document.getElementById("1");
            mezo.style.backgroundColor = color;
            break;
        case 2:
            mezo = document.getElementById("2");
            mezo.style.backgroundColor = color;
            break;
        case 3:
            mezo = document.getElementById("3");
            mezo.style.backgroundColor = color;
            break;
    }
}

function leave(parameter){
    const color = document.getElementById("szin").value;
    let mezo;
    switch (parameter){
        case 1:
            mezo = document.getElementById("1");
            mezo.style.backgroundColor = kokvany;
            break;
        case 2:
            mezo = document.getElementById("2");
            mezo.style.backgroundColor = kokvany1;
            break;
        case 3:
            mezo = document.getElementById("3");
            mezo.style.backgroundColor = kokvany2;
            break;
    }
    
}

function change(parameter){
    const color = document.getElementById("szin").value;
    let mezo;
    switch (parameter){
        case 1:
            mezo = document.getElementById("1");
            mezo.style.backgroundColor = color;
            kokvany = color;
            break;
        case 2:
            mezo = document.getElementById("2");
            mezo.style.backgroundColor = color;
            kokvany1 = color
            break;
        case 3:
            mezo = document.getElementById("3");
            mezo.style.backgroundColor = color;
            kokvany2 = color
            break;
    }
}