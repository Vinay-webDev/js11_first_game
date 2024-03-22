// creating rock,paper,scissors game (applying all methods and conditions) ****
let playGame = confirm("Shall we play rock,paper,scissors?");
if (playGame) {
   let playerChoice = prompt("pls enter rock, paper, or scissors");
   if (playerChoice) { 
    let playerOne = playerChoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
        let computerChoice = Math.floor(Math.random()* 3 + 1); /* need 1 to 3 */
        let computer = computerChoice === 1? "rock"
        : computerChoice === 2? "paper"
        : "scissors";
        let result = 
        playerOne === computer ?  `playerOne: ${playerOne}\n computer: ${computer}\n Tie`
        : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\n computer: ${computer}\ncomputer wins!`
        : playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
        : playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
        : `playerOne: ${playerOne}\n computer: ${computer}\n playerOne wins!`;
        alert(result);
        let playAgain = confirm("wanna play again?");
        // a new method to relaod the page
        // you can have your result in console too
        console.log(result);
        playAgain ? location.reload() : alert("Ok, thanks for playing.");
    } else {
        alert("you didn't enter rock,paper, or scissors");
    }
   } else {
    alert("I guess you changed your mind");
   }
} else {
    alert("Ok, maybe next time.");
}

////////////////////////////////////////////////////////////////////////////////////////////////////
/*
let result = 
playerOne === computer ?  `playerOne: ${playerOne}\n computer: ${computer}\n Tie`
: playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\n computer: ${computer}\n
computer wins!`
: playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\n computer: ${computer}
\n computer wins!`
: playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\n computer: ${computer}
\n computer wins!`
: `playerOne: ${playerOne}\n computer: ${computer}\n playerOne wins!`;
*/
























