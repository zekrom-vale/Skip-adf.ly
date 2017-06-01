remove();
function remove(){
	document.documentElement.appendChild(document.createElement('head'));
	var newMeta= document.createElement("meta");
	newMeta.setAttribute('http-equiv','Content-Security-Policy');
	newMeta.setAttribute('content',"script-src 'none'");
	document.head.appendChild(newMeta);
	newMeta= null;
}