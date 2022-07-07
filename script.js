








// Variables to store the current score of the player
// and the computer 
let playerScore = 0;
let compScore = 0;

// Show score & Update Score Function 
function updateScore(){
    var lblScore = document.getElementById('player-score');
    var comLblScore = document.getElementById('computer-score')
    lblScore.innerHTML = `Player Score: ${playerScore}`;
    comLblScore.innerHTML = `Computer Score: ${compScore}`;

    return "Current Score: " + "\n" +  "Player:" + playerScore + "\n" + "Computer: "+ compScore;
}



// Function that returns either rock paper or scissors from the plays array 
function computerPlay(){
    // Initialize an array storing the different plays 
    const plays = ['ROCK','PAPER', 'SCISSORS']
    // Initialize a variable that randomly selects a value from the plays array 
    const randomPlay = Math.floor(Math.random() * plays.length);
    // Initialize a function that returns the computers Play 
    compSelection = plays[randomPlay]
    return compSelection;
}

// Initialize a function that plays Rock Paper Scissors for one round taking in two parameters 
//playerSelection and computerSelection and returns a string declaring the winner 
function playRound(computerSelection, playerSelection){
    
    //Compare the two selections and return the winner 
    
    // Computer edge cases 
    if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS'){
        compScore += 1;
        return computerSelection + ' beats ' + playerSelection + '. You lose!';
    } else if (computerSelection == 'PAPER' && playerSelection == 'ROCK'){
        compScore += 1;
        return computerSelection + ' beats ' + playerSelection + '. You lose!';
    }else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER'){
        compScore += 1;
        return computerSelection + ' beats ' + playerSelection + '. You lose!';
        // Player edge cases 
    }else if (playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        playerScore += 1;
        return playerSelection + ' beats ' + computerSelection + '. Congrats!';
    }else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        playerScore += 1;
        return playerSelection + ' beats ' + computerSelection + '. Congrats!';
    }else if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        playerScore += 1;
        return playerSelection + ' beats ' + computerSelection + '. Congrats!';
    }
    // Edge case where both select the same weapon 
    else if (playerSelection == computerSelection){
        return "It's a Draw! Try again";
    }
    // Edge case where the player enters something that is not valid 
    else{
        return "Invalid entry, try again!"
    }

}

// Function to run the game 
function game(){
    while (playerScore != 5  && compScore != 5){
        // get player selection 
        let playerSelection = prompt('Enter your selection: ');
        // get computer selection 
        let computerSelection = computerPlay();
        // make sure player selection is case insensitive 
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        // Call the playRound function to iniate a game of paper, rock, scissors
        // Then alert the return value 
        console.log(playRound(computerSelection,playerSelection));
        // Update the score 
        updateScore();
        //console.log("player",playerScore);
        //console.log("comp",compScore);
    }
    // alert who the winner of the whole game is 
    console.log(win_prompt());
}
//Funtion that returns who won 
function win_prompt(){
    if (playerScore == 5){
        return 'Player Wins!';
    }
    if (compScore == 5){
        return 'Computer Wins!';
    }
}

// Call the game function to play 5 rounds of the game
game();




