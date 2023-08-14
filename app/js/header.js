//header 
const wrapper=document.querySelectorAll('.wrapper');
const header=document.querySelector('.header');
const headerTop=document.querySelector('.header__top');

window.addEventListener('scroll', ()=> {

  let scrollTop=window.scrollY;
  let headerTopLength=headerTop.offsetHeight;

  if (window.innerWidth >= 768) {
    
    if (scrollTop > headerTopLength) {

      header.classList.add('fixed');
      headerTop.classList.add('hidden');

      wrapper.forEach(item=> {
          item.classList.add('scroll');
        }
      );

    }

    else {
      header.classList.remove('fixed');
      headerTop.classList.remove('hidden');

      wrapper.forEach(item=> {
          item.classList.remove('scroll');
        }

      );
    }
  }

  else {
    header.classList.add('fixed');

     wrapper.forEach(item=> {
          item.classList.add('scroll');
        }
      )
  }

  
})

//burger 

const openBurger = document.querySelector('[data-open-burger]');
const closeBurger = document.querySelector ('[data-close-burger]');
const menuBurger = document.querySelector('[data-menu-burger]');
const bodyLock = document.querySelector('body'); 

openBurger.addEventListener('click', function() {
  menuBurger.classList.add('active')
  bodyLock.classList.add('lock')
})

closeBurger.addEventListener('click', function() {
  menuBurger.classList.remove('active')
  bodyLock.classList.remove('lock');
})