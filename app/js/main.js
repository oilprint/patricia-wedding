 // pagination

  const prevNext = document.querySelectorAll('.pagination__btn');
  const  numbers = document.querySelectorAll('.pagination__link');

  let currentStep = 0;

  const updateBtn = () => {
    if (currentStep === 3) {
      prevNext[1].disabled = true;
    } else if (currentStep === 0) {
      prevNext[0].disabled = true;
    } else {
      prevNext[1].disabled = false;
      prevNext[0].disabled =false;
    }
  };

  numbers.forEach((number, numIndex) => {
    number.addEventListener('click', (e) => {
      e.preventDefault();
        
      currentStep = numIndex;

      document.querySelector('.pagination__link--active').classList.remove('pagination__link--active');

      number.classList.add('pagination__link--active');
      updateBtn();

    });
  });

  prevNext.forEach(button => {
    button.addEventListener('click', (e) => {
      currentStep += e.target.id === 'next' ? 1 : -1;
      numbers.forEach((number, numIndex) => {
        console.log(numIndex, currentStep);

        number.classList.toggle('pagination__link--active', numIndex === currentStep);
        updateBtn();

      });
    });
  });

    //end pagination

    
  //view
  const viewButton = document.querySelectorAll('.catalog__sort-btn');
  const lineButton = document.querySelector('#list');
  const catalogList = document.querySelector('.catalog__list');
  const catalogItem = document.querySelectorAll('.product-card');

  viewButton.forEach(function (item) {
    item.addEventListener('click', function () {

      viewButton.forEach(function (item) {
        item.classList.remove('active');
      });

       this.classList.add('active');

        catalogItem.forEach(function (item) {
        item.classList.remove('product-card--line');
      });

      catalogList.classList.remove('catalog__list--line');

    });
  });

    lineButton.addEventListener('click', function () {
      
      catalogItem.forEach(function (item) {
        item.classList.add('product-card--line');
      });

      catalogList.classList.add('catalog__list--line');
    });


    // wishlist

    const wishButton = document.querySelectorAll('.product-card__wishlist');
    
    wishButton.forEach(function (item) {
      item.addEventListener('click', function () {
       
        this.classList.toggle('active');
      });
    });



$(function () {


  //filter-slider

  var $range = $(".filter-price__slider"),
    $inputFrom = $(".filter-price__input-from"),
    $inputTo = $(".filter-price__input-to"),
    instance,
    min = 0,
    max = 2000,
    from = 0,
    to = 0;

  $range.ionRangeSlider({
	  skin: "round",
      type: "double",
      min: min,
      max: max,
      from: 200,
      to: 800,
      onStart: updateInputs,
      onChange: updateInputs
  });
  instance = $range.data("ionRangeSlider");

  function updateInputs (data) {
  
	  from = data.from;
      to = data.to;
    
      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);	
  }

  $inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
        
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
    
  });

  $inputTo.on("input", function () {
      var val = $(this).prop("value");
    
     // validate
      if (val < from) {
         val = from;
      } else if (val > max) {
          val = max;
      }
    
      instance.update({
          to: val
      });
  });

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

  //Rate Yo!

  $('.product-card__stars').rateYo({
    starWidth: "21px",
    normalFill: "#BBB9B9",
    ratedFill: "#82334E",
    readOnly: true,
    spacing: "4px",
    starSvg: '<svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 0L12.9687 6.42574L20.4861 6.56434L14.4944 10.6743L16.6717 17.1857L10.5 13.3L4.32825 17.1857L6.50556 10.6743L0.513906 6.56434L8.0313 6.42574L10.5 0Z"/></svg>',
    
  });

  // var mixer = mixitup('.works__content');

  $(function () {
    if (window.location.pathname === '/works.html') {
      var mixer = mixitup('.works__content');
    }
  });

});

  