$(document).ready( function() {
	
	// Pictures on the sub-pages
	//$('.posts-collection .post-img .content-img').on('click', function() {
	$('.content-img').on('click', function() {
		var source = $(this).attr('src');
		
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
	
	
	
	/* ==================== */
	/* ===== Contents ===== */
	/* ==================== */
	$('.contents-click').on('click', function() {
		$(this).find('ul').toggleClass('visibleContents');
	});
})
















