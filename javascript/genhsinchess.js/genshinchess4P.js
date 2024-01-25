const chessboard = document.querySelector("#chessboard");
const playerDisplay = document.querySelector("#player");
const width = 14;
let playerGo = 'white'
let statusPlayerWhiteAlive = true
let statusPlayerBlackAlive = true
let statusPlayerGreenAlive = true
let statusPlayerPurpleAlive = true
let nbPlayerDead = 0
playerDisplay.textContent = "white"

const startPieces = [
    '', '', '', rook_white, knight_white, bishop_white, queen_white, king_white, bishop_white, knight_white, rook_white,'', '', '', 
    '', '', '', pawn_white, pawn_white, pawn_white, pawn_white, pawn_white, pawn_white, pawn_white, pawn_white,'', '', '',
    '', '', '', '', '', '', '', '', '', '', '', '', '', '', 
    rook_green,pawn_green,'', '', '', '', '', '', '', '','', '', pawn_purple,rook_purple,
    knight_green,pawn_green,'', '', '', '' ,'', '', '', '','', '', pawn_purple,knight_purple,
    bishop_green,pawn_green,'', '', '', '','', '', '', '','', '', pawn_purple,bishop_purple,
    king_green,pawn_green,'', '', '', '', '', '', '', '','', '', pawn_purple,king_purple,
    queen_green,pawn_green,'', '', '', '', '', '', '', '','', '', pawn_purple,queen_purple,
    bishop_green,pawn_green,'', '', '', '', '', '', '', '','', '', pawn_purple,bishop_purple,
    knight_green,pawn_green,'', '', '', '', '', '', '', '','', '', pawn_purple,knight_purple,
    rook_green,pawn_green,'', '', '', '', '','', '', '','', '', pawn_purple,rook_purple,
    '','', '', '', '', '', '', '', '', '', '', '', '', '', 
    '', '', '', pawn_black, pawn_black, pawn_black, pawn_black, pawn_black, pawn_black, pawn_black, pawn_black,'', '', '', 
    '', '', '', rook_black, knight_black, bishop_black, queen_black, king_black, bishop_black, knight_black, rook_black,'', '', ''
]

function createBoard(){
    startPieces.forEach((startPieces , i) => {
        const row = Math.floor( i / width);
        const newChessCase = document.createElement("div")
        newChessCase.classList.add('chessCase')
        newChessCase.setAttribute('case-id',i)
        newChessCase.innerHTML = startPieces
        newChessCase.firstChild && newChessCase.firstChild.setAttribute('draggable', true)
        if(row % 2 == 0){
            if(i % 2 != 0){
                newChessCase.classList.add('blue')
            }else{
                newChessCase.classList.add('aquamarine')
            }
        }
        else{
            if(i % 2 == 0){
                newChessCase.classList.add('blue')
            }else{
                newChessCase.classList.add('aquamarine')
            }
        }
        if (i >= 3 && i <= 10 || i >= 17 && i <= 24){
            newChessCase.firstChild.firstChild.classList.add('white')
        }
        else if (i == 42 || i == 43 || i == 56 || i == 57 || i == 70 || i == 71 || i == 84 || i == 85 || 
            i == 98 || i == 99 || i == 112 || i == 113 || i == 126 || i == 127|| i == 140 || i == 141){
            newChessCase.firstChild.firstChild.classList.add('green')
        }
        else if (i == 54 || i == 55 || i == 68 || i == 69 || i == 82 || i == 83 || i == 96 || i == 97 || 
            i == 110 || i == 111 || i == 124 || i == 125 || i == 138 || i == 139|| i == 152 || i == 153){
            newChessCase.firstChild.firstChild.classList.add('purple')
        }
        else if (i >= 171 && i <= 178 || i >= 185 && i <= 192){
            newChessCase.firstChild.firstChild.classList.add('black')
        }
        else if (i >= 0 && i <= 2 || i >= 11 && i <= 16 || i >= 25 && i <= 30 || i >= 39 && i <= 41 ||
            i >= 154 && i <= 156 || i >= 165 && i <= 170 || i >= 179 && i <= 184 || i >= 193 && i <= 195 ){
            newChessCase.classList.add('NotCase')
        }
        chessboard.appendChild(newChessCase)
    })
    const elementSp = document.querySelectorAll('.'+playerGo);
    elementSp.forEach((nb) => {
        nb.style.boxShadow = 'inset 0 0 1em rgb(255, 235, 119), 0 0 1em rgb(255, 235, 119)';
    });
}
createBoard();

