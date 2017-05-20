if(window.location.href!=='http://babblecase.com/1qVl'){
	document.getElementsByTagName("html").innerHTML= "";
	var element= document.querySelector('meta[property="og:url"]');
	var content= element && element.getAttribute("content");
	if (typeof content !== "string"){
		console.log("Error! "+ content);
	}
	else{
		if(content.includes("http://"|| "https://"|| "file:///"|| "file://")){
			kill();
			window.location.replace(content);
			console.log("URL= "+content);
			ad();
		}
		else{
			console.log("Error! "+ content);
			var domain= content.split("://");
			console.log("domain: "+ domain[1]);
		}
	}
}
else{
	//setTimeout(function(){document.getElementById("skip_ad_button").click();},13500);
	setTimeout(function(){document.close();},13500);
}

function kill(){
	document.onbeforeunload= null;
	document.beforeunload= null;
	document.onunload= null;
	//Warning! this may remove other scripts
	disableJavaScript();
	console.log('kill.log');
}
function disableJavaScript(){
    	var newMetaNode= document.createElement("meta");
    	newMetaNode.setAttribute('http-equiv','Content-Security-Policy'); 
    	newMetaNode.setAttribute('content',"script-src 'none'");
    	var headElem= document.getElementsByTagName('head')[0];
    	headElem.appendChild(newMetaNode);
	window.stop();
}
function ad(){
	adwin= window.open('http://babblecase.com/1qVl', '', 'width=100,height=100,top=2000,left=3000');
	setTimeout(function(){document.close();},13500);
}