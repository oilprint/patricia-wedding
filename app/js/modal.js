

 
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

  //modal sold

   $(function () {
    if (window.location.pathname === '/product-one.html') {

      const btnSoldOpen = document.querySelector('[data-sold-open]');
      const modalSold = document.querySelector('[data-sold]');
      const btnSoldClose = document.querySelectorAll('[data-sold-close]');
      // const bodyLock = document.querySelector('body'); 

      
     
      btnSoldOpen.addEventListener('click', function () {
        modalSold.classList.remove('hidden');
        bodyLock.classList.add('locked')
         
      });

      btnSoldClose.forEach(function (item) {
        item.addEventListener('click', function () {
          modalSold.classList.add('hidden');
          bodyLock.classList.remove('lock');
        });
      });

      modalSold.addEventListener('click', function ( ) {
        modalSold.classList.add('hidden');
        bodyLock.classList.remove('lock');
      });

      modalSold.querySelector('.modal').addEventListener('click', function (e) {
        e.stopPropagation();
      });

    }
  });
  

  ///filter

  // const filterBtn = document.querySelector('[data-filter-btn]');
  // const filterContent = document.querySelector('[data-filter-modal]');
  
  // filterBtn.addEventListener('click', function () {
  //   filterContent.classList.add('active')
  // });







 


  
