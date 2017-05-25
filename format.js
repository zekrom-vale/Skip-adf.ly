"strict mode";
var objLog= [
		{
			"app":{
				"name": "manifest.name",
				"version": "manifest.version",
				"permissions": "manifest.permissions"
			},
			"Date": ["startDate", "endDate"],
			"info":{
				"content": "content",
				"domain": "domain",
				"loc": ["window.location.hostname", "window.location.protocol", "window.location.pathname"]
			},
			"Navigator":{
				"browserName": ["navigator.appName", "navigator.appCodeName"],
				"userAgent": "navigator.userAgent",
				"platform": "navigator.platform",
				"language": "navigator.language"
			},
			"debugCall": "debugCall"
		},
		{
				"app":{
				"name": "manifest.name",
				"version": "manifest.version",
				"permissions": "manifest.permissions"
			},
			"Date": ["startDate", "endDate"],
			"info":{
				"content": "content",
				"domain": "domain",
				"loc": ["window.location.hostname", "window.location.protocol", "window.location.pathname"]
			},
			"Navigator":{
				"browserName": ["navigator.appName", "navigator.appCodeName"],
				"userAgent": "navigator.userAgent",
				"platform": "navigator.platform",
				"language": "navigator.language"
			},
			"debugCall": "debugCall"
		}
];

var text= 
	`
	<tr>
		<th>
			app.name
		</th>
		<th>
			app.version
		</th>
		<th>
			app.permissions
		</th>
		<th>
			date[0] Start
		</th>
		<th>
			date[1] End
		</th>
		<th>
			info.content
		</th>
		<th>
			info.domain
		</th>
		<th>
			info.loccation
		</th>
		<th>
			Navigator.browserName
		</th>
		<th>
			Navigator.userAgent
		</th>
		<th>
			Navigator.platform
		</th>
		<th>
			Navigator.language
		</th>
		<th>
			debugCall
		</th>
	</tr>
	`
;

console.log(text);
console.log(objLog[0].app.name);
var i;
while(i < objLog.length){
	text= text+
		`<tr>
			<td>`+
				objLog[i].app.name
			'</td>'+
			'<td>'+
				objLog[i].app.version
			'</td>'+
			'<td>'+
				objLog[i].app.permissions
			'</td>'+
			'<td>'+
				objLog[i].date[0]
			'</td>'+
			'<td>'+
				objLog[i].date[1]
			'</td>'+
			'<td>'+
				objLog[i].info.content
			'</td>'+
			'<td>'+
				objLog[i].info.domain
			'</td>'+
			'<td>'+
				objLog[i].info.loc
			'</td>'+
			'<td>'+
				objLog[i].Navigator.browserName
			'</td>'+
			'<td>'+
				objLog[i].Navigator.userAgent
			'</td>'+
			'<td>'+
				objLog[i].Navigator.platform
			'</td>'+
			'<td>'+
				objLog[i].Navigator.language
			'</td>'+
			'<td>'+
				objLog[i].debugCall
			`</td>
		</tr>`
	;
	i++
}
console.log(text);
document.getElementById('table').innerHTML= text;