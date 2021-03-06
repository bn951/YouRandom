require.config({
	paths: {
		"jquery": "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min",
		"video": 'lib/modules/video',
		"vidinfo": "lib/modules/vidinfo",
		"category": "lib/modules/category"
	}
});
define(['jquery'], function($) {
	require(['lib/modules/api']);

	function reload() {
		require.undef("lib/modules/api");
		require(['lib/modules/api']);
	}

	$('#next').on('click', function() {
		//window.location.reload();
		reload();
	});
});