$(document).ready( function() {
	/* ========================== */
	/* ======= Index Page ======= */
	/* ========================== */		
	
	// Pictures on the sub-pages
	$('.click_trigger.image').on('click', function(selector) {
		
		var source1 = $(this).find('.img1').attr('src');
		var source2 = $(this).find('.img2').attr('src');
		var source3 = $(this).find('.img3').attr('src');
		
		var sources = [source1, source2, source3];
		var i = 0;
		
		var image = $('#imgLarge img');
		
		$('#imgLarge img').attr('src', source1);
		$('#imgLarge').addClass('visible');
		$('#imgLarge').removeClass('hidden');
		$('.next').show();
		
		$('#imgLarge').fadeIn(300);
		
		
		function nextItem() {
			i = i + 1;
			i = i % sources.length;
			return sources[i];
		}
		
		
		//---------------------------------------------		
		$('.next').on('click', function() {			
			image.attr('src', nextItem() );		
		});		
		
		
		
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
	
	
	$('.click_trigger.video').on('click', function() { 
	
		$('.videoOpened').fadeIn(300);
		$('.videoOpened').addClass('visible');
		$('.videoOpened').removeClass('hidden');
		
		window.open('https://www.youtube.com/watch?v=CEpgqnER5PU','_blank').focus();
	
	
		$('.videoOpened .exit').on('click', function() {
			$('.videoOpened').removeClass('visible');
			$('.videoOpened').addClass('hidden');
			$('.videoOpened').fadeOut(300);	
		});
	});
})