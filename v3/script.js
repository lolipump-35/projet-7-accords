/////global scope////

// button
const button_acceuil = document.getElementById("button_acceuil");
const button_index_1 = document.getElementById("button_index_1");

const button_logo = document.getElementById("button_logo");
const button_accord_navbar = document.getElementById("accord_navbar");
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
console.log("allsections:", all_sections);
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

const button_question_next = document.querySelectorAll(".button_question_next");
console.log("Tous les boutons (buttons_question) :", button_question_next);

const button_question_true = document.querySelectorAll(".button_question_true");
console.log("Tous les boutons (buttons_question) :", button_question_true);

const button_question_false = document.querySelectorAll(
  ".button_question_false"
);

const explications = document.querySelectorAll(".explication");

const goodAnswers = document.querySelectorAll(".container-goodAnswer");

const scoreBar = document.querySelector(".scoreBar");
console.log("scoreBar", scoreBar);

const button_index_2 = document.getElementById("button_index_2");
const button_theorie_navbar = document.getElementById("theorie_navbar");

function showNextSection(index) {
  if (index + 1 < all_notions.length) {
    all_notions[index].style.display = "none";
    console.log(`notions cacher ${index}`);
    console.log(all_notions[index]);
    all_notions[index + 1].style.display = "grid";
    console.log(`notions afficher ${index + 1}`);
    console.log(all_notions[index + 1]);
  }
  explications.forEach((explication) => {
    explication.style.display = "grid";
  });
  goodAnswers.forEach((goodAnswer) => {
    goodAnswer.style.display = "none";
  });
}

function resetColor(){
  button_question_false.forEach(button => {
    button.style.backgroundColor = "";
  });
  button_question_true.forEach(button => {
    button.style.backgroundColor = "";
  });
  cases.forEach(element => {
    element.style.backgroundColor = "";
  });
  explications.forEach((explication) => {
    explication.style.display = "grid";
  });
  goodAnswers.forEach((goodAnswer) => {
    goodAnswer.style.display = "none";
  });
  
}

// showgoodanswer
button_question_true.forEach((button, index) => {
  button.addEventListener("click", function () {
    button.style.backgroundColor = "green";

    if (button.style.backgroundColor === "green") {
      cases[index].style.backgroundColor = "green";
    }

    explications.forEach((explication) => {
      explication.style.display = "none";
    });
    goodAnswers.forEach((goodAnswer) => {
      goodAnswer.style.display = "grid";
    });
  });
});

button_question_next.forEach((button, index) => {
  button.addEventListener("click", function () {
    console.log("button click", button);
    showNextSection(index);
  });
});

button_question_false.forEach((button) => {
  button.addEventListener("click", function () {
    button.style.backgroundColor = "red";
  });
});

button_index_2.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === all_notions[0]) {
      section.style.display = "grid";
    } else if (section === navbar_section) {
      section.style.display = "grid";
    } else {
      section.style.display = "none";
    }
  });
  show(scoreBar);
  resetColor();

});

button_theorie_navbar.addEventListener("click", function () {
  all_sections.forEach((section) => {
    if (section === all_notions[0]) {
      section.style.display = "grid";
    } else if (section === navbar_section) {
      section.style.display = "grid";
    } else {
      section.style.display = "none";
    }
  });
  show(scoreBar);
  resetColor();

});

const cases = document.querySelectorAll(".case");
console.log("nbr de cases", cases);


 


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
