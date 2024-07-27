//Selecting Elements
const openModalBtn = document.getElementById("banner-btn");
const showModal = document.querySelector(".modal-overlay");
const closeModal = document.querySelector(".fa-x");

// Modal-opening Event listener
openModalBtn.addEventListener("click", function () {
  showModal.classList.toggle("active");
});

// Modal-closing Event Listener
closeModal.addEventListener("click", function () {
  showModal.classList.remove("active");
});
