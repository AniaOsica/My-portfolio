function actualDate() {
    date = new Date();
    year = date.getFullYear();
    month = date.getMonth() + 1;
    day = date.getDate();
    document.getElementById("current_date").innerHTML = day + "/" + month + "/" + year;
 }
actualDate();




const hamburger = document.querySelector(".btn_show_menu");
const navMenu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    
    $( "body" ).css("overflowy", "hidden");
})

document.querySelectorAll(".menu_link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  menubar.classList.remove("active");
}))



let modalBtnMakrama = document.getElementById("makrama-modal-btn")
let modalMakrama = document.querySelector(".makrama-modal")
let closeBtnMakrama = document.querySelector(".makrama-close-btn")

modalBtnMakrama.onclick = function(){
  modalMakrama.style.display = "block"
}
closeBtnMakrama.onclick = function(){
  modalMakrama.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modalMakrama){
    modalMakrama.style.display = "none"
  }
}

let modalBtnCrochet = document.getElementById("crochet-modal-btn")
let modalCrochet = document.querySelector(".crochet-modal")
let closeBtnCrochet = document.querySelector(".crochet-close-btn")

modalBtnCrochet.onclick = function(){
  modalCrochet.style.display = "block"
}
closeBtnCrochet.onclick = function(){
  modalCrochet.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modalCrochet){
    modalCrochet.style.display = "none"
  }
}

let modalBtnWinterSwimming = document.getElementById("winter-swimming-modal-btn")
let modalWinterSwimming = document.querySelector(".winter-swimming-modal")
let closeBtnWinterSwimming = document.querySelector(".winter-swimming-close-btn")

modalBtnWinterSwimming.onclick = function(){
  modalWinterSwimming.style.display = "block"
}
closeBtnWinterSwimming.onclick = function(){
  modalWinterSwimming.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modalWinterSwimming){
    modalWinterSwimming.style.display = "none"
  }
}

let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}

const buttons = document.querySelectorAll(
  '[data-carousel-button]'
);

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset =
      button.dataset.carouselButton === 'next'
        ? 1
        : -1;
    const slides = button
      .closest('[data-carousel]')
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector(
      '[data-active]'
    );
    let newIndex =
      [...slides.children].indexOf(activeSlide) +
      offset;
    if (newIndex < 0)
      newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length)
      newIndex = 0;

    slides.children[
      newIndex
    ].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});




