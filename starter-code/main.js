console.log("JS file is connected to HTML! Woo!")

var cardOne = "King";
var cardTwo = "King";
var cardThree = "Queen";
var cardFour = "Queen";

//if (cardOne === cardTwo || cardThree === cardFour) {
//	alert("You found a match!");
//} else {
//	alert("Sorry try again!")
//}

var gameBoard = document.getElementById('game-board');

    var createCards = function(){
        
        for (var i = 0; i <= 3; i++) {
          var playingCards = document.createElement('div');
            playingCards.className = 'card';
            document.querySelector('div').appendChild(playingCards);
            }
        }
createCards();





