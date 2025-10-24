const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");

function addTask(){  // button add if we click that operation happens
    if(inputbox.value === ''){ // if input is empty then its displays this
        alert("You must write task!");
    }
    else{ // if input not empty then
        let li = document.createElement("li");  // new li variable creates 
        li.innerHTML = inputbox.value; // inside li all that of input is stored value
        listcontainer.appendChild(li); // now li append and display in liostcontainer
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputbox.value = "";
    saveData();
}


listcontainer.addEventListener("click", function(e){ // for clicking
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();