// applying all conditionals and methods to make a simple rock,paper,scissors game!!
let playGame = confirm("Shall we play rock,paper,scissors?");
if (playGame) {
    let playerChoice = prompt("pls enter rock,paper, or scissors");
    // now inorder to handle the data that we get in return
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") { 
            let computerChoice = Math.floor(Math.random()* 3 + 1);
            let computer = computerChoice === 1 ? "rock"
            : computerChoice === 2 ? "paper" 
            : "scissors";
            
            let game = 
                playerOne === computer ? "Tie"
                : playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
                : playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
                : playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
                : `playerOne: ${playerOne}\n computer: ${computer}\n playerOne wins!`;
            // now we are just ready to pull in the logic of rock,paper,scissors****
            alert(game);
            console.log(game);
            let playAgain = confirm("Wanna play again?");
            // simple ternary statement
            playAgain ? location.reload() : alert("Ok, thanks for playing.");
        } else { 
            alert("you didn't enter rock,paper,scissors");
        } 
    } else {
        alert("I guess you changed your mind!");
    }
} else {
    alert("Ok, maybe next time.");
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// so the logical part!*****
/*
let game = 
// we are assigning the outcome to this variable
playerOne === computer ? "Tie"
: playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
: playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
: playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\n computer: ${computer}\n computer wins!`
: `playerOne: ${playerOne}\n computer: ${computer}\n playerOne wins!`;
*/



















