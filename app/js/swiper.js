
            //swiper

        const slider = document.querySelector('.slider__main');
        const sliderNav = document.querySelector('.slider__nav');

        let mySwiperNav = new Swiper(sliderNav, {
            slidesPerView: 4,
            spaceBetween: 21,
            loopedSledes: 4,
            freeMode: true,
            loop: true,
            direction: 'vertical'
        });

        let mySwiper = new Swiper(slider, {
          slidesPerView: 2,
          spaceBetween: 20,
          loopedSledes: 4,
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },

          scrollbar: {
              el: '.swiper-scrollbar',
            },

          thumbs: {
            swiper: mySwiperNav, 
          },

          breakpoints: {
            769: {
              slidesPerView: 1,
              spaceBetween: 0,
            }
          }

        });

        //swiper review

        const sliderReview = document.querySelector('.review__swiper');

        let mySwiperReview = new Swiper(sliderReview, {
            slidesPerView: 3,
            spaceBetween: 50,
            loop: true,

            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },

            scrollbar: {
              el: '.swiper-scrollbar',
            },

            breakpoints: {
              // when window width is >= 320px
              320: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              // when window width is >= 480px
              576: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              // when window width is >= 640px
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }
    
    });