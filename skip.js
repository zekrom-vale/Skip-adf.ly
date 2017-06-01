var debugCall,
startDate= new Date().toUTCString();
if(window.location.href!= 'http://babblecase.com/1qVl'){
	ad();
	setTimeout(core, 100);
}
else{
	setTimeout(sub, 400);
}
function core(){
	var element= document.querySelector('meta[property="og:url"]');
	var content= element && element.getAttribute("content");
	if(/^https?:\/\//.test(content) && typeof content== "string"){
		//callDebug(event);
		window.location.replace(content);
		content= undefined;
	}
	else{
		var domain= content.split("://");
		error();
		domain= undefined;
	}
}
function sub(){
	if(!navigator.onLline) stop();//Stop the script
	var d= 8,
	myVar= setInterval(myTimer, 1000);
	setTimeout(function(){document.getElementById('skip_ad_button').click();},9300);
	setTimeout(function(){window.location.replace('', '_self');},9375);
	var ext= setTimeout(function(){window.close();},9600);
}

/*------------Functions------------*/

function error(){
	var newElement= document.createElement('p');
	newElement.innerHTML= 'User Intervention Required, Continue Normaly.  <br/>    URL= '+ content;
	document.body.appendChild(newElement);
	window.open('https://github.com/zekrom-vale/Skip-adf.ly/issues','submitErrors', 'width=800,height=800')
	if(debugClall!= "Other") debugCall= false;
	getDebug();
	content= newElement= undefined;
}
function callDebug(event){
	if(event.keyCode==27 || event.which==27){
		debugCall= true;
		getDebug();
	}
}
function getDebug(){
	var manifest=(typeof (chrome.runtime.getManifest)== 'function')? chrome.runtime.getManifest(): null;
	/*if(typeof (chrome.runtime.getManifest)== 'function'){ 
		var manifest= chrome.runtime.getManifest();
	}
	else{
		var manifest= null;
		//var manifest.name= manifest.version manifest.permissions= null;
	}*/
	var endDate= new Date().toUTCString();
		var objLog={
			"app":{
				"name": manifest.name,
				"version": manifest.version,
				"permissions": manifest.permissions
			},
			"Date": [startDate, endDate],
			"info":{
				"content": content,
				"domain": domain,
				"location": [window.location.hostname, window.location.protocol, window.location.pathname]
			},
			"Navigator":{
				"browserName": [navigator.appName, navigator.appCodeName],
				"userAgent": navigator.userAgent,
				"platform": navigator.platform,
				"language": navigator.language
			},
			"debugCall": debugCall
		}
	objLog= JSON.stringify(objLog);
		
	var errorWin= window.open('', 'Error.log', 'width=400,height=800,left=800');
	errorWin.document.write(
	`
		<title>
			Log
		</title>
		<body>
			<h1>
				Start of log: Please Note this in the Report!
			</h1>
			<code>
				`+ objLog+ `
			</code>
			<h2>
				Please also include the folowing information
			</h2>
			<small>
				Information will only be used for debugger
			</small>
			<a href="chrome://version/#command_line" target="_blank">Command Line</a>
			<a href="chrome://extensions#extension-settings-list" target="_blank">Extensions/</a>

			<hr/>
			<h2>
				Readable Info
			<h2>
			<p>
				Extention Version= `+ manifest.version+ `
			</p>
			<p>
				Time start= `+ startDate+ `
			</p>
			<p>
				Time end= `+ endDate+ ` 
			</p>
			<p>
				var content= `+ content+ `
			</p>
			<p title="Ignnor undefined values">
				var domain= `+ domain+ `
			</p>
			<p>
				URL= `+ window.location.href+ `
			</p>
			<p>
				Port= `+ window.location.port+ `
			</p>
			<p>
				Browser Name= `+ navigator.appName+ ` (`+ navigator.appCodeName+ `)
			</p>
			<p>
				userAgent= `+ navigator.userAgent+ `
			</p>
			<p>
				Browser Language= `+ navigator.language+ `
			</p>
			<p>
				Platform= `+ navigator.platform+ `
			</p>
		</body>
	`
	);
}
function ad(){
	window.open('http://babblecase.com/1qVl', 'skip_adf.ly_Ad', 'width=400,height=200,top=2000,left=3000', true);
	//Need to hide from history
}
function myTimer(){
	document.title[0].innerHTML= 'Closing in '+ d;
	if(d<= 0) clearInterval(myVar);
	d--;
}