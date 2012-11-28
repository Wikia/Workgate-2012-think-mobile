$(function(){
	var slides = $('#slides > div'),
		l = slides.length-1,
		current = 0;

	slides.eq(0).addClass('current');

	setInterval(function(){

		if(current < l) {
			slides.filter('.current').removeClass('current').next().addClass('current');
			current++;
		} else {
			slides.filter('.current').removeClass('current');
			slides.eq(0).addClass('current');
			current = 0;
		}

	}, 4000);
});