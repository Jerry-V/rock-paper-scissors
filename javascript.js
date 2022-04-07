// Rock Paper Scissors (RPS)
console.log("hello everyone!");

// function randonly returns ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay(){
    // initialize variable 'rand' to 0, 1, or 2 randomly
    let rand = Math.floor(Math.random()*3);
    
    // return ‘Rock’, ‘Paper’ or ‘Scissors’ based on 'rand' value
    if (rand === 0){
        return "Rock";
    } else if (rand === 1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

// function plays one round of RPS, user inputs should be case insensitive
function playRound (playerSelection, computerSelection) {
    // make inputs lowercase
    let userChoice = playerSelection.toLowerCase();
    let compChoice = computerSelection.toLowerCase();
    
    // compare user choice to computer choice
    // if they tie return tie message
    // if they win return vicotory message
    // if they lose return defeat message
    if (userChoice === compChoice) {
        console.log(`You Tie, your ${playerSelection} ties ${computerSelection}`);
    } else if (userChoice === 'rock' && compChoice === 'scissors') {
        console.log(`You Win, your ${playerSelection} beats ${computerSelection}`);
    } else if (userChoice === 'paper' && compChoice === 'rock') {
        console.log(`You Win, your ${playerSelection} beats ${computerSelection}`);
    } else if (userChoice === 'scissors' && compChoice === 'paper') {
        console.log(`You Win, your ${playerSelection} beats ${computerSelection}`);
    } else {
        console.log(`You Lose, their ${computerSelection} beats ${playerSelection}`)
    }
}