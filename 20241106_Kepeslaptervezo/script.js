function textChanged(){
    const textInput = document.getElementById("text").value;
    const cardText = document.getElementById("card-text");
    cardText.innerText = textInput;
}

function sizeChanged(){
    const sizeInput = document.getElementById("size").value;
    const cardText = document.getElementById("card-text");
    if (Number(sizeInput) <= 0){
        alert("A betűméret nagyobb kell legyen mint 0");
        return;
    }
    cardText.style.fontSize = sizeInput + "px";
}

function colorChanged(){
    document.querySelector(".card").style.backgroundColor = document.getElementById("bgcolor").value;
}

function borderChanged(){
    const leftImg = document.getElementById("left-image");
    const rightImg = document.getElementById("right-image");
    if (document.getElementById("border").checked) {
        leftImg.style.border = "2px solid black";
        rightImg.style.border = "2px solid black";
    }
    else{
        leftImg.style.border = "none";
        rightImg.style.border = "none";
    }
}

function photoChanged(){
    const image = document.getElementById("photo");
    if (document.getElementById("leftside").checked){
        const leftImg = document.getElementById("left-image");
        if (image == ""){
            leftImg.style.display = "none";
        }
        else{
            leftImg.style.display = "block";
            leftImg.src = image.value + ".jpg";
        }
    }
    else{
        const rightImg = document.getElementById("right-image");
        if (image == ""){
            rightImg.style.display = "none";
        }
        else{
            rightImg.style.display = "block";
            rightImg.src = image.value + ".jpg";
        }
    }
}