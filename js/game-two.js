var nbGameReply = 2;
var reply = qru.slice();
var randomReply = [];

var nbQuestionDone = 0;
var nbGoodAnswer = 0;

var gameQuestion = document.getElementById('game-question');
var answerBox = document.getElementById('answer-box');
var gameScore = document.getElementById('game-score');

for(var i = nbGameReply; i > 0; i--){
    var index = Math.floor(Math.random() * reply.length);
    var toAdd = reply.splice(index, 1)[0];
    randomReply.push(toAdd);
}

initQuestion();
setScore();

answerBox.addEventListener('click', function(event){
    var btnElement = event.target;
    if(btnElement.matches('button.btn-answer')){
        if(btnElement.innerHTML == randomReply[nbQuestionDone].answer){
            nbGoodAnswer++;
            setScore();
        }
        else{
            
        }

        nbQuestionDone++;

        if(nbQuestionDone == nbGameReply){
            endGame();
        }
        else{
            initQuestion();
        }
    }
});

function initQuestion(){
    answerBox.innerHTML = '';
    var question = randomReply[nbQuestionDone];
    gameQuestion.innerHTML = question.question;

    var answer = document.createElement('button');
    answer.classList.add('btn-answer');
    answer.innerHTML = question.answer;

    answerBox.append(answer);

    for(let i = 0; i < 3; i++){
        answer = document.createElement('button');
        answer.classList.add('btn-answer');
        answer.innerHTML = question.other[i];

        answerBox.append(answer);
    }
}

function setScore(){
    gameScore.innerHTML = nbGoodAnswer;
}

function endGame(){
    gameQuestion.innerHTML = 'Partie finie, votre score : ' +  nbGoodAnswer + '/' + nbQuestionDone;
    answerBox.innerHTML = '';
}
