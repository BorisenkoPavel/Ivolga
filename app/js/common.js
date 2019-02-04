$(function() {

	$('.menu-humb').on('click', function () {
		$('.menu').slideToggle(300)
		if ( $(this).hasClass("active") ) {
			$(this).html('<i class="far fa-bars"></i>');
			$(this).removeClass('active')
		} else {
			$(this).addClass('active')
			$(this).html('<i class="far fa-times"></i>');
		}
	})

});
