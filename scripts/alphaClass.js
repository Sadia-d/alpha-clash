
function handleAlphabetKeyUp(event){
    const playerPressed = event.key;

     
       const currentAlphabetNumbers = document.getElementById('current-alphabet');
       const currentAlphabet = currentAlphabetNumbers.innerText;
       const expectAlphabet = currentAlphabet.toLowerCase();
       removeBackgroundColor(expectAlphabet);
       console.log(expectAlphabet , playerPressed);
     
  if(playerPressed === expectAlphabet){
    console.log('you win the game');
    //// update the score.....
    /// step -1 : get the current score
      const getCurrentScore = document.getElementById('current-score');
      const currentScoreText = getCurrentScore.innerText;
      const currentScore = parseInt(currentScoreText);  
    /// step-2 : increase the score
    const newScore = currentScore + 1;
    /// step-3 : display the update score
    getCurrentScore.innerText = newScore;
    continueGame();
  }
  else{
    console.log('you are lost');
    //// update the life.....
    /// step -1 : get the current life
    const getCurrentLife = document.getElementById('current-life');
    const currentLifeText = getCurrentLife.innerText;
    const currentLife = parseInt(currentLifeText);
    /// step-2 : increase the score
    const newLife = currentLife - 1;
     /// step-3 : display the update score
     getCurrentLife.innerText = newLife;
     continueGame();
  }
}

document.addEventListener('keyup' ,handleAlphabetKeyUp)




function continueGame(){
//    get the alphabet.....
    const alphabet = getRandomAlphabet();
    console.log('the random alphabet' , alphabet);

    ///////// show the alphabet ...
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    /// set background color 
    setBackgroundColor(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}