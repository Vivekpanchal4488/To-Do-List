const intbox = document.getentById("input-box");
const listcntainer = document.getentById("list-container");

function addTask(){  // button add if we click that operation happens
    if(inputbox.v=== ''){ // if input is empty then its displays this
        alert("You must write task!");
    }
    else{ // if input not empty then
        let li = document.createElement("li");  // new li variable creates 
        li.innerHTML = inpow append and display in liostcontainer
        let span = ent.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputbox.value = "";
    saveData();
}



function saveData(){
    localStorage.setItem("dnnerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask();
