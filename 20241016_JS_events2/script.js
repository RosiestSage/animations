function copied(sender){
    console.log(sender.name);
    console.log(`${sender.name} kimásolva`);
    let messageText = "";
    switch (sender.name){
        case 'name':
            messageText = "Név kimásolva";
            break;
        case 'email':
            messageText = "E-mail kimásolva";
            break;
    }
    message = document.querySelector('#message');
    message.innerText = `${messageText}`;
    message.style.animationName = 'message';
}

function removeAnimation(){
    console.log("Animation finished");
    message = document.querySelector("#message");
    message.style.animationName = "none";
}

function pwdPasted(event){
    console.log(event);
    console.log('Tried pasting password');
    event.preventDefault();
}

function emailChanged(){
    console.log('changed')
    email = document.querySelector('#email');
    if (email.value == ''){
        email.style.border = '2px solid red';
    }
}

function emailInput(){
    console.log('input')
    email = document.querySelector('#email');
    if (email.value != ''){
        email.style.border = "1px solid light-dark";
    }
}

function formReset(){
    const answer = confirm("Are you sure?");
    console.log(answer);
    if (!answer){
        event.preventDefault();
    }
}

function formSubmitted(){
    pwd1 = document.querySelector('#pwd1');
    pwd2 = document.querySelector('#pwd2');
    if (pwd1.value != pwd2.value){
        alert('Passwords do not match!')
        event.preventDefault
        return false
    }
    alert("Succesful registration");
}