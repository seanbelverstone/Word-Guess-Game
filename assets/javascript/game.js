// Array of words
var wordList = ["big ben", "queen elizabeth", "james bond", "football", "full english breakfast", 
"cricket", "sherlock holmes", "stonehenge", "union jack", "the beatles", "fish and chips", "shakespeare",
"kilts", "ireland", "scotland", "wales", "england", "scone", "the thames"];

var wins = 0;
var currentWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
var currentWordSplit = currentWord.split("");
var ghostWord = currentWord.replace(/[a-z]/gi, '_');
var guessesLeft = 12;
var wrongLetters = [];
// var wordLetters = Array.from(currentWord);
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z"];

// Setting functions for start of game

function setWins() {
    var winsLocation = document.getElementById("wins");
    winsLocation.innerHTML = wins;
}

function setGuesses() {
    var guessesLocation = document.getElementById("guessesLeft");
    guessesLocation.innerHTML = guessesLeft;
}

function setCurrentWord() {
    var wordLocation = document.getElementById("currentWord");
    wordLocation.innerHTML = ghostWord;
}

function showWrongLetters() {
    var lettersLocation = document.getElementById("lettersGuessed").innerHTML = wrongLetters;
        lettersLocation.innerHTML = wrongLetters;
}

//User input code
document.onkeyup = function(event) {
    var keyPressed = event.key.toUpperCase();
    console.log("You pressed " + keyPressed);
    setWins();
    setGuesses();
    setCurrentWord();

 
console.log(currentWord);

    var indexPosition = currentWordSplit.indexOf(keyPressed);

    for (var i = 0; i < currentWordSplit.length; i++) {
    }   if (indexPosition !== -1) {
            console.log("nice");
    }   else {
            console.log("try again");
            guessesLeft--;
            wrongLetters.push(keyPressed);
            console.log(wrongLetters);
            document.getElementById("lettersGuessed").innerHTML = wrongLetters; //Prints the wrong letters to the screen
    }

}

