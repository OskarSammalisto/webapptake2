// guessboard

var opponent = document.getElementById('opponent');
var goalsLiverpool = document.getElementById('goalsLiverpool');
var goalsOpponent = document.getElementById('goalsOpponent');
var goalMinute = document.getElementById('goalMinute');
var yellows = document.getElementById('yellows');
var firstGoalscorer = document.getElementById('firstGoalscorer');
var yesRed = document.getElementById('yesRed');
var noRed = document.getElementById('noRed');
var starting11 = document.getElementsByClassName('starting11');


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
var RedTrue;
var starting11Guess = [];

 //console.log(lineupTrue);
//functions

// match results
function matchResults() {



    if(opponent.value == 1 /*psg*/){
         goalsLiverpoolTrue = 3;
         goalsOpponentTrue = 2;
         goalMinuteTrue = 30;
         yellowsTrue = 2;
         firstGoalscorerTrue = 8;
         RedTrue = 0;

         lineupTrue = [4, 25, 16, 26, 5, 12, 15, 13, 18, 7, 23];

    }
    else if(opponent.value == 2 /*everton*/){
        goalsLiverpoolTrue = 3;
        goalsOpponentTrue = 2;
        goalMinuteTrue = 30;
        yellowsTrue = 2;
        firstGoalscorerTrue = 8;
        RedTrue = 0;

        lineupTrue = [4, 25, 16, 26, 5, 12, 15, 13, 18, 7, 23];

    }

    else if(opponent.value == 3 /*burnley*/){
        goalsLiverpoolTrue = 3;
        goalsOpponentTrue = 2;
        goalMinuteTrue = 30;
        yellowsTrue = 2;
        firstGoalscorerTrue = 8;
        RedTrue = 0;

        lineupTrue = [4, 25, 16, 26, 5, 12, 15, 13, 18, 7, 23];

    }

    else if(opponent.value == 4 /*leicester*/){
        goalsLiverpoolTrue = 3;
        goalsOpponentTrue = 2;
        goalMinuteTrue = 30;
        yellowsTrue = 2;
        firstGoalscorerTrue = 8;
        RedTrue = 0;

        lineupTrue = [4, 25, 16, 26, 5, 12, 15, 13, 18, 7, 23];

    }

    else if(opponent.value == 5 /*southampton*/){
        goalsLiverpoolTrue = 3;
        goalsOpponentTrue = 0;
        goalMinuteTrue = 10;
        yellowsTrue = 2;
        firstGoalscorerTrue = 29;
        RedTrue = 0;

        lineupTrue = [4, 25, 14, 26, 5, 12, 27, 13, 18, 7, 23];

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
    console.log(starting11Guess);
    console.log(lineupTrue);
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

function goalMinuteFunction() {  //this needs fixing
    matchResults();
    if((goalMinute).value == goalMinuteTrue){
        goalMinuteScore.innerHTML = Number(goalMinuteScore.innerHTML) + 20;
    }

}

function yellowsFunction() {
    matchResults();
    if((yellows).value == yellowsTrue){
        cardsScore.innerHTML = Number(cardsScore.innerHTML) + 10;
    }

}

function firstGoalscorerFunction() {
    matchResults();
    if((firstGoalscorer).value == firstGoalscorerTrue){
        goalScorerScore.innerHTML = Number(goalScorerScore.innerHTML) + 20 ;
    }
}

function yesRedFunction() { //this needs fixing
    matchResults();

    var redGuess;

  if(document.getElementById('yesRed').checked){
      redGuess = 1;
  }
  else{
      redGuess = 0;
  }



    if(redGuess == RedTrue){
        cardsScore.innerHTML = Number(cardsScore.innerHTML) + 10;
    }
    else {
        cardsScore.innerHTML = Number(cardsScore.innerHTML) - 10;
    }

}

function lineupFunction() { //this needs fixing
    matchResults();

    var sum = 0;


    starting11Guess[0] = document.getElementById('changeImage1').value;
    starting11Guess[1] = document.getElementById('changeImage2').value;
    starting11Guess[2] = document.getElementById('changeImage3').value;
    starting11Guess[3] = document.getElementById('changeImage4').value;
    starting11Guess[4] = document.getElementById('changeImage5').value;
    starting11Guess[5] = document.getElementById('changeImage6').value;
    starting11Guess[6] = document.getElementById('changeImage7').value;
    starting11Guess[7] = document.getElementById('changeImage8').value;
    starting11Guess[8] = document.getElementById('changeImage9').value;
    starting11Guess[9] = document.getElementById('changeImage10').value;
    starting11Guess[10] = document.getElementById('changeImage11').value;







    for(var i = 0; i < starting11.length ; i++){
        for(var x = 0; x < lineupTrue.length; x++){
            if(starting11Guess[i] == lineupTrue[x]){
                sum++;
            }
        }
    }
    console.log(starting11);
    console.log(lineupTrue);

    if(sum == 11){
        sum = 30;
        lineupScore.innerHTML = Number(lineupScore.innerHTML) + sum;
    }
    else {
        lineupScore.innerHTML = Number(lineupScore.innerHTML) + (sum * 2);
    }
}

