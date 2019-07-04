document.body.style.zoom="80%"
$(function() {


	$('a.demo').on('click',function(e){
		e.preventDefault();
	});

	$('a.demo').makeItRain();

	$('a.demo-coins').on('click', function(e){
		e.preventDefault();
	})

});
