const accordion = document.querySelectorAll('.footer__content');
const content = document.querySelectorAll('.footer__list');
const controlBtn = document.querySelectorAll('.footer__title');



  controlBtn.forEach((header, index) => {
    header.addEventListener('click', () => {
      
      if (header.classList.contains('active')) {
        header.classList.remove('active');
        content[index].classList.add('hidden');
      } else {
        controlBtn.forEach((item, i) => {
          item.classList.remove('active');
          content[i].classList.add('hidden');

        });
        header.classList.add('active');
        content[index].classList.remove('hidden');
      }
    })
  });



      

      // currentContent.classList.add('hidden');



      

    
      // currentContent.classList.remove('hidden');

      // content.style.maxHeight = content.scrollHeight + 'px';

      // if (currentContent.classList.contains('open')) {
      //   control.setAttribute('aria-expanded', true);
      //   content.setAttribute('aria-hidden', false);
      // } else {
      //   control.setAttribute('aria-expanded', false);
      //   content.setAttribute('aria-hidden', true);
      //   content.style.maxHeight = null;
      // }
      // })




// accordion.forEach(el => {
//   el.addEventListener('click', (e) => {
//     const self = e.currentTarget;
//     const control = self.querySelector('.footer__title');
//     const content = self.querySelector('.footer__list');


//     accordion.forEach(item => {
//       item.classList.add('hidden');
//     });

//     contents.forEach(item => {
//       item.style.maxHeight = null;
//     });

//     self.classList.remove('hidden');

//     content.style.maxHeight = content.scrollHeight + 'px';

//     if (self.classList.contains('open')) {
//       control.setAttribute('aria-expanded', true);
//       content.setAttribute('aria-hidden', false);
//     } else {
//       control.setAttribute('aria-expanded', false);
//       content.setAttribute('aria-hidden', true);
//       content.style.maxHeight = null;
//     }
//   })
// })
