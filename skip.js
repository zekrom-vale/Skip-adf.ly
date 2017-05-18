function skip{
	var element = document.querySelector('meta[property="og:url"]');
	var content = element && element.getAttribute("content");
	window.location.replace(content);
}
//<meta property="og:url" content="http://console.developers.google.com/apis">
