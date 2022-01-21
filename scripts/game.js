let playerAttack;
let villainAttack;
const villianMoves = ["Shield", "Wand", "Sword"];


function shieldHit(){
    playerAttack = "shield";
    villainRoll();
    attackPhase();
}

function wandHit(){
    playerAttack = "wand";
    villainRoll();
    attackPhase();
}

function swordHit(){
    playerAttack = "sword";
    villainRoll();
    attackPhase();
}

function villainRoll(){
    moveIndex = Math.floor(Math.random() * 3);
    villainAttack =  villianMoves[moveIndex];
}

function attackPhase(){
    let result = `You use ${playerAttack} attack against the villians ${villainAttack} attack`;
    updateBattleComm(result);
    updateMoves(playerAttack, villainAttack);
}