window.onload = function(){
	var width = window.innerWidth,
			btn = document.querySelectorAll('.category_menu .btn');

	if(btn.length !== 0){
		if(width > 970){
			btn[0].addEventListener('click',function(){
				document.querySelector('.category_menu .list').classList.toggle('act');
			});
		}else{
			btn[1].addEventListener('change',function(){
				var val = this.value;
				window.location.href = val;
			});
		}
	}

	window.onresize = function(){
		width = window.innerWidth;
		return;
	}
}