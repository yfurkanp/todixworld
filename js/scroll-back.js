var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// KAYDIRMA BİTTİĞİNDE KAPANMA
let scrollTimeout;

window.addEventListener('scroll', function () {
  const button = document.getElementById('button');
  // Kaydırma başladığında butonu göster
  button.classList.add('show');

  // Mevcut timeout'u temizleyerek erken gizlenmesini önleyin
  clearTimeout(scrollTimeout);

  // Kaydırma durduktan sonra butonu gizlemek için timeout ayarlayın
  scrollTimeout = setTimeout(function () {
    button.classList.remove('show');
  }, 500); // Gecikmeyi ihtiyaçlarınıza göre ayarlayabilirsiniz (milisaniye cinsinden)
});