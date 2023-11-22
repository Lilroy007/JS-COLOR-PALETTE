// Conditions
let chiffre = 10;
let chiffre2 = 15;
console.log(chiffre, chiffre2);

if (chiffre > chiffre2) {

    console.log(chiffre + ' est plus grand que ' + chiffre2);

}   else if (chiffre < chiffre2) {

    console.log(chiffre + ' est plus petit que ' + chiffre2);

} else {

    console.log(chiffre + ' est égal à ' + chiffre2);

}

// Boucles
for (let i = 0; i < 10; i++) { // Je déclare une variable i qui vaut 0, tant que i est inférieur à 10, j'incrémente i de 1
    // i++ est équivalent à i = i + 1 ou i += 1. (i++ UTILISABLE SEULEMENT POUR INCREMENTER DE 1)
    // Pour incrémenter de 2, on doit utiliser i += 2

    console.log(i); // Affiche les chiffres de 0 à 9

} 

// Sliders
let rouge = document.getElementById('rouge'); // Je récupère l'élément HTML qui a l'id rouge
let txtRouge = document.getElementById('txtRouge'); // Je récupère l'élément HTML qui a l'id txtRouge

let vert = document.getElementById('vert');
let txtVert = document.getElementById('txtVert');

let bleu = document.getElementById('bleu');
let txtBleu = document.getElementById('txtBleu');

let couleur = document.getElementById('couleur');


rouge.addEventListener('input', function() { // J'ajoute un écouteur d'évènement sur le slider rouge
    txtRouge.value = rouge.value; // A chaque fois que je bouge le slider, je récupère sa valeur et je l'applique au champ texte
    couleur.style.backgroundColor = 'rgb(' + rouge.value + ',' + vert.value + ',' + bleu.value + ')';
});

vert.addEventListener('input', function() { 
    txtVert.value = vert.value;
    couleur.style.backgroundColor = 'rgb(' + rouge.value + ',' + vert.value + ',' + bleu.value + ')';
});

bleu.addEventListener('input', function() { 
    txtBleu.value = bleu.value;
    couleur.style.backgroundColor = 'rgb(' + rouge.value + ',' + vert.value + ',' + bleu.value + ')';
});

// Fonctions
function changeCouleur(monSlider, monChampTexte) { // Je déclare une fonction changeCouleur
    monChampTexte.value = monSlider.value; // Je récupère la valeur du slider et je l'applique au champ texte
    couleur.style.backgroundColor = 'rgb(' + rouge.value + ',' + vert.value + ',' + bleu.value + ')';
}