// Array of words
var wordList = ["big ben", "queen elizabeth", "james bond", "football", "full english breakfast", 
"cricket", "sherlock holmes", "stonehenge", "union jack", "the beatles", "fish and chips", "shakespeare",
"kilts", "ireland", "scotland", "wales", "england"];

var wins = 0
var currentWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
var guessesLeft = 12;
var lettersGuessed = document.getElementById("wrongLetter")
var wordLetters = Array.from(currentWord);

// Setting functions for start of game

function setWins() {
    winsLocation = document.getElementById("wins");
    winsLocation.innerHTML = wins;
}

function setGuesses() {
    guessesLocation = document.getElementById("guessesLeft");
    guessesLocation.innerHTML = guessesLeft;
}

function setCurrentWord() {
    wordLocation = document.getElementById("currentWord");
    wordLocation.innerHTML = currentWord;
}

//User input code
document.onkeyup = function(event) {
    var keyPressed = event.key.toLowerCase();
    console.log("You pressed " + keyPressed);
    setWins();
    setGuesses();
    setCurrentWord();
    
}

