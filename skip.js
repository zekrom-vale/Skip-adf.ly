var element= document.querySelector('meta[property="og:url"]');
var content= element && element.getAttribute("content");
if (typeof content != "string"){
	console.log("Error! "+ content);
}
else{
	if(content.includes("http://"|| "https://"|| "file:///"|| "file://")){
		window.location.replace(content);
		console.log("URL= "+content);
		kill();
	}
	else{
		console.log("Error! "+ content);
		var domain= content.split("://");
		console.log("domain: "+ domain[1]);
	}
}

function kill(){
	window.onbeforeunload= null;
	window.beforeunload= null;
	window.onunload= null;
	xhr.abort();
	end;
	stop;
	kill;
	//How to stop the alert on unload
}