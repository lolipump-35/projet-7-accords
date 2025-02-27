// const sections = document.querySelectorAll('.chapitre');
// console.log("nbr de section:",sections.length);

// const sectionPositions = [];
// console.log('position des sections:',sectionPositions)

// sections.forEach(section => {
//     const rect = section.getBoundingClientRect(); // Récupère la position
//     sectionPositions.push({
//         id: section.id,
//         top: section.offsetTop // Position de la section par rapport au haut de la page
//     });
// });



// const button1 = document.getElementById('button1');
// const chapitre2 = document.getElementById('chapitre2');

// button1.addEventListener('click',() => {
//        chapitre2.style.display = 'grid';
// })

// const sections = document.getElementById('chapitre');
// const buttons = document.getElementById('button-container');
// let i = 1;

// buttons.forEach(button => {
//        button.addEventListener('click',() =>{
//               sections[i].style.display = "flex";
//        });
//        i++;
// });

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".chapitre"); // Toutes les sections
    const startLink = document.getElementById("startLink"); // Lien de démarrage
    const buttons = document.querySelectorAll(".next-button"); // Tous les boutons "Clic ici"

    let currentSection = 0; // Indice de la section actuelle

    // Cache toutes les sections au début
    sections.forEach(section => section.style.display = "none");

    // Lorsque le lien de départ est cliqué, on affiche la première section
    startLink.addEventListener("click", (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        sections[currentSection].style.display = "flex"; // Affiche la première section
        // Ne cache pas le bouton de démarrage
    });

    // Ajoute un event listener à chaque bouton pour afficher la section suivante
    buttons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
            event.preventDefault(); // Empêche le comportement par défaut des liens

           

            // On affiche la section suivante et on ne cache pas les précédentes
            if (sections[currentSection + 1]) {
                sections[currentSection + 1].style.display = "flex"; // Affiche la section suivante
                // Ne cache pas les sections précédentes, elles restent visibles

                // Scroll vers la section suivante
                sections[currentSection + 1].scrollIntoView({ behavior: "smooth" });

                // Mise à jour de l'indice de la section
                currentSection++;
            }
        });
    });
});
