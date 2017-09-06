$(document).ready(function() {
  var feed = new Instafeed({
    get: 'user',
    userId: '1707180127',
    accessToken: '1707180127.9a2a446.d1dd01c37e6745ed9d82b94eaa8897cc',
    links     : true,          //false
    limit     : 5,             //max60
    resolution: 'low_resolution',
    template: '<li><a href="{{link}}"><img src="{{image}}" target="_blank" /></a><br />{{caption}}<br />like:{{likes}},comments:{{comments}}</li>',
  });
  feed.run();
});