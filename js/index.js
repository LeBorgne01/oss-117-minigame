var scoreGameOne = document.getElementById('best-score-game-one');
var scoreGameTwo = document.getElementById('best-score-game-two');
var scoreGameThree = document.getElementById('best-score-game-three');

var bestScoreGameOne = readCookie('game-one-score');
var bestScoreGameTwo = readCookie('game-two-score');
var bestScoreGameThree = readCookie('game-three-score');

if(bestScoreGameOne == null){
    scoreGameOne.innerHTML = '0';
}
else{
    scoreGameOne.innerHTML = bestScoreGameOne;
}

if(bestScoreGameTwo == null){
    scoreGameTwo.innerHTML = '0';
}
else{
    scoreGameTwo.innerHTML = bestScoreGameTwo;
}

if(bestScoreGameThree == null){
    scoreGameThree.innerHTML = '0';
}
else{
    scoreGameThree.innerHTML = bestScoreGameThree;
}
