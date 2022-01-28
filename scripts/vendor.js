const battleComm = document.getElementById("battle-commentary");
const slaughterCount = document.getElementById("progress-score");
const playerChoice = document.getElementById("player-choice");
const villainChoice = document.getElementById("pc-choice");
const musicPlayerStart = document.getElementById("music-start");
const swordSound = document.getElementById("sword-sound");
const shieldSound = document.getElementById("shield-sound");
const wandSound = document.getElementById("wand-sound");
const healSound = document.getElementById("heal-sound");
const groupHealSound = document.getElementById("group-heal");
const villainDeathSound = document.getElementById("villain-death");
const heroDeathSound = document.getElementById("hero-death");
const healPot = document.getElementById("potion");
const shield = document.getElementById("shield");
const sword = document.getElementById("sword");
const wand = document.getElementById("wand");

let playerLives = 4;
let villainLives = 4;
let slaughtered = parseInt(slaughterCount.innerHTML);
let end = false;

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
    toRemove.style.display = "none";
    playerLives -= 1;
}

function villainDamage(){
    let toRemove = document.getElementById(`villain-life-${villainLives}`);
    toRemove.style.display = "none";
    villainLives -= 1;
}

function healCharacters(){
    playerLives = 4;
    villainLives = 4;
    healPot.style.display = "block";
    for (let i=0; i<5; i+=1){
        let playerAdd = document.getElementById(`player-life-${i}`);
        let villainAdd = document.getElementById(`villain-life-${i}`);
        playerAdd.style.display = "block";
        villainAdd.style.display = "block";
    }
    groupHealSound.play();
    console.log(playerLives, villainLives);    
}

function healPlayer(){
    playerLives = 4;
    for (let i=0; i<5; i+=1){
        let playerAdd = document.getElementById(`player-life-${i}`);
        playerAdd.style.display = "block";
        healPot.style.display = "none";
    }
    healSound.play();
    console.log(playerLives, villainLives);
}

function refreshGame(){
    healCharacters();
    musicPlayerStart.src = "/music/epic_battle_music2.mp3";
    musicPlayerStart.play();
    slaughtered = 0;
    slaughterCount.innerHTML = slaughtered;
    battleComm.innerHTML = "The air is electrified as you step up to face the nigh unkillable Lord of Darkness in an epic duel to the death! Only sheer tenacity will see your foe die 99 times, leaving him vanquished for good. Before you know it your foe charges forth and you're forced to make your first move....";
    playerChoice.src= `/pictures/question.png`;
    villainChoice.src = `/pictures/question.png`;
    villainChoice.style.transform = "scaleX(1)";
    shield.style.display = "block";
    sword.style.display = "block";
    wand.style.display = "block";
    end = false;
}
