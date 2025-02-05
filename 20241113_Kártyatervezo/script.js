function jelValaszt(){
    let jel = document.getElementById('select').value;
    console.log(jel)
    document.querySelectorAll('.jobbalsokep')[0].src = jel + ".png";
    document.querySelectorAll('.balalsokep')[0].src = jel + ".png";
    document.querySelectorAll('.jobbalsokep')[1].src = jel + ".png";
    document.querySelectorAll('.balalsokep')[1].src = jel + ".png";
    if (jel == "karo" || jel == "kor"){
        document.querySelectorAll('.sarkiszoveg')[0].style.color = "red";
        document.querySelectorAll('.sarkiszoveg')[1].style.color = "red";
        document.querySelectorAll('.asz_betu')[0].style.color = "red";
        document.querySelectorAll('.asz_betu')[1].style.color = "red";
    }
    else{
        document.querySelectorAll('.sarkiszoveg')[0].style.color = "black";
        document.querySelectorAll('.sarkiszoveg')[1].style.color = "black";
        document.querySelectorAll('.asz_betu')[0].style.color = "black";
        document.querySelectorAll('.asz_betu')[1].style.color = "black";
    }
}

function szamValtozas(){
    console.log(document.getElementById('szamok').value);
    szoveg = document.querySelectorAll('.sarkiszoveg');
    szoveg[0].innerHTML = document.getElementById('szamok').value;
    szoveg[1].innerHTML = document.getElementById('szamok').value;
}


function asz(){
    let checkbox = document.getElementById('asz-e').checked;
    if (checkbox == true){
        document.getElementById('asz').style.display = 'flex';
        document.querySelector(".felso").style.display = 'none';
        document.getElementById('asz_also').style.display = "flex"
        document.querySelector(".also").style.display = "none";
    }
    else{
        document.getElementById('asz').style.display = 'none';
        document.querySelector(".felso").style.display = 'flex';
        document.getElementById('asz_also').style.display = "none";
        document.querySelector(".also").style.display = "flex";




    }
}

//káró, kőr = piros