const allCases = document.querySelectorAll("#chessboard .chessCase")

allCases.forEach(chessCase => {
    chessCase.addEventListener('dragstart', dragStart)
    chessCase.addEventListener('dragover', dragOver)
    chessCase.addEventListener('drop', dragDrop)

})

let draggedElement
let startPosition


function dragStart(e){
    draggedElement = e.target
    startPosition = e.target.parentNode.getAttribute('case-id')
}

function dragOver(e) {
    e.preventDefault()
}

function dragDrop(e){
    e.stopPropagation()
    const correctGo = draggedElement.firstChild?.classList.contains(playerGo)
    const taken = e.target.classList.contains('piece')
    const valid = checkIfValid(e.target) 
    let opponentGo1 = ""
    let opponentGo2 = ""
    let opponentGo3 = ""
    let takenByOpponent1 = ""
    let takenByOpponent2 = ""
    let takenByOpponent3 = ""
    if(playerGo === 'white'){
        opponentGo1 = "purple"
        opponentGo2 = "black"
        opponentGo3 = "green"
    }else if (playerGo === 'purple'){
        opponentGo1 = "black"
        opponentGo2 = "green"
        opponentGo3 = "white"
    }else if (playerGo === 'black'){
        opponentGo1 = "green"
        opponentGo2 = "purple"
        opponentGo3 = "white"
    }else if (playerGo === 'green'){
        opponentGo1 = "white"
        opponentGo2 = "purple"
        opponentGo3 = "black"
    }
    takenByOpponent1 = e.target.firstChild?.classList.contains(opponentGo1)
    takenByOpponent2 = e.target.firstChild?.classList.contains(opponentGo2)
    takenByOpponent3 = e.target.firstChild?.classList.contains(opponentGo3)
    if(correctGo){
        if(takenByOpponent1 && valid || takenByOpponent2 && valid || takenByOpponent3 && valid ){
            e.target.parentNode.append(draggedElement)
            e.target.remove();
            checkForDead();
            changePlayer();
            return
        }
        if(takenByOpponent1 && taken || takenByOpponent2 && taken || takenByOpponent3 && taken ){
            return
        }
        if(valid){
            e.target.append(draggedElement)
            checkForDead();
            changePlayer();
            return
        }
    }
}

function changePlayer(){
    const elementDel = document.querySelectorAll('.'+playerGo);
    elementDel.forEach((nb) => {
        nb.style.boxShadow = '';
    });
    if(playerGo === 'white'){
        playerGo = 'purple'
        playerDisplay.textContent = "purple"
    }else if (playerGo === 'purple'){
        playerGo = 'black'
        playerDisplay.textContent = "black"
    }else if (playerGo === 'black'){
        playerGo = 'green'
        playerDisplay.textContent = "green"
    }else if (playerGo === 'green'){
        playerGo = 'white'
        playerDisplay.textContent = "white"
    }

    if (playerGo === 'purple' && !statusPlayerPurpleAlive){
        playerGo = 'black'
        playerDisplay.textContent = "black"
        
    }
    if (playerGo === 'black' && !statusPlayerBlackAlive){
        playerGo = 'green'
        playerDisplay.textContent = "green"
    }
    if (playerGo === 'green' && !statusPlayerGreenAlive){
        playerGo = 'white'
        playerDisplay.textContent = "white"
    }
    if (playerGo === 'white' && !statusPlayerWhiteAlive){
        playerGo = 'purple'
        playerDisplay.textContent = "purple"
    }
    if (playerGo === 'purple' && !statusPlayerPurpleAlive){
        playerGo = 'black'
        playerDisplay.textContent = "black"
    }
    if (playerGo === 'black' && !statusPlayerBlackAlive){
        playerGo = 'green'
        playerDisplay.textContent = "green"
    }
    if (playerGo === 'green' && !statusPlayerGreenAlive){
        playerGo = 'white'
        playerDisplay.textContent = "white"
    }
    if (playerGo === 'white' && !statusPlayerWhiteAlive){
        playerGo = 'purple'
        playerDisplay.textContent = "purple"
    }
    const elementSp = document.querySelectorAll('.'+playerGo);
    elementSp.forEach((nb) => {
        nb.style.boxShadow = 'inset 0 0 1em rgb(255, 235, 119), 0 0 1em rgb(255, 235, 119)';
    });
    

}

