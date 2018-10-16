// initialisation des reply rdm
var nbGameReply  = 5;
var replyCopy    = reply.slice();
var rdmReply     = [];
var nbGoodAnswer = 0;
var part         = 0;
var goodAnswer   = '';

var fieldAnswer  = document.getElementById('answer');
var fieldReply   = document.getElementById('reply');
var validate     = document.getElementById('validate');
var score        = document.getElementById('score');
var sound        = document.getElementById('sound');

score.innerHTML  = 0;


// on récupère le nombre voulu de répliques aléatoirement
for(var i = nbGameReply; i > 0; i--){
    var index = Math.floor(Math.random() * replyCopy.length);
    var toAdd = replyCopy.splice(index, 1)[0];
    rdmReply.push(toAdd);
}


fieldReply.innerHTML = rdmReply[part]['onScreen'];
goodAnswer           = rdmReply[part]['answer'];



 function nextAnswer(){
     let sound = new Audio('sounds/'+ rdmReply[part]['url']);
     sound.play();

    if(replaceAccent(fieldAnswer.value) === replaceAccent(goodAnswer)){
        nbGoodAnswer ++;
        score.innerHTML = nbGoodAnswer;

    }
    part ++;

    if(part < nbGameReply){
        fieldReply.innerHTML = rdmReply[part]['onScreen'];
        goodAnswer = rdmReply[part]['answer'];
        fieldAnswer.value = '';
    }
}


validate.onclick = function(){
    nextAnswer();
}


// validation avec touche entrer
document.onkeypress=function(e){
    e=e||window.event;
    var key=e.which?e.which:event.keyCode;
    if (key==13) {
         nextAnswer();
    }
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
