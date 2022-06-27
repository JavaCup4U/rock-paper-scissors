// Initialize an array storing the different plays 
const plays = ['ROCK','PAPER', 'SCISSORS']
// Initialize a variable that randomly selects a value from the plays array 
const randomPlay = Math.floor(Math.random() * plays.length);
// Initialize a function that returns the computers Play 

// Function that returns either rock paper or scissors from the plays array 
function computerPlay(){
    compSelection = plays[randomPlay]
    return compSelection;
}

// Set the decision of the computer selection  to store the computer selection 
    computerSelection = computerPlay();


// Initialize a function that plays Rock Paper Scissors for one round taking in two parameters playerSelection and computerSelection and returns a string declaring the winner 
function play(playerSelection, computerSelection){
    //Compare the two selections and return the winner 
    
    // Computer edge cases 
    if (computerSelection ==='ROCK' && playerSelection.toLowerCase() === 'scissors'){
        return alert("You Lose! Rock beats Scissors")
    } else if (computerSelection === 'PAPER' && playerSelection.toLowerCase() === 'rock'){
        return alert("You Lose! Paper beats Rock")
    }else if (computerSelection === 'SCISSORS' && playerSelection.toLowerCase() === 'paper'){
        return alert("You Lose! Scissors beats Paper")
        // Player edge cases 
    }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'ROCK'){
        return alert("You win! Paper beats Rock")
    }else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'PAPER'){
        return alert("You win! Scissors beats Paper")
    }else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'SCISSORS'){
        return alert("You win! Rock beats Scissors")
    }

    
}


console.log(computerSelection);



// Take in user selection 
// Initialize a variable playerSelection to store the players move 
var playerSelection = prompt('Enter your selection: ')


//Call play function to play paper - rock - scissors 
play(playerSelection, computerSelection);







