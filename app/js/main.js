$(function () {

  $('.header__burger').on('click', function(){
  $('.header__burger').toggleClass('active');
  $('.header__content').toggleClass('active');

});


  const swiper = new Swiper('.swiper', {
    
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
    },
    loop: true,

  });

  // var mixer = mixitup('.works__content');

  $(function () {
    if (window.location.pathname === '/works.html') {
      var mixer = mixitup('.works__content');
    }
  });


});

  