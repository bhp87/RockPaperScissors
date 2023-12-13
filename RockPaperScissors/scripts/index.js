const choices = ['rock', 'paper', 'scissors'];
let PLAYER_WINS_COUNT = 0;
let COMPUTER_WINS_COUNT = 0;

const getComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
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

const playGame = (userChoice) => {
    if (PLAYER_WINS_COUNT === 5 || COMPUTER_WINS_COUNT === 5) {
        const winner = PLAYER_WINS_COUNT === 5 ? 'Player' : 'Computer';
        alert(`${winner} wins the game!`);
        resetGame();
    } else {
        const computerChoice = getComputerChoice();
        const result = playRound(userChoice, computerChoice);

        // Get the results div
        const resultsDiv = document.getElementById('results');

        // Update the content of the results div
        resultsDiv.innerHTML = `<p>${result}</p>
                                <p>Player wins: ${PLAYER_WINS_COUNT}</p>
                                <p>Computer wins: ${COMPUTER_WINS_COUNT}</p>`;
    }
}

const resetGame = () => {
    PLAYER_WINS_COUNT = 0;
    COMPUTER_WINS_COUNT = 0;

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
}