function checkIfValid(target){
    const targetId = Number(target.getAttribute('case-id')) || Number(target.parentNode.getAttribute('case-id'))
    const startId = Number(startPosition)
    const isHere = document.querySelector('[case-id="'+targetId+'"]').firstChild
    let opponentGo1 = ""
    let opponentGo2 = ""
    let opponentGo3 = ""
    let isOpponent1 = ""
    let isOpponent2 = ""
    let isOpponent3 = ""
    if(playerGo === 'white'){
        opponentGo1 = "purple"
        opponentGo2 = "black"
        opponentGo3 = "green"
    }else if (playerGo === 'purple'){
        opponentGo1 = "black"
        opponentGo2 = "green"
        opponentGo3 = "white"
    }else if (playerGo === 'black'){
        opponentGo1 = "green"
        opponentGo2 = "purple"
        opponentGo3 = "white"
    }else if (playerGo === 'green'){
        opponentGo1 = "white"
        opponentGo2 = "purple"
        opponentGo3 = "black"
    }
    isOpponent1 = document.querySelector('[case-id="'+targetId+'"]').firstChild?.firstChild?.classList.contains(opponentGo1)
    isOpponent2 = document.querySelector('[case-id="'+targetId+'"]').firstChild?.firstChild?.classList.contains(opponentGo2)
    isOpponent3 = document.querySelector('[case-id="'+targetId+'"]').firstChild?.firstChild?.classList.contains(opponentGo3)
    if(document.querySelector('[case-id="'+startPosition+'"]').firstChild?.getAttribute('id') === "pawn"){
        if (isHere && isOpponent1 || isHere && isOpponent2 || isHere && isOpponent3 ){
            if(canMouvPawn(targetId,startId)){
                return true
            }
        }else if (isHere && !isOpponent1 || isHere && !isOpponent2 || isHere && !isOpponent3) {
            return false
        }
        else{
            if(canMouvPawn(targetId,startId)){
                return true
            }
        }
    }else if (isHere && isOpponent1 || isHere && isOpponent2 || isHere && isOpponent3 ){
        if(canMouvPieces(targetId,startId)){
            return true
        }
    }else if (isHere && !isOpponent1 || isHere && !isOpponent2 || isHere && !isOpponent3) {
        return false
    }
    else{
        if(canMouvPieces(targetId,startId)){
            return true
        }
    }
    
}

