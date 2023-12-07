const choices = ['rock', 'paper', 'scissors'];
let PLAYER_WINS_COUNT = 0;
let COMPUTER_WINS_COUNT = 0;

const getComputerChoice = () => {

    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const getUserChoice = () => {
    const userChoice = prompt("Enter your choice (rock, paper, or scissors):");
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
        ++PLAYER_WINS_COUNT;
        return "You Win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        ++COMPUTER_WINS_COUNT;
        return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
    }

}
const game = () => {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getUserChoice(), getComputerChoice()));
        console.log("Player wins : " + PLAYER_WINS_COUNT);
        console.log("Computer wins : " + COMPUTER_WINS_COUNT);
    }
}

game();