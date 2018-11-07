// guessboard

var opponent = document.getElementById('opponent');
var goalsLiverpool = document.getElementById(('goalsLiverpool'));
var goalsOpponent = document.getElementById('goalsOpponent');
var goalMinute = document.getElementById('goalMinute');
var yellows = document.getElementById('yellows');
var firstGoalscorer = document.getElementById('firstGoalscorer');
var yesRed = document.getElementById('yesRed');
var noRed = document.getElementById('noRed');
var starting11 = document.getElementsByClassName(('starting11').value);

// scoreboard

var totalScore = document.getElementById('totalScore');
var lineupScore = document.getElementById('lineupScore');
var resultScore = document.getElementById('resultScore');
var cardsScore = document.getElementById('cardsScore');
var goalScorerScore = document.getElementById('goalScorerScore');
var goalMinuteScore = document.getElementById('goalMinuteScore');

var lineupTrue;
var goalsLiverpoolTrue;
var goalsOpponentTrue;
var goalMinuteTrue;
var yellowsTrue;
var firstGoalscorerTrue;
var yesRedTrue;
var noRedTrue = 0;
 console.log(opponent);
//functions

// match results
function matchResults() {



    if(opponent.value == 1 /*psg*/){
         goalsLiverpoolTrue = 3;
         goalsOpponentTrue = 2;
         goalMinuteTrue = 30;
         yellowsTrue = 2;
         firstGoalscorerTrue = 8;
         yesRedTrue = 'yes';
         noRedTrue = 0;
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


function calculate() {

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
    matchResults();
    if((goalsLiverpool).value == goalsLiverpoolTrue){
        resultScore.innerHTML = Number(resultScore.innerHTML) + 5;

    }
}

function goalsOpponentFunction() {
    matchResults();
    if((goalsOpponent).value == goalsOpponentTrue){
        resultScore.innerHTML = Number(resultScore.innerHTML) + 5;
    }
}

function goalMinuteFunction() {
    matchResults();
    if((goalMinute).value == goalMinuteTrue){
        goalMinuteScore.innerHTML = Number(goalMinuteScore.innerHTML) + 20;
    }
    else if((goalMinuteTrue - 5) >= (goalMinute).value <= (goalMinuteTrue + 5) ){
        goalMinuteScore.innerHTML = Number(goalMinuteScore.innerHTML) + 10;
    }

    else if((goalMinuteTrue - 10) >= (goalMinute).value <= (goalMinuteTrue + 10) ){
        goalMinuteScore.innerHTML = Number(goalMinuteScore.innerHTML) + 2;
    }
}

function yellowsFunction() {
    matchResults();
    if((yellows).value == yellowsTrue){
        cardsScore.innerHTML = Number(cardsScore.innerHTML) + 10;
    }
    /*else if((yellowsTrue + 2) >= (yellows).value <= (yellowsTrue + 2)){
        cardsScore.innerHTML = Number(cardsScore.innerHTML) + 5;
    }*/
}

function firstGoalscorerFunction() {
    matchResults();
    if((firstGoalscorer).value == firstGoalscorerTrue){
        goalScorerScore.innerHTML = Number(goalScorerScore.innerHTML) + 20 ;
    }
}

function yesRedFunction() {
    matchResults();
    if((yesRed).value == yesRedTrue){
        cardsScore.innerHTML = Number(cardsScore.innerHTML) + 10;
    }
    else {
        cardsScore.innerHTML = Number(cardsScore.innerHTML) - 10;
    }

}

function lineupFunction() {
    matchResults();

    var sum = 0;

    for(var i = 0; i < starting11.length ; i++){
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

