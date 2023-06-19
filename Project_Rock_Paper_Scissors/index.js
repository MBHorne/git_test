let ran = 1
let computerHand = ""
function getComputerChoice(max) {
  ran = Math.floor(Math.random() * max);
  if (ran === 0) {
    return computerHand = "Paper"
  }
  else if (ran === 1) {
    return computerHand = "Scissor"
  }
  else {
    return computerHand = "Rock"
  }
}



function playRound() {
    let playerSelection = prompt("Please enter Rock, Paper or Scissor:")
    playerSelection = playerSelection.match(/Rock|Paper|Scissor/gi)
    console.log("You choosed: " + playerSelection + "!")
    getComputerChoice(3)
    console.log("Computer choosed: " + computerHand +"!");
    //const playerSelection = getplayerSelection[0].toUpperCase();
    //const computerHand = getComputerHand();
    let winner = null
    if (playerSelection != null || playerSelection != null) {
        if (playerSelection[0].toUpperCase() === computerHand.toLocaleUpperCase()) {
            return "Tie";
        } else {
            switch (playerSelection[0].toUpperCase()) {
                case "ROCK":
                    switch (computerHand.toUpperCase()) {
                        case "PAPER":
                            return winner = "Computer";
                            break;
                        case "SCISSOR":
                            return winner = "Player";
                            break;
                        default:
                            console.log("Invalid computer hand!");
                            break;
                    }
                    break;
                case "PAPER":
                    switch (computerHand.toUpperCase()) {
                        case "ROCK":
                            return winner = "Player";
                            break;
                        case "SCISSOR":
                            return winner = "Computer";
                            break;
                        default:
                            console.log("Invalid computer hand!");
                            break;
                    }
                    break;
                case "SCISSORS":
                    switch (computerHand.toUpperCase()) {
                        case "ROCK":
                            console.log("You lose");
                            return winner = "Computer";
                            break;
                        case "PAPER":
                            console.log("You win");
                            return winner = "Player";
                            break;
                        default:
                            console.log("Invalid computer hand!");
                            break;
                    }
                    break;
                default:
                    console.log("Invalid player input");
                    break;                    
            }
        }
    }else {
        return winner = null;
        
    }
    }
let round = 0;
let playerScore = 0;
let computerScore = 0;
function game(winner) {
    while (round < 5) {
        let winner = playRound();
        if (winner !== null) {
            round++;
            if (winner === "Tie") {
                console.log("Round " + round + " its a TIE");
            } else if (winner === "Player") {
                playerScore++;
                console.log("You won round " + round);
            } else if (winner === "Computer") {
                computerScore++;
                console.log("You Lost round " + round);
            }
        } else {
            console.log("Wrong input, try again!! ")
        }
    }
  if (playerScore > computerScore) {
    console.log("Game Over, You win with " + playerScore + " points vs Computer with " + computerScore + " points");
  }
  else if (playerScore > computerScore) {
    console.log("Game Over, You loose with " + playerScore + " points vs Computer with " + computerScore + " points");
  }
  else {
    console.log("Game Over, It´s a TIE. You got " + playerScore + " points vs Computer with " + computerScore + " points");
  }
}

let winner = null;
game(winner);