// Array of words
var wordList = ["big ben", "queen elizabeth", "james bond", "football", "full english breakfast", 
"cricket", "sherlock holmes", "stonehenge", "union jack", "the beatles", "fish and chips", "shakespeare",
"kilts", "ireland", "scotland", "wales", "england"];

var begin = document.getElementById("start");
var wins = 0;
var currentWord = document.getElementById("randomWord");
var guessesLeft = 12;
var lettersGuessed = document.getElementById("wrongLetter")

//User input code
document.onkeyup = function(event) {
    var userInput = event.key;
}