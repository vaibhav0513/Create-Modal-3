'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  /*Open Button*/
  btnsOpenModal[i].addEventListener('click', openModal);

btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/*which key we press*/
document.addEventListener('keydown', function (e) {
  console.log(e);
});
