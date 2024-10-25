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