let x = new Array("rock", "paper", "scissors");

function getComputerMove()
{
    return x[Math.floor(Math.random() * x.length)];
}

function playRound(playerChoice, computerChoice)
{
    playerChoice = playerChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if(playerChoice === computerChoice)
    {
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        return "You Draw! You both chose " + computerChoice;
    }
    else if(playerChoice === "rock" && computerChoice === "paper")
    {
        return "You Lose! Paper beats Rock"; 
    }
    else if(playerChoice === "paper" && computerChoice === "scissors")
    {
        return "You Lose! Scissors beats Paper"; 
    }
    else if(playerChoice === "scissors" && computerChoice === "rock")
    {
        return "You Lose! Rock beats Scissors"; 
    }
    else{
        playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
        computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        return "You Won! " + playerChoice + " beats " + computerChoice;
    }
}

function Game()
{
    for(let i = 0; i < 5; i++)
    {
        let playerChoice = prompt("Please type in either Rock, Paper or Scissors : ");
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