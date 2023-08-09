const accordion = document.querySelectorAll('.footer__content');
const content = document.querySelectorAll('.footer__list');
const controlBtn = document.querySelectorAll('.footer__btn');



  controlBtn.forEach((header, index) => {
    header.addEventListener('click', () => {
      
      if (header.classList.contains('active')) {
        header.classList.remove('active');
        content[index].classList.add('hidden');

        header.setAttribute('aria-expanded', false);
        content[index].setAttribute('aria-hidden', true);

      } else {
        controlBtn.forEach((item, i) => {
          item.classList.remove('active');
          content[i].classList.add('hidden');

        });

        header.classList.add('active');
        content[index].classList.remove('hidden');
        content[index].style.maxHeight = content.scrollHeight + 'px';

        header.setAttribute('aria-expanded', true);
        content[index].setAttribute('aria-hidden', false);
      }
    })
  });

  
  function updateElementClasses() {
  const elements = document.querySelectorAll('.footer__list');
  
  elements.forEach(element => {
    if (window.innerWidth <= 1024) {
      if (!element.classList.contains('hidden')) {
        element.classList.add('hidden');
      }
    } else {
      element.classList.remove('footer__list');
    }
  });
}

window.onload = updateElementClasses;
window.addEventListener('resize', updateElementClasses);