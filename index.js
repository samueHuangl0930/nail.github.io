const firstModalBtn = document.querySelector(".first-open");
const modal1 = document.querySelector(".modal1");


const secondModalBtn = document.querySelector(".second-open");
const modal2 = document.querySelector(".modal2");

const thirdModalBtn = document.querySelector(".third-open");
const modal3 = document.querySelector(".modal3");


const close1ModalBtn = document.querySelector(".btn-close1");
const close2ModalBtn = document.querySelector(".btn-close2");
const close3ModalBtn = document.querySelector(".btn-close3");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

// close modal function
const closeModal1 = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};
const closeModal3 = function () {
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};
// close the modal when the close button and overlay is clicked
close1ModalBtn.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal1);

close2ModalBtn.addEventListener("click", closeModal2);
overlay.addEventListener("click", closeModal2);

close3ModalBtn.addEventListener("click", closeModal3);
overlay.addEventListener("click", closeModal3);
// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal1();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal3.classList.contains("hidden")) {
    closeModal3();
  }
});
// open modal function
const openModal1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openModal2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const openModal3 = function () {
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
firstModalBtn.addEventListener("click", openModal1);
secondModalBtn.addEventListener("click", openModal2);
thirdModalBtn.addEventListener("click", openModal3);