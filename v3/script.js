/////global scope////

// button 
const button_acceuil = document.getElementById("button_acceuil");
const button_index_1 = document.getElementById("button_index_1");
const button_index_2 = document.getElementById("button_index_2");

// section 
const section_acceuil = document.getElementById("section_acceuil");
const section_index = document.getElementById("section_index");
const section_sept_accord = document.getElementById("section_sept_accord")


// function declaration
function hide (HTMLobject) {    
    HTMLobject.style.display = "none";
}
function show (HTMLobject) {
    HTMLobject.style.display = "grid";
}

// function call
button_acceuil.addEventListener("click",function (){
    hide(section_acceuil);
    show(section_index);
});

button_index_1.addEventListener("click",function () {
    hide(section_index)
    show(section_sept_accord)
});

button_index_2.addEventListener("click",function () {
    hide(section_index)
    show(section_notion)
});

