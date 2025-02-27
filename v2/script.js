// const sections = document.querySelectorAll('.sectionjs');
// let unlockedIndex = 0;

// function unlockedSection(index) {
//     if (index < sections.length) {
//         unlockedIndex = index;
//         document.body.style.overflow = 'auto';

//         window.addEventListener('scroll', () => {
//             const currentScroll = window.scrollY;
//             const sectionTop = sections[unlockedIndex].offsetTop;
//             const sectionBottom = sectionTop + sections[unlockedIndex].offsetHeight;
//             const nextSectionTop = (sections[unlockedIndex + 1]) ? sections[unlockedIndex + 1].offsetTop : Infinity;

//             // Empêche de scroller au-dessus de la section
//             if (currentScroll < sectionTop) {
//                 window.scrollTo(0, sectionTop);
//             }

//             // Empêche de scroller au-delà de la section actuelle
//             if (currentScroll > sectionBottom - window.innerHeight) {
//                 window.scrollTo(0, sectionBottom - window.innerHeight);
//             }

//             // Permet de scroller vers la section suivante si elle est débloquée
//             if (currentScroll >= sectionBottom - window.innerHeight && currentScroll < nextSectionTop - window.innerHeight) {
//                 if (currentScroll > sectionBottom - window.innerHeight) {
//                     window.scrollTo(0, nextSectionTop - window.innerHeight);
//                 }
//             }
//         });
//     }
// }

// const button1 = document.getElementById('button1');
// const button2 = document.getElementById('button2');
// const button3 = document.getElementById('button3');
// const button4 = document.getElementById('button4');
// const button5 = document.getElementById('button5');
// const button6 = document.getElementById('button6');
// const button7 = document.getElementById('button7');
// const button8 = document.getElementById('button8');
// const button9 = document.getElementById('button9');

// button1.querySelector('a').addEventListener('click',() =>{
//     unlockedSection(1);
//     button1.classList.remove('visible');
//     button2.classList.add('visible');
// });
// button2.querySelector('a').addEventListener('click',() =>{
//     unlockedSection(2);
//     button2.classList.remove('visible');
//     button3.classList.add('visible');
// });
// button3.querySelector('a').addEventListener('click',() =>{
//     unlockedSection(3);
//     button3.classList.remove('visible');
//     button4.classList.add('visible');
// });
// button4.querySelector('a').addEventListener('click',() =>{
//     unlockedSection(4);
//     button4.classList.remove('visible');
//     button5.classList.add('visible');
// });
// button5.querySelector('a').addEventListener('click',() =>{
//     unlockedSection(5);
//     button5.classList.remove('visible');
//     button6.classList.add('visible');
// });
// button6.querySelector('a').addEventListener('click',() =>{
//     unlockedSection(6);
//     button6.classList.remove('visible');
//     button7.classList.add('visible');
// });
// button7.querySelector('a').addEventListener('click',() =>{
//     unlockedSection(7);
//     button7.classList.remove('visible');
//     button8.classList.add('visible');
// });
// button8.querySelector('a').addEventListener('click',() =>{
//     unlockedSection(8);
//     button8.classList.remove('visible');
//     button9.classList.add('visible');
// });
// button9.querySelector('a').addEventListener('click',() =>{
//     unlockedSection(9);
//     button9.classList.remove('visible');
//     button10.classList.add('visible');
// });

// unlockedSection(0);

const sections = document.querySelectorAll('.shared-section')
console.log(sections);

const buttons = document.querySelectorAll('.button')
console.log(buttons);

sections.forEach(section => {
    
});