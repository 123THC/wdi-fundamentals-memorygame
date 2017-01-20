console.log("JS file is connected to HTML! Woo!")

//var cardOne = "King";
//var cardTwo = "King";
//var cardThree = "Queen";
//var cardFour = "Queen";

var cards = ['king', 'king', 'queen', 'queen', 'jack', 'jack', 'ten', 'ten'];
var cardsInPlay = [];

var gameBoard = document.getElementById('game-board');

    var createCards = function(){
        
        for (var i = 0; i < cards.length; i++) {
          var playingCards = document.createElement('div');
             playingCards.className = 'card';
            document.querySelector('div').appendChild(playingCards);
            playingCards.setAttribute('data-card', cards[i]);
            playingCards.addEventListener('click', isTwoCards);
            playingCards.innerHTML = '<img src="frontcard.jpg" alt="Card"/>'
            }
         }
 createCards();

function isTwoCards() {
	var dataCard = this.getAttribute('data-card');
	cardsInPlay.push(dataCard);

	if (dataCard === "king"){
		this.innerHTML = '<img src="theking.png" alt="King"/>';
	} else if (dataCard === "queen"){
		this.innerHTML = '<img src="queen.png" alt="Queen"/>';
	} else if (dataCard === "jack"){
		this.innerHTML = '<img src="jack.png" alt="Jack"/>';
	} else if (dataCard === "ten"){
		this.innerHTML = '<img src="ten.jpg" alt="Ten"/>';
	}
	
	if (cardsInPlay.length === 2) {
		isMatch();
		cardsInPlay = [];
	} 
}

// I need to create a time delay for the alert and also for the reset
//setTimeout(reset, 3000);

function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
} else {
	reset();
	alert("Sorry, try again!");
}
}

// I need to edit this function so it doesn't flip over all the cards when one pair doesn't match
function reset() {
	for (i = 0; i < cards.length; i++){
		if (document.getElementsByClassName('card'))[i]
			document.getElementsByClassName('card')[i].innerHTML = '<img src="frontcard.jpg" alt="Card"/>';
		}
	}


	




