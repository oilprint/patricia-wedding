//header 
const wrapper=document.querySelectorAll('.wrapper');
const header=document.querySelector('.header');
const headerTop=document.querySelector('.header__top');

window.addEventListener('scroll', ()=> {

  if (window.innerWidth >= 768) {
    let scrollTop=window.scrollY;
    let headerTopLength=headerTop.offsetHeight;


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
  }
})