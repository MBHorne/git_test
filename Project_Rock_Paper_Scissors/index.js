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
  console.log(ran)
  return ran;
}



function playRound() {
    let playerSelection = prompt("Please enter Rock, Paper or Scissor:")
    playerSelection = playerSelection.match(/Rock|Paper|Scissor/gi)
    console.log("You selected: " + playerSelection + "!")
    getComputerChoice(3)
    console.log(computerHand +"!");
    //const playerSelection = getplayerSelection[0].toUpperCase();
    //const computerHand = getComputerHand();
    let winner = null
    if (playerSelection != null || playerSelection != null) {
        if (playerSelection[0].toUpperCase() === computerHand.toLocaleUpperCase()) {
            console.log("Tie");
            return "Tie";
    
        } else {
            switch (playerSelection[0].toUpperCase()) {
                case "ROCK":
                    switch (computerHand.toUpperCase()) {
                        case "PAPER":
                            console.log("You lose");
                            return winner = "Computer";
                            break;
                        case "SCISSOR":
                            console.log("You win");
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
                            console.log("You win");
                            return winner = "Player";
                            break;
                        case "SCISSOR":
                            console.log("You lose");
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
        console.log("Wrong input, try again!");
        console.log("debug: " + winner);
        return winner = null;
        
    }
    }
let round = 1;
let playerScore = 0;
let computerScore = 0;
function game(winner) {
    while (round < 6) {
        let winner = playRound();
        if (winner !== null) {
            round++;
            console.log("Current Round: " + round);
            if (winner === "Tie") {
                console.log("Round: " + round);
            } else if (winner === "Player") {
                playerScore++;
                console.log("Win: " + round);
            } else if (winner === "Computer") {
                computerScore++;
                console.log("Lost: " + round);
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
    console.log("Game Over, It´s a TIE " + playerScore + " points vs Computer with " + computerScore + " points");
  }
}

let winner = playRound();
game(winner);