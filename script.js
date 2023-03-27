function getComputerChoice() {
  const choice = ["Rock", "Paper", "Scissors"];
  let computerChoice = choice[Math.floor(Math.random()*3)];
  return computerChoice;
}

function play(playerSelection, computerSelection) {
  //making choices case insensitive
  playerSelection = changeCase(playerSelection);
  computerSelection = changeCase(computerSelection);
  console.log("User: ", playerSelection);
  console.log("Computer: ", computerSelection);

  let result;
  //Conditions
  if (playerSelection === computerSelection) {
    console.log("Game is tied! Try again");
    result = "Tie";
  } else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
            (playerSelection == "Scissors" && computerSelection == "Paper") || 
            (playerSelection == "Paper" && computerSelection == "Rock")) {
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
            result = "Won";
  } else if ((playerSelection == "Scissors" && computerSelection == "Rock") || 
            (playerSelection == "Paper" && computerSelection == "Scissors") || 
            (playerSelection == "Rock" && computerSelection == "Paper")) {
            console.log(`You Lost! ${playerSelection} beats ${computerSelection}`);
            result = "Lost";
  }

  return result;
  console.log(result);
}

function changeCase(text) {
  let result = text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase();
  return result;
}

function game() {
  let result, win = 0, loose = 0; 

  while (win < 5 && loose < 5) {
    let userInput = changeCase(prompt("Please enter your choice: "));
    
    //Check for invalid input
    if (validateUserInput(userInput) == false) {
      console.log("Invalid Choice! Please choose correct option");
    } else {
      result = play(userInput, getComputerChoice());
    }

    // Increase win or loose based on result
    if (result == "Won") {
      win++;
    } else if (result == "Lost") {
      loose++;
    }
  }

  // Checking for winner
  if (win == 5) {
    alert("User Won");
  } else if (loose == 5) {
    alert("Computer Won");
  }  
}

function validateUserInput(userInput) {
  if (!(userInput == "Rock" || userInput == "Paper" || userInput == "Scissors")) {
    return false;
  }
}