/* DOM MANIPULATION PRACTICE
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



// Global variables for use
let globalScores,
    roundScore,
    activePlayer,
    gameActive

newGame();

// Hide dice until we roll
let theDice = document.querySelector('.dice');
theDice.style.display = 'none';

let rollButton = document.querySelector('.btn-roll');

// Event listner for click on the roll button
rollButton.addEventListener('click', () => {

    // If state variable is true
    if (gameActive) {

        // 1. random number from 1-6 inclusive
        dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display Dice result using random number
        theDice.style.display = 'block';
        theDice.src = 'dice-' + dice + '.png';

        // 3. Roll Dice Functionaluty 
        if (dice !== 1) {

            // Add dice number to round score of that player whenever dice isn't equal too 1
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).innerHTML = roundScore;

        }
        else {

            // Change player after 3 seconds so they can see they rolled a 1
            setTimeout(nextPlayer, 300);

        }

    }



})

// Refeerence hold button
let holdButton = document.querySelector('.btn-hold');

// Event listner for click on the roll button
holdButton.addEventListener('click', () => {
    console.log('Hold button was clicked');

    // Add current round score to global score of current player
    globalScores[activePlayer] += roundScore;

    // Update UI To reflect update
    document.querySelector(`#score-${activePlayer}`).innerHTML = globalScores[activePlayer];

    // Check if player won the game
    if (globalScores[activePlayer] >= 10) {

        // remove dice from display
        theDice.style.display = "none";

        // Make active player the winner
        document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
        document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');

    }
    else {

        console.log(`Points saved, now changing active player`)
        nextPlayer();

    }

})


// Event listner for click on the new game button
document.querySelector('.btn-new').addEventListener('click', newGame);

// TODO Why does ES6 function not work here
// const newGame = () => {

function newGame() {
    // Reset core mechanics to 0
    globalScores = [0, 0];
    roundScore = 0;
    activePlayer = 0;

    // Clear all scores
    document.getElementById('current-0').innerHTML = 0;
    document.getElementById('score-0').innerHTML = 0;
    document.getElementById('current-1').innerHTML = 0;
    document.getElementById('score-1').innerHTML = 0;

    // Reset tags in case there was winner before pressing button
    document.getElementById('name-0').innerHTML = 'Player 1';
    document.getElementById('name-1').innerHTML = 'Player 2';

    // Remove winner from both
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');

    // Remove active from both
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');

    // Remove dice from display
    let theDice = document.querySelector('.dice');
    theDice.style.display = 'none';

    // Make first player add Player
    document.querySelector(`.player-0-panel`).classList.add('active');
}

// Function used so we don't repeat code
const nextPlayer = () => {

    // if active = 0, change to 1, else keep it 0
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0

    console.log('===========================');
    console.log('Dice equaled 1');
    console.log(`Active player changed too Player ` + activePlayer);

    // Reset round score on both sides
    roundScore = 0;
    document.querySelector('#current-0').innerHTML = roundScore;
    document.querySelector('#current-1').innerHTML = roundScore;

    // Toggle active off on one and on on the other 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    // remove dice from display
    theDice.style.display = "none";

}