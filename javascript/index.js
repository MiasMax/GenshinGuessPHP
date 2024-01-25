let isloaded = false;
function onload(){
    let buttonguess = document.querySelector("#buttonguessID");
    buttonguess.addEventListener("mouseover", (event) => {    
        loadimageguess();
    });
    buttonguess.addEventListener("mouseout", (event) => {
        unloadimageguess();
    });
    let buttonchess = document.querySelector("#buttonchessID");
    buttonchess.addEventListener("mouseover", (event) => {    
        loadimagechess();
    });
    buttonchess.addEventListener("mouseout", (event) => {
        unloadimagechess();
    });
}

function loadimageguess(){
    let divbutton = document.querySelector("#guessID");
    let newimage = document.createElement("img");
    divbutton.appendChild(newimage);
    newimage.src = "img/genshinguess.PNG"
    let isloaded = true;
}

function unloadimageguess(){
    var divbutton = document.querySelector("#guessID");
    var child = divbutton.lastElementChild; 
    divbutton.removeChild(child);
    let isloaded = false;
}

function loadimagechess(){
    let divbutton = document.querySelector("#chessID");
    let newimage = document.createElement("img");
    divbutton.appendChild(newimage);
    newimage.src = "img/echec.PNG"
    let isloaded = true;
}

function unloadimagechess(){
    var divbutton = document.querySelector("#chessID");
    var child = divbutton.lastElementChild; 
    divbutton.removeChild(child);
    let isloaded = false;
}

