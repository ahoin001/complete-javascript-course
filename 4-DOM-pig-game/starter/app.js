/* DOM MANIPULATION PRACTICE
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Clear all scores
document.getElementById('current-0').innerHTML = 0;
document.getElementById('score-0').innerHTML = 0;
document.getElementById('current-1').innerHTML = 0;
document.getElementById('score-1').innerHTML = 0;

// Global variables for use
let globalScores,
    roundScore,
    activePlayer;

// Holds the score for both players
globalScores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Hide dice until we roll
let theDice = document.querySelector('.dice');
theDice.style.display = 'none';

let rollButton = document.querySelector('.btn-roll');

// Event listner for click on the roll button
rollButton.addEventListener('click', () => {

    // 1. random number from 1-6 inclusive
    dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display Dice result
    theDice.style.display = 'block';
    theDice.src = 'dice-' + dice + '.png';

    // 3. Roll Dice Functionaluty 
    if (dice !== 1) {

        // Add dice number to round score of that player whenever dice is'nt equal too 1
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).innerHTML = roundScore;

    }
    else {

        console.log('===========================');
        console.log('Dice equaled 1');

        // Change active player if dice = 1
        if (activePlayer === 0) {

            // Reset round score on both sides
            roundScore = 0;
            document.querySelector('#current-0').innerHTML = roundScore;
            document.querySelector('#current-1').innerHTML = roundScore;

            // Take active off 0 and activate it on 1
            document.querySelector('.player-0-panel').classList.toggle('active');
            document.querySelector('.player-1-panel').classList.toggle('active');

            // Change active player
            activePlayer = 1;

        }
        else if (activePlayer === 1) {

            // Reset round score on both sides
            roundScore = 0;
            document.querySelector('#current-0').innerHTML = roundScore;
            document.querySelector('#current-1').innerHTML = roundScore;

            // Take active off 1 and activate it on 0
            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.player-0-panel').classList.toggle('active');

            // Change active player
            activePlayer = 0;
        }

    }

})