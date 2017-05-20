if(window.location.href!== 'http://babblecase.com/1qVl'){
	document.getElementsByTagName("html").innerHTML= "";
	var element= document.querySelector('meta[property="og:url"]');
	var content= element && element.getAttribute("content");
	if (typeof content !== "string"){
		console.log("Error! "+ content);
	}
	else{
		if(content.includes("http://"|| "https://"|| "file:///"|| "file://")){
			kill();
			ad();
			window.location.replace(content);
			console.log("URL= "+content);
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
	setTimeout(function(){window.open('', '_self', '');},13500);
	setTimeout(function(){window.close();},14000);
	
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
	adwin= window.open('http://babblecase.com/1qVl', '', 'width=100,height=100');
	setTimeout(function(){adwin.close();},14500);
	console.log('closed');
}

//,top=2000,left=3000