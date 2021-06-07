const fisherYatesShuffle = (deck) =>{
    for(var i = deck.length-1; i>0; i--){
        const swapIndex = Math.floor(Math.random() * (i + 1));
        const currentCard = deck[i];
        const cardToSwap = deck[swapIndex];
        deck[i] = cardToSwap;
        deck[swapIndex] = currentCard;

        console.log(deck[i]);
}
 return deck;    

}

const deck = ["Ace", "Deuce", "Three", "Four", "Five",
"Six", "Seven", "Eigth", "Nine", "Ten",
"Jack", "Queen", "King"];


fisherYatesShuffle(deck);


