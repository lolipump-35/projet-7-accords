
document.getElementById("button").addEventListener('click', function() {
    document.getElementById("container").style.color = 'green';
});



let black = false;

document.getElementById("titre").addEventListener('click', function() {
    if (black) {
        document.getElementById("titre").style.backgroundColor = '';
        document.getElementById("titre").style.color = ''; // Couleur du texte revient à la couleur par défaut
        black = false;
    } else {
        document.getElementById("titre").style.backgroundColor = 'black';
        document.getElementById("titre").style.color = 'white'; // Le texte devient blanc
        black = true;
    }
});








































// Initialisation des variables
const sections = document.querySelectorAll('.idée');
let unlockedIndex = 0; // Index de la dernière section débloquée

// Fonction pour permettre de scroller jusqu'à une section spécifique
function unlockSection(index) {
    if (index < sections.length) {
        unlockedIndex = index;
        document.body.style.overflow = 'AUTO'; // Désactiver globalement le scroll

        // Gérer le scroll maximum
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            const maxScroll = sections[unlockedIndex].offsetTop;

            // Empêcher l'utilisateur de scroller au-delà de la section débloquée
            if (currentScroll > maxScroll) {
                window.scrollTo(0, maxScroll);
            }
        });
    }
}

// Gestion des boutons pour débloquer les sections
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3'); 

// Débloquer Section 2
button1.querySelector('button').addEventListener('click', () => {
    unlockSection(1);
    button1.classList.remove('visible'); // Cacher le bouton 1
    button2.classList.add('visible'); // Montrer le bouton 2
});

// Débloquer Section 3
button2.querySelector('button').addEventListener('click', () => {
    unlockSection(2);
    button2.classList.remove('visible'); // Cacher le bouton 2
    button3.classList.add('visible'); // Montrer le bouton 3
});

// Débloquer Section 4
button3.querySelector('button').addEventListener('click', () => {
    unlockSection(3);
    button3.classList.remove('visible'); // Cacher le bouton 3
});

// Débloquer uniquement la première section au départ
unlockSection(0);




















