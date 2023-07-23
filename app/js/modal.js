
	//dropdown-sort

  const sortButton = document.querySelector('.dropdown-sort__button');
  const sortList = document.querySelector('.dropdown-sort__list');
  const sortItem = sortList.querySelectorAll('.dropdown-sort__item');

  sortButton.addEventListener('click', function() {
    sortList.classList.toggle('visible');
    this.classList.toggle('active');

  });

  sortItem.forEach(function (listItem) {
    listItem.addEventListener('click', function(e) {
      e.stopPropagation();
      sortButton.innerText = this.innerText;

      sortItem.forEach(function (item) {
        item.classList.remove('active');
      });

      this.classList.add('active');
    });  
  });

  document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.dropdown-sort__button')) {
      sortButton.classList.remove('active');
      sortList.classList.remove('visible');
    };
  });

  //END dropdown-sort
  
  /*
  всплывающее меню
		1. по клику на пункты верхнего меню открывать дропдаун
		2. по клику (повторному) на эти пункты - закрывать дропдаун
		3. по клику в любое место сайта, кроме меню - закрывать дропдаун
	*/

	const menuBtns = document.querySelectorAll('.header__link');
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

//lang
  const buttonLang = document.querySelector('.language__button');
  const lang = document.querySelector('.language__list');

  buttonLang.addEventListener('click', (e) => {
    lang.classList.toggle('language__list--show');
  });

  document.addEventListener('click', (e) => {
		if (!e.target.closest('.language')) {
			lang.classList.remove('language__list--show');
      
		}
	});





 


  
