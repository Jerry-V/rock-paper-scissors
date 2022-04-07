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