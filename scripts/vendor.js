let battleComm = document.getElementById("battle-commentary");
let playerChoice = document.getElementById("player-choice");
let villainChoice = document.getElementById("pc-choice");
let playerLives = 5;
let villainLives = 5;

function updateBattleComm(result){
    battleComm.innerHTML = result;
}

function updateMoves(playerAttack, villainAttack){

    playerChoice.src= `/pictures/${playerAttack}.png`;
    villainChoice.src = `/pictures/${villainAttack}.png`;
}