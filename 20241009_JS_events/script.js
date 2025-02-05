function init(){
    const container = document.querySelector(".container");
    // const container = document.getElementsByClassName("container");
    //console.log(container);
    container.style.backgroundColor = "lightgreen";
    
}

function imageLoaded(){
    document.querySelector("#image").style.border = '10px solid green';
}


let clickCounter = 0;

function imageClicked(){
    if (clickCounter % 2 == 0){
        document.querySelector('#image').style.border = '10px solid yellow';
    }
    else{
        document.querySelector('#image').style.border = '10px solid green';
    }
    clickCounter++;
}


function imageDoubleClicked(){
    const image = document.querySelector('#image');
    let width = (getComputedStyle(image).width);
    width = Number(width.slice(0, width.length - 2));
    width *= 1.1;
    width = width.toString() + 'px';
    image.style.width = width;
}

function imageMouseEnter(){
    const image = document.querySelector('#image');
    image.style.opacity = 1;
}

function imageMouseLeave(){
    const image = document.querySelector('#image');
    image.style.opacity = 0.5;
}

function imageWheel(event){
    let opacity = Number(getComputedStyle(image).opacity);
    if (event.deltaY > 0){
        opacity-= 0.05;
    }
    else{
        opacity += 0.05;
    }
    image.style.opacity = opacity;
}

function textBlured(){
    const text = document.querySelector('#text');
    if (text.value == '') {
        document.querySelector('.message').innerText = 'Nem lehet üres';
        text.style.border = '1px solid red';
    }

}

function textKeyUp(){
    if (document.querySelector('#text').value != ""){
        document.querySelector(".message").innerText = '';
        document.querySelector('#text').style.border = '1px solid green';
    }
}





// let x = 21;

// //alert(x);
// console.log(x);
// console.log(typeof x);
// x = "Hello";
// console.log(typeof x);

// const PI = 3.14;
// PI = 0;
