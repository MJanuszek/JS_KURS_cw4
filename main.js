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
this.style.boxShadow = ' 0 0 0 6px green';

// end of imgHandSelectioin();
}

const aiChoice = function(e) {
    return imgHands[Math.floor(Math.random()*3)].dataset.option;
   
};

const gameResult = function(player, ai){

if (player === ai) {
    console.log("remis");
    return "draw"
} else if (
(player === "papier" && ai === "kamien") ||
(player === "kamien" && ai === "nożyce") || 
(player === "nożyce" && ai === "papier")){
    console.log("player wins");
    return "win"
} else {
    console.log("ai wins");
    return "loss"
}
    // end of gameResult():::::::
}

// clear player choice::::
const clearBoard = () => {
    document.querySelector(`[data-option = ${game.playerHand}]`).style.boxShadow = "";

}


// Game start button:
const playTheGame = function (){
        // console.log(game.playerHand);
    if (game.playerHand === ""){
    return alert("Wybierz dłoń")
    };

    game.aiHand = aiChoice();
    const whoWins = gameResult(game.playerHand, game.aiHand );
    publishResult(game.playerHand, game.aiHand, whoWins);
    clearBoard();

// end of playTheGame::
}

const publishResult = (player, ai, result) => {
    document.querySelector("[data-summary='your-choice']").textContent = game.playerHand;
    document.querySelector("[data-summary='ai-choice']").textContent = game.aiHand;
    // games counter:
    gameSummary.games++;
    document.querySelector("p.games span").textContent = gameSummary.games;

    if (result === "win"){
        gameSummary.wins++;
        document.querySelector("p.wins span").textContent = gameSummary.wins;
        document.querySelector("[data-summary='winner']").textContent = "Player";
        document.querySelector("[data-summary='winner']").style.color = "green";
    } else if (result === "loss"){
        gameSummary.losses++;
        document.querySelector("p.losses span").textContent = gameSummary.losses;
        document.querySelector("[data-summary='winner']").textContent = "AI";
        document.querySelector("[data-summary='winner']").style.color = "blue";
    } else {
        gameSummary.draws++;
        document.querySelector("p.draws span").textContent = gameSummary.draws;
        document.querySelector("[data-summary='winner']").textContent = "Remis";
        document.querySelector("[data-summary='winner']").style.color = "orange";
    }

    // enf of publishResult():::::::
}

imgHands.forEach(img => img.addEventListener("click", imgHandSelectioin ));
buttonPlay.addEventListener("click", playTheGame)

