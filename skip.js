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
	document.getElementsByTagName('title')[0].innerHTML= 'closing in 14s'
	setTimeout(function(){document.getElementById("skip_ad_button").click();},13500);
	setTimeout(function(){window.location.replace('', '_self');},13700);
	setTimeout(function(){window.close();},14000);
	console.log('closed');
	
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
	window.open('http://babblecase.com/1qVl', 'Adfor_skip_adf.ly', 'width=400,height=200,top=2000,left=3000', true);
	//Need to hide from history
}