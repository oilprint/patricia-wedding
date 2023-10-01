console.log('modal');
 
  // modals
    const modalButtons = document.querySelectorAll('[data-modal-button]');
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]');
    const allModals = document.querySelectorAll ('[data-modal]');
    const bodyLock = document.querySelector('body'); 

    console.log(modalButtons);
    console.log(modalCloseButtons);
    // // Кнопки открытия модалки
    modalButtons.forEach(function (item) {
      item.addEventListener('click', function () {
        console.log("clickkkk");

        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId);

        console.log(modal);
        modal.classList.toggle('active');
        bodyLock.classList.add('lock');

        //     // Делаем так, чтобы внутри модалки коик не передавался выше родителю: находим внутри открываемой модалки блок modal-inner и запрещаем ему передавать клики наверх (его родителю)

            modal.querySelector('.modal-inner').addEventListener('click', function (e) {
              e.stopPropagation();
            });
      });
    });

      // // Кнопки закрытия модалки
    modalCloseButtons.forEach(function (item) {
      item.addEventListener('click', function () {
    
        const modal = this.closest('[data-modal]');
        console.log(modal);
  
        modal.classList.remove('active');
        bodyLock.classList.remove('lock');
      });
    });

// // Закрытие по клику по всему экрану
    allModals.forEach(function (item) {
      item.addEventListener('click', function () {
        this.classList.remove('active');
        bodyLock.classList.remove('lock');
      });
    });




 


  
