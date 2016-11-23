window.onload = function(){
	var width = window.innerWidth,
			btn = document.querySelectorAll('.category_menu .btn');

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-63573250-1', 'auto');
	ga('send', 'pageview');

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

	window.onresize = function(e){
		width = window.innerWidth;

		return;
	}

}