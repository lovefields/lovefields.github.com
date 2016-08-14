$(document).ready(function(){
	var width = $(window).width();

	$('.btn-menu').click(function(e){
		e.preventDefault();
		$('.gnb .list').toggleClass('act');
	});

	$('.btn-about').click(function(e){
		e.preventDefault();
		$('.info').addClass('act');
	});

	$('.info .close').click(function(){
		$('.info').removeClass('act');
	});

	var item = 0;
	$('.gnb .list li button').click(function(){
		var val = $(this).attr('data-index');

		if(item !== val){
			if(width < 768){
				$('.gnb .list').removeClass('act');
			}


			$('.content .content-item').removeClass('end').removeClass('act');
			if(item !== 0){
				$('.content .content-item[data-index="'+ item +'"]').addClass('end');
			}
			$('.content .content-item[data-index="'+ val +'"]').addClass('act');

			item = val;
			return;
		}
	});

	$('.content .content-item .close').click(function(){
		item = 0;
		$('.content .content-item.act').removeClass('act').addClass('end');
		return;
	});

	$(window).resize(function(){
		width = $(window).width();
		return;
	});
});
