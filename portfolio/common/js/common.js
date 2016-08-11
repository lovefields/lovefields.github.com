$(document).ready(function(){
	$('.btn-menu').click(function(){
		$('.gnb .list').toggleClass('act');
	});

	$('.btn-about').click(function(){
		$('.info').addClass('act');
	});

	$('.info .close').click(function(){
		$('.info').removeClass('act');
	});

	var item = 0;
	$('.gnb .list li button').click(function(){
		var val = $(this).attr('data-index');

		$('.content .content-item').removeClass('end').removeClass('act');
		if(item !== 0){
			$('.content .content-item[data-index="'+ item +'"]').addClass('end');
		}
		$('.content .content-item[data-index="'+ val +'"]').addClass('act');

		item = val;
		return;
	});

	$('.content .content-item .close').click(function(){
		item = 0;
		$('.content .content-item.act').removeClass('act').addClass('end');
		return;
	});
});
