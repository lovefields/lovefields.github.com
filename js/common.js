$(document).ready(function(){
	var width = $(window).width();

	if(width > 970){
		$('.category_menu .btn').click(function(){
			$('.category_menu .list').toggleClass('act');
		});
	}
});