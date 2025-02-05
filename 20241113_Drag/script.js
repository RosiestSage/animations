function dragStart(event){
    console.log("Drag started");
    event.dataTransfer.setData("Name", event.target.innerHTML)
}

function dragStop(){
    console.log("Drag ended");
}

function allowDrop(event){
    event.preventDefault();
}

function drop(event){
    const data = event.dataTransfer.getData("Name");
    console.log(data)
    event.target.innerHTML += `<p>${data}</p>`;
}
