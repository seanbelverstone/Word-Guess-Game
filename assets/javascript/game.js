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
"x","y","z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X", "Y", "Z"];

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

    for (var i = 0; i < currentWordSplit.length; i++) { //check if letter is valid
        if (alphabet.indexOf(keyPressed, i) === -1) {
            alert("try a real letter");
            break;
        } else if (indexPosition !== -1) {
            console.log("nice");
            currentWord.replace(ghostWord, currentWordSplit, [i]);
            break;
        } else { 
            console.log("try again");
            guessesLeft--;
            wrongLetters.push(keyPressed);
            console.log(wrongLetters);
            document.getElementById("lettersGuessed").innerHTML = wrongLetters; //Prints the wrong letters to the screen
            break;
        }
           
}

}

if (wordList.indexOf(0)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');
 
    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/bigben.jpg';

} else if (wordList.indexOf(1)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/queenelizabeth.jpg';

} else if (wordList.indexOf(2)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/jamesbond.jpg';

} else if (wordList.indexOf(3)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/football.jpg';

} else if (wordList.indexOf(4)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/fullenglish.jpg';

} else if (wordList.indexOf(5)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/cricket.jpg';

} else if (wordList.indexOf(6)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/sherlockholmes.jpg';

} else if (wordList.indexOf(7)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/stonehenge.jpg';

} else if (wordList.indexOf(8)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/unionjack.jpg';

} else if (wordList.indexOf(9)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/thebeatles.jpg';

} else if (wordList.indexOf(10)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/fishandchips.jpg';

} else if (wordList.indexOf(11)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/shakespeare.jpg';

} else if (wordList.indexOf(12)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/kilts.jpg';

} else if (wordList.indexOf(13)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/ireland.png';

} else if (wordList.indexOf(14)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/scotland.png';

} else if (wordList.indexOf(15)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/wales.png';

} else if (wordList.indexOf(16)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/england.png';

} else if (wordList.indexOf(17)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/scone.jpeg';

} else if (wordList.indexOf(18)) {
    var img = new Image(400, 300);
    var div = document.getElementById('img');

    img.onload = function() {
        div.appendChild(img);
    };
    img.src = 'assets/images/thames';
    
}
/* things to add
-replace _ with characters
-allowed characters (a-z) - if incorrect character bring up alert. Disallow duplicate letters
-when word complete - add image to page
-bring up button(?) to continue, add function to button.. newdiv? append ect */ 
