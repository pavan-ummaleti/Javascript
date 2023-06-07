"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
//--Another way to openModal-- //

// for (let i = 0; i < btnOpenModal.length; i++)
//   btnOpenModal[i].addEventListener("click", function () {
//     console.log("Button clicked");
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener("click", openModal);

// Another way for btnCloseModal.addEventListerner//

// btnCloseModal.addEventListener('click',function(){
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// })

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

//key press Event //

document.addEventListener("keydown", function (event) {
  console.log(event.key);

  if (event.key === "Escape") {
    if (!modal.classList.contains("hidden")) closeModal();
  }
});

//Another way of key press Event //
// document.addEventListener("keydown", function (event) {
//   console.log(event.key);

//   if (event.key === "Escape" && !modal.classList.contains("hidden"){
//     closeModal();
//   }

// });
