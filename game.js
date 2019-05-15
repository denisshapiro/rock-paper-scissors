const buttons = document.querySelectorAll('.game-button');
const resetButton = document.getElementById("reset");
let playerScoreDisplay = document.querySelector("#player-score");
let computerScoreDisplay = document.querySelector("#computer-score");
let status = document.querySelector("#display-status");
let playerScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      let playerSelection = button.id;
      let computerSelection = computerPlay();
      playGame(playerSelection, computerSelection);
    });
  });

resetButton.addEventListener('click', (e) =>{
    computerScore = 0;
    playerScore = 0;
    enableButtons();
    document.getElementById("reset").style.visibility = "hidden";
    playerScoreDisplay.textContent = "Player Score: 0";
    computerScoreDisplay.textContent = "Computer Score: 0";
    status.textContent = "STATUS";
});

  function computerPlay(){
    let num = Math.floor((Math.random() * 3));

    if (num == 1){
        return "rock";
    }
    else if(num == 2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function playGame(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        status.textContent =  "Draw!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        status.textContent = "You Lose! Paper beats Rock";
        computerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        status.textContent = "You Win! Paper beats Rock";
        playerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        status.textContent = "You Win! Scissors beats Paper";
        playerScore++;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        status.textContent = "You Win! Rock beats Scissors";
        playerScore++;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        status.textContent = "You Lose! Scissors beats Paper";
        computerScore++;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        status.textContent = "You Lose! rock beats scissors";
        computerScore++;
    }
    update()

    if(playerScore == 5){
        status.textContent =  "You Win!";
        disableButtons();
        document.getElementById("reset").style.visibility = "visible";
    }
    else if (computerScore == 5){
        status.textContent =  "You Lose!";
        disableButtons();
        document.getElementById("reset").style.visibility = "visible";
    }
}

function update(){
    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    computerScoreDisplay.textContent = "Computer Score: " + computerScore;
}

function disableButtons(){
    document.querySelectorAll('.game-button').forEach(button => {
        button.disabled = true;
      });
}

function enableButtons(){
    document.querySelectorAll('.game-button').forEach(button => {
        button.disabled = false;
      });
}


