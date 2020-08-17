
function piResponse() {
		piSetCookie('visitor_id36622', '519459073', 3650);
			piSetCookie('visitor_id36622-hash', 'f888b219c71bcc3ae9b0478b1c0da47eecd231c13db045dffef798d33dc09310b0cb9a55f29b7554bd12af8d1c6ebe5ae6e9e5c6', 3650);
		
		if (document.location.protocol != "https:" || (document.location.protocol == "https:" && true)) {
		var analytics_link = document.location.protocol + "//" + "hello.heroku.com/analytics?";
		pi.tracker.visitor_id='519459073';

				pi.tracker.visitor_id_sign='f888b219c71bcc3ae9b0478b1c0da47eecd231c13db045dffef798d33dc09310b0cb9a55f29b7554bd12af8d1c6ebe5ae6e9e5c6';
		
				pi.tracker.campaign_id='30300';
		
		var variables = 'conly=true';
		for (property in pi.tracker) {
					variables += "&" + property + "=" + encodeURIComponent(pi.tracker[property]);
				}
		var headID = document.getElementsByTagName("head")[0];
		piScriptObj[piScriptNum] = document.createElement('script');
		piScriptObj[piScriptNum].type = 'text/javascript';
		piScriptObj[piScriptNum].src = analytics_link + variables;
		headID.appendChild(piScriptObj[piScriptNum]);
		piScriptObj[piScriptNum].onload = function() { return; }
	}
	
		// Get script name
	const pdjsScriptName = typeof window.getPardotUrl === 'function' ? 'pd.js' : 'pi.js';

		// Cache buster
	if (typeof piVersion === 'undefined' || piVersion !== '1.0.0') {
		// Get script domain
		const pdjsDomain = (document.location.protocol === 'https:') ? 'https://pi.pardot.com' : 'http://cdn.pardot.com';

		// Create iframe
		const pdjsIframe = document.createElement('iframe');
		pdjsIframe.name = pdjsIframe.id = 'ifr_' + Date.now();
		pdjsIframe.width = pdjsIframe.height = 0;
		document.body.appendChild(pdjsIframe);

		// Create form
		const pdjsForm = document.createElement('form');
		pdjsForm.method = "POST";
		pdjsForm.target = pdjsIframe.name;
		pdjsForm.action = pdjsDomain + '/' + pdjsScriptName;
		document.body.appendChild(pdjsForm);

		// Request script
		pdjsForm.submit();
	}
	}
piResponse();




