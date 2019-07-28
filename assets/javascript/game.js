// Array of words
var wordList = ["big ben", "queen elizabeth", "james bond", "football", "full english breakfast", 
"cricket", "sherlock holmes", "stonehenge", "union jack", "the beatles", "fish and chips", "shakespeare",
"kilts", "ireland", "scotland", "wales", "england", "scone", "the thames"];

var wins;
var currentWord;
var currentWordSplit;
var ghostWord;
var ghostWordSplit;
var guessesLeft;
var wrongLetters = [];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z"];

// Setting functions for start of game

function reset() {
        //reset guesses
        //get a new word
        // alert player they have lost
        // reset letter guesses
        // re create ghost array
    wins = 0;
    currentWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    ghostWord = Array(currentWord.length).fill('_');
    guessesLeft = 12;
    wrongLetters = [];
    showWrongLetters();
}

function win() { //does the same as reset but doesn't update wins
    currentWord = wordList[Math.floor(Math.random() * wordList.length)].toUpperCase();
    ghostWord = Array(currentWord.length).fill('_');
    guessesLeft = 12;
    wrongLetters = [];
    showWrongLetters();
}

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
    // setWins();
    // setGuesses();
    // setCurrentWord(); updates should be done at the end and not at the beginning

    var indexPosition = currentWord.indexOf(keyPressed);

    if (indexPosition != -1) {
        for (var i = 0; i < currentWord.length; i++) { //check if letter is valid
            console.log("nice");

            if (currentWord.charAt(i) === keyPressed) {
                ghostWord[i] = keyPressed;
            } 
        }
    } else { 
        console.log("try again");
        if (alphabet.indexOf(keyPressed, i) === -1 || wrongLetters.indexOf(keyPressed) === -1) {
            guessesLeft--;
            wrongLetters.push(keyPressed);
            console.log(wrongLetters);
            document.getElementById("lettersGuessed").innerHTML = wrongLetters; //Prints the wrong letters to the screen
        }
    }

    if (guessesLeft === 0) {
        alert("game over");
        reset();
    }
    if (ghostWord.join( "" ) === currentWord) {
        wins++
        alert("Well done!");
        win();
    }


    setWins();
    setGuesses();
    setCurrentWord();
}

reset();