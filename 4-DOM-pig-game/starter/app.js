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

rollButton.addEventListener('click', () => {

    // 1. random number from 1-6 inclusive
    dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display Dice result
    theDice.style.display = 'block';
    theDice.src = 'dice-' + dice + '.png';

    // 3.  
    if (dice !== 1) {

        // Add dice number to round score of that player whenever dice is'nt equal too 1
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).innerHTML = roundScore;

    }
    else {

        console.log('=========================== It equaled 1');
        // Change active player if dice = 1
        if (activePlayer === 0) {

            // Disable player panel 0 player-0-panel
            const panelWeWillDeactivate = document.querySelector('.player-' + activePlayer + "-" + "panel");
            panelWeWillDeactivate.classList.remove("active");
            console.log('Removed active class from 0 ')

            // Enable the active panel in player 1
            activePlayer = 1;
            let panelWeWillMakeActive = document.querySelector('.player-' + activePlayer + "-" + "panel");
            panelWeWillMakeActive.classList.add("active");
            console.log('Add active class to 1 ');

            // Reset round score on both sides
            roundScore = 0;
            document.querySelector('#current-0').innerHTML = roundScore;
            document.querySelector('#current-1').innerHTML = roundScore;

        }
        else if (activePlayer === 1) {

            // Disable player panel 1 player-1-panel
            let panelWeWillDeactivate = document.querySelector('player-' + activePlayer + "-" + "panel");
            panelWeWillDeactivate.classList.remove("active");
            console.log('Removed active class from 1 ')

            // Enable the active panel in player 0
            activePlayer = 0;
            let panelWeWillMakeActive = document.querySelector('player-' + activePlayer + "-" + "panel");
            panelWeWillMakeActive.classList.add("active");
            console.log('Add active class to 0 ')

            // Reset round score on both sides
            roundScore = 0;
            document.querySelector('#current-0').innerHTML = roundScore;
            document.querySelector('#current-1').innerHTML = roundScore;

        }

    }

})