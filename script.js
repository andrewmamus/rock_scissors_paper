let $ = (a) => document.querySelector(a)


// game play logic
let count = 1;
let winloss;
// computer play
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[parseInt(Math.random() * 3) ]
}
// score card
let playerScore = 0;
let computerScore = 0;
//Play a round
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        playerScore += 1
        computerScore += 1
        return "It is a tie game"
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"){
        playerScore += 1
        return "You win! Rock beat Scissors"
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        playerScore += 1
        return "You win! Scissors beat Paper" 
    }
    else if(playerSelection === "paper" && computerSelection=== "rock"){
        playerScore += 1
        return "You win! Paper beat Rock" 
    }else{
        computerScore += 1
        return `You loose! ${computerSelection} beat ${playerSelection}`
    }
}

 function game(e){
    if(count <= 5){
        playerSelection =  e.target.textContent.toLowerCase();
       
        
        ui(playRound(playerSelection, computerPlay()), `Player score: ${playerScore} Computer score: ${computerScore}`, winloss)
        count+= 1;
        
       
    }
    if(count > 4){
        if( computerScore < playerScore){
            return winloss ="You win"
        }else if(count > 4 && computerScore == playerScore){
            return winloss = "The game was a tie"
        }
        else{
           return winloss = "you loose";
        }
        
    }  
}

// The game Ui
const gameLayer1 = document.querySelector('.game_start_container').style;
const gameLayer2 = document.querySelector('.selectPlayers').style;
const gameLayer3 = $('.display_game').style;
// Start Game
const slide2Game = () => {
  gameLayer1.transform = 'translateX(-100vw)';
  gameLayer1.transition = 'transform cubic-bezier(.68,-0.28,.44,1.2)  0.8s';
  gameLayer2.transform = 'translateX(-100vw)';
  gameLayer2.transition = 'transform cubic-bezier(.68,-0.28,.44,1.2)  1s';
}

const start_btn = document.querySelector('.start_game_btn')
start_btn.addEventListener('click', slide2Game)


// select character for your game

// Player characters

let pImg = $('.player_img');
let pNext = $('.pNext');
let pPrev = $('.pPrev');
let pSelect = $('.select_playerCh');
let pcNum = 1;
const pNextCh = ()=> {
    pcNum+=1;
    if(pcNum == 8) pcNum =1;
    pImg.src = `./image/charcters/pc${pcNum}.png`;
    
}

const pPrevCh = ()=> {
    if(pcNum <= 1) pcNum =8;
    pcNum-=1;
    pImg.src = `./image/charcters/pc${pcNum}.png`;
}

const pSave= () => {
    pNext.setAttribute('disabled', '')
    pPrev.setAttribute('disabled', '')
}
pSelect.addEventListener('click', pSave)
pNext.addEventListener('click', pNextCh);
pPrev.addEventListener('click', pPrevCh);


// Computer selection
let cImg = $('.computer_img');
let cNext = $('.cNext');
let cPrev = $('.cPrev');
let cSelect = $('.select_comCh');
let ccNum = 1;

const cNextCh = ()=> {
    ccNum+=1;
    if(ccNum == 8) ccNum =1;
    cImg.src = `./image/charcters/pc${ccNum}.png`;
    
}

const cPrevCh = ()=> {
    if(ccNum <= 1) ccNum =8;
    ccNum-=1;
    cImg.src = `./image/charcters/pc${ccNum}.png`;
}
const cSave= () => {
    cNext.setAttribute('disabled', '')
    cPrev.setAttribute('disabled', '')
    $('img.playerImage').src=pImg.src;
    $('img.computerImage').src=cImg.src;
}
cSelect.addEventListener('click', cSave)
cNext.addEventListener('click', cNextCh);
cPrev.addEventListener('click', cPrevCh);

// play game

const slide3Game = () => {
    
    gameLayer2.transform = 'translateX(-200vw)';
    gameLayer2.transition = 'transform cubic-bezier(.68,-0.28,.44,1.2)  0.8s';
    gameLayer3.transform = 'translateX(-205vw)';
    gameLayer3.transition = 'transform cubic-bezier(.68,-0.28,.44,1.2)  1s';
  }
  
  const   start_btn_layer3 = document.querySelector('.game_show');
  
  
  start_btn.addEventListener('click', slide2Game)
  start_btn_layer3.addEventListener('click', slide3Game)

function ui(message, score, winloss){
    document.querySelector('.mygame').textContent = message
    document.querySelector('.message').textContent = score
    document.querySelector('.win-loss').textContent = winloss
}


// 
const btns = document.querySelectorAll('.btn')

btns.forEach(btn => {
    btn.addEventListener('click', game)
});

