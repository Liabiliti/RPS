let choices = new Array("rock", "paper", "scissors");

function getComputerMove()
{
    return choices[Math.floor(Math.random() * choices.length)];
}

const buttons = document.querySelectorAll('button');
const result = document.querySelector('.Result');
let gameCounter = 0;
let playerWins = 0;
let computerWins = 0;


function playRound(playerChoice, computerChoice)
{
    if(gameCounter === 5)
    {
        
    }
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(playerChoice === computerChoice)
    {
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        result.textContent = "You Draw! You both chose " + computerChoice;
        gameCounter--;
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
    gameCounter++;
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