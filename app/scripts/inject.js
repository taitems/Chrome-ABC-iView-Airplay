// injected code
var airplayInjected = (function() {

	var timer = setInterval(function() {
		if (videoParams && videoParams.mediaPath) {
			var btn = document.getElementById("airplay-button");
			document.body.setAttribute("data-filepath",videoParams.mediaPath);
			btn.className = btn.className.replace("airplay-disabled","");
			clearInterval(timer);
		}
	},100);

}());