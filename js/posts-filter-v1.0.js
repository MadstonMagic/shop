$(document).ready(function(){
	//-------------------
	//Show all Categories
	//-------------------
	$('.cat_all').on('click',function() {
		
		$('.menuList_item').css("color", "var(--blue)");
		$('.cat_all').css("color", "var(--white)");
		$('.single-post.all').css("display","block");
	});
	
	//-------------------
	//Show Firearms Only
	//-------------------
	$('.cat_firearms').on('click',function() {
		
		$('.menuList_item').css("color", "var(--blue)");
		$('.cat_firearms').css("color", "var(--white)");
		$('.single-post.all').css("display","none");
		$('.single-post.firearms').css("display","block");
	});
	
	//-------------------
	//Show Weaponry Only
	//-------------------
	$('.cat_weaponry').on('click',function() {
		
		$('.menuList_item').css("color", "var(--blue)");
		$('.cat_weaponry').css("color", "var(--white)");
		$('.single-post.all').css("display","none");
		$('.single-post.weaponry').css("display","block");
	});
	
	//-------------------
	//Show Creatures Only
	//-------------------
	$('.cat_creatures').on('click',function() {
		
		$('.menuList_item').css("color", "var(--blue)");
		$('.cat_creatures').css("color", "var(--white)");
		$('.single-post.all').css("display","none");
		$('.single-post.creatures').css("display","block");
	});
	
	//-------------------
	//Show Misc Only
	//-------------------
	$('.cat_misc').on('click',function() {
		
		$('.menuList_item').css("color", "var(--blue)");
		$('.cat_misc').css("color", "var(--white)");
		$('.single-post.all').css("display","none");
		$('.single-post.creatures').css("display","block");
	});
});