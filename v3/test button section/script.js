// Récupérer toutes les sections et les boutons
const sections = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('.btn');

// Fonction pour afficher la section suivante et cacher l'actuelle
function showNextSection(index) {
  // Cacher la section actuelle
  sections[index].style.display = 'none';

  // Afficher la section suivante, si elle existe
  if (index + 1 < sections.length) {
    sections[index + 1].style.display = 'block';
  }
}

// Ajouter un écouteur d'événements à chaque bouton
buttons.forEach((button, index) => {
  // Ajouter un console.log pour afficher le bouton et son index
  console.log(`Bouton ${index + 1}: `, button);

  button.addEventListener('click', () => {
    showNextSection(index); // Passer à la section suivante
  });
});

// Cacher toutes les sections sauf la première au début
sections.forEach((section, index) => {
  if (index !== 0) {
    section.style.display = 'none'; // Cacher toutes sauf la première
  } else {
    section.style.display = 'block'; // Afficher la première section
  }
});
