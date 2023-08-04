

  /*
  всплывающее меню
		1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун
	*/

	const menuBtns = document.querySelectorAll('#dropmenu');
	const drops = document.querySelectorAll('.dropdown-menu');

	menuBtns.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.header__item').querySelector('.dropdown-menu');

    
			menuBtns.forEach(el => {
				if (el !== currentBtn) {
					el.classList.remove('header__link--active');
				}
			});
        

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('dropdown-menu--active');
				}
			});

      drop.classList.toggle('dropdown-menu--active');
      currentBtn.classList.toggle('header__link--active');
		});
	});

  document.addEventListener('click', (e) => {
		if (!e.target.closest('.header__list')) {
			menuBtns.forEach(el => {
				el.classList.remove('header__link--active');
			});

			drops.forEach(el => {
				el.classList.remove('dropdown-menu--active');
			});
		}
	});


  // modal

  const button = document.querySelector('[data-modal-button]');
  const modal = document.querySelector('[data-modal]');
  const buttonClose = document.querySelectorAll('[data-modal-close]');

  button.addEventListener('click', function () {
    modal.classList.toggle('modal--active');
  });

  buttonClose.forEach(function (item) {
    item.addEventListener('click', function () {
    
      modal.classList.remove('modal--active');
    })
  });

  document.addEventListener('click', (e) => {
		if (!e.target.closest('.usernav')) {
			modal.classList.remove('modal--active');
      
		}
	});

  //modal sold

   $(function () {
    if (window.location.pathname === '/product-one.html') {

      const btnSoldOpen = document.querySelector('[data-sold-open]');
      const modalSold = document.querySelector('[data-sold]');
      const btnSoldClose = document.querySelectorAll('[data-sold-close]');
      const bodyLock = document.querySelector('body'); 

      
     
      btnSoldOpen.addEventListener('click', function () {
        modalSold.classList.remove('hidden');
         bodyLock.classList.add('lock');
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
  


//lang
  const langButton = document.querySelector('.language__button');
  const langList = document.querySelector('.language__list');
  const langItem = langList.querySelectorAll('.language__link');

  langButton.addEventListener('click', function() {
    langList.classList.toggle('language__list--show');
    this.classList.toggle('active');
  });

  langItem.forEach(function (listItem) {
    listItem.addEventListener('click', function(e) {
      langButton.innerText = this.innerText;

      langButton.classList.remove('active');
      this.classList.add('active');
    });  
  });

  document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.language__button')) {
      langList.classList.remove('language__list--show');
      // langItem.classList.remove('active');
    };
  });




 


  
