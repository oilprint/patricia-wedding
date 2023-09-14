console.log('modal');
  // modal

    const button = document.querySelector('[data-modal-button]');
    const modal = document.querySelector('[data-modal]');
    const buttonClose = document.querySelectorAll('[data-modal-close]');
    

    button.addEventListener('click', function () {
      modal.classList.toggle('modal--active')
      bodyLock.classList.add('lock')
    });

    buttonClose.forEach(function (item) {
      item.addEventListener('click', function () {
      
        modal.classList.remove('modal--active');
        bodyLock.classList.remove('lock')
      })
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.usernav')) {
        modal.classList.remove('modal--active');
        bodyLock.classList.remove('lock')
        
      }
    });


  ///filter

   $(function () {
      if (window.location.pathname === '/catalog.html') {


        const openFilter = document.querySelector('.catalog__filter-btn');
        const closeFilter = document.querySelector('.filter__close-btn');
        const menuFilter = document.querySelector('.catalog__filter');
        const applyBtn = document.querySelector('.filter__button');

        openFilter.addEventListener('click', function () {
          menuFilter.classList.add('active');
        });

        closeFilter.addEventListener('click', function () {
          menuFilter.classList.remove('active');
        });

        applyBtn.addEventListener('click', function () {
          menuFilter.classList.remove('active');
        });
    
      }
    });

    ///end filter


      
 





 


  
