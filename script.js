var scores, roundScores, activePlayer, gamePlay;

init ();



//document.querySelector("#current-" + activePlayer).textContent = dice;

/* We can also use .innerHTML instead of .textContent to add HTML to the line
  for example :
        .innerHTML = '<em> + dice + '</em>' -> this sets the dice value to italics
*/

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlay) {
            // 1. Generate a random number
        var dice = Math.floor(Math.random() * 6) + 1;
    
        // 2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = "dice-" + dice + '.png';
    

        // 3.Update the round score IF the number rolled != 1
        if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            // Next Player
          nextPlayer();

        }
    
        
    }

    
    
}) ;

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlay) {
            // 1. Add current score to global player score
         scores[activePlayer] += roundScore;

        // 2. Update UI 
         document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 

        // 3. Check if player won the game
        if (scores[activePlayer] >= 40) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlay = false;


        }else {
            nextPlayer();
        }
    }

    
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer () {
    
    document.querySelector('#current-' + activePlayer).textContent = 0;
    roundScore = 0;
        
        
    document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active'); // Can also use .toggle fn
    activePlayer === 0 ? activePlayer =  1 : activePlayer = 0;
    document.querySelector('.player-' + activePlayer +'-panel').classList.add('active');
}

function init () {
    
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0; // 0 is the first player and 1 is the second player
    
    gamePlay = true;
    
    document.querySelector(".dice").style.display = "none"; // Changing CSS. '.' is used because dice was a class not tag (#)

    document.getElementById('score-0').textContent = '0'
    document.getElementById('score-1').textContent = '0'
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}

















 