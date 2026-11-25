// Sélection des éléments pour l'équipe Silent Vipers
const boutonSilentVipers = document.querySelector('#bouton-silent-vipers');
const detailsSilentVipers = document.querySelector('#details-silent-vipers');

// Ajout de l'écouteur d'événement pour l'équipe Silent Vipers
boutonSilentVipers.addEventListener('click', function () {
    detailsSilentVipers.classList.toggle('cachee');
});
