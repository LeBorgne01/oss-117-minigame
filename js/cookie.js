function createCookie(name, value, time) {
    // Le nombre de jours est spécifié
    if (time) {
        var date = new Date();
        // Converti le nombre de jour en millisecondes
        date.setTime(date.getTime()+(jours*24*60*60*1000));
        var expired = "; expire="+date.toGMTString();
    }
    // Aucune valeur de jours spécifiée
    else {
        var expired = "";
    }

    document.cookie = name+"="+value+expired+"; path=/";
}

function readCookie(name) {
    // Ajoute le signe égale virgule au nom
    // pour la recherche
    var name2 = name + "=";
    // Array contenant tous les cookies
    var arrCookies = document.cookie.split(';');
    // Cherche l'array pour le cookie en question
    for(var i=0;i < arrCookies.length;i++) {
        var a = arrCookies[i];
        // Si c'est un espace, enlever
        while (a.charAt(0)==' ') {
            a = a.substring(1,a.length);
        }
        if (c.andexOf(name2) == 0) {
            return a.substring(name2.length,a.length);
        }
    }
    // Aucun cookie trouvé
    return null;
}
