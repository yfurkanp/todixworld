var swiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    reverseDirection: true,
  },
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 100,
  coverflowEffect: {
    rotate: 0,
    stretch: 60,
    depth: 200,
    modifier: 2,
    slideShadows: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      // Sadece 3 pagination noktası oluştur
      if (index < 3) {
        return '<span class="' + className + '"></span>';
      }
      return '';
    },
  },
  on: {
    slideChange: function () {
      // Aktif slaytın index'ine göre pagination noktasını güncelle
      let totalSlides = this.slides.length - 2; // Loop modunda slayt sayısını doğru almak için
      let currentSlide = (this.realIndex % 3); // Sadece ilk 3 noktayı döngüyle ilişkilendir

      // Tüm noktaları sıfırla
      document.querySelectorAll('.swiper-pagination-bullet').forEach((bullet, index) => {
        bullet.classList.remove('swiper-pagination-bullet-active');
        if (index === currentSlide) {
          bullet.classList.add('swiper-pagination-bullet-active');
        }
      });
    },
  },
});
