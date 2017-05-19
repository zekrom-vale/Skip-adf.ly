var element= document.querySelector('meta[property="og:url"]');
var content= element && element.getAttribute("content");
if (typeof content != "string"){
	console.log("Error! "+ content);
}
else{
	if(content.includes("http://"|| "https://"|| "file:///"|| "file://")){
		kill();
		location.assign(content);
		console.log("URL= "+content);
	}
	else{
		console.log("Error! "+ content);
		var domain= content.split("://");
		console.log("domain: "+ domain[1]);
	}
}

function kill(){
	document.onbeforeunload= null;
	document.beforeunload= null;
	document.onunload= null;
	//Warning! this may remove other scripts
	var srp = document.getElementsByTagName("script"),
	i;
	for (i= 0; i< srp.length; i++) {
		document.getElementsByTagName("script").innerHTML= "var test= null; console.log('This is working to remove scripts')";
	}
	document.getElementsByTagName("html").innerHTML= "<html></html>";
	console.log('kill.log')
}
