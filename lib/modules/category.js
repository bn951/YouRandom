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


	var ID = '17';

	function setID(id) {
		if(ID != id) {
			ID = id;
		} 
	}

	function getID() {
		return ID;
	}

	return {
		setID: setID,
		getID: getID
	};
});