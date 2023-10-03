
  const modalButtons = document.querySelectorAll('[data-modal-button]');
  const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
  const allModals = document.querySelectorAll ('[data-modal]');
  const bodyLock = document.querySelector('body'); 

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function () {

      const modalId = this.dataset.modalButton;
      const modal = document.querySelector('#' + modalId);

      modal.classList.remove('hidden');
      bodyLock.classList.add('lock')

      //     // Делаем так, чтобы внутри модалки коик не передавался выше родителю: находим внутри открываемой модалки блок modal-inner и запрещаем ему передавать клики наверх (его родителю)

      modal.querySelector('.modal').addEventListener('click', function (e) {
        e.stopPropagation();
      });
    });
  });


  modalCloseButtons.forEach(function (item) {
    item.addEventListener('click', function () {
  
      const modal = this.closest('[data-modal]');
      
      modal.classList.add('hidden');
      bodyLock.classList.remove('lock');
    });
  });


  allModals.forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.add('hidden');
      bodyLock.classList.remove('lock');
    });
  }); 