function canMouvPawn(targetId,startId){
    color = document.querySelector('[case-id="'+startPosition+'"]').firstChild?.firstChild.getAttribute('class')
    switch(color){
        case 'imgPiece white' :
            const startRowWhite = [17,18,19,20,21,22,23,24]

            if (
            startRowWhite.includes(startId) && targetId === startId + (2*width) || 
            targetId === startId + (width) && !(document.querySelector('[case-id="'+targetId+'"]').firstChild) || 
            targetId === startId + (width-1) && document.querySelector('[case-id="'+targetId+'"]').firstChild ||
            targetId === startId + (width+1) && document.querySelector('[case-id="'+targetId+'"]').firstChild
            ){return true}
            break;

        case 'imgPiece purple' :
            const startRowPurple = [54,68,82,96,110,124,138,152]
            if (
            startRowPurple.includes(startId) && targetId === (startId - 2 ) ||
            targetId === startId - 1 && !(document.querySelector('[case-id="'+targetId+'"]').firstChild) || 
            targetId === startId - (width+1) && document.querySelector('[case-id="'+targetId+'"]').firstChild ||
            targetId === startId + (width-1) && document.querySelector('[case-id="'+targetId+'"]').firstChild
            ){return true}
            break;

        case 'imgPiece black' :
            const startRowBlack = [171,172,173,174,175,176,177,178]
            if (
            startRowBlack.includes(startId) && targetId === startId - (2*width) ||
            targetId === startId - (width) && !(document.querySelector('[case-id="'+targetId+'"]').firstChild) || 
            targetId === startId - (width-1) && document.querySelector('[case-id="'+targetId+'"]').firstChild ||
            targetId === startId - (width+1) && document.querySelector('[case-id="'+targetId+'"]').firstChild
            ){return true}
            break;

        case 'imgPiece green' : 
            const startRowGreen = [43,57,71,85,99,113,127,141]
            if (
            startRowGreen.includes(startId) && targetId === startId + 2 ||
            targetId === startId + 1 && !(document.querySelector('[case-id="'+targetId+'"]').firstChild) || 
            targetId === startId - (width-1) && document.querySelector('[case-id="'+targetId+'"]').firstChild ||
            targetId === startId + (width+1) && document.querySelector('[case-id="'+targetId+'"]').firstChild
            ){return true}
            break;
    }
}

function canMouvPieces(targetId,startId){
    const piece = draggedElement.id
    switch(piece){
        case 'knight' :
            if (targetId === startId + (width*2) - 1 || 
            targetId === startId + (width*2) + 1 || 
            targetId === startId + (width) + 2 || 
            targetId === startId + (width) - 2 || 
            targetId === startId - (width*2) - 1 || 
            targetId === startId - (width*2) + 1 || 
            targetId === startId - (width) - 2 || 
            targetId === startId - (width) + 2 
            ){return true}
            break;

        case 'king' :
            if (
            targetId === startId + (width) + 1 || 
            targetId === startId + (width) || 
            targetId === startId + (width) - 1 || 
            targetId === startId + 1 || 
            targetId === startId - 1 || 
            targetId === startId - (width) + 1 ||  
            targetId === startId - (width)  || 
            targetId === startId - (width) - 1 
            ){return true}
            break;

        case 'rook' :
            if (ligneRook(targetId,startId)
            ){return true}
            break;
 
        case 'bishop' :
            if (ligneBishop(targetId,startId))
            {return true}
            break;

        case 'queen' :
            if (ligneRook(targetId,startId) || ligneBishop(targetId,startId))
            {return true}
            break;
    }
}

function ligneRook(targetId,startId){
    const row = Math.floor( startId / width);
    const newRow = Math.floor( targetId / width);
    for(let i = 1; i < width ; i++){
        if (row === newRow){
            if (targetId === startId + i){
                for(let retour = -1; Math.abs(retour) < i ; retour--){
                    if(document.querySelector('[case-id="'+(targetId + retour)+'"]').firstChild){
                        return false
                    }
                }
                return true
            }
            else if (targetId === startId - i){
                for(let retour = 1; Math.abs(retour) < i ; retour++){
                    if(document.querySelector('[case-id="'+(targetId + retour)+'"]').firstChild){
                        return false
                    }
                }
                return true
            }
        }
        else if (targetId === startId + (width*i)){
            for(let retour = -1; Math.abs(retour) < i ; retour--){
                if(document.querySelector('[case-id="'+(targetId + (width*retour))+'"]').firstChild){
                    return false
                }
            }
            return true
        }
        else if (targetId === startId - (width*i)){
            for(let retour = 1; Math.abs(retour) < i ; retour++){
                if(document.querySelector('[case-id="'+(targetId + (width*retour))+'"]').firstChild){
                    return false
                }
            }
            return true
        }
    }
}

