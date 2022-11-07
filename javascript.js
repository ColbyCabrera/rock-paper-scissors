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

function game(choice) {

    roundResults.textContent = playRound(choice, getComputerChoice());
    roundResults.style.color = "#eee";
    scoreboard.textContent = score + " - " + comScore;
    
    if (comScore >= 5) {
        
        gameResults.textContent = "You lose! Better luck next time... Select any choice to play again.";
        gameResults.style.color = "#eee";

        score = 0;
        comScore = 0;
        roundResults.style.color = "#000";
    } else if (score >= 5) {
        gameResults.textContent = "You win! Congratulations!! Select any choice to play again.";
        gameResults.style.color = "#eee";

        score = 0;
        comScore = 0
        roundResults.style.color = "#000";
    }
}

function getChoice(element) {
    let choice, result = 0;

    choice = element.currentTarget.id;
    gameResults.style.color = "#000";
    game(choice);
    return 0;
}

let score = 0;
let comScore = 0;
let scoreboard = document.querySelector('#scoreboard');
let roundResults = document.querySelector('#round-results');
let gameResults = document.querySelector('#game-results');


let btn = document.querySelectorAll(".btn");
btn.forEach( (btn) => btn.addEventListener('click', getChoice));


// get plaer choice
// run game with player choice
// update scoreboard with score after each round
// if score of player or pc gets 5 declare winner by changing text (score only increases in a decided round)