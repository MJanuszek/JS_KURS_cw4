// Nauka JS Kurs Udemy: Programowanie w JavaScrip, Autor: Samuraj Programowania:::
//  Ćwiczenia

const buttonPlay = document.getElementById("start-btn");

const gameSummary = {
    games: 0,
    wins: 0,
    losses: 0,
    draws: 0,

}

const game = {
    playerHand: "",
    aiHand: "",
}

// pobranie grafik:

// const imgHands = document.querySelectorAll(".gallery img");
const imgHands = [...document.querySelectorAll(".gallery img")];

// Wybór gracza:
const imgHandSelectioin = function(e) {
// console.log(this);
// lub: console.log(e.target);
// obiekt dataset odwołuje się do atrybutów w html: data-option="papier"::
game.playerHand = this.dataset.option;
imgHands.forEach(img => img.style.boxShadow = "");
// boxshadow nie zmienia wielkości img, wymaga 5 parametrów::
this.style.boxShadow = ' 0 0 0 4px black';

// end of imgHandSelectioin();
}

const aiChoice = function() {
     return imgHands[Math.floor(Math.random()*3)].dataset.option;
};

const gameResult = function(player, ai){

if (player === ai) {
    console.log("remis");
} else if (
(player === "papier" && ai === "kamien") ||
(player === "kamien" && ai === "nożyce") || 
(player === "nożyce" && ai === "papier")){
    console.log("player wins");
} else {
    console.log("ai wins");
}
    // end of gameResult():::::::
}

// Game start button:
const playTheGame = function (){
    // console.log(game.playerHand);
if (game.playerHand === ""){
   return alert("Wybierz dłoń")
};

game.aiHand = aiChoice();
const whoWins = gameResult(game.playerHand, game.aiHand );

// end of playTheGame::
}



imgHands.forEach(img => img.addEventListener("click", imgHandSelectioin ));
buttonPlay.addEventListener("click", playTheGame)

