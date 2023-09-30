let choices = new Array("rock", "paper", "scissors");

function getComputerMove()
{
    return choices[Math.floor(Math.random() * choices.length)];
}

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.Result');
let counter = document.querySelector(".Counter");
let games = document.querySelector(".Games");
let playerWins = 0;
let computerWins = 0;
const gamesToPlay = 5;


function playRound(playerChoice, computerChoice)
{

    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(playerChoice === computerChoice)
    {
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        result.textContent = "You Draw! You both chose " + computerChoice;
    }
    else if(playerChoice === "rock" && computerChoice === "paper")
    {
        result.textContent = "You Lose! Paper beats Rock"; 
        computerWins++;
    }
    else if(playerChoice === "paper" && computerChoice === "scissors")
    {
        result.textContent = "You Lose! Scissors beats Paper"; 
        computerWins++;
    }
    else if(playerChoice === "scissors" && computerChoice === "rock")
    {
        result.textContent = "You Lose! Rock beats Scissors";
        computerWins++; 
    }
    else{
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        result.textContent = "You Won! " + playerChoice + " beats " + computerChoice;
        playerWins++;
    }
    counter.textContent = playerWins + " | " + computerWins;
    if(playerWins === gamesToPlay || computerWins === gamesToPlay)
    {
        if(playerWins > computerWins)
        {
            counter.textContent = playerWins + " | " + computerWins + "\r\n Player Won!\r\n To play again press any button";
        }
        else{
            counter.textContent = playerWins + " | " + computerWins + "\r\n Computer Won!\r\n To play again press any button";
        }
        playerWins = 0;
        computerWins = 0;
        gameCounter = 0;
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerMove());
    });
});

function Game()
{
    for(let i = 0; i < 5; i++)
    {
        while(1)
        {
            playerChoice = playerChoice.toLowerCase();
            if(x.includes(playerChoice))
            {
                break;
            }
            playerChoice = prompt("That was not a possible choice! Try again: ")
        }
        console.log("Game " + (i+1) + "'s result is: " + playRound(playerChoice, getComputerMove()));
    }
}

Game()