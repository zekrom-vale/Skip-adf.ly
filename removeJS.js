var head= document.createElement('head');
document.getElementsByTagName('html')[0].appendChild(head);
	var newMeta= document.createElement("meta");
	newMeta.setAttribute('http-equiv','Content-Security-Policy');
	newMeta.setAttribute('content',"script-src 'none'");
	var headElem= document.getElementsByTagName('head')[0];
	headElem.appendChild(newMeta);
	headElem= newMeta= null;