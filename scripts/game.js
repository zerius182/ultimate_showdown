let playerAttack;
let villainAttack;
let result;
let victor;
let needsChange = true;
const villianMoves = ["shield", "wand", "sword"];


function shieldHit(){
    playerAttack = "shield";
    shieldSound.play();
    villainRoll();
    attackPhase();
}

function wandHit(){
    playerAttack = "wand";
    wandSound.play();
    villainRoll();
    attackPhase();
}

function swordHit(){
    playerAttack = "sword";
    swordSound.play();
    villainRoll();
    attackPhase();
}

function villainRoll(){
    moveIndex = Math.floor(Math.random() * 3);
    villainAttack =  villianMoves[moveIndex];
}

function resolveDamage(victor){
    if (victor === "villain"){
        playerDamage();
    }

    else if (victor === "player"){
        villainDamage();
    }
}

function resolveAttacks(playerAttack, villainAttack){
    if (playerAttack === "wand" && villainAttack === "wand"){
        result = "You let out a desperate flurry of magic with your wand at the same time as the villain, the blasts collide in the air causing a huge explosion but neither of you take any damage.";
        victor = "neither";
    }

    else if (playerAttack === "sword" && villainAttack === "sword"){
        result = "You leap towards the villain and swing your sword in a desperate attempt to mortally wound him but he parries your blow at the last second, neither of you take any damage.";
        victor = "neither";
    }

    else if (playerAttack === "shield" && villainAttack === "shield"){
        result = "You notice your opponent anxiously preparing to make a move and raise your shield in preparation for an attack but your opponent senses your unease and adopts a defensive stance, netiher of you take any damage.";
        victor = "neither";
    }

    else if (playerAttack === "shield" && villainAttack === "sword"){
        result = "The villain lunges at you swinging his sword in a wild arc, you raise your shield deflecting the blow, causing the villain to stumble which you take advantage of with a huge blow to his head with your shield, causing a crushing wound to your opponent.";
        victor = "player";
        swordSound.play();
    }

    else if (playerAttack === "wand" && villainAttack === "shield"){
        result = "You instantly unleash a huge barrage of magic at your opponent before he has time to counter with a spell of his own, desperate, he raises his shield to minimise the imapct of the blast, which saves his life but the villain is still badly wounded.";
        victor = "player";
        shieldSound.play();
    }

    else if (playerAttack === "sword" && villainAttack === "wand"){
        result = "Your opponent aims a blast of magic towards you which you roll under whilst unsheathing your sword. As the blast passes over your head you swing your sword and score a hit on your oppent causing a grievious wound.";
        victor = "player";
        wandSound.play();
    }


    else if (playerAttack === "sword" && villainAttack === "shield"){
        result = "You run towards your opponent, trying to catch him off guard and deliver a blow with your sword but he is prepared, raising his shield and deflecting your attack before bringing the shield down on your head with tremendous force, causing you to be brutally wounded. ";
        victor = "villain";
        shieldSound.play();
    }

    else if (playerAttack === "shield" && villainAttack === "wand"){
        result = "You notice your opponent readying an attack with his sword and raise your shield in preperation to deflect the blow but at the last moment he unleashes a huge bolt at magic at you which your shield only partially deflects, causing you to suffer a horrendous wound.";
        victor = "villain";
        wandSound.play();
    }

    else if (playerAttack === "wand" && villainAttack === "sword"){
        result = "You notice your opponent falter and unleash a vicious blast of magic towards him. He deftly dodges aside as the blast passes by him and swings his sword towards you, causing you a serious wound.";
        victor = "villain";
        swordSound.play();
    }
}

function resolveRound(){
    if (playerLives < 0){
        result = "You lie motionless on the floor, broken, bloodied, your life force fading away. As your vision turns black and sounds fade away you notice your opponent smirk as he sheathes his weapons and walks away from you, you have failed, 'the world is doomed' you think to yourself as you take your last, rattling breath.... "
    }

    else if (villainLives < 0 && slaughtered <99){
        result = "Your opponent falls to the floor, beaten, his breath rattling in his throat as he takes his last breath. Almost instantly his eyes flick open with a look of pure hatred on his face and he scrambles back up with renewed vigour, you take a sip of vitality potion and prepare to fight again....."
        moreSlaughter();
        healCharacters();
        if (slaughtered >= 50 && needsChange){
            needsChange = false;
            musicPlayerStart.src = "music/epic_battle_music.mp3";
        }
    }
}

function attackPhase(){
    resolveAttacks(playerAttack, villainAttack);
    resolveDamage(victor);
    resolveRound();
    musicPlayerStart.play();
    updateBattleComm(result);
    updateMoves(playerAttack, villainAttack);
    console.log(playerLives, villainLives);
}