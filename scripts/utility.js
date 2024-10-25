function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

////////............

function getRandomAlphabet(){
    ////// need to a alphabet string ,,,,,
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
   
    /// get a random number 
    const randomNumber = Math.random() * 25 ;
    const index = Math.round(randomNumber);
    
    //// get the alphabet 
    const alphabet = alphabets[index];
    return alphabet;
}