function ligneBishop(targetId,startId){
    for(let i = 1; i < width ; i++){
        if (targetId === startId + (width*i) + i){
            for(let retour = -1; Math.abs(retour) < i ; retour--){
                if(document.querySelector('[case-id="'+(targetId + (width*retour) + retour)+'"]').firstChild){
                    return false
                }
            }
            return true
        }
        else if (targetId === startId + (width*i) - i){
            for(let retour = 1; Math.abs(retour) < i ; retour++){
                if(document.querySelector('[case-id="'+(targetId - (width*retour) + retour)+'"]').firstChild){
                    return false
                }
            }
            return true
        }
        else if (targetId === startId - (width*i) + i){
            for(let retour = -1; Math.abs(retour) < i ; retour--){
                if(document.querySelector('[case-id="'+(targetId - (width*retour) + retour)+'"]').firstChild){
                    return false
                }
            }
            return true
        }
        else if (targetId === startId - (width*i) - i){
            for(let retour = 1; Math.abs(retour) < i ; retour++){
                if(document.querySelector('[case-id="'+(targetId + (width*retour) + retour)+'"]').firstChild){
                    return false
                }
            }
            return true
        }
    }
}

function checkForDead(){
    const kings = Array.from(document.querySelectorAll('#king'))
    if(!kings.some(king => king.firstChild.classList.contains('white'))){
        if(statusPlayerWhiteAlive){
            nbPlayerDead++
            for(let i = 0 ; i < 195 ; i++){
                if(document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.classList.contains("white")){
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "pawn"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/pawn_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "queen"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/queen_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "bishop"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/bishop_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "knight"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/knight_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "rook"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/rook_vide.png")
                    }
                }
            }
        }
        statusPlayerWhiteAlive = false
    }
    if(!kings.some(king => king.firstChild.classList.contains('black'))){
        if(statusPlayerBlackAlive){
            nbPlayerDead++
            for(let i = 0 ; i < 195 ; i++){
                if(document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.classList.contains("black")){
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "pawn"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/pawn_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "queen"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/queen_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "bishop"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/bishop_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "knight"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/knight_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "rook"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/rook_vide.png")
                    }
                }
            }
        }
        statusPlayerBlackAlive = false
    }
    if(!kings.some(king => king.firstChild.classList.contains('green'))){
        if(statusPlayerGreenAlive){
            nbPlayerDead++
            for(let i = 0 ; i < 195 ; i++){
                if(document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.classList.contains("green")){
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "pawn"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/pawn_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "queen"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/queen_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "bishop"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/bishop_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "knight"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/knight_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "rook"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/rook_vide.png")
                    }
                }
            }
        }
        statusPlayerGreenAlive = false
    }
    if(!kings.some(king => king.firstChild.classList.contains('purple'))){
        if(statusPlayerPurpleAlive){
            for(let i = 0 ; i < 195 ; i++){
                if(document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.classList.contains("purple")){
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "pawn"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/pawn_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "queen"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/queen_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "bishop"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/bishop_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "knight"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/knight_vide.png")
                    }
                    if(document.querySelector('[case-id="'+i+'"]').firstChild?.getAttribute('id') == "rook"){
                        document.querySelector('[case-id="'+i+'"]').firstChild?.firstChild?.setAttribute('src', "./img/pieces_vrai/rook_vide.png")
                    }
                }
            }
            nbPlayerDead++
        }
        statusPlayerPurpleAlive = false
    }
    if(nbPlayerDead == 3){
        alert("THE GAME HAS ENDED")
    }
}
