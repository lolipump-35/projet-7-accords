const buttons = document.querySelectorAll('.button');
let currentButton = 0;

// Afficher uniquement le premier bouton
buttons.forEach((button, index) => {
    button.style.display = index === 0 ? 'block' : 'none';
});

// Ajouter un événement de clic à chaque bouton
buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
        // Afficher le bouton suivant s'il existe, sans cacher les autres
        if (index + 1 < buttons.length) {
            buttons[index + 1].style.display = "block";
        }
    });
});
