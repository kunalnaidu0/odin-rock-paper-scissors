/* creates map for solutions for rock paper scissors */
const solutionMap = new Map();
solutionMap.set("rock", "scissors");
solutionMap.set("paper", "rock");
solutionMap.set("scissors", "paper");

let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    /*
    Randomly generates choice between rock, paper and scissors with equal probability
    */
    let value = Math.random();

    if (value >= 0 && value < 1/3){
        return "Rock";
    }

    else if (value >= 1/3 && value < 2/3){
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function play(playerSelection, computerSelection){
    /*
    takes the player selection and computer selection and determines who wins based on solution map
    */
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == computerSelection){
        return "draw";
    }
    else if (solutionMap.get(playerSelection) == computerSelection){
        return "win";
    }
    else{
        return "loss";
    }

}

function game(){
    /*
    plays a game of 5 rounds of rock paper scissors. Counts score 
    */
    let playerScore = 0;
    let computerScore = 0;

    // play 5 rounds
    for ( let i = 0; i < 1; i++){
        let playerSelection = prompt("Please Choose Rock, Paper or Scissors.");
        let computerSelection = getComputerChoice();

        let outcome = play(playerSelection, computerSelection);

        console.log(outcome);
        
        // count score
        if (outcome == "win") playerScore++;
        else if (outcome == "loss") computerScore++;
        
    }

    console.log(`Player: ${playerScore} \n Computer: ${computerScore}`)

    // determines who won
    if (playerScore > computerScore){
        console.log("Player Wins!");
    } else if (computerScore > playerScore){
        console.log("Computer Wins!")
    } else{
        console.log("Tie!")
    }
}
// initialize game
const buttons = document.querySelectorAll('button');

buttons.forEach(button => button.addEventListener('click', playRound));

function playRound(e){

    if (computerScore == 5 || playerScore == 5) restart();
    
    let computerSelection = getComputerChoice()
    let outcome = play(this.textContent, computerSelection);

    console.log(outcome);
    
    const playerScoreText = document.querySelector('.player-score.number');
    const computerScoreText = document.querySelector('.computer-score.number');
    const winText = document.querySelector('.final-result');
    const playerChoice = document.querySelector('.player-choice');
    const computerChoice = document.querySelector('.computer-choice');
    const roundOutcome = document.querySelector('.outcome');

    playerChoice.textContent = this.textContent;
    computerChoice.textContent = computerSelection;
    roundOutcome.textContent = outcome;

    // count score
    if (outcome == "win"){
        playerScore++;
        playerScoreText.textContent = playerScore;

    } 
    else if (outcome == "loss"){
        computerScore++;
        computerScoreText.textContent = computerScore;
    } 

    // determines who won
    if (playerScore == 5 || computerScore == 5){
        if (playerScore == 5){
            winText.textContent = "Player Wins!! :)";
        } else{
            winText.textContent = "Computer Wins :(";
        } 
    } 
    return ;
}

function restart(){
    playerScore = 0;
    computerScore = 0;
    const playerScoreText = document.querySelector('.player-score.number');
    const computerScoreText = document.querySelector('.computer-score.number');
    const winText = document.querySelector('.final-result');
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
    winText.textContent = "";
}

