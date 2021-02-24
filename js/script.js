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
		
		if (y > 200) {
			$('.stickyMenuWrapper').addClass("visible");
		} else if(y < 200) {
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
	
	
	
	
	
	$(function () {
		count = 0;
		textArray = [
			'Madston\'s Magic',
			'Tip: Click on the images to enlarge them.',
			'3D modeler of Minecraft Java models',
			'Fulltime PC user',
			'Addicted to looking at pictures of cool games I can\'t afford',
			'Professional Gaming Chair user.'
		];
		
		setInterval(function () {
			count++;
			$(".header .slider_text").fadeOut(300, function () {
				$(this).html(textArray[count % textArray.length]).fadeIn(300);
			});
		}, 4000);
	});	
})
















