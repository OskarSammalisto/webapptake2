// guessboard

var opponent = document.getElementById('opponent');
var goalsLiverpool = document.getElementById('goalsLiverpool');
var goalsOpponent = document.getElementById('goalsOpponent');
var goalMinute = document.getElementById('goalMinute');
var yellows = document.getElementById('yellows');
var firstGoalscorer = document.getElementById('firstGoalscorer');
var yesRed = document.getElementById('yesRed');
var noRed = document.getElementById('noRed');

// scoreboard

var totalScore = document.getElementById('totalScore');
var lineupScore = document.getElementById('lineupScore');
var resultScore = document.getElementById('resultScore');
var cardsScore = document.getElementById('cardsScore');
var goalScorerScore = document.getElementById('goalScorerScore');
var goalMinuteScore = document.getElementById('goalMinuteScore');

//functions

function calculate() {
    goalsLiverpoolFunction();
    goalsOpponentFunction();
    goalMinuteFunction();
    yellowsFunction();
    firstGoalscorerFunction();
    yesRedFunction();
    var p = opponent.value;
    document.getElementById("opponent").options[p].disabled = true;
    document.getElementById('form').reset();
}

function goalsLiverpoolFunction() {
    if((goalsLiverpool).value == 'refer to resultsheet'){
        resultScore.innerHTML = Number(resultScore.innerHTML) + 5;

    }
}

function goalsOpponentFunction() {
    if((goalsOpponent).value == 'refer to resultsheet'){
        resultScore.innerHTML = Number(resultScore.innerHTML) + 5;
    }
}

function goalMinuteFunction() {
    if((goalMinute).value == 'refer to resultsheet'){
        goalMinuteScore.innerHTML = Number(goalMinuteScore.innerHTML) + 20;
    }
    else if(('refer to resultsheet' - 5) <= (goalMinute).value < ('refer to resultsheet' + 5) ){
        goalMinuteScore.innerHTML = Number(goalMinuteScore.innerHTML) + 10;
    }

    else if(('refer to resultsheet' - 10) < (goalMinute).value > ('refer to resultsheet' + 10) ){
        goalMinuteScore.innerHTML = Number(goalMinuteScore.innerHTML) + 2;
    }
}

function yellowsFunction() {
    if((yellows).value == 'refer to resultsheet'){
        cardsScore.innerHTML = Number(cardsScore.innerHTML) + 10;
    }
    else if('refer to resultsheet +2' <= (yellows).value <= 'refer to resultsheet +2'){
        cardsScore.innerHTML = Number(cardsScore.innerHTML) + 5;
    }
}

function firstGoalscorerFunction() {
    if((firstGoalscorer).value == 'refer to resultsheet'){
        goalScorerScore.innerHTML = Number(goalScorerScore.innerHTML) + 5;
    }
}

function yesRedFunction() {
    if((yesRed).value == 'refer to resultsheet'){
        cardsScore.innerHTML = Number(cardsScore.innerHTML) + 10;
    }
    else {
        cardsScore.innerHTML = Number(cardsScore.innerHTML) - 10;
    }

}