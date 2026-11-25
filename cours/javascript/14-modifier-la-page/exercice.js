// Informations sur un joueur de l'équipe Silent Vipers
const pseudoJoueur = "Serpent";
const posteJoueur = "Duelliste";
const scoreSaison = 6140;

const pseudoJoueurElement = document.getElementById("nom-joueur");
const posteJoueurElement = document.getElementById("statut-joueur");

pseudoJoueurElement.textContent = pseudoJoueur;
posteJoueurElement.textContent = posteJoueur;

console.log(pseudoJoueur, posteJoueur, scoreSaison);
