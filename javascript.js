function getComputerChoice() {

    let random = Math.random();
    let choice;

    if (random <= 0.33) {
        choice = "Rock";
    } else if (random <= 0.67) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;
}

function playRound(playerSelection, computerSelection) {

    let winner;

    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();

    if (playerSelection == "ROCK") {

        if (computerSelection == "PAPER") {
            winner = "You Lose! Paper beats Rock.";
            comScore++;
        } else if (computerSelection == "SCISSORS") {
            winner = "You Win! Rock beats Scissors.";
            score++;
        } else {
            winner = "It's a tie!";
        }

    } else if (playerSelection == "PAPER") {

        if (computerSelection == "ROCK") {
            winner = "You Win! Paper beats Rock.";
            score++
        } else if (computerSelection == "SCISSORS") {
            winner = "You Lose! Scissors beats Paper.";
            comScore++;
        } else {
            winner = "It's a tie!";
        }

    } else {

        if (computerSelection == "ROCK") {
            winner = "You Lose! Rock beats Scissors.";
            comScore++;
        } else if (computerSelection == "PAPER") {
            winner = "You Win! Scissors beats Paper.";
            score++;
        } else {
            winner = "It's a tie!";
        }
    }

    return winner;
}

function game() {

    for (i = 0; i < 5; i++) {
        let playerChoice = prompt("Rock, paper, or scissors?");
        console.log(playRound(playerChoice, getComputerChoice()));
    }

    if (score > comScore) {
       console.log("You win!");
    } else if (score < comScore) {
        console.log("You lose :(");
    } else {
        console.log("You tied!");
    }
}

let score = 0;
let comScore = 0;

game();