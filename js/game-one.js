// initialisation des repliques rdm
var nbGameReply  = 2;
var replyCopy    = reply.slice();
var rdmReply     = [];
var nbGoodAnswer = 0;
var part         = 0;
var goodAnswer   = '';

var fieldAnswer  = document.getElementById('answer');
var fieldReply   = document.getElementById('game-question');

var answerBox = document.getElementById('answer-box-one');
var validate     = document.getElementById('validate');
var score        = document.getElementById('game-score');
var sound        = document.getElementById('sound');
var questions    = document.getElementById('questions');

var bestScore = document.getElementById('best-score');

var gameBestScore = readCookie('game-one-score');

if(gameBestScore == null){
    bestScore.innerHTML = '0';
}
else{
    bestScore.innerHTML = gameBestScore;
}


initGame();
initQuestion();


 function nextAnswer(){
     validate.disabled = 'disabled';
     fieldAnswer.disabled = 'disabled';

     //On met a jour le score
     if(replaceAccent(fieldAnswer.value) === replaceAccent(goodAnswer)){
         nbGoodAnswer ++;
         score.innerHTML = nbGoodAnswer;
     }

     let sound = new Audio('sounds/'+ rdmReply[part]['url']);
     sound.play();
     sound.onended = function(){


       part ++;
       questions.innerHTML = nbGameReply - part;

       if(part < nbGameReply){
           fieldReply.innerHTML = rdmReply[part]['onScreen'];
           goodAnswer = rdmReply[part]['answer'];
           fieldAnswer.value = '';

           validate.disabled = '';
           fieldAnswer.disabled = '';
       }
       else{
           endGame();
       }
  };


}


validate.onclick = function(){
    nextAnswer();
}

answerBox.addEventListener('click', function(event){
    if(event.target.matches('button.btn-new-game')){
        initGame();
        initQuestion();
    }
});

// validation avec touche entrer
document.onkeypress=function(e){
    e=e||window.event;
    var key=e.which?e.which:event.keyCode;
    if (key==13) {
         nextAnswer();
    }
}

function initGame(){
    score.innerHTML     = 0;
    questions.innerHTML = nbGameReply;

    validate.disabled = '';
    fieldAnswer.disabled = '';

    var btnNG = answerBox.querySelector('.btn-new-game');

    if( btnNG != null)
        btnNG.remove();

    // on récupère le nombre voulu de répliques aléatoirement
    for(var i = nbGameReply; i > 0; i--){
        var index = Math.floor(Math.random() * replyCopy.length);
        var toAdd = replyCopy.splice(index, 1)[0];
        rdmReply.push(toAdd);
    }
}

function initQuestion(){
    fieldReply.innerHTML = rdmReply[part]['onScreen'];
    goodAnswer           = rdmReply[part]['answer'];
}

function endGame(){
    fieldReply.innerHTML = 'Partie finie, votre score : ' +  nbGoodAnswer + '/' + part;

    validate.disabled = 'true';
    fieldAnswer.disabled = 'true';

    if(nbGoodAnswer > gameBestScore){
        fieldReply.innerHTML += ', vous avez battu votre meilleur score !';
        createCookie('game-one-score', nbGoodAnswer, 30);

        bestScore.innerHTML = nbGoodAnswer;
    }

    var btnNewGame = document.createElement('button');
    btnNewGame.classList.add('btn-new-game');
    btnNewGame.innerHTML = 'Rejouer';

    answerBox.append(btnNewGame);
}

// utilisation des regex et lower pour comparer les chaines
function replaceAccent(string){
    var toReturn=string.toLowerCase();
    toReturn = toReturn.replace(new RegExp("\\s", 'g'),"");
    toReturn = toReturn.replace(new RegExp("[àáâãäå]", 'g'),"a");
    toReturn = toReturn.replace(new RegExp("æ", 'g'),"ae");
    toReturn = toReturn.replace(new RegExp("ç", 'g'),"c");
    toReturn = toReturn.replace(new RegExp("[èéêë]", 'g'),"e");
    toReturn = toReturn.replace(new RegExp("[ìíîï]", 'g'),"i");
    toReturn = toReturn.replace(new RegExp("ñ", 'g'),"n");
    toReturn = toReturn.replace(new RegExp("[òóôõö]", 'g'),"o");
    toReturn = toReturn.replace(new RegExp("œ", 'g'),"oe");
    toReturn = toReturn.replace(new RegExp("[ùúûü]", 'g'),"u");
    toReturn = toReturn.replace(new RegExp("[ýÿ]", 'g'),"y");
    toReturn = toReturn.replace(new RegExp("\\W", 'g'),"");
    return toReturn;
};
