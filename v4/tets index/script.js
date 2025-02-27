const acceuilSection = document.querySelector(".acceuil");
const acceuilButton = document.querySelector(".buttonAcceuil");
const allNotions = document.querySelectorAll(".allNotions");
console.log(allNotions);
const allButtons = document.querySelectorAll(".allButtons");
console.log(allButtons);

acceuilButton.addEventListener("click", function () {
  acceuilSection.style.display = "none";
  allNotions[0].style.display = "flex";
});

function showNextSection(index) {
  if (index + 1 < allNotions.length) {
    allNotions[index].style.display = "none";
    allNotions[index + 1].style.display = "flex";
  }
}

allButtons.forEach((button, index) => {
  button.addEventListener("click", function () {
    showNextSection(index);
  });
});
