var swiper = new Swiper('#swipe1', {
    spaceBetween: 30,
    centeredSlides: true,
    effect : 'fade',
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });