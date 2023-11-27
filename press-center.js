function pressCenter() {
  var mySwiper = new Swiper('#h-press-list', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    a11y: false,
    spaceBetween: 0,
    grabCursor: true,
    allowTouchMove: true,
    navigation: {
      nextEl: '#fnt-arrow-next-slide',
      prevEl: '#fnt-arrow-prev-slide',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      480: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      767: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0,
      }
    },
  });

  const modalSwiper = new Swiper('#h-press-modal-slider', {
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    speed: 0,
    spaceBetween: 0,
    allowTouchMove: true,
    speed: 900,
    noSwiping: true,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: false,
    loop: true,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '#modal-arrow-next-slide',
      prevEl: '#modal-arrow-prev-slide',
    },
  });

  var closeButton = document.querySelectorAll('.h-press_close-button');

  closeButton.forEach(function (button) {
    button.addEventListener('click', function () {
      document.querySelectorAll('#h-press-modal-slider .swiper-slide').forEach(function (slide) {
        slide.classList.remove('swiper-slide-active', 'swiper-slide-duplicate-active');
      });
      var modalElement = document.querySelector('.h-press_modal');
      if (modalElement) {
        setTimeout(function () {
          modalElement.style.display = 'none';
        }, 500);
      }
    });
  });

  modalSwiper.on('activeIndexChange', function () {
    document.querySelectorAll('#h-press-modal-slider .swiper-slide').forEach(function (slide) {
      slide.classList.remove('swiper-slide-active', 'swiper-slide-duplicate-active');
    });

    var activeSlide = document.querySelector('#h-press-modal-slider .swiper-slide.swiper-slide-active');

    if (activeSlide) {
      activeSlide.classList.add('swiper-slide-active');
    }

    var activeDuplicateSlide = document.querySelector('#h-press-modal-slider .swiper-slide.swiper-slide-duplicate-active');

    if (activeDuplicateSlide) {
      activeDuplicateSlide.classList.add('swiper-slide-duplicate-active');
    }
  });

  $('.h-press-list-slide').click(function () {
    var index = $(this).index() + 1;
    modalSwiper.slideTo(index);
    var modalElement = document.querySelector('.h-press_modal');
    if (modalElement) {
      setTimeout(function () {
        modalElement.style.display = 'block';
      }, 500);
    }
  });

  var linkBlocks = document.querySelectorAll('.h-press_link-block');

  linkBlocks.forEach(function (linkBlock) {
    linkBlock.addEventListener('click', function () {
      var index = $(this).index() + 1;
      var modalElement = document.querySelector('.h-press_modal');
      if (modalElement) {
        
          modalElement.style.display = 'block';
       
      }

      document.querySelectorAll('#h-press-modal-slider .swiper-slide').forEach(function (slide) {
        slide.classList.remove('swiper-slide-active', 'swiper-slide-duplicate-active');
      });

      var correspondingSlide = document.querySelector('#h-press-modal-slider .swiper-slide:nth-child(' + index + ')');
      if (correspondingSlide) {
        correspondingSlide.classList.add('swiper-slide-active', 'swiper-slide-duplicate-active');
      }
    });
  });
}

pressCenter();

