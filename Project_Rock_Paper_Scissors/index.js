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

getComputerChoice(3)

console.log(computerHand +"!");