document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.partners-swiper', {
    loop: true,                     // infinite loop
    speed: 5000,                     // smooth glide speed (adjust as needed)
    slidesPerView: 5,                // visible logos
    spaceBetween: 30,
    freeMode: true,                  // enables continuous glide
    freeModeMomentum: false,         // prevents stop at end
    autoplay: {
      delay: 0,                      // continuous sliding
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      480: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 },
    },
  });
});
