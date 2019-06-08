// Array of words
var wordList = ["big ben", "queen elizabeth", "james bond", "football", "full english breakfast", 
"cricket", "sherlock holmes", "stonehenge", "union jack", "the beatles", "fish and chips", "shakespeare",
"kilts", "ireland", "scotland", "wales", "england"];

var startGame = document.getElementById("begin");
var wins = 0;
var currentWord = wordList[Math.floor(Math.random() * wordList.length)];;
var guessesLeft = 12;
var lettersGuessed = document.getElementById("wrongLetter")

//User input code
document.onkeyup = function(event) {
    var keyPressed = event.key.toLowerCase();
    console.log("You pressed: " + keyPressed);
}
    