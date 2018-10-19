var nbGameQuestion = 4;
var questions;
var randomQuestions;

var nbQuestionDone;
var nbGoodAnswer;

var gameQuestion = document.getElementById('game-question');
var answerBox = document.getElementById('answer-box-two');
var gameScore = document.getElementById('game-score');
var bestScore = document.getElementById('best-score');

var gameBestScore = readCookie('game-two-score');

if(gameBestScore == null){
    bestScore.innerHTML = '0';
}
else{
    bestScore.innerHTML = gameBestScore;
}


initGame();
initQuestion();
setScore(nbGoodAnswer);

answerBox.addEventListener('click', function(event){
    var btnElement = event.target;
    if(btnElement.matches('button.btn-answer')){
        if(btnElement.innerHTML == randomQuestions[nbQuestionDone].answer){
            nbGoodAnswer++;
            setScore(nbGoodAnswer);
        }
        else{

        }

        nbQuestionDone++;

        if(nbQuestionDone == nbGameQuestion){
            endGame();
        }
        else{
            initQuestion();
        }
    }

    if(btnElement.matches('button.btn-new-game')){
        initGame();
        initQuestion();
        setScore(nbGoodAnswer);
    }
});

function initGame(){
    questions = qru.slice();
    randomQuestions = [];
    nbQuestionDone = 0;
    nbGoodAnswer = 0;

    for(var i = nbGameQuestion; i > 0; i--){
        var index = Math.floor(Math.random() * questions.length);
        var toAdd = questions.splice(index, 1)[0];
        randomQuestions.push(toAdd);
    }
}

function initQuestion(){
    answerBox.innerHTML = '';

    var question = randomQuestions[nbQuestionDone];
    gameQuestion.innerHTML = question.question;

    var answer = document.createElement('button');
    answer.classList.add('btn-answer');
    answer.innerHTML = question.answer;

    answerBox.append(answer);

    for(let i = 0; i < 3; i++){
        var random = Math.floor(Math.random() * 2);

        answer = document.createElement('button');
        answer.classList.add('btn-answer');
        answer.innerHTML = question.other[i];

        //Pour melanger les reponses a l'affichage
        if(random){
            answerBox.append(answer);
        }
        else{
            answerBox.insertBefore(answer, answerBox.firstChild);
        }
    }
}

function setScore(score){
    gameScore.innerHTML = score + '/' + nbGameQuestion;
}

function endGame(){
    gameQuestion.innerHTML = 'Partie finie, votre score : ' +  nbGoodAnswer + '/' + nbQuestionDone;

    if(nbGoodAnswer > gameBestScore){
        gameQuestion.innerHTML += ', vous avez battu votre meilleur score !';
        createCookie('game-two-score', nbGoodAnswer, 30);

        bestScore.innerHTML = nbGoodAnswer;
    }

    var btnNewGame = document.createElement('button');
    btnNewGame.classList.add('btn-new-game');
    btnNewGame.innerHTML = 'Rejouer';

    answerBox.innerHTML = '';
    answerBox.append(btnNewGame);
}
