$(document).ready( function() {
	
	/* =========================== */
	/*= Disable Accidental CTRL+A =*/
	/* =========================== */	
	document.body.addEventListener('keydown', event => {
		if (event.ctrlKey && 'asp'.indexOf(event.key) !== -1) {
			event.preventDefault();
		}
	});
	//-----------------------------------------------------------------------------------
		
	
	/* ======================== */
	/* ======= Subpages ======= */
	/* ======================== */		
	
	// Pictures on the sub-pages
	$('.content-img').on('click', function() {
		var source = $(this).attr('src');
		$('.next').hide();
		
		$('#imgLarge img').attr('src', source);
		$('#imgLarge').addClass('visible');
		$('#imgLarge').removeClass('hidden');
		
		$('#imgLarge').fadeIn(300);
		
		
		$('#imgLarge .background').on('click', function (){
			closeImg();			
		});
		
		$('#imgLarge .exit').on('click', function() {
			closeImg();
		});
		
		function closeImg() {
			$('#imgLarge').removeClass('visible');
			$('#imgLarge').addClass('hidden');
			$('#imgLarge').fadeOut(300);			
		}
	});	
	//-----------------------------------------------------------------------------------
	
	
	/* ========================= */
	/* ===== To Top Button ===== */
	/* ========================= */	
	$('.toTopWrapper').css("display","none");
	$('.toTopWrapper i').on('click', function() {
		window.scrollTo(0,0);	
	});
	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		
		if (y > 800) {
			$('.toTopWrapper').fadeIn(200);
		} else {
			$('.toTopWrapper').fadeOut(200);
		}
	});
	//-----------------------------------------------------------------------------------
	
	
	/* ======================= */
	/* ===== Sticky Menu ===== */
	/* ======================= */	
	$(document).scroll(function() {
		var y = $(this).scrollTop();
		
		if (y > 400) {
			$('.stickyMenuWrapper').addClass("visible");
		} else if(y < 400) {
			$('.stickyMenuWrapper').removeClass("visible");
		}
	});	
	//-----------------------------------------------------------------------------------
	
	
	
	/* ==================== */
	/* ===== Contents ===== */
	/* ==================== */
	$('.contents-click').on('click', function() {
		$(this).find('ul').toggleClass('visibleContents');
	});
	$('.version-click').on('click', function() {
		$(this).find('ul').toggleClass('visibleCompatibilities');
	});
	
	
	
	
	
	$(function () {
		count = 0;
		textArray = [
			'3D Game Artist',
			'Tip: Click on the images to make them larger',
			'Originally a minecraft 3D Modeler',
			'Fulltime PC user',
			'Addicted to looking at pictures of cool stuff I can\'t afford',
			'Buy me a coffee perhaps?',
			'3D Game assets!',
			'Time for some gaming',
			'Imagine using my work, wouldn\'t that be great?'
		];
		
		setInterval(function () {
			count++;
			$(".header .slider_text").fadeOut(300, function () {
				$(this).html(textArray[count % textArray.length]).fadeIn(300);
			});
		}, 4000);
	});	
	//-----------------------------------------------------------------------------------
	
	
	
	/* ========================== */
	/* ===== Hamburger Menu ===== */
	/* ========================== */
	if ($(window).width() < 1440) {
		$('.mobile-menu-button .button').on('click', function() {
			$('.menuWrapper .menu .menuList').addClass('mobileMenuVisible');
			$('.mobile_menu_overlay').fadeIn(300);
			/*$('.mobileMenuVisible').css({
				'width': '50%',
				'right': 0,
				'transition': 'width 1s ease-in-out, right 1s ease-in-out'
			)};*/
		});
		
		// Close menu
		$('.menuWrapper .menu .close, .menuWrapper .menu li, .menuWrapper .menu li a').click(function() {
			$('.mobileMenuVisible').removeClass('mobileMenuVisible');
			$('.mobile_menu_overlay').fadeOut(300);
		});
	}
	//------------------------------------------------------------------------------------
	
	
	/* ========================== */
	/* ====== Header Image ====== */
	/* ========================== */
	$(function() {
	
	var headers = [
		"images/headers/header_1.png",
		"images/headers/header_2.png",
		"images/headers/header_3.png"
	];

     var headerImage = Math.floor((Math.random() * 3));

      $(".headerBanner").attr("src",headers[headerImage]);
	});
})
















