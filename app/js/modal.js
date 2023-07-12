$(function () {

 
 
      const button = document.querySelector('[data-modal-button]');
      const modal = document.querySelector('[data-modal]');
      const buttonClose = document.querySelector('[data-modal-close]');


    button.addEventListener('click', function () {
      modal.classList.remove('hidden');
    });


    buttonClose.addEventListener('click', function () {
      modal.classList.add('hidden');
    });

    modal.addEventListener('click', function ( ) {
      modal.classList.add('hidden');
    });


    modal.querySelector('.modal').addEventListener('click', function (e) {
      e.stopPropagation();
    });
  
 
});