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
// var wordLetters = Array.from(currentWord);
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
            //maybe add a for loop, to check the index position and change that index instead.
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

    if (currentWord.indexOf(keyPressed > -1)) {
        wins++
        setCurrentWord();
        setGuesses();
        showWrongLetters();
    }


    setWins();
    setGuesses();
    setCurrentWord();
}

reset();

/* things to add
-replace _ with characters when correct character pressed
-Disallow duplicate letters
-when word complete - add image to page
-bring up button(?) to continue, add function to button.. newdiv? append ect */ 



//Below code doesn't work

// //If statement that shows the picture corresponding with the current word selected
// if (wordList.indexOf(0)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');
 
//     img.onload = function() {
//         div.appendChild(img);
//         document.getElementById("img");
//     };
//     img.src = 'assets/images/bigben.jpg';

// } else if (wordList.indexOf(1)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//         document.getElementById("img");
//     };
//     img.src = 'assets/images/queenelizabeth.jpg';

// } else if (wordList.indexOf(2)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/jamesbond.jpg';

// } else if (wordList.indexOf(3)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/football.jpg';

// } else if (wordList.indexOf(4)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/fullenglish.jpg';

// } else if (wordList.indexOf(5)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/cricket.jpg';

// } else if (wordList.indexOf(6)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/sherlockholmes.jpg';

// } else if (wordList.indexOf(7)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/stonehenge.jpg';

// } else if (wordList.indexOf(8)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/unionjack.jpg';

// } else if (wordList.indexOf(9)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/thebeatles.jpg';

// } else if (wordList.indexOf(10)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/fishandchips.jpg';

// } else if (wordList.indexOf(11)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/shakespeare.jpg';

// } else if (wordList.indexOf(12)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/kilts.jpg';

// } else if (wordList.indexOf(13)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/ireland.png';

// } else if (wordList.indexOf(14)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/scotland.png';

// } else if (wordList.indexOf(15)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/wales.png';

// } else if (wordList.indexOf(16)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/england.png';

// } else if (wordList.indexOf(17)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/scone.jpeg';

// } else if (wordList.indexOf(18)) {
//     var img = new Image(400, 300);
//     var div = document.getElementById('img');

//     img.onload = function() {
//         div.appendChild(img);
//     };
//     img.src = 'assets/images/thames';
    
// }

// 



