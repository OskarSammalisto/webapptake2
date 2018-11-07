// guessboard

var opponent = document.getElementById('opponent');
var goalsLiverpool = document.getElementById('goalsLiverpool');
var goalsOpponent = document.getElementById('goalsOpponent');
var goalMinute = document.getElementById('goalMinute');
var yellows = document.getElementById('yellows');
var firstGoalscorer = document.getElementById('firstGoalscorer');
var yesRed = document.getElementById('yesRed');
var noRed = document.getElementById('noRed');
var lineup = document.getElementsByClassName('starting11');

// scoreboard

var totalScore = document.getElementById('totalScore');
var lineupScore = document.getElementById('lineupScore');
var resultScore = document.getElementById('resultScore');
var cardsScore = document.getElementById('cardsScore');
var goalScorerScore = document.getElementById('goalScorerScore');
var goalMinuteScore = document.getElementById('goalMinuteScore');

//functions

function calculate() {
    matchResults();
    goalsLiverpoolFunction();
    goalsOpponentFunction();
    goalMinuteFunction();
    yellowsFunction();
    firstGoalscorerFunction();
    yesRedFunction();
    lineupFunction();
    totalScoreSum();
    var p = opponent.value;
    document.getElementById("opponent").options[p].disabled = true;
    document.getElementById('form').reset();
}

function totalScoreSum() {
    totalScore.innerHTML = Number(resultScore.innerHTML) + Number(goalMinuteScore.innerHTML) + Number(cardsScore.innerHTML) + Number(goalScorerScore.innerHTML) + Number(lineupScore.innerHTML);
}

function goalsLiverpoolFunction() {
    if((goalsLiverpool).value == goalsLiverpool){
        resultScore.innerHTML = Number(resultScore.innerHTML) + 5;

    }
}

function goalsOpponentFunction() {
    if((goalsOpponent).value == goalsOpponent){
        resultScore.innerHTML = Number(resultScore.innerHTML) + 5;
    }
}

function goalMinuteFunction() {
    if((goalMinute).value == goalMinute){
        goalMinuteScore.innerHTML = Number(goalMinuteScore.innerHTML) + 20;
    }
    else if((goalMinute - 5) <= (goalMinute).value < (goalMinute + 5) ){
        goalMinuteScore.innerHTML = Number(goalMinuteScore.innerHTML) + 10;
    }

    else if((goalMinute - 10) < (goalMinute).value > (goalMinute + 10) ){
        goalMinuteScore.innerHTML = Number(goalMinuteScore.innerHTML) + 2;
    }
}

function yellowsFunction() {
    if((yellows).value == yellows){
        cardsScore.innerHTML = Number(cardsScore.innerHTML) + 10;
    }
    else if(yellows +2 <= (yellows).value <= yellows +2){
        cardsScore.innerHTML = Number(cardsScore.innerHTML) + 5;
    }
}

function firstGoalscorerFunction() {
    if((firstGoalscorer).value == firstGoalscorer){
        goalScorerScore.innerHTML = Number(goalScorerScore.innerHTML) + 5;
    }
}

function yesRedFunction() {
    if((yesRed).value == yesRed){
        cardsScore.innerHTML = Number(cardsScore.innerHTML) + 10;
    }
    else {
        cardsScore.innerHTML = Number(cardsScore.innerHTML) - 10;
    }

}

function lineupFunction() {
    var starting11;
    var lineupTrue;
    var sum = 0;

    for(var i = 0; i < starting11.length; i++){
        for(var x = 0; x < lineupTrue.length; x++){
            if(starting11[i] == lineupTrue[x]){
                sum++;
            }
        }
    }

    if(sum == 11){
        sum = 30;
        lineupScore.innerHTML = Number(lineupScore.innerHTML) + sum;
    }
    else {
        lineupScore.innerHTML = Number(lineupScore.innerHTML) + (sum * 2);
    }
}

// match results
function matchResults() {



if(opponent.value == 1 /*psg*/){
    goalsLiverpool = 3;
    goalsOpponent = 2;
    goalMinute = 30;
    yellows = 2;
    firstGoalscorer = 8;
    yesRed = 'yes';
    noRed = 0;
    lineupTrue = [4, 25, 16, 26, 5, 12, 15, 13, 18, 7, 23];

}
else if(opponent.value == 2 /*everton*/){

}

else if(opponent.value == 3 /*burnley*/){

}

else if(opponent.value == 4 /*leicester*/){

}

else if(opponent.value == 5 /*southampton*/){

}
}