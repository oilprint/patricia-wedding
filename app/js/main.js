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

  // var mixer = mixitup('.works__content');

  $(function () {
    if (window.location.pathname === '/works.html') {
      var mixer = mixitup('.works__content');
    }
  });


});

  