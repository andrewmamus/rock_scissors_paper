// computer play
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[parseInt(Math.random() * 3) ]
}
// score card
let playerScore = 0;
let computerScore = 0
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

function game(){
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Rock, Paper or Scissors? ").toLowerCase();
        
        console.log(playRound(playerSelection, computerPlay()))
        console.log(`Player score: ${playerScore} Computer score: ${computerScore}`)
    }
    
    if(computerScore < playerScore){
        console.log("You win")
    }else{
        console.log("you loose")
    }
}

game();