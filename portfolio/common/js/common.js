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
});
