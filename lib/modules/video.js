define(['jquery'], function() {
	var $iframe = $('iframe');
	var $title = $('#vidTitle');
	var embedUrl = "https://www.youtube.com/embed/"
	
	function setSrc(src) {
		$iframe.attr('src', embedUrl + src + '?autoplay=1');
	}

	function setTitle(title) {
		$title.html(title);
	}

	return {
		setSrc: setSrc,
		setTitle: setTitle
	};
});