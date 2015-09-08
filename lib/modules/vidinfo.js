define(['jquery'], function() {
	$desc = $('#desc');
	$channel = $('#channel');

	function setDesc(desc) {
		$desc.html(desc);
	}

	function setChannel(channelName, channelID) {
		$channel.html("<a href='https://www.youtube.com/channel/" + channelID + "' target='_blank'>" + channelName + "</a>");
	}

	return {
		setDesc: setDesc,
		setChannel: setChannel
	};
});