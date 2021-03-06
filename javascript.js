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
// function returns 0 for tie, 1 for win, 2 for lose
function playRound (playerSelection, computerSelection) {
    // make inputs lowercase
    let userChoice = playerSelection.toLowerCase();
    let compChoice = computerSelection.toLowerCase();
    

    if (userChoice === compChoice) {
        return 0;
    } else if (
        (userChoice === 'rock' && compChoice === 'scissors')
    ||  (userChoice === 'paper' && compChoice === 'rock')
    ||  (userChoice === 'scissors' && compChoice === 'paper')) {
        return 1;
    } else {
        return 2;
    }
}

// function returns message appropriate to round results
    // compare user choice to computer choice
    // if they tie return tie message
    // if they win return victory message
    // if they lose return defeat message
function returnMessage(roundResult, playerSelection, computerSelection){
        if (roundResult === 0){
            console.log(`You Tie, you both chose ${playerSelection}`);
        } else if (roundResult === 1){
            console.log(`You Win, your ${playerSelection} beats ${computerSelection}`);
        } else if (roundResult === 2){
            console.log(`You Lose, their ${computerSelection} beats ${playerSelection}`);
        } else {
            console.log(`Something went wrong`);
        }
}


// function play 5 rounds, report each round, keep score, report best of 5 winner
// loop process 5 times
//  for each loop:
//      ask input, generate computer choice
//      pass values and determine victor
//      update score
//      display round result
//  at end report overall winner from score value

// Older game function
function game(){
    
    let userChoice;
    let compChoice;
    let roundResult;
    let score=0;
    

    for (let i=0; i<5; i++){
        userChoice = prompt('Enter either Rock, Paper, or Scissors.');
        compChoice = computerPlay();
        roundResult = playRound(userChoice,compChoice);
        returnMessage(roundResult,userChoice,compChoice);
        if (roundResult === 1){
            score++;
        }
    }

   
    if (score >= 3){
        console.log(`You Win with ${score} out of 5`);
    } else {
        console.log(`You Lose with ${score} out of 5`);
    }
}

// Newer game function
function game2(){
    let userChoice;
    let compChoice;
    let roundResult;
    let youScore=0;
    let compScore=0;
    let roundResultText='';
    
    const resultsBox = document.querySelector('#resultsBox');
    resultsBox.textContent = 'Results: None (first to 5 wins)';
    
    const winnerBox = document.querySelector('#winnerBox');
    winnerBox.textContent = 'Winner: None'
    
    let winner='None';
    
    // Attaching listeners to groups of nodes
    // https://www.theodinproject.com/lessons/foundations-dom-manipulation-and-events#events
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            //alert(button.id);
            userChoice = button.id;
            compChoice = computerPlay();
            roundResult = playRound(userChoice,compChoice);
            console.log(`${userChoice}, ${compChoice}, ${roundResult}`);
            
            // Increments score
            if (roundResult===1){
                youScore++;
            } else if (roundResult===2){
                compScore++;
            }
            
            // First to 5 wins
            if (youScore===5){
                winner='You';
                youScore=0;
                compScore=0;
            } else if (compScore===5){
                winner='Computer';
                youScore=0;
                compScore=0;   
            }
            
            // Output text for who wins
            if (roundResult === 0){
                roundResultText='Tie';
            } else if (roundResult ===1){
                roundResultText='Win';
            } else if (roundResult===2){
                roundResultText='Lose';
            } else {
                roundResultText='Error';
            }
            
            // Change HTML text according to round results
            resultsBox.textContent = `Results:
            You: ${youScore} ${userChoice} |
            Computer: ${compScore} ${compChoice} | 
            Round result: ${roundResultText}`;
            winnerBox.textContent = `Winner: ${winner}`;
            
            // Reset scores after someone wins
            if (youScore < 5 && compScore < 5) {
                winner='None';
            }
        })
    })
}