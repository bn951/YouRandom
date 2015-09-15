define(['jquery', 'video', 'vidinfo', 'category'], function($, video, vidinfo, category) {
	function random(obj) {
		return Math.floor(Math.random() * (obj.items.length + 1));
	}

	var ID = category.getID();

	$.get("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=us&videoCategoryId=" + ID + "&maxResults=50&fields=items(contentDetails%2Cid%2Csnippet)&key=AIzaSyAG6QJDbA_oM94AIB618d4cQcjikQlWBQY", function(response) {
		var i = random(response);
		var videoID = response.items[i].id;
		var videoDesc = response.items[i].snippet.description;
		var videoTitle = response.items[i].snippet.title;
		var channelTitle = response.items[i].snippet.channelTitle;
		var channelID = response.items[i].snippet.channelId;
		video.setSrc(videoID);
		video.setTitle(videoTitle);
		vidinfo.setDesc(videoDesc);
		vidinfo.setChannel(channelTitle, channelID);

		console.log(response);
	});
});