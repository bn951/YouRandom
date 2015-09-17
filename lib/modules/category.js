define(['jquery'], function($) {
	// Toggle Menu
	$('.slideout-menu-toggle').on('click', function(event) {
		event.preventDefault();

		var slideoutMenu = $('.slideout-menu');
		var slideoutMenuWidth = $('.slideout-menu').width();

		slideoutMenu.toggleClass("open");

		if(slideoutMenu.hasClass("open")) {
			slideoutMenu.animate({
				right: "0px"
			});
		} else {
			slideoutMenu.animate({
				right: -slideoutMenuWidth
			}, 250);
		}
	});

	// Menu Functionality
	var $submit = $('#categorySubmit');
	var $categories = $('#categories');

	$submit.on('click', function() {
		ID = $categories.val();
	});


	var ID = '0';

	function getID() {
		return ID;
	}

	return {
		getID: getID
	};
});