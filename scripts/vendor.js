const battleComm = document.getElementById("battle-commentary");
const slaughterCount = document.getElementById("progress-score");
const playerChoice = document.getElementById("player-choice");
const villainChoice = document.getElementById("pc-choice");
const musicPlayer = document.getElementById("music");
const swordSound = document.getElementById("sword-sound");
const shieldSound = document.getElementById("shield-sound");
const wandSound = document.getElementById("wand-sound");
let playerLives = 4;
let villainLives = 4;
let slaughtered = parseInt(slaughterCount.innerHTML);

function updateBattleComm(result){
    battleComm.innerHTML = result;
}

function updateMoves(playerAttack, villainAttack){

    playerChoice.src= `/pictures/${playerAttack}.png`;
    villainChoice.src = `/pictures/${villainAttack}.png`;
    villainChoice.style.transform = "scaleX(-1)"
}

function moreSlaughter(){
    slaughtered += 1;
    slaughterCount.innerHTML = slaughtered;
}

function playerDamage(){
    let toRemove = document.getElementById(`player-life-${playerLives}`);
    toRemove.remove()
    playerLives -= 1;
}

function villainDamage(){
    let toRemove = document.getElementById(`villain-life-${villainLives}`);
    toRemove.remove()
    villainLives -= 1;
}

