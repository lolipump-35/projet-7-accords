// function show(index){
//   sections[index].style.display = "none";
//   if(index+1>sections.length){
//     sections[index+1].style.display = "block";
//   }
// }

// function textIndex (index){
//   console.log("index actuel", index);
//   index++;
//   console.log("nouvelle index",index);
// }

// textIndex(0);

// let index = 0;

// function textIndex() {
//   console.log("index actuel", index);
//   index++;
//   console.log("nouvelle index", index);
// }

// textIndex();

const sections = document.querySelectorAll(".allSections");
console.log(sections);
const buttons = document.querySelectorAll(".allButtons");
console.log(buttons);
const pageAcceuil = document.getElementById("pageAcceuil")
const buttonAcceuil = document.getElementById("buttonAcceuil")

function showNextSection(index) {
  if (index + 1 < sections.length) {
    sections[index].style.display = "none";
    sections[index + 1].style.display = "block";
  }
}

function showFirstSection() {
  sections.forEach((section) => {
    if (section !== sections[0]) {
      section.style.display = "none";
    }else{
      section.style.display = "block";
    }
  });
}

sections.forEach(section => {
  section.style.display = "none";
});

buttons.forEach((button, index) => {
  button.addEventListener("click", function () {
    showNextSection(index);
  });
});

buttonAcceuil.addEventListener("click", function(){
  pageAcceuil.style.display = "none";
  showFirstSection()
});




