const edubtn = document.querySelector(".edu-button")
const expbtn = document.querySelector(".exp-button")
const volbtn = document.querySelector(".vol-button")
const edumenu = document.getElementById("education-menu")
const expmenu = document.getElementById("experience-menu")
const volmenu = document.getElementById("volunteer-menu")

edubtn.addEventListener("click", ()=> {
    edumenu.style.display = "block";
    expmenu.style.display = "none";
    volmenu.style.display = "none";
} );

expbtn.addEventListener("click", ()=> {
    edumenu.style.display = "none";
    expmenu.style.display = "block";
    volmenu.style.display = "none";
} );

volbtn.addEventListener("click", ()=> {
    edumenu.style.display = "none";
    expmenu.style.display = "none";
    volmenu.style.display = "block";
} );