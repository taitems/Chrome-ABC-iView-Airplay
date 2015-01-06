'use strict';

var airplayPlugin = (function() {

	var btnString = '<a id="airplay-button" class="airplay airplay-disabled"><i class="fa fa-play"></i> SEND TO AIRPLAY</a>';
	var buttonSelector = '.program-actions';
	var btn;
	var filepath = false;
	var filepathTimer;

	var init = function() {

		injectScript();

		// be wary of website or API changes
		injectButton();

	};

	var injectButton = function() {

		// create a html element with the button html
		var wrapper = document.createElement('div');
		wrapper.innerHTML = btnString;
		btn = wrapper.childNodes[0];

		// inset at position one
		var actionRow = document.querySelector(buttonSelector);
		actionRow.insertBefore(btn,actionRow.childNodes[0]);

		// btn click handler
		btn.addEventListener("click", clickHandler);

	};

	var clickHandler = function() {
		
		// can't click a disabled button!
		if (btn.className.indexOf("airplay-disabled") > -1) {
			return;
		}

		// handle success
		var filepath = document.body.getAttribute("data-filepath");
		alert(filepath);
		
	};

	var injectScript = function() {
		var s = document.createElement('script');
		// TODO: add "script.js" to web_accessible_resources in manifest.json
		s.src = chrome.extension.getURL('scripts/inject.js');
		s.onload = function() {
		    this.parentNode.removeChild(this);
		};
		(document.head||document.documentElement).appendChild(s);
	};

	return {
		init: init,
		clickHandler: clickHandler
	};

}());


// ON DOM LOADED
document.addEventListener('DOMContentLoaded', function() {
	airplayPlugin.init();
}, false);