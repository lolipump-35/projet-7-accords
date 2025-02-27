/////global scope////

// button
const button_acceuil = document.getElementById("button_acceuil");
const button_index_1 = document.getElementById("button_index_1");
const button_index_2 = document.getElementById("button_index_2");

const button_logo = document.getElementById("button_logo");
const button_accord_navbar = document.getElementById("accord_navbar");
const button_theorie_navbar = document.getElementById("theorie_navbar");
const button_degres_navbar = document.getElementById("degres_navbar");

const button_accord_1 = document.getElementById("button_accord_1");
const button_accord_2 = document.getElementById("button_accord_2");
const button_accord_3 = document.getElementById("button_accord_3");
const button_accord_4 = document.getElementById("button_accord_4");
const button_accord_5 = document.getElementById("button_accord_5");
const button_accord_6 = document.getElementById("button_accord_6");
const button_accord_7 = document.getElementById("button_accord_7");

// section
const navbar_section = document.getElementById("navbar_section");
const all_sections = document.querySelectorAll(".allsection");
const section_acceuil = document.getElementById("section_acceuil");
const section_index = document.getElementById("section_index");
const section_sept_accord = document.getElementById("section_sept_accord");

const accord_containers = document.querySelectorAll(".accord-container");
const accord1 = document.getElementById("accord1");
const accord2 = document.getElementById("accord2");
const accord3 = document.getElementById("accord3");
const accord4 = document.getElementById("accord4");
const accord5 = document.getElementById("accord5");
const accord6 = document.getElementById("accord6");
const accord7 = document.getElementById("accord7");

//element DOM
const div_lettre_accords_degres = document.querySelectorAll(".lettre");
const div_degres_accords_degres = document.querySelectorAll(".degres");

// function declaration
function hide(HTMLobject) {
  HTMLobject.style.display = "none";
}

function show(HTMLobject) {
  HTMLobject.style.display = "grid";
}

// function call
button_acceuil.addEventListener("click", function () {
  hide(section_acceuil);
  show(section_index);
});

button_index_1.addEventListener("click", function () {
  hide(section_index);
  show(section_sept_accord);
  show(navbar_section);
});

button_index_2.addEventListener("click", function () {
  hide(section_index);
  show(section_notion1);
  show(navbar_section);
});

// function call navbar//
button_logo.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === section_acceuil) {
      show(section);
    } else {
      hide(section);
    }
  });
});

button_accord_navbar.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === section_sept_accord) {
      show(section);
    } else {
      hide(section);
      show(navbar_section);
    }
  });
});

button_index_2.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === section_notion1) {
      show(section);
      show(navbar_section);
    } else {
      hide(section);
    }
  });
});

button_theorie_navbar.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === section_notion1) {
      showNotion();
      show(navbar_section);
    } else {
      hide(section);
    }
  });
});

// function call 7accord//
button_accord_1.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === accord1) {
      show(section);
      show(navbar_section);
    } else {
      hide(section);
    }
  });
});

button_accord_2.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === accord2) {
      show(section);
      show(navbar_section);
    } else {
      hide(section);
    }
  });
});

button_accord_3.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === accord3) {
      show(section);
      show(navbar_section);
    } else {
      hide(section);
    }
  });
});

button_accord_4.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === accord4) {
      show(section);
      show(navbar_section);
    } else {
      hide(section);
    }
  });
});

button_accord_5.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === accord5) {
      show(section);
      show(navbar_section);
    } else {
      hide(section);
    }
  });
});

button_accord_6.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === accord6) {
      show(section);
      show(navbar_section);
    } else {
      hide(section);
    }
  });
});

button_accord_7.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === accord7) {
      show(section);
      show(navbar_section);
    } else {
      hide(section);
    }
  });
});

// call function lettre degres
button_degres_navbar.addEventListener("click", function () {
  div_lettre_accords_degres.forEach((element) => {
    element.style.display = element.style.display === "none" ? "grid" : "none";
  });
  div_degres_accords_degres.forEach((element) => {
    element.style.display = element.style.display === "grid" ? "none" : "grid ";
  });
});

// notion
const all_notions = document.querySelectorAll(".notion-container");
console.log("Toutes les sections (all_notions) :", all_notions);

const buttons_question = document.querySelectorAll(".button_question");
console.log("Tous les boutons (buttons_question) :", buttons_question);

let currentIndex = 0; // Variable pour suivre la section actuelle

function showNextSection() {
  console.log(`Bouton cliqué, index actuel : ${currentIndex}`);

  if (currentIndex < all_notions.length) {
    console.log(`Masquer la section ${currentIndex}`);
    all_notions[currentIndex].style.display = "none";

    if (currentIndex + 1 < all_notions.length) {
      currentIndex++; // Mettre à jour l'index
      console.log(`Afficher la section ${currentIndex}`);
      all_notions[currentIndex].style.display = "grid";
    } else {
      console.log("Plus de section suivante !");
    }
  }
}

buttons_question.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Un bouton a été cliqué !");
    showNextSection();
  });
});

function showNotion() {
  console.log("showNotion appelée");
  all_notions.forEach((section, index) => {
    if (index !== 0) {
      console.log(`Masquer section ${index}`);
      section.style.display = "none";
    } else {
      console.log(`Afficher section ${index}`);
      section.style.display = "grid";
    }
  });
}

// Récupérer toutes les sections et les boutons
// const all_notions = document.querySelectorAll(".notion-container");
// console.log("Toutes les sections (all_notions) :", all_notions);

// const buttons_question = document.querySelectorAll(".button_question");
// console.log("Tous les boutons (buttons_question) :", buttons_question);

// // Fonction pour afficher la section suivante et cacher l'actuelle
// function showNextSection(index) {
//   console.log(`Avant changement: Section ${index + 1} ->`, getComputedStyle(all_notions[index + 1]).display);

//   // Cacher la section actuelle
//   hide(all_notions[index]);

//   // Vérifier si la section suivante existe avant de l'afficher
//   if (index + 1 < all_notions.length) {
//     show(all_notions[index + 1]);
//     console.log(`Après changement: Section ${index + 1} ->`, getComputedStyle(all_notions[index + 1]).display);

//     setTimeout(() => {
//       console.log(`2 secondes après : Section ${index + 1} ->`, getComputedStyle(all_notions[index + 1]).display);
//     }, 2000);

//   }
// }

// // Ajouter un écouteur d'événements à chaque bouton
// buttons_question.forEach((button, index) => {
//   // Ajouter un console.log pour afficher le bouton et son index
//   console.log(`Bouton ${index + 1}: `, button);

//   button.addEventListener('click', () => {
//     showNextSection(index); // Passer à la section suivante
//   });
// });

// // Cacher toutes les sections au début
// all_notions.forEach((section) => {
//   hide(section);
// });

// // Afficher la première section quand un des boutons est cliqué
// function showFirstSection() {
//   if (all_notions.length > 0) {
//     show(all_notions[0]);
//   }
// }

// button_theorie_navbar.addEventListener('click', showFirstSection);
// button_index_2.addEventListener('click', showFirstSection);

// console.log(all_notions[1]);
