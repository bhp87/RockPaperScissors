const choices = ['rock', 'paper', 'scissors'];
const getComputerChoice = () => {

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const getUserChoice = () => {
    const userChoice= prompt("Enter your choice (rock, paper, or scissors):");
    return userChoice;
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (!choices.includes(playerSelection) || !choices.includes(computerSelection)) {
        return "Invalid selection. Please choose rock, paper, or scissors.";
    }

    if (playerSelection === computerSelection) {
        return "It's a tie! Both chose " + playerSelection + ".";
    }

    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "You Win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}
const game = () => {

    console.log(playRound(getUserChoice(), getComputerChoice()));
}

game();