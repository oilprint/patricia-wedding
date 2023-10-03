//header 
const wrapper=document.querySelectorAll('.wrapper');
const header=document.querySelector('.header');
const headerTop=document.querySelector('.header__top');
const isLandscapeOrientation = window.innerWidth > window.innerHeight;

window.addEventListener('scroll', ()=> {

  let scrollTop=window.scrollY;
  let headerTopLength=headerTop.offsetHeight;

  if (window.innerWidth >= 1024) {
    
    if (scrollTop > headerTopLength) {

      header.classList.add('fixed');
      headerTop.classList.add('hidden');

      wrapper.forEach(item=> {
          item.classList.add('scroll');
        })
    }

    else {
      header.classList.remove('fixed');
      headerTop.classList.remove('hidden');

      wrapper.forEach(item=> {
          item.classList.remove('scroll');
        })
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



