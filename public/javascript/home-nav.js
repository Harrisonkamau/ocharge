$('.nav').hide();
$(document).ready(function() {
	function showNav() {
		if ($(this).scrollTop() > 60) {
			$('.nav-home').fadeOut(300);
			$('.nav').fadeIn(300);
		}
		else {
			$('.nav').fadeOut(300);
			$('.nav-home').fadeIn(300);
		}
	}
	$(window).scroll(showNav);
	showNav();
});