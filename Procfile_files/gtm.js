
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"339",
  
  "macros":[{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],"===",["escape",["macro",1],8,16],"?!1:!0})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var p=\"access_token account[email] account[password] address adresse_contact api_key app_auth_key application_server_address auth_pass auth_user authenticity_token authuser billing[addr_1] billing[addr_2] billing[card_num] billing[first_name] billing[last_name] billing[postal] client_secret code confirm_password confirm-password confirmation_token confirmpassword contact_first_name__c contactemail data dev_email dev_pw e ehash email email_address email_id emailaddress emailpath emailsearch env[admin_password] env[apiai_access_token] env[default_passphrase] env[dpm_password] env[dpm_user] env[ds_user_email] env[ds_user_pw] env[ipfs_password] env[kisi_token] env[links_password] env[password] env[phone] env[sfdc_password] env[sfdc_username] fax first_name first_name.text firstname full_name invitation_token last_name lastname login mac_address mailpass message mobile mobilecode name nombre oauth_token pass password phone phonenum phonenumber pw reset_password_token rmail secret_password set_userloginname state street target.password target.username tel telefonofijo telefonomovil token torrent_pass un user user_id user_token user[email] user[name] userid username userpass zip\".split(\" \"),\nq=\"dl dp dr dt ec ea el uid cd\\\\d{1,3} pr\\\\d{1,3}cd\\\\d{1,3}\".split(\" \"),k=\"_ga_originalSendHitTask\",u=[{name:\"EMAIL\",regex:\/([^\u0026\\s\\\/\\?#=:]){1,}(@|%40).([^\u0026\\s\\\/\\?#]){1,}\/ig},{name:\"UUID\",regex:\/([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})\/ig}];return function(b){window[k]=window[k]||b.get(\"sendHitTask\");var f=b.get(\"\\x26dl\");f=f.replace(\/\\.(html|jsp)\/gi,\"\");b.set(\"\\x26dl\",f);b.set(\"sendHitTask\",function(b){var f=b,r=window[k],v=!0;try{for(var g=b.get(\"hitPayload\").split(\"\\x26\"),\nh=0;h\u003Cg.length;h++){var l=\"\",c=g[h].split(\"\\x3d\");try{var a=decodeURIComponent(decodeURIComponent(c[1]))}catch(w){a=decodeURIComponent(c[1])}for(var m=0;m\u003Cq.length;m++)if(null!=c[0].match(new RegExp(\"^(\"+q[m]+\")$\"))\u0026\u0026-1\u003Ca.indexOf(\"?\")\u0026\u0026!\/\\?$\/ig.test(a)){var d=a.toLowerCase().split(\"?\").splice(1).join(\"\\x26\").split(\"\\x26\"),e=[];for(pa=0;pa\u003Cd.length;pa++)-1\u003Cd[pa].indexOf(\"?\")\u0026\u0026e.push(d[pa].split(\"?\")[1]);d=d.concat(e);for(e=0;e\u003Cd.length;e++){for(var t=!1,n=0;n\u003Cp.length;n++)if(0==d[e].indexOf((p[n]+\n\"\\x3d\").toLowerCase())){l+=d[e].split(\"\\x3d\")[0]+\"\\x3d[redacted]\\x26\";t=!0;break}0==t\u0026\u0026(l+=d[e]+\"\\x26\")}\/\\?$\/ig.test(a)||\/%3F$\/ig.test(a)||\/\\? \/ig.test(a)||\/%3F%20\/ig.test(a)||(a=a.replace(\/\\?.*\/,\"?\"+l.replace(\/\u0026$\/,\"\")))}u.forEach(function(b){\/\\?$\/ig.test(c[1])||\/%3F$\/ig.test(c[1])||\/\\? \/ig.test(c[1])||\/%3F%20\/ig.test(c[1])||(a=a.replace(b.regex,\"[redacted]\"))});\/^(ec|el|ea)$\/ig.test(c[0])?c[1]=encodeURIComponent(a):c[1]=encodeURIComponent(a.replace(\/\\?$\/,\"\"));g[h]=c.join(\"\\x3d\")}b.set(\"hitPayload\",\ng.join(\"\\x26\"),!0);v\u0026\u0026r(b)}catch(w){r(f)}})}})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"heroku_session"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",10],
      "vtp_defaultValue":"NotLoggedIn",
      "vtp_map":["list",["map","key","1","value","LoggedIn"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"c",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery(\".gs-no-results-result\").length|\"block\"==jQuery(\".js-search-no-results\").css(\"display\"))var a=\"No Result\";else 0\u003CjQuery(\".gsc-result-info\").length?(a=jQuery(\".gsc-result-info\").text(),a=a.match(\/\\s(.+ results)\/g)[0].trim()):a=0\u003CjQuery(\".js-search-results \\x3e li\").length?jQuery(\".js-search-results \\x3e li\").length+\" results\":0\u003CjQuery(\".addon.search-total-count \\x3e a \\x3e span \\x3e span\").length?\"[Elements] Add-on results: \"+jQuery(\".addon.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText+\n\", Button results: \"+jQuery(\".button.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText+\", Buildpack results: \"+jQuery(\".buildpack.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText:void 0;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"blogChannel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=document.referrer;return\"\"!==a?a:\"[NO PREVIOUS PAGE AVAILABLE]\"}catch(b){}})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-39697570-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"button-impressions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"button-clicks"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pricing-page-estimate"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"pricing estimate\"==",["escape",["macro",18],8,16],".toLowerCase()||\"pricing navigation\"==",["escape",["macro",18],8,16],".toLowerCase())return ga.getAll()[0].get(\"clientId\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"pricing estimate\"==",["escape",["macro",18],8,16],".toLowerCase()||\"pricing navigation\"==",["escape",["macro",18],8,16],".toLowerCase()){var a=new Date;a=a.toString().split(\" \");return a=a[3]+\" \"+a[1]+\" \"+a[2]+\" \"+a[4]}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/(.*)\\.heroku\\.com\/.exec(",["escape",["macro",5],8,16],")[1]})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",27],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","devcenter","value","UA-39697570-3"],["map","key","www","value","UA-39697570-4"],["map","key","dashboard","value","UA-39697570-5"],["map","key","id","value","UA-39697570-6"],["map","key","addons","value","UA-39697570-7"],["map","key","beta","value","UA-39697570-11"],["map","key","blog","value","UA-39697570-12"],["map","key","dataclips","value","UA-39697570-13"],["map","key","discussion","value","UA-39697570-14"],["map","key","events","value","UA-39697570-15"],["map","key","help","value","UA-39697570-16"],["map","key","toolbelt","value","UA-39697570-17"],["map","key","jobs","value","UA-39697570-18"],["map","key","lp","value","UA-39697570-19"],["map","key","waza","value","UA-39697570-20"],["map","key","partners","value","UA-39697570-21"],["map","key","postgres","value","UA-39697570-22"],["map","key","redeem","value","UA-39697570-23"],["map","key","status","value","UA-39697570-25"],["map","key","success","value","UA-39697570-26"],["map","key","signup","value","UA-39697570-31"],["map","key","elements","value","UA-39697570-32"],["map","key","engineering","value","UA-39697570-33"],["map","key","connect","value","UA-39697570-34"],["map","key","redis","value","UA-39697570-36"],["map","key","sso","value","UA-39697570-38"],["map","key","kb","value","UA-39697570-40"],["map","key","data","value","UA-39697570-41"],["map","key","jp","value","UA-39697570-44"],["map","key","brand","value","UA-39697570-46"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{return(new URL(window.location)).searchParams.get(\"code\")\u0026\u0026!0}catch(a){return!1}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByClassName(\"gtm_signup_register_form\").length})();"]
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialTarget"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNetwork"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.value"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"list_93478\").checked?\"checked\":\"unchecked\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__c",
      "vtp_value":"UA-39697570-25"
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"page-variant"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return $(\"div#summary \\x3e div.summary-wrapper \\x3e span#summary-total\").text().replace(\/\\D\/,\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",38],8,16],").closest(\"div.slider\").find(\"div.slider-label\").text().replace(\/\\s{2}\/ig,\"\").trim(),b=$(",["escape",["macro",38],8,16],").closest(\"div.slider\").find(\"div.slider-wrapper\").text().replace(\/\\s{2}\/ig,\"\");return a+\" \"+b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=$(",["escape",["macro",38],8,16],").closest(\"li\");return a.find(\"label \\x3e p\").text()+a.find(\"label \\x3e span.pricing\").text()})();"]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\"vimeo.com\/video\",b=document.getElementsByTagName(\"iframe\"),a;for(a=0;a\u003Cb.length;a++)if(-1\u003Cb[a].getAttribute(\"src\").indexOf(c))return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\"play.vidyard.com\",b=document.getElementsByTagName(\"iframe\"),a;for(a=0;a\u003Cb.length;a++)if(-1\u003Cb[a].getAttribute(\"src\").indexOf(c))return!0;return!1})();"]
    },{
      "function":"__t"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(document).height()\u003EjQuery(window).height()?\"true\":\"false\"})();"]
    },{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",53],8,16],"?\"#\"+",["escape",["macro",53],8,16],":\"\"})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",27],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","dashboard","value","UA-2989055-26"],["map","key","devcenter","value","UA-2989055-24"],["map","key","toolbelt","value","UA-2989055-19"],["map","key","signup","value","UA-2989055-36"],["map","key","elements","value","UA-2989055-38"],["map","key","connect","value","UA-2989055-37"],["map","key","status","value","UA-2989055-22"],["map","key","jp","value","UA-39697570-44"]]
    },{
      "function":"__c",
      "vtp_value":"UA-2989055-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"virtualPath"
    },{
      "function":"__c",
      "vtp_value":"51b6483a434bba0f0c000016"
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){if(d\u0026\u0026e){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}}})();"]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","\/home","value","\/"],["map","key","\/index.html","value","\/"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];a.push(\"utm_source\",\"utm_medium\",\"utm_campaign\",\"utm_content\",\"utm_term\",\"utm_keyword\",\"utm_id\",\"gclid\",\"dclid\",\"gclsrc\",\"q\");for(var l=[],f=0;f\u003Ca.length;f++)l.push(a[f].toLowerCase());var r=\"dl dp dr dt ec ea el uid cd\\\\d{1,3} pr\\\\d{1,3}cd\\\\d{1,3}\".split(\" \"),m=\"_ga_originalSendHitTask\",u=[{name:\"EMAIL\",regex:\/([^\u0026\\s\\\/\\?#=:]){1,}(@|%40).([^\u0026\\s\\\/\\?#]){1,}\/ig}];return function(g){window[m]=window[m]||g.get(\"sendHitTask\");var a=g.get(\"\\x26dl\");a=a.replace(\/\\.(html|jsp)\/gi,\"\");g.set(\"\\x26dl\",\na);g.set(\"sendHitTask\",function(a){var g=a,f=window[m],v=!0;try{for(var h=a.get(\"hitPayload\").split(\"\\x26\"),k=0;k\u003Ch.length;k++){var n=\"\",c=h[k].split(\"\\x3d\");try{var b=decodeURIComponent(decodeURIComponent(c[1]))}catch(w){b=decodeURIComponent(c[1])}for(var p=0;p\u003Cr.length;p++)if(null!=c[0].match(new RegExp(\"^(\"+r[p]+\")$\"))\u0026\u0026-1\u003Cb.indexOf(\"?\")){var d=b.toLowerCase().split(\"?\").splice(1).join(\"\\x26\").split(\"\\x26\"),e=[];for(pa=0;pa\u003Cd.length;pa++)-1\u003Cd[pa].indexOf(\"?\")\u0026\u0026e.push(d[pa].split(\"?\")[1]);d=d.concat(e);\nfor(e=0;e\u003Cd.length;e++){for(var t=!1,q=0;q\u003Cl.length;q++)if(0==d[e].toLowerCase().indexOf(l[q].toLowerCase()+\"\\x3d\")||0==d[e].indexOf(\"search_param\\x3d\")){n+=d[e]+\"\\x26\";t=!0;break}0==t\u0026\u0026(n+=d[e].split(\"\\x3d\")[0]+\"\\x3d[redacted]\\x26\")}\/\\?$\/ig.test(b)||\/%3F$\/ig.test(b)||\/\\? \/ig.test(b)||\/%3F%20\/ig.test(b)||(b=b.replace(\/\\?.*\/,\"?\"+n.replace(\/\u0026$\/,\"\")))}u.forEach(function(a){\/\\?$\/ig.test(c[1])||\/%3F$\/ig.test(c[1])||\/\\? \/ig.test(c[1])||\/%3F%20\/ig.test(c[1])||(b=b.replace(a.regex,\"[redacted]\"))});\/^(ec|el|ea)$\/ig.test(c[0])?\nc[1]=encodeURIComponent(b):c[1]=encodeURIComponent(b.replace(\/\\?$\/,\"\"));h[k]=c.join(\"\\x3d\")}a.set(\"hitPayload\",h.join(\"\\x26\"),!0);v\u0026\u0026f(a)}catch(w){f(g)}})}})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"herokustatus.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","5","dimension",["macro",13]],["map","index","8","dimension",["macro",14]],["map","index","9","dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",17],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",18],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",19],
      "vtp_eventLabel":["macro",20],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_eventValue":["macro",21],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_metric":["list",["map","index","2","metric",["macro",22]],["map","index","3","metric",["macro",23]],["map","index","4","metric",["macro",24]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","6","dimension",["macro",25]],["map","index","15","dimension",["macro",26]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value",["macro",3]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","9","dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":7
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]],["map","index","4","dimension",["macro",13]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":30
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","9","dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":34
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":40
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":41
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":42
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":43
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":44
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":45
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":46
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":47
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":49
    },{
      "function":"__cegg",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_usersNumericId":"00338119",
      "tag_id":57
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":65
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":66
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":68
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":75
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":77
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":["macro",32],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":["macro",32],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",17],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",18],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",19],
      "vtp_eventLabel":["macro",20],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",21],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_metric":["list",["map","index","4","metric",["macro",24]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","6","dimension",["macro",25]],["map","index","15","dimension",["macro",26]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value",["macro",3]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":88
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":90
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialActionTarget":["macro",33],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_socialAction":["macro",34],
      "vtp_enableLinkId":true,
      "vtp_socialNetwork":["macro",35],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":95
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",34],
      "vtp_enableLinkId":true,
      "vtp_socialActionTarget":["macro",33],
      "vtp_socialNetwork":["macro",35],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":96
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":97
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":98
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Submit",
      "vtp_eventLabel":["template","Keep me up to Date: Newsletter - ",["macro",37]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":103
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",39],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Re-subscribe",
      "vtp_eventLabel":"Newsletter Re-subscribe",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39697570-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":105
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":106
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":107
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"heroku.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","9","dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":109
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",6],
      "vtp_eventLabel":["macro",32],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":110
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",17],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",18],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",19],
      "vtp_eventLabel":["macro",20],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",21],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":111
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":112
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",34],
      "vtp_enableLinkId":true,
      "vtp_socialActionTarget":["macro",33],
      "vtp_socialNetwork":["macro",35],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_trackingId":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":113
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value",["macro",3]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":114
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",40],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":115
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"herokustatus.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","5","dimension",["macro",13]],["map","index","9","dimension",["macro",15]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":116
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","2","dimension",["macro",12]],["map","index","4","dimension",["macro",13]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":117
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":124
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":125
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":126
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":127
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Internal Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Help Article",
      "vtp_eventLabel":["macro",39],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_metric":["list",["map","index","2","metric",["macro",22]],["map","index","3","metric",["macro",23]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":145
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Internal Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Help Article",
      "vtp_eventLabel":["macro",39],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",8]],["map","fieldName","customTask","value",["macro",9]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":146
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventValue":["macro",45],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","4","metric",["macro",45]]],
      "vtp_eventAction":"Original | Estimate Summary Hover",
      "vtp_eventLabel":["macro",45],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":153
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventValue":["macro",45],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","4","metric",["macro",45]]],
      "vtp_eventAction":"Original | Estimate Summary Hover",
      "vtp_eventLabel":["macro",45],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":155
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",45],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Dynos Selection",
      "vtp_eventLabel":["macro",46],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":156
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",45],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Dynos Selection",
      "vtp_eventLabel":["macro",46],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":157
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",45],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Postgres Selection",
      "vtp_eventLabel":["macro",47],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":158
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",45],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Postgres Selection",
      "vtp_eventLabel":["macro",47],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":159
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",45],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Redis Selection",
      "vtp_eventLabel":["macro",47],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":160
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",45],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Redis Selection",
      "vtp_eventLabel":["macro",47],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":161
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",45],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Kafka Selection",
      "vtp_eventLabel":["macro",47],
      "vtp_trackingId":["macro",16],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":162
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventValue":["macro",45],
      "vtp_fieldsToSet":["list",["map","fieldName","customTask","value",["macro",9]]],
      "vtp_eventCategory":"Pricing Estimate",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Original | Kafka Selection",
      "vtp_eventLabel":["macro",47],
      "vtp_trackingId":["macro",28],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":true,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__awct",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_enableProductReporting":false,
      "vtp_conversionValue":"1",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"992316833",
      "vtp_currencyCode":"USD",
      "vtp_conversionLabel":"Y-wFCP-02wUQoZuW2QM",
      "vtp_rdp":true,
      "vtp_url":["macro",48],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":330
    },{
      "function":"__hl",
      "tag_id":360
    },{
      "function":"__hl",
      "tag_id":361
    },{
      "function":"__cl",
      "tag_id":362
    },{
      "function":"__cl",
      "tag_id":363
    },{
      "function":"__cl",
      "tag_id":364
    },{
      "function":"__hl",
      "tag_id":365
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"115433_259",
      "tag_id":366
    },{
      "function":"__cl",
      "tag_id":367
    },{
      "function":"__cl",
      "tag_id":368
    },{
      "function":"__cl",
      "tag_id":369
    },{
      "function":"__cl",
      "tag_id":370
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003EpiAId=\"37622\";piCId=\"30300\";(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=(\"https:\"==document.location.protocol?\"https:\/\/pi\":\"http:\/\/cdn\")+\".pardot.com\/pd.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript data-gtmsrc=\"\/\/pixel.mathtag.com\/event\/js?mt_id=687393\u0026amp;mt_adid=131453\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\u0026amp;skipsync=13\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){function f(a){var b=\/[?\u0026]?([^=]c)=([^\u0026]*)\/;a=b.exec(a)||[];return a=decodeURIComponent(a[2])}function g(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");return 2==a.length?a.pop().split(\";\").shift():void 0}function h(a,b){var c=new Date;c.setTime(c.getTime()+12096E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\";domain\\x3d.heroku.com;path\\x3d\/\"}var e=\"campaign\",d=g(e);\"undefined\"==typeof d\u0026\u0026(d=f(document.location.search),\"undefined\"!==d\u0026\u0026h(e,d))}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=function(a){a=new RegExp(\"[; ]\"+a+\"\\x3d([^\\\\s;]*)\");if(a=(\" \"+document.cookie).match(a))return unescape(a[1])};if(!d(\"jbfp\")){var c=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);document.cookie=\"jbfp\\x3d\"+(new Date).getTime()+\"-\"+c+\";domain\\x3dheroku.com;path\\x3d\/;max-age\\x3d31536000\"}var f=function(){var a=-9,b=\"undefined\"!==typeof window.performance?window.performance:!1,c=(b=b?\"undefined\"!==typeof b.timing?b.timing:!1:!1)?\"undefined\"!==\ntypeof b.loadEventEnd\u0026\u0026\"undefined\"!==b.navigationStart?!0:!1:!1;c\u0026\u0026(a=Math.ceil(b.loadEventEnd-b.navigationStart),0\u003Ea\u0026\u0026(a=-1));return a},g=function(){var a=!1,b=navigator.userAgent||navigator.vendor||window.opera;if(\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino\/i.test(b)||\n\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(b.substr(0,\n4)))a=!0;return a};c=function(){var a=!1,b=document.querySelectorAll(\"[data-uuid]\");0\u003Cb.length\u0026\u0026(a=b[0].getAttribute(\"data-uuid\"));return a};c=c();var h=document.referrer,e=d(\"jbfp\");d=d(\"heroku_session\");f=f();var k=g();g=document.createElement(\"img\");e=\"https:\/\/jambox.heroku.com\/e?url\\x3d\"+escape(document.location.href)+\"\\x26fp\\x3d\"+e+\"\\x26li\\x3d\"+d+\"\\x26dtls[page_load_timing]\\x3d\"+f+\"\\x26dtls[mobile_flag]\\x3d\"+k;h\u0026\u0026(e+=\"\\x26ref\\x3d\"+escape(h));c\u0026\u0026(e+=\"\\x26dtls[core_user_uuid]\\x3d\"+c);g.src=e})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(h){(function(c,e,g){e=c(e);var f={iframes:[],eventMarker:{},getIframeSrc:function(a){return c(a).attr(\"src\").split(\"?\")[0]},getIframeId:function(a){return c(a).attr(\"id\")},removeUndefinedIframes:function(a){var b=c(a).attr(\"id\");a=c(a).attr(\"src\");if(-1===a.indexOf(\"player_id\"))return!1;if(this.eventMarker[b])return!0;this.eventMarker[b]={progress25:!1,progress50:!1,progress75:!1,videoPlayed:!1,videoPaused:!1,videoResumed:!1,videoSeeking:!1,videoCompleted:!1,\ntimePercentComplete:0};return!0},init:function(){var a=c('iframe[src*\\x3d\"player.vimeo.com\/video\"]');this.iframes=c.grep(a,c.proxy(this.removeUndefinedIframes,this));c.each(this.iframes,c.proxy(this.handleOnReady,this))},onMessageReceived:function(a){if(\/^https?:\\\/\\\/player\\.vimeo\\.com\/.test(a.originalEvent.origin)){a=JSON.parse(a.originalEvent.data);var b=c(\"#\"+a.player_id)[0];switch(a.event){case \"playProgress\":this.onPlayProgress(a.data,b);break;case \"seek\":this.onSeek(b);break;case \"play\":this.onPlay(b);\nbreak;case \"pause\":this.onPause(b);break;case \"finish\":this.onFinish(b)}}},post:function(a,b,d){a=JSON.stringify({method:a,value:b});b=c(d).attr(\"src\").split(\"?\")[0];d.contentWindow.postMessage(a,b)},handleOnReady:function(a,b){this.post(\"addEventListener\",\"play\",b);this.post(\"addEventListener\",\"seek\",b);this.post(\"addEventListener\",\"pause\",b);this.post(\"addEventListener\",\"finish\",b);this.post(\"addEventListener\",\"playProgress\",b)},onFinish:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoCompleted||\n(this.sendEvent(a,\"Completed video\"),this.eventMarker[b].videoCompleted=!0)},onSeek:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoSeeking||(this.sendEvent(a,\"Skipped video forward or backward\"),this.eventMarker[b].videoSeeking=!0)},onPlay:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoPlayed||(this.sendEvent(a,\"Started video\"),this.eventMarker[b].videoPlayed=!0);!this.eventMarker[b].videoResumed\u0026\u0026this.eventMarker[b].videoPaused\u0026\u0026(this.sendEvent(a,\"Resumed video\"),\nthis.eventMarker[b].videoResumed=!0)},onPause:function(a){var b=this.getIframeId(a);99\u003Ethis.eventMarker[b].timePercentComplete\u0026\u0026!this.eventMarker[b].videoPaused\u0026\u0026(this.sendEvent(a,\"Paused video\"),this.eventMarker[b].videoPaused=!0)},onPlayProgress:function(a,b){var d=this.getIframeId(b);this.eventMarker[d].timePercentComplete=Math.round(100*a.percent);if(24\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026!this.eventMarker[d].progress25){var c=\"Played video: 25%\";this.eventMarker[d].progress25=!0}49\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026\n!this.eventMarker[d].progress50\u0026\u0026(c=\"Played video: 50%\",this.eventMarker[d].progress50=!0);74\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026!this.eventMarker[d].progress75\u0026\u0026(c=\"Played video: 75%\",this.eventMarker[d].progress75=!0);c\u0026\u0026this.sendEvent(b,c)},sendEvent:function(a,b){var c=this.getIframeSrc(a);g.push({event:\"trackEvent\",eventCat:\"Vimeo\",eventAction:b,eventLabel:c,eventValue:void 0,eventInteraction:!1})}};f.init();e.on(\"message\",c.proxy(f.onMessageReceived,f))})(jQuery,window,window.dataLayer)});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(t){function u(a){var b=[0,25,50,75,90],m=b.slice(0),e=[0,0],g=0,h=!1,l=c.create();a.on(\"timeupdate\",function(b){var c=0;var f=Math.floor(b);if(!(h||\"object\"!=typeof a.metadata||f\u003C=e[1])){e[1]=b;b=l.insertOne(e);f=l;var d,k=null,n=[];for(d=0;d\u003Cf.length;++d)!k||k[1]\u003Cf[d][0]?(k\u0026\u0026n.push(k),k=[f[d][0],f[d][1]]):f[d][1]\u003Ek[1]\u0026\u0026(k[1]=f[d][1]);f=(k\u0026\u0026n.push(k),n);for(d=0;d\u003Cf.length;++d)c+=f[d][1]-f[d][0];(l.remove(b),c=c\/a.metadata.chapters_attributes[g].video_attributes.length_in_seconds*100,c\u003E=\nm[0])\u0026\u0026\"undefined\"!==typeof dataLayer\u0026\u0026\"function\"===typeof dataLayer.push\u0026\u0026dataLayer.push({event:\"trackEvent\",eventCat:\"Vidyard\",eventAction:\"Played video: \"+m.shift()+\"%\",eventLabel:a.metadata.chapters_attributes[g].video_attributes.name,eventValue:void 0,eventInteraction:!0})}});a.on(\"beforeSeek\",function(a){!1===h\u0026\u0026(e[1]=a.start);h=!0});a.on(\"play\",function(a){l.insertOne(e.slice(0));e[0]=a;e[1]=a;h=!1});a.on(\"chapterComplete\",function(){m=b.slice(0);g=a.getCurrentChapter();e=[0,0];l=c.create();\nh=!1})}var c=function(){this._compare=function(a,b){return a[0]\u003Cb[0]?-1:a[0]\u003Eb[0]?1:a[1]\u003Cb[1]?-1:a[1]\u003Eb[1]?1:0}};c.create=function(){return new c};c.prototype=[];c.prototype.constructor=Array.prototype.constructor;c.prototype.insertOne=function(a){var b=this.bsearch(a);return this.splice(b+1,0,a),b+1};c.prototype.remove=function(a){return this.splice(a,1),this};c.prototype.bsearch=function(a){if(!this.length)return-1;for(var b,c,e,g=0,h=this.length;1\u003Ch-g;){if(b=Math.floor((g+h)\/2),c=this[b],e=this._compare(a,\nc),0===e)return b;0\u003Ce?g=b:h=b}return 0===g\u0026\u00260\u003Cthis._compare(this[0],a)?-1:g};var q=!0;try{var p=new t.players}catch(a){throw Error(\"The Vidyard API must be loaded before this script can execute\");}for(var r in p)p.hasOwnProperty(r)\u0026\u0026(u(p[r]),q=!1);q\u0026\u0026console.warn(\"No Vidyard Players found. (include this script below player embed codes)\")}(Vidyard);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\".heroku-footer-social a\").each(function(b,c){if(-1!=this.href.toLowerCase().indexOf(\"heroku.com\/home\")){var a=this.textContent.toLowerCase().indexOf(\"english\")?\"Japanese Site\":\"English Site\";this.setAttribute(\"onclick\",\"dataLayer.push({'event': 'trackEvent', 'eventCat': 'Internal Links', 'eventAction': 'Change Language', 'eventLabel': 'Switch to \"+a+\"', 'eventValue': 0, 'eventInteraction': 0})\")}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar structDataTest=document.createElement(\"script\");structDataTest.type=\"application\/ld+json\";\nstructDataTest.text=JSON.stringify({\"@context\":\"http:\/\/schema.org\",\"@type\":\"Event\",name:\"Kafka Summit NYC\",description:\"The Heroku-sponsored Kafka Summit is the premier event for data architects, engineers, devops professionals, and developers who want to learn about streaming data. It brings the Apache Kafka community together to share best practices, write code and discuss the future of streaming technologies.\",startDate:\"2018-04-02\",location:{\"@type\":\"Place\",name:\"Kafka Summit NYC\",address:{\"@type\":\"PostalAddress\",\nstreetAddress:\"Pier 60 - Chelsea Piers\",addressLocality:\"New York\",postalCode:\"10011\",addressRegion:\"NY\",addressCountry:\"US\"}}});document.querySelector(\"head\").appendChild(structDataTest);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a=a||window.jQuery;if(\"undefined\"!==typeof window.jQuery.fn){window.dataLayer=window.dataLayer||[];window.Heroku=window.Heroku||{};window.Heroku.Trackable=window.Heroku.Trackable||function(){};var l=function(b,c){var d=JSON.stringify({category:c.category,action:c.action,label:c.label});a(b).attr(\"data-trackable\",d);a(b).attr(\"data-trackable-nav\",!0)},h;\"www.heroku.com\"===document.location.hostname\u0026\u0026(h=a(\"#navigation a\"));\"devcenter.heroku.com\"===document.location.hostname\u0026\u0026(h=a(\"#primary-header .main-nav a\"));\nfor(var k=0;k\u003Ch.length;k+=1){var f=[],g=h[k],b=a(g).parents(\".has-dropdown\"),d=g.innerHTML,e=a(g).hasClass(\"glostick__menu__item\")?!0:!1;-1===d.indexOf(\"\\x3c\")\u0026\u0026-1===d.indexOf(\"\\x3e\")\u0026\u0026f.push(d);for(d=0;d\u003Cb.length;d+=1){var c=a(b[d])[0];c=a(c).find(\"a\")[0].innerHTML;if(\"More\"===c){if(c=a(g).parents(\"ul\")[0],c=a(c).siblings(\".more-title\")[0],\"undefined\"!==typeof c){var n=a(\".nav-more\").is(\":visible\")||!a(\".nav-more\").is(\":hidden\");f.push(c.innerHTML);n\u0026\u0026f.push(\"More\")}}else-1===f.indexOf(c)\u0026\u0026-1===\nc.indexOf(\"\\x3c\")\u0026\u0026-1===c.indexOf(\"\\x3e\")\u0026\u0026f.push(c)}f.reverse();if(0\u003Cf.length){var m=0;d=function(){for(var a=\"\",b=0;b\u003Cf.length;b+=1)0\u003Cb\u0026\u0026(m+=1,a+=\" \\x3e \"),a+=f[b];return a}();b=e?\"Glostick Menu\":\"Top Navigation Menu\";e=e?\"Glostick Click\":\"Level \"+m;b={category:b,action:e,label:d};l(g,b)}}h=a(\"#heroku-footer a\");for(k=0;k\u003Ch.length;k+=1)g=h[k],b=a(g).parents(\".col\")[0],e=!1,\"undefined\"!==typeof a(b).find(\"h4\")[0]\u0026\u0026(e=a(b).find(\"h4\")[0].innerHTML,d=(e?e+\" \\x3e \":\"\")+g.innerHTML,b=\"Footer Navigation Menu\",\ne=\"Click\",b={category:b,action:e,label:d},l(g,b));a(\"[data-trackable-nav]\").each(function(b,c){return new Heroku.Trackable(a(c))})}})(window.jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a=a||window.jQuery;if(\"undefined\"!==typeof window.jQuery.fn){window.dataLayer=window.dataLayer||[];window.Heroku=window.Heroku||{};window.Heroku.Trackable=window.Heroku.Trackable||function(){};for(var k=function(c,b){var d=JSON.stringify({category:b.category,action:b.action,label:b.label});a(c).attr(\"data-trackable\",d);a(c).attr(\"data-trackable-df\",!0)},h=a(\".page-content a\"),f=0;f\u003Ch.length;f+=1){var c=h[f],d=a(c).parents(\".table-row\"),b=c.innerHTML,l=\"undefined\"!==typeof a(c).attr(\"href\")?\n-1\u003Ca(c).attr(\"href\").indexOf(\"heroku.com\")||0===a(c).attr(\"href\").indexOf(\"\/\")?\"Internal Links\":\"External Links\":\"Internal Links\";\"Go to Agenda Builder\"===b\u0026\u0026(b=\"Agenda Builder\");for(var g=0;g\u003Cd.length;g+=1){var e=a(d[g])[0];e=a(e).find(\"h3 a\")[0].innerHTML;e!==b\u0026\u0026(b+=\" \\x3e \"+e)}d={category:l,action:\"Click\",label:b};k(c,d)}a(\"[data-trackable-df]\").each(function(c,b){return new Heroku.Trackable(a(b))})}})(window.jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EEventNONInteraction=1;Frequency=10;GA_EventCategory=\"Page Interaction\";GA_EventAction=\"Scroll Down\";_frequency=Frequency;_repetition=100\/Frequency;var _scrollMatrix=[];for(ix=0;ix\u003C_repetition;ix++)_scrollMatrix[ix]=[_frequency,\"false\"],_frequency=Frequency+_frequency;function debounce(b,f,c){var a;return function(){var d=this,e=arguments,g=function(){a=null;c||b.apply(d,e)},h=c\u0026\u0026!a;clearTimeout(a);a=setTimeout(g,f);h\u0026\u0026b.apply(d,e)}}\nvar debouncedScrollFunction=debounce(function(){for(iz=0;iz\u003C_scrollMatrix.length;iz++)jQuery(window).scrollTop()+jQuery(window).height()\u003E=jQuery(document).height()*_scrollMatrix[iz][0]\/100\u0026\u0026\"false\"==_scrollMatrix[iz][1]\u0026\u0026(_scrollMatrix[iz][1]=\"true\",dataLayer.push({event:\"trackEvent\",eventCat:GA_EventCategory,eventAction:GA_EventAction,eventLabel:_scrollMatrix[iz][0]+\"%\",eventValue:0,nonInteraction:EventNONInteraction}))},250);jQuery(document).scroll(debouncedScrollFunction);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){$(\"div#summary \\x3e div.summary-wrapper\").mouseenter(function(){dataLayer.push({event:\"estimatedCostHover\"})})})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){setTimeout(function(){dataLayer.push({event:\"kafkaRadioClick\"})},50)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":166
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){setTimeout(function(){dataLayer.push({event:\"redisRadioClick\"})},50)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":167
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){setTimeout(function(){dataLayer.push({event:\"postgresRadioClick\"})},50)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":168
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){setTimeout(function(){dataLayer.push({event:\"dynosClick\"})},50)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":169
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function f(d){var b=new XMLHttpRequest;b.timeout=3E3;b.onreadystatechange=function(){if(4==this.readyState\u0026\u0026200==this.status\u0026\u0026\"\"!==b.responseText){var a=JSON.parse(b.responseText);if(\"string\"===typeof a.exp\u0026\u0026(a=a.exp)\u0026\u0026\"undefined\"!==typeof $\u0026\u0026\"undefined\"!==typeof jQuery)if(\"generic\"===a||\"business\"===a||\"security\"===a){var c=$(\"#\"+a+\"-banner\");1===c.length\u0026\u0026(c.attr(\"data-doppler-content\",a+\" add ons\"),c.attr(\"data-doppler-segment\",a),c.attr(\"data-doppler-type\",\"onboarding banner\"),c.attr(\"data-doppler-content-click\",\n\"\"),c.slideToggle())}else\"control\"===a\u0026\u0026(a=$(\"#generic-banner\"),1===a.length\u0026\u0026(a=document.createElement(\"div\"),a.setAttribute(\"data-doppler-content\",\"control flag\"),a.setAttribute(\"data-doppler-segment\",\"control\"),a.setAttribute(\"data-doppler-type\",\"onboarding banner\"),a.style.display=\"none\",$(\"body\").append(a)))}};b.open(\"GET\",\"https:\/\/\"+g+\"\/aobt?tid\\x3d\"+d,!0);b.send()}var g=\"elements.heroku.com\"===document.location.hostname?\"booster.heroku.com\":\"martech-booster-apis-staging.herokuapp.com\",e=document.querySelectorAll(\"[data-uuid]\")[0]||\n!1,d=!1;e\u0026\u0026(d=e.getAttribute(\"data-uuid\"));d\u0026\u0026f(d)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":343
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function g(c,d,b){window.dataLayer.push({event:\"trackEvent\",eventCat:c,eventAction:d,eventLabel:b})}function f(c){var d=window.localStorage.getItem(\"t_d\"),b=[];\"string\"===typeof d\u0026\u0026(b=d.split(\",\"));-1===b.indexOf(c)\u0026\u0026b.push(c);window.localStorage.setItem(\"t_d\",b.toString())}function k(c){var d=window.localStorage.getItem(\"t_d\"),b=[];\"string\"===typeof d\u0026\u0026(b=d.split(\",\"));return-1\u003Cb.indexOf(c)?!1:!0}function n(){var c=768,d=parseFloat(getComputedStyle(document.body,null).width.replace(\"px\",\n\"\"));if(!(d\u003Cc)){var b=new XMLHttpRequest;b.timeout=3E3;b.onreadystatechange=function(){if(4==this.readyState\u0026\u0026200==this.status\u0026\u0026\"\"!==b.responseText){var a=JSON.parse(b.responseText);if(\"1\"===a.i.toString())if(window._whichWidget=\"verification-messaging\",a=window.localStorage.getItem(\"t_g\"),\"string\"!==typeof a\u0026\u0026(a=2,a=Math.floor(1E3*Math.random())%a,window.localStorage.setItem(\"t_g\",a.toString())),a=a.toString(),\"1\"===a)k(window._whichWidget)\u0026\u0026window.martechMessagingWidget({id:window._whichWidget,\ntitle:\"Add custom domain names to your apps\",text:\"Make your apps easier to find by adding your own URLs to them at no extra cost.\",primaryCta:\"Learn More\",primaryCtaUrl:\"https:\/\/devcenter.heroku.com\/articles\/account-verification\",segment:\"test\",image:\"info\"});else{f(window._whichWidget);a=\"widget\";var e=document.createElement(\"div\");e.setAttribute(\"data-doppler-segment\",\"control\");e.setAttribute(\"data-doppler-content\",window._whichWidget);e.setAttribute(\"data-doppler-type\",a);e.style.display=\"none\";\ndocument.body.appendChild(e)}else\"1\"===a.c.toString()\u0026\u0026(window._whichWidget=\"shield-messaging\",k(window._whichWidget)\u0026\u0026(a=2,a=Math.floor(1E3*Math.random())%a,a=a.toString(),\"1\"===a?window.martechMessagingWidget({id:window._whichWidget+\"-a\",title:\"Build HIPAA or PCI compliant apps\",text:\"Heroku Shield gives you a simplified path to building high compliance apps for industries like healthcare or financial services.\",primaryCta:\"Learn more\",primaryCtaUrl:\"https:\/\/www.heroku.com\/shield\",image:\"shield\",\nsegment:\"test\"}):window.martechMessagingWidget({id:window._whichWidget+\"-b\",title:\"Build high compliance apps\",text:\"Heroku Shield brings the simplicity and productivity of Heroku to apps for strictly regulated industries.\",primaryCta:\"Learn more\",primaryCtaUrl:\"https:\/\/www.heroku.com\/shield\",image:\"shield\",segment:\"test\"})))}};b.open(\"GET\",\"https:\/\/\"+l+\"\/c\",!0);b.send()}}function m(){\"function\"===typeof window.martechMessagingWidget?n():setTimeout(function(){m()},250)}var l=\"www.heroku.com\"===document.location.hostname?\n\"booster.heroku.com\":\"martech-booster-apis-staging.herokuapp.com\";window.dataLayer=window.dataLayer||[];window._whichWidget=null;document.addEventListener(\"click\",function(c){c.target.matches(\"#mt-engage-widget-primary\")\u0026\u0026(f(window._whichWidget),g(\"Widget\",window._whichWidget,\"CTA Clicked\"));c.target.matches(\"#mt-engage-widget-secondary\")\u0026\u0026(f(window._whichWidget),g(\"Widget\",window._whichWidget,\"Secondary Link Clicked\"));if(c.target.matches(\"#mt-engage-widget-dismiss\")||c.path[1].matches(\"#mt-engage-widget-dismiss\"))f(window._whichWidget),\ng(\"Widget\",window._whichWidget,\"Dismiss Clicked\")});var h=document.createElement(\"script\");h.type=\"text\/javascript\";h.src=\"https:\/\/\"+l+\"\/widget.js\";document.getElementsByTagName(\"body\")[0].appendChild(h);m()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":358
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function g(c,e,b){window.dataLayer.push({event:\"trackEvent\",eventCat:c,eventAction:e,eventLabel:b})}function f(c){var e=window.localStorage.getItem(\"t_d\"),b=[];\"string\"===typeof e\u0026\u0026(b=e.split(\",\"));-1===b.indexOf(c)\u0026\u0026b.push(c);window.localStorage.setItem(\"t_d\",b.toString())}function n(){var c=768,e=parseFloat(getComputedStyle(document.body,null).width.replace(\"px\",\"\"));if(!(e\u003Cc)){var b=new XMLHttpRequest;b.timeout=3E3;b.onreadystatechange=function(){if(4==this.readyState\u0026\u0026200==this.status\u0026\u0026\n\"\"!==b.responseText){var a=JSON.parse(b.responseText);if(\"1\"===a.i.toString())if(window._whichWidget=\"verification-messaging\",a=window.localStorage.getItem(\"t_g\"),\"string\"!==typeof a\u0026\u0026(a=2,a=Math.floor(1E3*Math.random())%a,window.localStorage.setItem(\"t_g\",a.toString())),a=a.toString(),\"1\"===a){a=window._whichWidget;var d=window.localStorage.getItem(\"t_d\"),k=[];\"string\"===typeof d\u0026\u0026(k=d.split(\",\"));a=-1\u003Ck.indexOf(a)?!1:!0;a\u0026\u0026window.martechMessagingWidget({id:window._whichWidget,title:\"Add custom domain names to your apps\",\ntext:\"Make your apps easier to find by adding your own URLs to them at no extra cost.\",primaryCta:\"Learn More\",primaryCtaUrl:\"https:\/\/devcenter.heroku.com\/articles\/account-verification\",segment:\"test\",image:\"info\"})}else f(window._whichWidget),a=\"widget\",d=document.createElement(\"div\"),d.setAttribute(\"data-doppler-segment\",\"control\"),d.setAttribute(\"data-doppler-content\",window._whichWidget),d.setAttribute(\"data-doppler-type\",a),d.style.display=\"none\",document.body.appendChild(d)}};b.open(\"GET\",\"https:\/\/\"+\nl+\"\/c\",!0);b.send()}}function m(){\"function\"===typeof window.martechMessagingWidget?n():setTimeout(function(){m()},250)}var l=\"www.heroku.com\"===document.location.hostname?\"booster.heroku.com\":\"martech-booster-apis-staging.herokuapp.com\";window.dataLayer=window.dataLayer||[];window._whichWidget=null;document.addEventListener(\"click\",function(c){c.target.matches(\"#mt-engage-widget-primary\")\u0026\u0026(f(window._whichWidget),g(\"Widget\",window._whichWidget,\"CTA Clicked\"));c.target.matches(\"#mt-engage-widget-secondary\")\u0026\u0026\n(f(window._whichWidget),g(\"Widget\",window._whichWidget,\"Secondary Link Clicked\"));if(c.target.matches(\"#mt-engage-widget-dismiss\")||c.path[1].matches(\"#mt-engage-widget-dismiss\"))f(window._whichWidget),g(\"Widget\",window._whichWidget,\"Dismiss Clicked\")});var h=document.createElement(\"script\");h.type=\"text\/javascript\";h.src=\"https:\/\/\"+l+\"\/widget.js\";document.getElementsByTagName(\"body\")[0].appendChild(h);m()})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":359
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"\/articles\/getting-started-.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"herokustatus\\.com|status\\.heroku\\.com"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com\/account\/accept\/ok"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"^\/search\\?"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"trackEvent"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"trackPageview"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"www.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",29],
      "arg1":"true"
    },{
      "function":"_sw",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/pricing"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"www\\.heroku\\.com(\\\/$|\\\/home)",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com"
    },{
      "function":"_gt",
      "arg0":["macro",30],
      "arg1":"0"
    },{
      "function":"_sw",
      "arg0":["macro",6],
      "arg1":"https:\/\/devcenter.heroku.com\/start"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com\/account"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/connect"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/thanks"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"blog.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"elements.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"devcenter.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com\/java"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"signup.heroku.com"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"signup.heroku.com\/account\/accept\/|signup.heroku.com\/confirm"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com\/account\/accept"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"(\\d+\\sError|^Page not found)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"trackSocial"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"NotLoggedIn"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"Keep Me Up to Date"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"hello\\.heroku\\.com\\\/keepmeuptodate",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"hello.heroku.com\/unsubscribe"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"Re-subscribe"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"hello\\.heroku\\.com\\\/unsubscribe",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"herokustatus.com"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"popstate"
    },{
      "function":"_cn",
      "arg0":["macro",42],
      "arg1":"heroku.com"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"help\\.heroku\\.com\\\/((PKEZDG48\\\/how\\-do\\-i\\-close\\-my\\-team\\-account)|(R2NSPPFU\\\/how\\-do\\-i\\-close\\-my\\-personal\\-account)|(KXT7TVJG\\\/why\\-do\\-i\\-see\\-unpaid\\-invoices\\-when\\-trying\\-to\\-close\\-my\\-account))",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",43],
      "arg1":"(^$|((^|,)115433_259($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/pricing"
    },{
      "function":"_eq",
      "arg0":["macro",44],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"estimatedCostHover"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"dynosClick"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"postgresRadioClick"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"redisRadioClick"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"kafkaRadioClick"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"dashboard.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"redis.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"postgres.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"dataclips.heroku.com"
    },{
      "function":"_sw",
      "arg0":["macro",6],
      "arg1":"https:\/\/signup.heroku.com\/nodese"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"id.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"engineering.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"toolbelt.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"partners.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",49],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",50],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"kafka-summit-nyc-2019"
    },{
      "function":"_cn",
      "arg0":["macro",6],
      "arg1":"www.heroku.com\/dreamforce"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"www\\.heroku\\.com(\\\/$|\\\/home|\\\/pricing)",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",38],
      "arg1":"li.kafka-tier-item input"
    },{
      "function":"_css",
      "arg0":["macro",38],
      "arg1":"li.redis-tier-item input"
    },{
      "function":"_css",
      "arg0":["macro",38],
      "arg1":"li.postgres-tier-item input"
    },{
      "function":"_css",
      "arg0":["macro",38],
      "arg1":"[id^=\"slider-dyno\"] \u003E div.slider-wrapper div.background"
    },{
      "function":"_re",
      "arg0":["macro",5],
      "arg1":"elements\\.heroku\\.com|elements-staging\\.heroku\\.com|elements-noe-elements-b-7dz3xj\\.herokuapp\\.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"\/"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/home"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"https:\/\/www.heroku.com\/free"
    }],
  "rules":[
    [["if",0,1,2],["add",0,36]],
    [["if",3],["add",0,73]],
    [["if",8],["add",1]],
    [["if",9],["add",2]],
    [["if",3],["unless",10],["add",3]],
    [["if",0,1,2],["unless",10],["add",3]],
    [["if",3,5],["add",4,18],["block",0,3,20,28,29,30,34,39,43,44,73,75]],
    [["if",3,11],["add",5,15,20,28,30,34,75,76,81]],
    [["if",3,13],["add",6]],
    [["if",3,14],["add",7,75]],
    [["if",3,15,16],["add",8,13,47]],
    [["if",3,17],["add",9]],
    [["if",3,18],["add",10,11,12,35,45,46,48,61],["block",20]],
    [["if",3,19],["add",14]],
    [["if",3,20],["add",14]],
    [["if",3,21],["add",15,17,28,30,34,75,76]],
    [["if",3,22],["add",15,28,30,34,76]],
    [["if",3,23],["add",16,20,28,30,34,75,76,81]],
    [["if",7,24],["add",19]],
    [["if",3,25],["add",20,28,30,34,75]],
    [["if",7,28],["add",21]],
    [["if",7,28],["unless",10],["add",22]],
    [["if",8],["unless",10],["add",23]],
    [["if",9],["unless",10],["add",24]],
    [["if",5,7],["unless",10],["add",25]],
    [["if",29],["add",26]],
    [["if",29],["unless",10],["add",27]],
    [["if",3,30],["add",29]],
    [["if",31,32,33],["add",31]],
    [["if",33,34],["add",32]],
    [["if",33,35,36],["add",33]],
    [["if",3,4],["add",36,76],["block",0,43,44]],
    [["if",7,28,37],["add",37]],
    [["if",8,37],["add",38]],
    [["if",0,1,2,37,38],["add",39]],
    [["if",7,37],["add",39]],
    [["if",29,37],["add",40]],
    [["if",9,37],["add",41]],
    [["if",5,7,37],["add",42]],
    [["if",3,6],["add",43,44]],
    [["if",39,40,41,42],["add",49,50]],
    [["if",43,44,45],["add",51,52]],
    [["if",46],["add",53,54]],
    [["if",47],["add",55,56]],
    [["if",48],["add",57,58]],
    [["if",49],["add",59,60]],
    [["if",7],["add",62,63,64,65,66,67,68,69,70,71,72]],
    [["if",7,54],["add",74]],
    [["if",7,55],["add",75]],
    [["if",3,56],["add",75,76]],
    [["if",3,57],["add",76]],
    [["if",3,58],["add",76]],
    [["if",7,59],["add",77]],
    [["if",60,61],["add",78]],
    [["if",61],["add",79]],
    [["if",7,62],["add",80]],
    [["if",3,63],["add",82]],
    [["if",61,64,65],["add",83]],
    [["if",43,44,61],["add",84]],
    [["if",33,43,44,66],["add",85]],
    [["if",33,43,44,67],["add",86]],
    [["if",33,43,44,68],["add",87]],
    [["if",33,43,44,69],["add",88]],
    [["if",3,70,71],["add",89]],
    [["if",3,72],["add",90]],
    [["if",3,73],["add",90]],
    [["if",3,74],["add",91]],
    [["if",6,7],["block",0,3]],
    [["if",3,12],["block",5,6,7,8,9,10,11,12,13,15,16,17,18,19,20,28,29,30,34,35,45,46,47,48,61,73,74]],
    [["if",3,26],["unless",5,27],["block",20,73,75]],
    [["if",3,50],["block",73]],
    [["if",7,51],["block",73]],
    [["if",3,52],["block",73]],
    [["if",3,53],["block",73]],
    [["if",55,61],["block",79]]]
},
"runtime":[[50,"__cegg",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","getTimestamp"]],[52,"d",["require","makeInteger"]],[52,"e",["require","setInWindow"]],[52,"f",[17,[15,"a"],"usersNumericId"]],[22,[28,[15,"f"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[22,[17,[15,"a"],"snapshotName"],[46,["e","CE_SNAPSHOT_NAME",[17,[15,"a"],"snapshotName"],true]]],[41,"g"],[3,"g",[2,[15,"f"],"toString",[7]]],[42,[23,[17,[15,"g"],"length"],8],[46],false,[46,[3,"g",[0,"0",[15,"g"]]]]],[52,"h",[2,[15,"g"],"match",[7,"(\\d+)(\\d{4})$"]]],[22,[28,[15,"h"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[52,"i",[0,[0,[0,[0,[0,[0,"https://script.crazyegg.com/pages/scripts/",[16,[15,"h"],1]],"/"],[16,[15,"h"],2]],".js"],"?"],["d",[10,["c"],3600000]]]],["b",[15,"i"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],[2,[15,"f"],"toString",[7]]]]]
,"permissions":{"__cegg":{"access_globals":{"keys":[{"key":"CE_SNAPSHOT_NAME","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/script.crazyegg.com\/pages\/scripts\/*"]}}}

,"security_groups":{
"nonGoogleScripts":["__cegg"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var ea;a:{var fa={Of:!0},ia={};try{ia.__proto__=fa;ea=ia.Of;break a}catch(a){}ea=!1}ca=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=ca,la=function(a,b){a.prototype=ba(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null,pa=function(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a},qa=function(a){return a};var ra=function(a,b){this.a=a;this.i=b};var sa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ua=function(){this.s={};this.m=!1;this.F={}};ua.prototype.get=function(a){return this.s["dust."+a]};ua.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.s[a]=b))};ua.prototype.has=function(a){return this.s.hasOwnProperty("dust."+a)};var wa=function(a){var b=[],c;for(c in a.s)a.s.hasOwnProperty(c)&&b.push(c.substr(5));return b};var k=function(a){this.i=new ua;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(sa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=k.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof k?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!sa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else sa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():sa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.mc=function(){for(var a=wa(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new k(a)};
var xa=function(a,b){if(sa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.s[d]}};aa=k.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new k(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return sa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var ya=function(){function a(f,g){if(b[f]){if(b[f].Zb+g>b[f].max)throw Error("Quota exceeded");b[f].Zb+=g}}var b={},c=void 0,d=void 0,e={ih:function(f){c=f},Ce:function(){c&&a(c,1)},kh:function(f){d=f},Ea:function(f){d&&a(d,f)},Jh:function(f,g){b[f]=b[f]||{Zb:0};b[f].max=g},Fg:function(f){return b[f]&&b[f].Zb||0},reset:function(){b={}},mg:a};e.onFnConsume=e.ih;e.consumeFn=e.Ce;e.onStorageConsume=e.kh;e.consumeStorage=e.Ea;e.setMax=e.Jh;e.getConsumed=e.Fg;e.reset=e.reset;e.consume=e.mg;return e};var za=function(a,b){this.F=a;this.N=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ua;this.a=this.s=void 0};za.prototype.add=function(a,b){Ba(this,a,b,!1)};var Ba=function(a,b,c,d){if(!a.i.m)if(a.F.Ea(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
za.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ea(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};za.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};za.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var Da=function(a){var b=new za(a.F,a);a.s&&(b.s=a.s);b.N=a.N;b.a=a.a;return b};var Ea=function(){},Fa=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ga=function(a){return"number"==typeof a&&!isNaN(a)},Ha=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ia=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ja=function(a,b){if(a&&Ha(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ka=function(a,b){if(!Ga(a)||
!Ga(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ma=function(a,b){for(var c=new La,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Na=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Oa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Pa=function(a){return Math.round(Number(a))||0},Qa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ra=function(a){var b=[];if(Ha(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Sa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ta=function(){return(new Date).getTime()},La=function(){this.prefix="gtm.";this.values={}};La.prototype.set=function(a,b){this.values[this.prefix+a]=b};La.prototype.get=function(a){return this.values[this.prefix+a]};
var Ua=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Va=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Wa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Xa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ya=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Za=function(a){for(var b=B,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},$a=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},ab=function(a){var b=[];Na(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var cb=function(a,b){ua.call(this);this.a=a;this.N=b};la(cb,ua);cb.prototype.toString=function(){return this.a};cb.prototype.mc=function(){return new k(wa(this))};cb.prototype.i=function(a,b){a.F.Ce();return this.N.apply(db(this,a),Array.prototype.slice.call(arguments,1))};var db=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ha(d)?eb(e,d):d};c.prototype.F=function(d){return fb(this.m,d)};c.prototype.s=function(){return b.F};return new c(a,b)};
cb.prototype.Ja=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var fb=function(a,b){for(var c,d=0;d<b.length&&!(c=eb(a,b[d]),c instanceof ra);d++);return c},eb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof cb))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.s;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var gb=function(){ua.call(this)};la(gb,ua);gb.prototype.mc=function(){return new k(wa(this))};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var hb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,ib=function(a){if(null==a)return String(a);var b=hb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},jb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},kb=function(a){if(!a||"object"!=ib(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!jb(a,"constructor")&&!jb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||jb(a,b)},E=function(a,b){var c=b||("array"==ib(a)?[]:{}),d;for(d in a)if(jb(a,d)){var e=a[d];"array"==ib(e)?("array"!=ib(c[d])&&(c[d]=[]),c[d]=E(e,c[d])):kb(e)?(kb(c[d])||(c[d]={}),c[d]=E(e,c[d])):c[d]=e}return c};var mb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n=wa(h),m=0;m<n.length;m++)l[n[m]]=g(h.get(n[m]))},g=function(h){var l=Ia(d,h);if(-1<l)return e[l];if(h instanceof k){var n=[];d.push(h);e.push(n);for(var m=h.mc(),r=0;r<m.length();r++)n[m.get(r)]=g(h.get(m.get(r)));return n}if(h instanceof gb){var t={};d.push(h);e.push(t);f(h,t);return t}if(h instanceof cb){var q=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=lb(u[v],b);var w=b?b.F:ya(),y=new za(w);
b&&(y.a=b.a);return g(h.i.apply(h,[y].concat(u)))};d.push(h);e.push(q);f(h,q);return q}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null;default:if(c)return c(h,b)}};return g(a)},lb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var n in h)h.hasOwnProperty(n)&&l.set(n,g(h[n]))},g=function(h){var l=Ia(d,h);if(-1<l)return e[l];if(Ha(h)||Oa(h)){var n=new k([]);d.push(h);e.push(n);for(var m in h)h.hasOwnProperty(m)&&n.set(m,
g(h[m]));return n}if(kb(h)){var r=new gb;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var t=new cb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),w=0;w<v.length;w++)v[w]=mb(this.a(v[w]),b);return g((0,this.m.N)(h,h,v))});d.push(h);e.push(t);f(h,t);return t}var q=typeof h;if(null===h||"string"===q||"number"===q||"boolean"===q)return h;if(void 0!==h&&c)return c(h,b)};return g(a)};var nb={control:function(a,b){return new ra(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof k))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.s().Ea(a.length+f.length);return new cb(a,function(){return function(g){var h=Da(d);void 0===h.a&&(h.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),n=0;n<l.length;n++)if(l[n]=this.a(l[n]),l[n]instanceof ra)return l[n];for(var m=e.get("length"),r=
0;r<m;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new k(l));var t=fb(h,f);if(t instanceof ra)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.s();b.Ea(arguments.length);for(var c=new k,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ea(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.s(),c=new gb,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ea(g);c.set(e,f)}return c},undefined:function(){}};var ob=function(){this.m=ya();this.a=new za(this.m)},pb=function(a,b,c){var d=new cb(b,c);d.m=!0;a.a.set(b,d)};ob.prototype.hc=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};ob.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=eb(this.a,arguments[c]);return b};ob.prototype.s=function(a,b){var c=Da(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=d=eb(c,arguments[e]);return d};var rb=function(a){if(a instanceof rb)return a;this.Ga=a};rb.prototype.toString=function(){return String(this.Ga)};var sb=function(a,b){return mb(a,b,function(c){})},tb=function(a,b){var c=void 0;return lb(a,b,c)};var ub=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var vb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof k)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new k(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new k(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new k(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.i(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=ub(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):xa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new k(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=ub(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):xa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var wb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),xb=new ra("break"),yb=new ra("continue"),zb=function(a,b){return this.a(a)+this.a(b)},Ab=function(a,b){return this.a(a)&&this.a(b)},Db=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof k))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=Ia(wb,b))return tb(a[b].apply(a,ub(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof k){if(a.has(b)){var d=a.get(b);if(d instanceof cb){var e=ub(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=Ia(vb.supportedMethods,b)){var f=ub(c);f.unshift(this.m);
return vb[b].apply(a,f)}}if(a instanceof cb||a instanceof gb){if(a.has(b)){var g=a.get(b);if(g instanceof cb){var h=ub(c);h.unshift(this.m);return g.i.apply(g,h)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof cb?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,ub(c))}if(a instanceof rb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Eb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");
var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=this.a(b);c.set(a,d);return d},Fb=function(a){var b=Da(this.m),c=fb(b,Array.prototype.slice.apply(arguments));if(c instanceof ra)return c},Gb=function(){return xb},Hb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof ra)return d}},Ib=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);Ba(b,d,e,
!0)}}},Jb=function(){return yb},Kb=function(a,b,c){var d=new k;b=this.a(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.add(a,this.a(f))},Lb=function(a,b){return this.a(a)/this.a(b)},Mb=function(a,b){a=this.a(a);b=this.a(b);var c=a instanceof rb,d=b instanceof rb;return c||d?c&&d?a.Ga==b.Ga:!1:a==b},Nb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Ob(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=fb(e,c);if(f instanceof ra){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof gb||b instanceof k||b instanceof cb)for(var g=b.mc(),h=g.length(),l=0;l<h;l++){var n=a(g.get(l)),m=fb(n,c);if(m instanceof ra){if("break"==m.a)break;if("return"==m.a)return m}}}
var Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){d.set(a,e);return d},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){var f=Da(d);Ba(f,a,e,!0);return f},b,c)},Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){var f=Da(d);f.add(a,e);return f},b,c)},Sb=function(a){return this.m.get(this.a(a))},Ub=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");if(a instanceof gb||a instanceof k||a instanceof cb)c=a.get(b);else if("string"==typeof a)"length"==b?c=a.length:sa(b)&&(c=a[b]);else if(a instanceof rb)return;return c},Vb=function(a,b){return this.a(a)>this.a(b)},Wb=function(a,b){return this.a(a)>=this.a(b)},Xb=function(a,b){a=this.a(a);b=this.a(b);a instanceof rb&&(a=a.Ga);b instanceof rb&&(b=b.Ga);return a===b},Yb=function(a,b){return!Xb.call(this,a,b)},Zb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);
if(e instanceof ra)return e},$b=function(a,b){return this.a(a)<this.a(b)},ac=function(a,b){return this.a(a)<=this.a(b)},bc=function(a,b){return this.a(a)%this.a(b)},cc=function(a,b){return this.a(a)*this.a(b)},dc=function(a){return-this.a(a)},ec=function(a){return!this.a(a)},fc=function(a,b){return!Mb.call(this,a,b)},gc=function(){return null},hc=function(a,b){return this.a(a)||this.a(b)},ic=function(a,b){var c=this.a(a);this.a(b);return c},jc=function(a){return this.a(a)},kc=function(a){return Array.prototype.slice.apply(arguments)},
lc=function(a){return new ra("return",this.a(a))},mc=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof cb||a instanceof k||a instanceof gb)&&a.set(b,c);return c},nc=function(a,b){return this.a(a)-this.a(b)},oc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ha(d)||!Ha(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===this.a(d[h]))if(f=this.a(e[h]),
f instanceof ra){var l=f.a;if("break"==l)return;if("return"==l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof ra&&("return"==f.a||"continue"==f.a)))return f},pc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},qc=function(a){a=this.a(a);return a instanceof cb?"function":typeof a},rc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},sc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&
(e=this.F(f),e instanceof ra)){if("break"==e.a)return;if("return"==e.a)return e}for(;this.a(a);){e=this.F(f);if(e instanceof ra){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},tc=function(a){return~Number(this.a(a))},uc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},xc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},yc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},zc=function(a,b){return Number(this.a(a))&Number(this.a(b))},Ac=function(a,b){return Number(this.a(a))^
Number(this.a(b))},Bc=function(a,b){return Number(this.a(a))|Number(this.a(b))};var Dc=function(){this.a=new ob;Cc(this)};Dc.prototype.hc=function(a){return Ec(this.a.i(a))};
var Gc=function(a,b){return Ec(Fc.a.s(a,b))},Cc=function(a){var b=function(d,e){var f=a.a,g=String(e);nb.hasOwnProperty(d)&&pb(f,g||d,nb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){pb(a.a,String(d),e)};c(0,zb);c(1,Ab);c(2,Db);c(3,Eb);c(53,Fb);c(4,Gb);c(5,Hb);c(52,Ib);c(6,Jb);c(9,Hb);c(50,Kb);c(10,Lb);c(12,Mb);c(13,Nb);c(47,Pb);c(54,Qb);c(55,Rb);c(15,Sb);c(16,Ub);c(17,Ub);c(18,Vb);c(19,Wb);c(20,Xb);c(21,Yb);c(22,Zb);c(23,$b);c(24,ac);c(25,bc);c(26,cc);
c(27,dc);c(28,ec);c(29,fc);c(45,gc);c(30,hc);c(32,ic);c(33,ic);c(34,jc);c(35,jc);c(46,kc);c(36,lc);c(43,mc);c(37,nc);c(38,oc);c(39,pc);c(40,qc);c(41,rc);c(42,sc);c(58,tc);c(57,uc);c(60,xc);c(61,yc);c(56,zc);c(62,Ac);c(59,Bc)},Ic=function(){var a=Fc,b=Hc();pb(a.a,"require",b)},Jc=function(a,b){a.a.a.N=b};function Ec(a){if(a instanceof ra||a instanceof cb||a instanceof k||a instanceof gb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};
var Kc=[],Lc={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Mc=function(a){return Lc[a]},Nc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Rc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Sc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Tc=function(a){return Sc[a]};
Kc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Rc,Tc)+"'"}};var cd=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,dd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ed=function(a){return dd[a]};Kc[16]=function(a){return a};var gd;
var hd=[],id=[],jd=[],kd=[],ld=[],md={},nd,od,pd,qd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},rd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=md[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):gd(c,e,b)},td=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=sd(a[e],b,c));
return d},ud=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=md[b];return c?c.priorityOverride||0:0},sd=function(a,b,c){if(Ha(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(sd(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=hd[f];if(!g||b.cd(g))return;c[f]=!0;try{var h=td(g,b,c);h.vtp_gtmEventId=b.id;d=rd(h,b);pd&&(d=pd.og(d,h))}catch(y){b.Ve&&b.Ve(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[sd(a[l],b,c)]=sd(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,m=1;m<a.length;m++){var r=sd(a[m],b,c);od&&(n=n||r===od.Sb);d.push(r)}return od&&n?od.rg(d):d.join("");case "escape":d=sd(a[1],b,c);if(od&&Ha(a[1])&&"macro"===a[1][0]&&od.Sg(a))return od.qh(d);d=String(d);for(var t=2;t<a.length;t++)Kc[a[t]]&&(d=Kc[a[t]](d));return d;case "tag":var q=a[1];if(!kd[q])throw Error("Unable to resolve tag reference "+q+".");return d={He:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=vd(u,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},vd=function(a,b,c){try{return nd(td(a,b,c))}catch(d){JSON.stringify(a)}return 2};var wd=function(){var a=function(b){return{toString:function(){return b}}};return{Md:a("convert_case_to"),Nd:a("convert_false_to"),Od:a("convert_null_to"),Pd:a("convert_true_to"),Qd:a("convert_undefined_to"),bi:a("debug_mode_metadata"),Oa:a("function"),wf:a("instance_name"),Af:a("live_only"),Cf:a("malware_disabled"),Df:a("metadata"),di:a("original_vendor_template_id"),Hf:a("once_per_event"),$d:a("once_per_load"),ie:a("setup_tags"),ke:a("tag_id"),me:a("teardown_tags")}}();var xd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(xd,Error);function yd(a,b){if(Ha(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)yd(a[c],b[c])}};var zd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(zd,Error);var Ad=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var Cd=function(){return function(a,b){a instanceof zd||(a=new zd(a,Bd));b&&a.a.push(b);throw a;}};function Bd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ga(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var Dd=null,Gd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];Dd=Ed(a);for(var e=0;e<id.length;e++){var f=id[e],g=Fd(f);if(g){for(var h=f.add||[],l=0;l<h.length;l++)c[h[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var n=[],m=0;m<kd.length;m++)c[m]&&!d[m]&&(n[m]=!0);return n},Fd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Dd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=Dd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Ed=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=vd(jd[c],a));return b[c]}};var Hd={og:function(a,b){b[wd.Md]&&"string"===typeof a&&(a=1==b[wd.Md]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(wd.Od)&&null===a&&(a=b[wd.Od]);b.hasOwnProperty(wd.Qd)&&void 0===a&&(a=b[wd.Qd]);b.hasOwnProperty(wd.Pd)&&!0===a&&(a=b[wd.Pd]);b.hasOwnProperty(wd.Nd)&&!1===a&&(a=b[wd.Nd]);return a}};var Id=function(){this.a={}};function Jd(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new xd(c,d,g);}}function Kd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Jd(e,b,d,g);Jd(f,b,d,g)}}}};var Od=function(a){var b=Ld.C,c=this;this.i=new Id;this.a={};var d={},e=Kd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Na(a,function(f,g){var h={};Na(g,function(l,n){var m=Md(l,n);h[l]=m.assert;d[l]||(d[l]=m.L)});c.a[f]=function(l,n){var m=h[l];if(!m)throw Nd(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);m.apply(void 0,r);e.apply(void 0,r)}})},Qd=function(a){return Pd.a[a]||
function(){}};function Md(a,b){var c=qd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Nd;try{return rd(c)}catch(d){return{assert:function(e){throw new xd(e,{},"Permission "+e+" is unknown.");},L:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Nd(a,b,c){return new xd(a,b,c)};var Rd=!1;var Sd={};Sd.Sh=Qa('');Sd.yg=Qa('');var Td=Rd,Ud=Sd.yg,Vd=Sd.Sh;
var le=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},me=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;le(b,"/*")&&(b=b.slice(0,-2));le(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},ne=/^[a-z0-9-]+$/i,oe=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
qe=function(a,b){var c;if(!(c=!pe(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ne.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,n=b[g];if(!oe.exec(n))throw Error("Invalid Wildcard");var m=n.slice(8),r=m.slice(0,m.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=q.toLowerCase().indexOf(u.toLowerCase());t=-1===v?!1:q.length===u.length?
!0:q.length!==u.length+v?!1:"."===q[v-1]}if(t){var w=m.slice(m.indexOf("/"));h=me(l.pathname+l.search,w)?!0:!1}else h=!1;if(h)return!0}return!1},pe=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var te=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List|OpaqueValue)$/i,ue={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=te.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],n=typeof l;if(null===l||"undefined"===n){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var m=typeof l;l instanceof cb?m="Fn":l instanceof k?m="List":l instanceof gb?m="Map":l instanceof
rb&&(m="OpaqueValue");if(m!=h)throw Error("Error in "+a+". Argument "+f+" has type "+m+", which does not match required type "+(ue[h]||h)+".");}}};function ve(a){return""+a}
function we(a,b){var c=[];return c};var xe=function(a,b){var c=new cb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},ye=function(a,b){var c=new gb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Fa(e)?c.set(d,xe(a+"_"+d,e)):(Ga(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var ze=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new gb;return d=ye("AssertApiSubject",c)};var Ae=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new gb;return d=ye("AssertThatSubject",c)};function Be(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(sb(arguments[d],c));return tb(a.apply(null,b))}}var De=function(){for(var a=Math,b=Ce,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Be(a[e].bind(a)))}return c};var Ee=function(a){var b;return b};var Fe=function(a){var b;return b};var Ge=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var He=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var Ie=function(a){F(this.i.a,["message:?string"],arguments);};var Je=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Ka(a,b)};var Ke=function(){return(new Date).getTime()};var Le=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.ag.apply(null,Array.prototype.slice.call(arguments,1))};var Me=function(){Le(this,"read_container_data");var a=new gb;a.set("containerId",'GTM-JD26');a.set("version",'339');a.set("environmentName",'');a.set("debugMode",Td);a.set("previewMode",Vd);a.set("environmentMode",Ud);a.m=!0;return a};var Ne=function(a){if(null===a)return"null";if(a instanceof k)return"array";if(a instanceof cb)return"function";if(a instanceof rb){a=a.Ga;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var Oe=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Td||Vd)&&a.call(this,e.message)}}}return{parse:b(function(c){return tb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(sb(c))})}};var Pe=function(a){return Pa(sb(a,this.m))};var Qe=function(a){return Number(sb(a,this.m))};var Re=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Se=function(a,b,c){var d=null,e=!1;return e?d:null};var Ce="floor ceil round max min abs pow sqrt".split(" ");var Te=function(){var a={};return{Gg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Kh:function(b,c){a[b]=c},reset:function(){a={}}}},Ue=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Ve=function(){this.a={};this.i={}};Ve.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};
Ve.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.i.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.a[a]=c?void 0:Fa(b)?xe(a,b):ye(a,b)};
var Xe=function(a){var b=We;if(a.i.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function which already exists: getUserAgent.";if(a.a.hasOwnProperty("getUserAgent"))throw"Attempting to add a private function with an existing API name: getUserAgent.";a.i.getUserAgent=Fa(b)?xe("getUserAgent",b):ye("getUserAgent",b)};function Ye(){var a={};return a};var H={hb:"_ee",Pc:"_syn",hi:"_uei",ei:"_pci",Lc:"event_callback",Rb:"event_timeout",ka:"gtag.config",la:"allow_ad_personalization_signals",Mc:"restricted_data_processing",fb:"allow_google_signals",ma:"cookie_expires",Qb:"cookie_update",gb:"session_duration",oa:"user_properties",Aa:"transport_url",R:"ads_data_redaction",o:"ad_storage",K:"analytics_storage",lf:"region",nf:"wait_for_update"};
H.Ge=[H.la,H.fb,H.Qb];H.Me=[H.ma,H.Rb,H.gb];var Ze={},$e=function(a,b){Ze[a]=Ze[a]||[];Ze[a][b]=!0},af=function(a){for(var b=[],c=Ze[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var I=function(a){$e("GTM",a)};var bf=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,bf);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};pa(bf,Error);bf.prototype.name="CustomError";var cf=function(a,b){for(var c=a.split("%s"),d="",e=c.length-1,f=0;f<e;f++)d+=c[f]+(f<b.length?b[f]:"%s");bf.call(this,d+c[e])};pa(cf,bf);cf.prototype.name="AssertionError";var df=function(a,b){throw new cf("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var ef=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var ff;var gf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var hf;a:{var jf=ma.navigator;if(jf){var kf=jf.userAgent;if(kf){hf=kf;break a}}hf=""}var lf=function(a){return-1!=hf.indexOf(a)};var nf=function(){this.a="";this.i=mf};nf.prototype.toString=function(){return"SafeHtml{"+this.a+"}"};var of=function(a){if(a instanceof nf&&a.constructor===nf&&a.i===mf)return a.a;var b=typeof a;df("expected object of type SafeHtml, got '"+a+"' of type "+("object"!=b?b:a?Array.isArray(a)?"array":b:"null"));return"type_error:SafeHtml"},mf={},pf=new nf;pf.a=ma.trustedTypes&&ma.trustedTypes.emptyHTML?ma.trustedTypes.emptyHTML:"";var qf={MATH:!0,SCRIPT:!0,STYLE:!0,SVG:!0,TEMPLATE:!0},rf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){if("undefined"===typeof document)return!1;var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);if(!a.firstChild)return!1;var c=a.firstChild.firstChild;a.innerHTML=of(pf);return!c.parentElement}),sf=function(a,b){if(qf[a.tagName.toUpperCase()])throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of "+
a.tagName+".");if(rf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=of(b)};var tf=function(a){var b=new nf,c;if(void 0===ff){var d=null,e=ma.trustedTypes;if(e&&e.createPolicy){try{d=e.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(f){ma.console&&ma.console.error(f.message)}ff=d}else ff=d}c=ff;b.a=c?c.createHTML(a):a;return b};var B=window,K=document,uf=navigator,vf=K.currentScript&&K.currentScript.src,wf=function(a,b){var c=B[a];B[a]=void 0===c?b:c;return B[a]},xf=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},yf=function(a,b,c){var d=K.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;xf(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var h=g.nonce||g.getAttribute("nonce");if(h&&na.test(h)){oa=h;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=K.getElementsByTagName("script")[0]||K.body||K.head;l.parentNode.insertBefore(d,l);return d},zf=function(){if(vf){var a=vf.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Af=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=K.body&&K.body.lastChild||
K.body||K.head;d.parentNode.insertBefore(c,d);xf(c,b);void 0!==a&&(c.src=a);return c},Bf=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Cf=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Df=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){B.setTimeout(a,0)},Ef=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ff=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Gf=function(a){var b=K.createElement("div");sf(b,tf("A<div>"+a+"</div>"));b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},Hf=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},If=function(a){uf.sendBeacon&&uf.sendBeacon(a)||Bf(a)},Jf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var Kf={},Lf=function(a){return void 0==Kf[a]?!1:Kf[a]};var Mf=[];function Nf(){var a=wf("google_tag_data",{});a.ics||(a.ics={entries:{},set:Of,update:Pf,addListener:Qf,notifyListeners:Rf,active:!1});return a.ics}
function Of(a,b,c,d,e,f){var g=Nf();g.active=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},n=l.region,m=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(m===e||(m===d?n!==e:!m&&!n)){var r=!!(f&&0<f&&void 0===l.update),t={region:m,initial:"granted"===b,update:l.update,quiet:r};h[a]=t;r&&B.setTimeout(function(){h[a]===t&&t.quiet&&(t.quiet=!1,Sf(a),Rf(),$e("TAGGING",2))},f)}}}
function Pf(a,b){var c=Nf();c.active=!0;if(void 0!=b){var d=Tf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Tf(a);f.quiet?(f.quiet=!1,Sf(a)):g!==d&&Sf(a)}}function Qf(a,b){Mf.push({Be:a,Bg:b})}function Sf(a){for(var b=0;b<Mf.length;++b){var c=Mf[b];Ha(c.Be)&&-1!==c.Be.indexOf(a)&&(c.Ze=!0)}}function Rf(){for(var a=0;a<Mf.length;++a){var b=Mf[a];if(b.Ze){b.Ze=!1;try{b.Bg.call()}catch(c){}}}}
var Tf=function(a){var b=Nf().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},Uf=function(a){return!(Nf().entries[a]||{}).quiet},Vf=function(){return Lf("gtag_cs_api")?Nf().active:!1},Wf=function(a,b){Nf().addListener(a,b)},Xf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Uf(b[e]))return!0;return!1}if(c()){var d=!1;Wf(b,function(){d||c()||(d=!0,a())})}else a()},Yf=function(a,b){if(!1===Tf(b)){var c=!1;Wf([b],function(){!c&&Tf(b)&&(a(),c=!0)})}};var Zf=[H.o,H.K],$f=function(a){var b=a[H.lf];b&&I(40);var c=a[H.nf];c&&I(41);for(var d=Ha(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<Zf.length;f++){var g=Zf[f],h=a[Zf[f]],l=d[e];Nf().set(g,h,l,"US","US-IL",c)}},ag=function(a){for(var b=0;b<Zf.length;b++){var c=Zf[b],d=a[Zf[b]];Nf().update(c,d)}Nf().notifyListeners()},bg=function(a){var b=Tf(a);return void 0!=b?b:!0},cg=function(){for(var a=[],b=0;b<Zf.length;b++){var c=Tf(Zf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+a.join("")},
dg=function(a,b){Xf(a,b)};var fg=function(a){return eg?K.querySelectorAll(a):null},gg=function(a,b){if(!eg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},hg=!1;if(K.querySelectorAll)try{var ig=K.querySelectorAll(":root");ig&&1==ig.length&&ig[0]==K.documentElement&&(hg=!0)}catch(a){}var eg=hg;var Ld={},O=null,wg=Math.random();Ld.C="GTM-JD26";Ld.Wb="871";Ld.ci="";var xg={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},yg="www.googletagmanager.com/gtm.js";
var zg=yg,Ag=null,Bg=null,Cg="//www.googletagmanager.com/a?id="+Ld.C+"&cv=339",Dg={},Eg={},Fg=function(){var a=O.sequence||1;O.sequence=a+1;return a};
var Gg=function(){return"&tc="+kd.filter(function(a){return a}).length},Jg=function(){Hg||(Hg=B.setTimeout(Ig,500))},Ig=function(){Hg&&(B.clearTimeout(Hg),Hg=void 0);void 0===Kg||Lg[Kg]&&!Mg&&!Ng||(Og[Kg]||Pg.Ug()||0>=Qg--?(I(1),Og[Kg]=!0):(Pg.zh(),Bf(Rg()),Lg[Kg]=!0,Sg=Tg=Ng=Mg=""))},Rg=function(){var a=Kg;if(void 0===a)return"";var b=af("GTM"),c=af("TAGGING");return[Ug,Lg[a]?"":"&es=1",Vg[a],b?"&u="+b:"",c?"&ut="+c:"",Gg(),Mg,Ng,Tg,Sg,"&z=0"].join("")},Wg=function(){return[Cg,"&v=3&t=t","&pid="+
Ka(),"&rv="+Ld.Wb].join("")},Xg="0.005000">Math.random(),Ug=Wg(),Yg=function(){Ug=Wg()},Lg={},Mg="",Ng="",Sg="",Tg="",Kg=void 0,Vg={},Og={},Hg=void 0,Pg=function(a,b){var c=0,d=0;return{Ug:function(){if(c<a)return!1;Ta()-d>=b&&(c=0);return c>=a},zh:function(){Ta()-d>=b&&(c=0);c++;d=Ta()}}}(2,1E3),Qg=1E3,Zg=function(a,b){if(Xg&&!Og[a]&&Kg!==a){Ig();Kg=a;Sg=Mg="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";Vg[a]="&e="+c+"&eid="+a;Jg()}},$g=function(a,b,c){if(Xg&&!Og[a]&&
b){a!==Kg&&(Ig(),Kg=a);var d,e=String(b[wd.Oa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;Mg=Mg?Mg+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var h=(md[g]?"1":"2")+d;Sg=Sg?Sg+"."+h:"&ti="+h;Jg();2022<=Rg().length&&Ig()}},ah=function(a,b,c){if(Xg&&!Og[a]){a!==Kg&&(Ig(),Kg=a);var d=c+b;Ng=Ng?Ng+
"."+d:"&epr="+d;Jg();2022<=Rg().length&&Ig()}};var bh={},ch=new La,dh={},eh={},hh={name:"dataLayer",set:function(a,b){E($a(a,b),dh);fh()},get:function(a){return gh(a,2)},reset:function(){ch=new La;dh={};fh()}},gh=function(a,b){if(2!=b){var c=ch.get(a);Xg&&c!==ih(a.split("."))&&I(5);return c}return ih(a.split("."))},ih=function(a){for(var b=dh,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b},jh=function(a,b){eh.hasOwnProperty(a)||(ch.set(a,b),E($a(a,b),dh),fh())},fh=function(a){Na(eh,function(b,c){ch.set(b,c);
E($a(b,void 0),dh);E($a(b,c),dh);a&&delete eh[b]})},kh=function(a,b,c){bh[a]=bh[a]||{};var d=1!==c?ih(b.split(".")):ch.get(b);"array"===ib(d)||"object"===ib(d)?bh[a][b]=E(d):bh[a][b]=d},lh=function(a,b){if(bh[a])return bh[a][b]},mh=function(a,b){bh[a]&&delete bh[a][b]};var ph=/:[0-9]+$/,qh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},th=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=rh(a.protocol)||rh(B.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
B.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||B.location.hostname).replace(ph,"").toLowerCase());return sh(a,b,c,d,e)},sh=function(a,b,c,d,e){var f,g=rh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=uh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(ph,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||$e("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Ia(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=qh(f,e,!1,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},rh=function(a){return a?a.replace(":",
"").toLowerCase():""},uh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},vh=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||$e("TAGGING",1),c="/"+c);var d=b.hostname.replace(ph,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},wh=function(a){function b(n){var m=n.split("=")[0];return 0>d.indexOf(m)?n:m+"=0"}function c(n){return n.split("&").map(b).filter(function(m){return void 0!=
m}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=vh(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function xh(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Ah=function(a,b,c,d){return yh(d)?xh(a,String(b||document.cookie),c):[]},Dh=function(a,b,c,d,e){if(yh(e)){var f=Bh(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Ch(f,function(g){return g.cc},b);if(1===f.length)return f[0].id;f=Ch(f,function(g){return g.Gb},c);return f[0]?f[0].id:void 0}}};function Eh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=Ah(b,f,!1,d).indexOf(c)}
var Ih=function(a,b,c,d){function e(w,y,x){if(null==x)return delete h[y],w;h[y]=x;return w+"; "+y+"="+x}function f(w,y){if(null==y)return delete h[y],w;h[y]=!0;return w+"; "+y}if(!yh(c.Ia))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Fh(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.bh);g=e(g,"samesite",
c.Dh);c.Hh&&(g=f(g,"secure"));var n=c.domain;if("auto"===n){for(var m=Gh(),r=void 0,t=!1,q=0;q<m.length;++q){var u="none"!==m[q]?m[q]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(w){r=w;continue}t=!0;if(!Hh(u,c.path)&&Eh(v,a,b,c.Ia))return 0}if(r&&!t)throw r;return 1}n&&"none"!==n&&(g=e(g,"domain",n));g=f(g,c.flags);d&&d(a,h);return Hh(n,c.path)?1:Eh(g,a,b,c.Ia)?0:1},Jh=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ih(a,b,c)};
function Ch(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Bh(a,b,c){for(var d=[],e=Ah(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),cc:1*l[0]||1,Gb:1*l[1]||1}))}}return d}
var Fh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Kh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Lh=/(^|\.)doubleclick\.net$/i,Hh=function(a,b){return Lh.test(document.location.hostname)||"/"===b&&Kh.test(a)},Gh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Lh.test(e)||Kh.test(e)||a.push("none");
return a},yh=function(a){if(!Lf("gtag_cs_api")||!a||!Vf())return!0;if(!Uf(a))return!1;var b=Tf(a);return null==b?!0:!!b};var Mh=function(){for(var a=uf.userAgent+(K.cookie||"")+(K.referrer||""),b=a.length,c=B.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ta()/1E3)].join(".")},Ph=function(a,b,c,d,e){var f=Nh(b);return Dh(a,f,Oh(c),d,e)},Qh=function(a,b,c,d){var e=""+Nh(c),f=Oh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Nh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Oh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Rh(a,b,c){var d,e=a.Eb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ta())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Sh=["1"],Th={},Xh=function(a){var b=Uh(a.prefix);Th[b]||Vh(b,a.path,a.domain)||(Wh(b,Mh(),a),Vh(b,a.path,a.domain))};function Wh(a,b,c){var d=Qh(b,"1",c.domain,c.path),e=Rh(c);e.Ia="ad_storage";Jh(a,d,e)}function Vh(a,b,c){var d=Ph(a,b,c,Sh,"ad_storage");d&&(Th[a]=d);return d}function Uh(a){return(a||"_gcl")+"_au"};function Yh(){for(var a=Zh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function $h(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Zh,ai;function bi(a){Zh=Zh||$h();ai=ai||Yh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,h=e?a.charCodeAt(c+2):0,l=f>>2,n=(f&3)<<4|g>>4,m=(g&15)<<2|h>>6,r=h&63;e||(r=64,d||(m=64));b.push(Zh[l],Zh[n],Zh[m],Zh[r])}return b.join("")}
function ci(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),m=ai[n];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}Zh=Zh||$h();ai=ai||Yh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var di;var hi=function(){var a=ei,b=fi,c=gi(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Cf(K,"mousedown",d);Cf(K,"keyup",d);Cf(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},ii=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};gi().decorators.push(f)},ji=function(a,b,c){for(var d=gi().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,n=a,m=!!g.sameHost;if(l&&(m||n!==K.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(n)){h=!0;break a}}else if(0<=n.indexOf(l[r])||m&&0<=l[r].indexOf(n)){h=!0;break a}h=!1}if(h){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Wa(e,g.callback())}}return e},gi=function(){var a=wf("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var ki=/(.*?)\*(.*?)\*(.*)/,li=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,mi=/^(?:www\.|m\.|amp\.)+/,ni=/([^?#]+)(\?[^#]*)?(#.*)?/;function oi(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var qi=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(bi(String(d))))}var e=b.join("*");return["1",pi(e),e].join("*")},pi=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=di)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}di=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^di[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},si=function(){return function(a){var b=vh(B.location.href),c=b.search.replace("?",""),d=qh(c,"_gl",!1,!0)||"";a.query=ri(d)||{};var e=th(b,"fragment").match(oi("_gl"));a.fragment=ri(e&&e[3]||"")||{}}},ti=function(a){var b=si(),c=gi();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Wa(d,e.query),a&&Wa(d,e.fragment));return d},
ri=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=ki.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var n=g[2],m=0;m<b;++m)if(n===pi(h,m)){l=!0;break a}l=!1}if(l){for(var r={},t=h?h.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=ci(t[q+1]);return r}}}}catch(u){}};
function ui(a,b,c,d){function e(m){var r=m,t=oi(a).exec(r),q=r;if(t){var u=t[2],v=t[4];q=t[1];v&&(q=q+u+v)}m=q;var w=m.charAt(m.length-1);m&&"&"!==w&&(m+="&");return m+n}d=void 0===d?!1:d;var f=ni.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function vi(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=ji(b,1,c),e=ji(b,2,c),f=ji(b,3,c);if(Xa(d)){var g=qi(d);c?wi("_gl",g,a):xi("_gl",g,a,!1)}if(!c&&Xa(e)){var h=qi(e);xi("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,m=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){xi(n,m,r,void 0);break a}if("form"===r.tagName.toLowerCase()){wi(n,m,r);break a}}"string"==typeof r&&ui(n,m,r,void 0)}}
function xi(a,b,c,d){if(c.href){var e=ui(a,b,c.href,void 0===d?!1:d);gf.test(e)&&(c.href=e)}}
function wi(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=ui(a,b,c.action);gf.test(n)&&(c.action=n)}}}
var ei=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||vi(e,e.hostname)}}catch(g){}},fi=function(a){try{if(a.action){var b=th(vh(a.action),"host");vi(a,b)}}catch(c){}},yi=function(a,b,c,d){hi();ii(a,b,"fragment"===c?2:1,!!d,!1)},zi=function(a,b){hi();ii(a,[sh(B.location,"host",!0)],b,!0,!0)},Ai=function(){var a=K.location.hostname,b=li.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(mi,""),l=e.replace(mi,""),n;if(!(n=h===l)){var m="."+l;n=h.substring(h.length-m.length,h.length)===m}return n},Bi=function(a,b){return!1===a?!1:a||b||Ai()};var Ci=/^\w+$/,Di=/^[\w-]+$/,Ei=/^~?[\w-]+$/,Fi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},Gi=function(){if(!Lf("gtag_cs_api")||!Vf())return!0;var a=Tf("ad_storage");return null==a?!0:!!a},Hi=function(a,b){Uf("ad_storage")?Gi()?a():Yf(a,"ad_storage"):b?$e("TAGGING",3):Xf(function(){Hi(a,!0)},["ad_storage"])},Ki=function(a){var b=[];if(!K.cookie)return b;var c=Ah(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=Ii(c[d]);e&&-1===Ia(b,e)&&b.push(e)}return Ji(b)};
function Li(a){return a&&"string"==typeof a&&a.match(Ci)?a:"_gcl"}
var Ni=function(){var a=vh(B.location.href),b=th(a,"query",!1,void 0,"gclid"),c=th(a,"query",!1,void 0,"gclsrc"),d=th(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||qh(e,"gclid",!1,void 0);c=c||qh(e,"gclsrc",!1,void 0)}return Mi(b,c,d)},Mi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Di))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Lf("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Pi=function(a){var b=Ni();Hi(function(){return Oi(b,a)})};
function Oi(a,b,c){function d(n,m){var r=Qi(n,e);r&&(Jh(r,m,f),g=!0)}b=b||{};var e=Li(b.prefix);c=c||Ta();var f=Rh(b,c,!0);f.Ia="ad_storage";var g=!1,h=Math.round(c/1E3),l=function(n){return["GCL",h,n].join(".")};a.aw&&(!0===b.Ai?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var Si=function(a,b){var c=ti(!0);Hi(function(){for(var d=Li(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Fi[f]){var g=Qi(f,d),h=c[g];if(h){var l=Math.min(Ri(h),Ta()),n;b:{for(var m=l,r=Ah(g,K.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(Ri(r[t])>m){n=!0;break b}n=!1}if(!n){var q=Rh(b,l,!0);q.Ia="ad_storage";Jh(g,h,q)}}}}Oi(Mi(c.gclid,c.gclsrc),b)})},Qi=function(a,b){var c=Fi[a];if(void 0!==c)return b+c},Ri=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Ii(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Ti=function(a,b,c,d,e){if(Ha(b)){var f=Li(e),g=function(){for(var h={},l=0;l<a.length;++l){var n=Qi(a[l],f);if(n){var m=Ah(n,K.cookie,void 0,"ad_storage");m.length&&(h[n]=m.sort()[m.length-1])}}return h};Hi(function(){yi(g,b,c,d)})}},Ji=function(a){return a.filter(function(b){return Ei.test(b)})},Ui=function(a,b){for(var c=Li(b.prefix),d={},e=0;e<a.length;e++)Fi[a[e]]&&(d[a[e]]=Fi[a[e]]);Hi(function(){Na(d,function(f,g){var h=Ah(c+g,K.cookie,void 0,"ad_storage");if(h.length){var l=h[0],n=Ri(l),
m={};m[f]=[Ii(l)];Oi(m,b,n)}})})};function Vi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var Wi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(Vf()){var c=Ni();if(Vi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);zi(function(){return d},3);zi(function(){var e={};return e._up="1",e},1)}}},Xi=function(){var a;if(Gi()){for(var b=[],c=K.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Ad:f[1],value:f[2]})}var g={};if(b&&b.length)for(var h=0;h<b.length;h++){var l=b[h].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[h].Ad]||(g[b[h].Ad]=[]),g[b[h].Ad].push({timestamp:l[1],Dg:l[2]}))}a=g}else a={};return a};var Yi=/^\d+\.fls\.doubleclick\.net$/;function Zi(a,b){Uf(H.o)?bg(H.o)?a():Yf(a,H.o):b?I(42):dg(function(){Zi(a,!0)},[H.o])}function $i(a){var b=vh(B.location.href),c=th(b,"host",!1);if(c&&c.match(Yi)){var d=th(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function aj(a,b,c){if("aw"==a||"dc"==a){var d=$i("gcl"+a);if(d)return d.split(".")}var e=Li(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!bg(H.o)&&c,g;g=Ni()[a]||[];if(0<g.length)return f?["0"]:g}var h=Qi(a,e);return h?Ki(h):[]}
var bj=function(a){var b=$i("gac");if(b)return!bg(H.o)&&a?"0":decodeURIComponent(b);var c=Xi(),d=[];Na(c,function(e,f){for(var g=[],h=0;h<f.length;h++)g.push(f[h].Dg);g=Ji(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},cj=function(a,b){var c=Ni().dc||[];Zi(function(){Xh(b);var d=Th[Uh(b.prefix)],e=!1;if(d&&0<c.length){var f=O.joined_au=O.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var h=0;h<c.length;h++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[h]+"&auiddc="+d;If(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var n=Uh(b.prefix),m=Th[n];m&&Wh(n,m,b)}})};var dj=/[A-Z]+/,ej=/\s/,fj=function(a){if(p(a)&&(a=Sa(a),!ej.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(dj.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],D:d}}}}},hj=function(a){for(var b={},c=0;c<a.length;++c){var d=fj(a[c]);d&&(b[d.id]=d)}gj(b);var e=[];Na(b,function(f,g){e.push(g)});return e};
function gj(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.D[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var ij=function(){var a=!1;return a};var kj=function(a,b,c,d){return(2===jj()||d||"http:"!=B.location.protocol?a:b)+c},jj=function(){var a=zf(),b;if(1===a)a:{var c=zg;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var yj=function(a){return bg(H.o)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=wh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var zj=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Ej=function(a){var b;b||(b=gh("gtm.whitelist"));b&&I(9);
var c=b&&Ya(Ra(b),Aj),d;d||(d=gh("gtm.blacklist"));d||(d=gh("tagTypeBlacklist"))&&I(3);d?I(8):d=[];Dj()&&(d=Ra(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Ia(Ra(d),"google")&&I(2);var e=d&&Ya(Ra(d),Bj),f={};return function(g){var h=
g&&g[wd.Oa];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=Eg[h]||[],n=a(h,l);if(b){var m;if(m=n)a:{if(0>Ia(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>Ia(c,l[r])){I(11);m=!1;break a}}else{m=!1;break a}m=!0}n=m}var t=!1;if(d){var q=0<=Ia(e,h);if(q)t=q;else{var u=Ma(e,l||[]);u&&I(10);t=u}}var v=!n||t;v||!(0<=Ia(l,"sandboxedScripts"))||c&&-1!==Ia(c,"sandboxedScripts")||(v=Ma(e,Cj));return f[h]=v}},Dj=function(){return zj.test(B.location&&B.location.hostname)};var Fj={active:!0,isAllowed:function(){return!0},isWhitelisted:function(){return!0}},Gj=function(a){var b=O.zones;!b&&a&&(b=O.zones=a());return b};var Hj=function(){};var Ij=!1,Jj=0,Kj=[];function Lj(a){if(!Ij){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Ij=!0;for(var e=0;e<Kj.length;e++)N(Kj[e])}Kj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function Mj(){if(!Ij&&140>Jj){Jj++;try{K.documentElement.doScroll("left"),Lj()}catch(a){B.setTimeout(Mj,50)}}}var Nj=function(a){Ij?a():Kj.push(a)};var Oj={},Pj={},Qj=function(a,b,c,d){if(!Pj[a]||xg[b]||"__zone"===b)return-1;var e={};kb(d)&&(e=E(d,e));e.id=c;e.status="timeout";return Pj[a].tags.push(e)-1},Rj=function(a,b,c,d){if(Pj[a]){var e=Pj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function Sj(a){for(var b=Oj[a]||[],c=0;c<b.length;c++)b[c]();Oj[a]={push:function(d){d(Ld.C,Pj[a])}}}
var Vj=function(a,b,c){Pj[a]={tags:[]};Fa(b)&&Tj(a,b);c&&B.setTimeout(function(){return Sj(a)},Number(c));return Uj(a)},Tj=function(a,b){Oj[a]=Oj[a]||[];Oj[a].push(Va(function(){return N(function(){b(Ld.C,Pj[a])})}))};function Uj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Va(function(){b++;d&&b>=c&&Sj(a)})},$f:function(){d=!0;b>=c&&Sj(a)}}};var Wj=function(){function a(d){return!Ga(d)||0>d?0:d}if(!O._li&&B.performance&&B.performance.timing){var b=B.performance.timing.navigationStart,c=Ga(hh.get("gtm.start"))?hh.get("gtm.start"):0;O._li={cst:a(c-b),cbt:a(Bg-b)}}};var ak={},bk=function(){return B.GoogleAnalyticsObject&&B[B.GoogleAnalyticsObject]},ck=!1;
var dk=function(a){B.GoogleAnalyticsObject||(B.GoogleAnalyticsObject=a||"ga");var b=B.GoogleAnalyticsObject;if(B[b])B.hasOwnProperty(b)||I(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);B[b]=c}Wj();return B[b]},ek=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=bk();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var gk=function(a){},fk=function(){return B.GoogleAnalyticsObject||"ga"};
var hk=function(a,b){return function(){var c=bk(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};var mk=function(){return!1},nk=function(){var a={};return function(b,c,d){}};function ok(a,b,c,d){var e=kd[a],f=pk(a,b,c,d);if(!f)return null;var g=sd(e[wd.ie],c,[]);if(g&&g.length){var h=g[0];f=ok(h.index,{I:f,H:1===h.He?b.terminate:f,terminate:b.terminate},c,d)}return f}
function pk(a,b,c,d){function e(){if(f[wd.Cf])h();else{var w=td(f,c,[]),y=Qj(c.id,String(f[wd.Oa]),Number(f[wd.ke]),w[wd.Df]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var z=Ta()-C;$g(c.id,kd[a],"5");Rj(c.id,y,"success",z);g()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var z=Ta()-C;$g(c.id,kd[a],"6");Rj(c.id,y,"failure",z);h()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;$g(c.id,f,"1");var A=function(){var z=Ta()-C;$g(c.id,f,"7");Rj(c.id,y,"exception",z);x||(x=!0,h())};var C=Ta();try{rd(w,c)}catch(z){A(z)}}}var f=kd[a],g=b.I,h=b.H,l=b.terminate;if(c.cd(f))return null;var n=sd(f[wd.me],c,[]);if(n&&n.length){var m=n[0],r=ok(m.index,{I:g,H:h,terminate:l},c,d);if(!r)return null;g=r;h=2===m.He?l:r}if(f[wd.$d]||f[wd.Hf]){var t=f[wd.$d]?ld:c.Mh,q=g,u=h;if(!t[a]){e=Va(e);var v=qk(a,t,e);g=v.I;h=v.H}return function(){t[a](q,u)}}return e}
function qk(a,b,c){var d=[],e=[];b[a]=rk(d,e,c);return{I:function(){b[a]=sk;for(var f=0;f<d.length;f++)d[f]()},H:function(){b[a]=tk;for(var f=0;f<e.length;f++)e[f]()}}}function rk(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function sk(a){a()}function tk(a,b){b()};var wk=function(a,b){for(var c=[],d=0;d<kd.length;d++)if(a.Fb[d]){var e=kd[d];var f=b.add();try{var g=ok(d,{I:f,H:f,terminate:f},a,d);g?c.push({ef:d,$e:ud(e),hc:g}):(uk(d,a),f())}catch(l){f()}}b.$f();c.sort(vk);for(var h=0;h<c.length;h++)c[h].hc();return 0<c.length};function vk(a,b){var c,d=b.$e,e=a.$e;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.ef,h=b.ef;f=g>h?1:g<h?-1:0}return f}
function uk(a,b){if(!Xg)return;var c=function(d){var e=b.cd(kd[d])?"3":"4",f=sd(kd[d][wd.ie],b,[]);f&&f.length&&c(f[0].index);$g(b.id,kd[d],e);var g=sd(kd[d][wd.me],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var xk=!1,yk=function(a,b,c,d,e){if("gtm.js"==b){if(xk)return!1;xk=!0}Zg(a,b);var f=Vj(a,d,e);kh(a,"event",1);kh(a,"ecommerce",1);kh(a,"gtm");var g={id:a,name:b,cd:Ej(c),Fb:[],Mh:[],Ve:function(){I(6)}};g.Fb=Gd(g);
var h=wk(g,f);"gtm.js"!==b&&"gtm.sync"!==b||gk(Ld.C);if(!h)return h;for(var l=0;l<g.Fb.length;l++)if(g.Fb[l]){var n=kd[l];if(n&&!xg[String(n[wd.Oa])])return!0}return!1};function zk(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return vh(""+c+b).href}}function Ak(a,b){return Bk()?zk(a,b):void 0}
function Bk(){var a=!1;return a};var Ck=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.I=function(){};this.H=function(){};this.eventId=void 0},Dk=function(a){var b=new Ck;b.eventModel=a;return b},Ek=function(a,b){a.targetConfig=b;return a},Fk=function(a,b){a.containerConfig=b;return a},Gk=function(a,b){a.a=b;return a},Hk=function(a,b){a.globalConfig=b;return a},Ik=function(a,b){a.I=b;return a},Jk=function(a,b){a.H=b;return a};
Ck.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Kk=function(a){function b(e){Na(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Na(c,function(e){d.push(e)});return d};var Lk;if(3===Ld.Wb.length)Lk="g";else{var Mk="G";Lk=Mk}
var Nk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Lk,OPT:"o"},Ok=function(a){var b=Ld.C.split("-"),c=b[0].toUpperCase(),d=Nk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Ld.Wb.length){var g="w";f="2"+g}else f="";return f+d+Ld.Wb+e};var Pk=function(a,b){a.addEventListener&&a.addEventListener("message",b,!1)};var Qk=function(){return lf("iPhone")&&!lf("iPod")&&!lf("iPad")};lf("Opera");lf("Trident")||lf("MSIE");lf("Edge");!lf("Gecko")||-1!=hf.toLowerCase().indexOf("webkit")&&!lf("Edge")||lf("Trident")||lf("MSIE")||lf("Edge");-1!=hf.toLowerCase().indexOf("webkit")&&!lf("Edge")&&lf("Mobile");lf("Macintosh");lf("Windows");lf("Linux")||lf("CrOS");var Rk=ma.navigator||null;Rk&&(Rk.appVersion||"").indexOf("X11");lf("Android");Qk();lf("iPad");lf("iPod");Qk()||lf("iPad")||lf("iPod");hf.toLowerCase().indexOf("kaios");var Sk=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null};var Tk=function(){};var Uk=function(a){return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies||void 0!==a.listenerId&&"number"!==typeof a.listenerId||void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Vk=function(a,b){this.i=a;this.a=null;this.s={};this.F=0;this.N=void 0===b?500:b;this.m=null};la(Vk,Tk);
var Xk=function(a){return"function"===typeof a.i.__tcfapi||null!=Wk(a)},$k=function(a,b){var c=setTimeout(function(){c=0;b({tcString:"tcunavailable",internalErrorState:1})},a.N);Yk(a,"addEventListener",function(d){d&&Zk(d)&&(d.internalErrorState=Uk(d),0!=d.internalErrorState&&(d.tcString="tcunavailable"),Yk(a,"removeEventListener",null,d.listenerId),c&&(clearTimeout(c),c=0,b(d)))})};
Vk.prototype.addEventListener=function(a){Yk(this,"addEventListener",function(b,c){var d=c?b:{};d.internalErrorState=Uk(d);0!==d.internalErrorState&&(d.tcString="tcunavailable");a(d)})};Vk.prototype.removeEventListener=function(a){a&&a.listenerId&&Yk(this,"removeEventListener",null,a.listenerId)};
var bl=function(a,b){if(!a.purpose||!a.vendor)return!1;var c=al(a.vendor.consents,"755");return c&&"1"===b&&a.purposeOneTreatment&&"DE"===a.publisherCC?!0:c&&al(a.purpose.consents,b)},al=function(a,b){return!(!a||!a[b])},Yk=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.i.__tcfapi){var e=a.i.__tcfapi;e(b,2,c,d)}else if(Wk(a)){cl(a);var f=++a.F;a.s[f]=c;if(a.a){var g={};a.a.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Wk=function(a){if(a.a)return a.a;
a.a=Sk(a.i,"__tcfapiLocator");return a.a},cl=function(a){a.m||(a.m=function(b){try{var c,d;"string"===typeof b.data?d=JSON.parse(b.data):d=b.data;c=d.__tcfapiReturn;a.s[c.callId](c.returnValue,c.success)}catch(e){}},Pk(a.i,a.m))},Zk=function(a){return!1===a.gdprApplies||"error"===a.cmpStatus||"loaded"===a.cmpStatus&&("tcloaded"===a.eventStatus||"useractioncomplete"===a.eventStatus)?!0:!1};var dl={1:1,3:1,7:3,9:3,10:3};function el(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var fl=el("",550),gl=el("",500);function hl(){var a=O.tcf||{};return O.tcf=a}
var il=function(){var a=hl();if(!a.active){a.active=!0;var b=new Vk(B,3E3),c="x";"function"===typeof B.__tcfapi?c="s":Xk(b)?c="i":"function"===typeof B.__cmp?c="c":Sk(B,"__cmpLocator")&&(c="d");a.Ue=Ta();try{var d=!1;$k(b,function(){d=!0;a.gd=Ta()});d&&(a.gd=a.Ue)}catch(e){c="e"}a.type=c}},ol=function(){if(jl()?!0===B.gtag_enable_tcf_support:!1!==B.gtag_enable_tcf_support){var a=hl();if(!a.active||!a.Ha){var b=new Vk(B,3E3);if("function"===typeof B.__tcfapi||Xk(b)){a.active=!0;a.type="p";a.Ha={};
kl();var c=setTimeout(function(){ll(a);ml(a);c=null},gl);try{b.addEventListener(function(d){c&&(clearTimeout(c),c=null);if(0!==d.internalErrorState)ll(a),ml(a);else{var e;if(!1===d.gdprApplies)e=nl(),b.removeEventListener(d);else if("tcloaded"===d.eventStatus||"useractioncomplete"===d.eventStatus||"cmpuishown"===d.eventStatus){var f={},g;for(g in dl)if(dl.hasOwnProperty(g))if("1"===g)f["1"]=Zk(d)?!1===d.gdprApplies||"tcunavailable"===d.tcString?!0:bl(d,"1"):!1;else{var h=d.purpose&&d.vendor?al(d.purpose.legitimateInterests,
g)&&al(d.vendor.legitimateInterests,"755"):!1,l=bl(d,g),n=dl[g];1===n?f[g]=l:2===n?f[g]=h:3===n&&(f[g]=l||h)}e=f}e&&(a.tcString=d.tcString||"tcempty",a.Ha=e,ml(a))}})}catch(d){c&&(clearTimeout(c),c=null),ll(a),ml(a)}}}}};function ll(a){a.type="e";a.tcString="tcunavailable";a.Ha=nl()}function kl(){var a={};$f((a.ad_storage="denied",a.wait_for_update=fl,a))}var jl=function(){var a=!1;a=!0;return a};
function nl(){var a={},b;for(b in dl)dl.hasOwnProperty(b)&&(a[b]=!0);return a}function ml(a){var b={};ag((b.ad_storage=a.Ha["1"]?"granted":"denied",b))}var pl=function(){var a=hl();if(a.active&&void 0!==a.gd)return Number(a.gd-a.Ue)},ql=function(){var a=hl();return a.active&&a.Ha?a.tcString||"":""},rl=function(a){if(!dl.hasOwnProperty(String(a)))return!0;var b=hl();return b.active&&b.Ha?!!b.Ha[String(a)]:!0};function sl(a,b,c){function d(r){var t;O.reported_gclid||(O.reported_gclid={});t=O.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],v=function(C,z){z&&u.push(C+"="+encodeURIComponent(z))},w="https://www.google.com";if(Vf()){var y=bg(H.o);v("gcs",cg());r&&v("gcu","1");v("rnd",m);if((!f||g&&"aw.ds"!==g)&&bg(H.o)){var x=Ki("_gcl_aw");v("gclaw",x.join("."))}v("url",String(B.location).split(/[?#]/)[0]);v("dclid",tl(b,h));!y&&b&&(w="https://pagead2.googlesyndication.com")}
v("gdpr_consent",ql());"1"===ti(!1)._up&&v("gtm_up","1");v("gclid",tl(b,f));v("gclsrc",g);v("gtm",Ok(!c));var A=w+"/pagead/landing?"+u.join("&");If(A)}}var e=Ni(),f=e.gclid||"",g=e.gclsrc,h=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),n=Vf();if(l||n){var m=""+Mh();n?dg(function(){d();bg(H.o)||Yf(function(){return d(!0)},H.o)},[H.o]):d()}}function tl(a,b){var c=a&&!bg(H.o);return b&&c?"0":b}var gm=function(){var a=!0;rl(7)&&rl(9)&&rl(10)||(a=!1);var b=!0;b&&!rl(3)&&(a=!1);return a},hm=function(){var a=!0;rl(3)||(a=!1);return a};function Bm(){var a=O;return a.gcq=a.gcq||new Cm}
var Dm=function(a,b,c){Bm().register(a,b,c)},Em=function(a,b,c,d){Bm().push("event",[b,a],c,d)},Fm=function(a,b){Bm().push("config",[a],b)},Gm={},Hm=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Im=function(a,b,c,d,e){this.type=a;this.m=b;this.da=c||"";this.a=d;this.i=e},Cm=function(){this.m={};this.i={};this.a=[]},Jm=function(a,b){var c=fj(b);return a.m[c.containerId]=a.m[c.containerId]||new Hm},Km=function(a,b,c){if(b){var d=fj(b);if(d&&1===
Jm(a,b).status){Jm(a,b).status=2;var e={};Xg&&(e.timeoutId=B.setTimeout(function(){I(38);Jg()},3E3));a.push("require",[e],d.containerId);Gm[d.containerId]=Ta();if(ij()){
}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=B.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=Ak(c,g)||h;yf(l)}}}},Lm=function(a,b,c,d){if(d.da){var e=Jm(a,d.da),f=e.m;if(f){var g=E(c),h=E(e.targetConfig[d.da]),l=E(e.containerConfig),n=E(e.i),m=E(a.i),r=gh("gtm.uniqueEventId"),t=fj(d.da).prefix,q=Jk(Ik(Hk(Gk(Fk(Ek(Dk(g),h),l),n),m),function(){
ah(r,t,"2");}),function(){ah(r,t,"3");});try{ah(r,t,"1");f(d.da,b,d.m,q)}catch(u){ah(r,t,"4");}}}};
Cm.prototype.register=function(a,b,c){if(3!==Jm(this,a).status){Jm(this,a).m=b;Jm(this,a).status=3;c&&(Jm(this,a).i=c);var d=fj(a),e=Gm[d.containerId];if(void 0!==e){var f=O[d.containerId].bootstrap,g=d.prefix.toUpperCase();O[d.containerId]._spx&&(g=g.toLowerCase());var h=gh("gtm.uniqueEventId"),l=g,n=Ta()-f;if(Xg&&!Og[h]){h!==Kg&&(Ig(),Kg=h);var m=l+"."+Math.floor(f-e)+"."+Math.floor(n);Tg=Tg?Tg+","+m:"&cl="+m}delete Gm[d.containerId]}this.flush()}};
Cm.prototype.push=function(a,b,c,d){var e=Math.floor(Ta()/1E3);Km(this,c,b[0][H.Aa]||this.i[H.Aa]);this.a.push(new Im(a,e,c,b,d));d||this.flush()};
Cm.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Jm(this,c.da).status&&!a)return;Xg&&B.clearTimeout(c.a[0].timeoutId);break;case "set":Na(c.a[0],function(l,n){E($a(l,n),b.i)});break;case "config":var d=c.a[0],e=!!d[H.wc];delete d[H.wc];var f=Jm(this,c.da),g=fj(c.da),h=g.containerId===g.id;e||(h?f.containerConfig={}:f.targetConfig[c.da]={});f.a&&e||Lm(this,H.ka,d,c);f.a=!0;delete d[H.hb];h?E(d,f.containerConfig):
E(d,f.targetConfig[c.da]);break;case "event":Lm(this,c.a[1],c.a[0],c)}this.a.shift()}};var Mm=function(a){};var Nm=function(a,b){return!0};var Om=function(a,b){var c;return c};var Pm=function(a){};var Qm=function(a,b){var c;var d=tb(c,this.m);void 0===d&&void 0!==c&&I(45);return d};var Rm=function(a){var b;var h=tb(b,this.m);void 0===h&&void 0!==b&&I(45);return h};var Sm=function(a,b){var c=null;return tb(c,this.m)};var Tm=function(a){var b;return tb(b,this.m)};var Um=function(a){var b;return b};var Vm=function(a,b){b=void 0===b?!0:b;var c;return c};var Wm=function(a,b){var c;return c};var Xm=function(a,b){var c;return c};var Ym=function(a){var b="";return b};var Zm=function(a){var b="";return b};var We=function(){Le(this,"get_user_agent");return B.navigator.userAgent};var $m=function(a,b){};var an={},bn=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Le(this,"inject_script",a);var e=this.m,f=function(){b instanceof cb&&b.Ja(e)},g=function(){c instanceof cb&&c.Ja(e)};if(!d){yf(a,f,g);return}var h=d;an[h]?(an[h].onSuccess.push(f),an[h].onFailure.push(g)):(an[h]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=an[h].onSuccess,n=0;n<l.length;n++)N(l[n]);l.push=function(m){N(m);
return 0}},g=function(){for(var l=an[h].onFailure,n=0;n<l.length;n++)N(l[n]);an[h]=null},yf(a,f,g));};var cn=function(){return!1},dn={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var en=function(){};var fn=function(a,b){var c=!1;return c};var gn=function(){var a="";return a};var hn=function(){var a="";return a};var jn=function(a,b,c){};var kn=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var ln=function(a,b,c){F(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Le(this,"access_globals","readwrite",a);var d=a.split("."),e=B,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=sb(b,this.m),!0;return!1};var mn=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var nn=function(a,b,c){var d=this;};var on={},pn={};on.getItem=function(a){var b=null;return b};
on.setItem=function(a,b){};
on.removeItem=function(a){};on.clear=function(){};var qn=function(a){var b;return b};var Hc=function(){var a=new Ve;ij()?(a.add("injectHiddenIframe",Ea),a.add("injectScript",Ea)):(a.add("injectHiddenIframe",$m),a.add("injectScript",bn));var b=jn;a.add("Math",De());a.add("TestHelper",Ye());a.add("addEventCallback",Mm);a.add("aliasInWindow",Nm);a.add("assertApi",ze);a.add("assertThat",Ae);a.add("callInWindow",
Om);a.add("callLater",Pm);a.add("copyFromDataLayer",Qm);a.add("copyFromWindow",Rm);a.add("createArgumentsQueue",Sm);a.add("createQueue",Tm);a.add("decodeUri",Ee);a.add("decodeUriComponent",Fe);a.add("encodeUri",Ge);a.add("encodeUriComponent",He);a.add("fail",Ie);a.add("fromBase64",Um,!("atob"in B));a.add("generateRandom",Je);a.add("getContainerVersion",Me);a.add("getCookieValues",Vm);a.add("getQueryParameters",Wm);a.add("getReferrerQueryParameters",Xm);a.add("getReferrerUrl",Ym);a.add("getTimestamp",
Ke);a.add("getType",Ne);a.add("getUrl",Zm);a.add("localStorage",dn,!cn());a.add("logToConsole",en);a.add("makeInteger",Pe);a.add("makeNumber",Qe);a.add("makeString",Re);a.add("makeTableMap",Se);a.add("mock",Ue);a.add("queryPermission",fn);a.add("readCharacterSet",gn);a.add("readTitle",hn);a.add("sendPixel",b);a.add("setCookie",kn);a.add("setInWindow",ln);a.add("sha256",nn);a.add("templateStorage",on);a.add("toBase64",qn,!("btoa"in B));a.add("JSON",Oe(function(c){var d=this.m.a;d&&d.log.call(this,"error",c)}));return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else{var e;if(e=a.i.hasOwnProperty(c))b:{var f=this.m.a;if(f){var g=f.Ab();if(g&&0!==g.indexOf("__cvt_")){e=!0;break b}}e=!1}if(e)d=a.i.hasOwnProperty(c)?a.i[c]:void 0;else throw Error(c+" is not a valid API name.");}return d}};var Fc,Pd;
function rn(){var a=data.runtime||[],b=data.runtime_lines;Fc=new Dc;sn();gd=function(e,f,g){tn(f);var h=new gb;Na(f,function(q,u){var v=tb(u);void 0===v&&void 0!==u&&I(44);h.set(q,v)});Fc.a.a.s=Cd();var l={ag:Qd(e),eventId:void 0!==g?g.id:void 0,Ab:function(){return e},log:function(){}};if(mk()){var n=nk(),m=void 0,r=void 0;l.fa={i:{},a:function(q,u,v){1===u&&(m=q);7===u&&(r=v);n(q,u,v)},m:Te()};l.log=function(q,u){if(m){var v=Array.prototype.slice.call(arguments,1);n(m,4,{level:q,source:r,message:v})}}}var t=
Gc(l,[e,h]);Fc.a.a.s=void 0;t instanceof ra&&"return"===t.a&&(t=t.i);return sb(t)};Ic();for(var c=0;c<a.length;c++){var d=a[c];if(!Ha(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&yd(d,b[c]);Fc.hc(d)}}function tn(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Fa(b)&&(a.gtmOnSuccess=function(){N(b)});Fa(c)&&(a.gtmOnFailure=function(){N(c)})}
function sn(){var a=Fc;O.SANDBOXED_JS_SEMAPHORE=O.SANDBOXED_JS_SEMAPHORE||0;Jc(a,function(b,c,d){O.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{O.SANDBOXED_JS_SEMAPHORE--}})}function un(a){void 0!==a&&Na(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");Eg[e]=Eg[e]||[];Eg[e].push(b)}})};var vn="HA GF GP G UA AW DC".split(" "),wn=!1,xn={},yn=!1;function zn(a,b){var c={event:a};b&&(c.eventModel=E(b),b[H.Lc]&&(c.eventCallback=b[H.Lc]),b[H.Rb]&&(c.eventTimeout=b[H.Rb]));return c}var Bn=function(){return wn};
var Dn={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!kb(a[2])&&
void 0!=a[2])return;c=a[2]}var d=zn(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return yn=!0,Bn(),{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Pd.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;2==a.length&&kb(a[1])?b=E(a[1]):3==a.length&&p(a[1])&&(b={},kb(a[2])||Ha(a[2])?b[a[1]]=E(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}},consent:function(a){if(3===a.length){var b=function(){Bn()&&E(a[2],{subcommand:a[1]})};I(39);var c=a[1];"default"===c?(b(),$f(a[2])):"update"===c&&(b(),ag(a[2]))}}},En={policy:!0};var Fn=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Hn=function(a){var b=Gn(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var In=!1,Jn=[];function Kn(){if(!In){In=!0;for(var a=0;a<Jn.length;a++)N(Jn[a])}}var Ln=function(a){In?N(a):Jn.push(a)};var bo=function(a){if(ao(a))return a;this.a=a};bo.prototype.Kg=function(){return this.a};var ao=function(a){return!a||"object"!==ib(a)||kb(a)?!1:"getUntrustedUpdateValue"in a};bo.prototype.getUntrustedUpdateValue=bo.prototype.Kg;var co=[],eo=!1,fo=function(a){return B["dataLayer"].push(a)},go=function(a){var b=O["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function ho(a){var b=a._clear;Na(a,function(f,g){"_clear"!==f&&(b&&jh(f,void 0),jh(f,g))});Ag||(Ag=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=Fg(),a["gtm.uniqueEventId"]=d,jh("gtm.uniqueEventId",d));var e=io(a);switch(c){case "gtm.init":I(19),e&&I(20)}return e}
function io(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=O.zones;d=e?e.checkState(Ld.C,c):Fj;return d.active?yk(c,b,d.isAllowed||d.isWhitelist,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function jo(){for(var a=!1;!eo&&0<co.length;){eo=!0;delete dh.eventModel;fh();var b=co.shift();if(null!=b){var c=ao(b);if(c){var d=b;b=ao(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],h=gh(g,1);if(Ha(h)||kb(h))h=E(h);eh[g]=h}}try{if(Fa(b))try{b.call(hh)}catch(v){}else if(Ha(b)){var l=
b;if(p(l[0])){var n=l[0].split("."),m=n.pop(),r=l.slice(1),t=gh(n.join("."),2);if(void 0!==t&&null!==t)try{t[m].apply(t,r)}catch(v){}}}else{if(Oa(b)){a:{var q=b;if(q.length&&p(q[0])){var u=Dn[q[0]];if(u&&(!c||!En[q[0]])){b=u(q);break a}}b=void 0}if(!b){eo=!1;continue}}a=ho(b)||a}}finally{c&&fh(!0)}}eo=!1}return!a}
function ko(){var a=jo();try{Fn(B["dataLayer"],Ld.C)}catch(b){}return a}
var mo=function(){var a=wf("dataLayer",[]),b=wf("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};Nj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Ln(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<O.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new bo(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);co.push.apply(co,e);if(300<
this.length)for(I(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return jo()&&h};var d=a.slice(0);co.push.apply(co,d);lo()&&N(ko)},lo=function(){var a=!0;return a};var no={};no.Sb=new String("undefined");
var oo=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===no.Sb?b:a[d]);return c.join("")}};oo.prototype.toString=function(){return this.a("undefined")};oo.prototype.valueOf=oo.prototype.toString;no.Nf=oo;no.Oc={};no.rg=function(a){return new oo(a)};var po={};no.Ah=function(a,b){var c=Fg();po[c]=[a,b];return c};no.De=function(a){var b=a?0:1;return function(c){var d=po[c];if(d&&"function"===typeof d[b])d[b]();po[c]=void 0}};no.Sg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};no.qh=function(a){if(a===no.Sb)return a;var b=Fg();no.Oc[b]=a;return'google_tag_manager["'+Ld.C+'"].macro('+b+")"};no.dh=function(a,b,c){a instanceof no.Nf&&(a=a.a(no.Ah(b,c)),b=Ea);return{ad:a,I:b}};var qo=function(a,b,c){function d(f,g){var h=f[g];return h}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Ef(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},ro=function(a){O.hasOwnProperty("autoEventsSettings")||(O.autoEventsSettings={});var b=O.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},so=function(a,b,c){ro(a)[b]=c},to=function(a,b,c,d){var e=ro(a),f=Ua(e,b,d);e[b]=c(f)},uo=function(a,b,c){var d=ro(a);return Ua(d,b,c)};var vo=["input","select","textarea"],wo=["button","hidden","image","reset","submit"],xo=function(a){var b=a.tagName.toLowerCase();return!Ja(vo,function(c){return c===b})||"input"===b&&Ja(wo,function(c){return c===a.type.toLowerCase()})?!1:!0},yo=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):Hf(a,["form"],100)},zo=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(xo(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Ao=!!B.MutationObserver,Bo=void 0,Co=function(a){if(!Bo){var b=function(){var c=K.body;if(c)if(Ao)(new MutationObserver(function(){for(var e=0;e<Bo.length;e++)N(Bo[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Cf(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<Bo.length;e++)N(Bo[e])}))})}};Bo=[];K.body?b():N(b)}Bo.push(a)};var Xo=B.clearTimeout,Yo=B.setTimeout,P=function(a,b,c){if(ij()){b&&N(b)}else return yf(a,b,c)},Zo=function(){return new Date},$o=function(){return B.location.href},ap=function(a){return th(vh(a),"fragment")},bp=function(a){return uh(vh(a))},cp=function(a,b){return gh(a,b||2)},dp=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=fo(a)):d=fo(a);return d},ep=function(a,b){B[a]=b},V=function(a,b,c){b&&
(void 0===B[a]||c&&!B[a])&&(B[a]=b);return B[a]},fp=function(a,b,c){return Ah(a,b,void 0===c?!0:!!c)},gp=function(a,b,c){return 0===Jh(a,b,c)},hp=function(a,b){if(ij()){b&&N(b)}else Af(a,b)},ip=function(a){return!!uo(a,"init",!1)},jp=function(a){so(a,"init",!0)},kp=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":zg;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";P(kj("https://","http://",c))},lp=function(a,
b){var c=a[b];return c};var mp=no.dh;function Jp(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Kp=new La;function Lp(a,b){function c(g){var h=vh(g),l=th(h,"protocol"),n=th(h,"host",!0),m=th(h,"port"),r=th(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==m||"https"==l&&"443"==m)l="web",m="default";return[l,n,m,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Mp(a){return Np(a)?1:0}
function Np(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ha(c)){for(var d=0;d<c.length;d++)if(Mp({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return Jp(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var h;h=String(b).split(",");return 0<=Ia(h,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var n=a.ignore_case?"i":void 0;try{var m=String(c)+n,r=Kp.get(m);r||(r=new RegExp(c,n),Kp.set(m,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Lp(b,c)}return!1};var Op={},Pp=encodeURI,W=encodeURIComponent,Qp=Bf;var Rp=function(a,b){if(!a)return!1;var c=th(vh(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Sp=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Op.Tg=function(){var a=!1;return a};function qr(){return B.gaGlobal=B.gaGlobal||{}}var rr=function(){var a=qr();a.hid=a.hid||Ka();return a.hid},sr=function(a,b){var c=qr();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Br=window,Cr=document,Dr=function(a){var b=Br._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Br["ga-disable-"+a])return!0;try{var c=Br.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=xh("AMP_TOKEN",String(Cr.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Cr.getElementById("__gaOptOutExtension")?!0:!1};function Gr(a){delete a.eventModel[H.hb];Ir(a.eventModel)}var Ir=function(a){Na(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.oa]||{};Na(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Lr=function(a,b,c){Em(b,c,a)},Mr=function(a,b,c){Em(b,c,a,!0)},Or=function(a,b){};
function Nr(a,b){}var X={b:{}};

X.b.jsm=["customScripts"],function(){(function(a){X.__jsm=a;X.__jsm.g="jsm";X.__jsm.h=!0;X.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
X.b.c=["google"],function(){(function(a){X.__c=a;X.__c.g="c";X.__c.h=!0;X.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
X.b.e=["google"],function(){(function(a){X.__e=a;X.__e.g="e";X.__e.h=!0;X.__e.priorityOverride=0})(function(a){return String(lh(a.vtp_gtmEventId,"event"))})}();
X.b.f=["google"],function(){(function(a){X.__f=a;X.__f.g="f";X.__f.h=!0;X.__f.priorityOverride=0})(function(a){var b=cp("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?th(vh(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):bp(String(b)):String(b)})}();
X.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=qo(c,"gtm.click");dp(d)}}(function(b){X.__cl=b;X.__cl.g="cl";X.__cl.h=!0;X.__cl.priorityOverride=0})(function(b){if(!ip("cl")){var c=V("document");Cf(c,"click",a,!0);jp("cl")}N(b.vtp_gtmOnSuccess)})}();
X.b.j=["google"],function(){(function(a){X.__j=a;X.__j.g="j";X.__j.h=!0;X.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();X.b.k=["google"],function(){(function(a){X.__k=a;X.__k.g="k";X.__k.h=!0;X.__k.priorityOverride=0})(function(a){return fp(a.vtp_name,cp("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

X.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){X.__access_globals=b;X.__access_globals.g="access_globals";X.__access_globals.h=!0;X.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],n=l.key;l.read&&e.push(n);l.write&&f.push(n);l.execute&&g.push(n)}return{assert:function(m,r,t){if(!p(t))throw d(m,{},"Key must be a string.");if("read"===r){if(-1<Ia(e,t))return}else if("write"===r){if(-1<Ia(f,t))return}else if("readwrite"===r){if(-1<Ia(f,t)&&-1<Ia(e,t))return}else if("execute"===r){if(-1<Ia(g,t))return}else throw d(m,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(m,{},"Prohibited "+r+" on global variable: "+
t+".");},L:a}})}();
X.b.t=["google"],function(){(function(a){X.__t=a;X.__t.g="t";X.__t.h=!0;X.__t.priorityOverride=0})(function(){return Zo().getTime()})}();
X.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){X.__u=b;X.__u.g="u";X.__u.h=!0;X.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=cp("gtm.url",1);c=c||$o();var d=b[a("vtp_component")];if(!d||"URL"==d)return bp(String(c));var e=vh(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;g?Ha(h)?n=h:n=String(h).replace(/\s+/g,
"").split(","):n=[String(h)];for(var m=0;m<n.length;m++){var r=th(e,"QUERY",void 0,void 0,n[m]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=th(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
X.b.v=["google"],function(){(function(a){X.__v=a;X.__v.g="v";X.__v.h=!0;X.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=cp(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
X.b.ua=["google"],function(){function a(m,r){if(Vf()&&!d[m]){var t=function(){var q=bk(),u="gtm"+Fg(),v=l(r),w={name:u};h(v,w,!0);q("create",m,w);q(function(){q.remove(u)})};Yf(t,H.K);Yf(t,H.o);d[m]=!0}}var b,c={},d={},e=function(m){dg(function(){n(m)},[H.K,H.o])},f={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0},g={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0,_cd2l:!0},h=function(m,r,t){var q=0;if(m)for(var u in m)if(m.hasOwnProperty(u)&&(t&&f[u]||!t&&void 0===f[u])){var v=g[u]?Qa(m[u]):m[u];"anonymizeIp"!=u||v||(v=void 0);r[u]=v;q++}return q},l=
function(m){var r={};m.vtp_gaSettings&&E(Sp(m.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),r);E(Sp(m.vtp_fieldsToSet,"fieldName","value"),r);bg(H.K)||(r.storage="none");bg(H.o)||(r.allowAdFeatures=!1,r.storeGac=!1);gm()||(r.allowAdFeatures=!1);hm()||(r.allowAdPersonalizationSignals=!1);m.vtp_transportUrl&&(r._x_19=m.vtp_transportUrl);return r},n=function(m){function r(va,T){void 0!==T&&D("set",va,T)}var t={},q={},u={},v={};if(m.vtp_gaSettings){var w=m.vtp_gaSettings;E(Sp(w.vtp_contentGroup,"index","group"),q);E(Sp(w.vtp_dimension,"index","dimension"),u);E(Sp(w.vtp_metric,"index","metric"),v);var y=E(w);y.vtp_fieldsToSet=void 0;y.vtp_contentGroup=void 0;y.vtp_dimension=void 0;y.vtp_metric=void 0;m=E(m,y)}E(Sp(m.vtp_contentGroup,"index","group"),q);E(Sp(m.vtp_dimension,
"index","dimension"),u);E(Sp(m.vtp_metric,"index","metric"),v);var x=l(m),A=dk(m.vtp_functionName);if(Fa(A)){var C="",z="";m.vtp_setTrackerName&&"string"==typeof m.vtp_trackerName?""!==m.vtp_trackerName&&(z=m.vtp_trackerName,C=z+"."):(z="gtm"+Fg(),C=z+".");var D=function(va){var T=[].slice.call(arguments,0);T[0]=C+T[0];A.apply(window,T)},G=function(va,T){return void 0===T?T:va(T)},L=function(va,T){if(T)for(var Bb in T)T.hasOwnProperty(Bb)&&D("set",va+Bb,T[Bb])},Q=function(){},R={name:z};h(x,R,!0);var da=m.vtp_trackingId||t.trackingId;A("create",da,R);D("set","&gtm",Ok(!0));Vf()&&(D("set","&gcs",cg()),a(da,m));x._x_19&&(null==vf&&
delete x._x_19,x._x_20&&!c[z]&&(c[z]=!0,A(hk(z,String(x._x_20)))));m.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(va,T){void 0!==m[T]&&D("set",va,m[T])})("nonInteraction","vtp_nonInteraction");L("contentGroup",q);L("dimension",u);L("metric",v);var Y={};h(x,Y,!1)&&D("set",Y);var S;
m.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var va=x&&x.hitCallback;Fa(va)&&va();m.vtp_gtmOnSuccess()});if("TRACK_EVENT"==m.vtp_trackType){m.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());var M={hitType:"event",eventCategory:String(m.vtp_eventCategory||t.category),eventAction:String(m.vtp_eventAction||t.action),eventLabel:G(String,m.vtp_eventLabel||t.label),eventValue:G(Pa,m.vtp_eventValue||
t.value)};h(S,M,!1);D("send",M);}else if("TRACK_SOCIAL"==m.vtp_trackType){var J={hitType:"social",socialNetwork:String(m.vtp_socialNetwork),socialAction:String(m.vtp_socialAction),socialTarget:String(m.vtp_socialActionTarget)};h(S,J,!1);D("send",J);}else if("TRACK_TRANSACTION"==m.vtp_trackType){}else if("TRACK_TIMING"==
m.vtp_trackType){}else if("DECORATE_LINK"==m.vtp_trackType){}else if("DECORATE_FORM"==m.vtp_trackType){}else if("TRACK_DATA"==m.vtp_trackType){}else{m.vtp_enableEcommerce&&(D("require","ec","ec.js"),Q());if(m.vtp_doubleClick||"DISPLAY_FEATURES"==m.vtp_advertisingFeaturesType){var Aa=
"_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:Aa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==m.vtp_advertisingFeaturesType){var $c="_dc_gtm_"+String(m.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:$c})}S?D("send","pageview",S):D("send","pageview");m.vtp_autoLinkDomains&&ek(C,m.vtp_autoLinkDomains,!!m.vtp_useHashAutoLink,!!m.vtp_decorateFormsAutoLink);
}if(!b){var Xd=m.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";m.vtp_useInternalVersion&&!m.vtp_useDebugVersion&&(Xd="internal/"+Xd);b=!0;var Jl=Ak(x._x_19,"/analytics.js"),Ur=kj("https:","http:","//www.google-analytics.com/"+Xd,x&&!!x.forceSSL);P("analytics.js"===Xd&&Jl?Jl:Ur,function(){var va=bk();va&&va.loaded||m.vtp_gtmOnFailure();},m.vtp_gtmOnFailure)}}else N(m.vtp_gtmOnFailure)};
X.__ua=e;X.__ua.g="ua";X.__ua.h=!0;X.__ua.priorityOverride=0}();

X.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){X.__inject_script=b;X.__inject_script.g="inject_script";X.__inject_script.h=!0;X.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(qe(vh(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},L:a}})}();


X.b.cid=["google"],function(){(function(a){X.__cid=a;X.__cid.g="cid";X.__cid.h=!0;X.__cid.priorityOverride=0})(function(){return Ld.C})}();


X.b.aev=["google"],function(){function a(q,u){var v=lh(q,"gtm");if(v)return v[u]}function b(q,u,v,w){w||(w="element");var y=q+"."+u,x;if(m.hasOwnProperty(y))x=m[y];else{var A=a(q,w);if(A&&(x=v(A),m[y]=x,r.push(y),35<r.length)){var C=r.shift();delete m[C]}}return x}function c(q,u,v){var w=a(q,t[u]);return void 0!==w?w:v}function d(q,u){if(!q)return!1;var v=e($o());Ha(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<u.length;y++)if(u[y]instanceof RegExp){if(u[y].test(q))return!1}else{var x=
u[y];if(0!=x.length){if(0<=e(q).indexOf(x))return!1;w.push(e(x))}}return!Rp(q,w)}function e(q){n.test(q)||(q="http://"+q);return th(vh(q),"HOST",!0)}function f(q,u,v){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||v;case "LENGTH":var w=b(u,"FORM."+q,h);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(u,"id",v);case "INTERACTED_FIELD_NAME":return l(u,"name",v);case "INTERACTED_FIELD_TYPE":return l(u,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(u,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(u,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Ef(q,"value");case "button":return Ff(q);default:return null}}function h(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,v=0;v<q.elements.length;v++)xo(q.elements[v])&&u++;return u}}function l(q,u,v){var w=a(q,"interactedFormField");return w&&Ef(w,u)||v}var n=/^https?:\/\//i,m={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){X.__aev=q;X.__aev.g="aev";X.__aev.h=!0;X.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,v=q.vtp_defaultValue,w=q.vtp_varType;switch(w){case "TAG_NAME":var y=a(u,"element");return y&&y.tagName||
v;case "TEXT":return b(u,w,Ff)||v;case "URL":var x;a:{var A=String(a(u,"elementUrl")||v||""),C=vh(A),z=String(q.vtp_component||"URL");switch(z){case "URL":x=A;break a;case "IS_OUTBOUND":x=d(A,q.vtp_affiliatedDomains);break a;default:x=th(C,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return x;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,w,v);else{var G=q.vtp_attribute,L=a(u,"element");D=L&&Ef(L,G)||v||""}return D;case "MD":var Q=q.vtp_mdValue,R=b(u,"MD",Jo);return Q&&R?Mo(R,Q)||
v:R||v;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,v);default:return c(u,w,v)}})}();

X.b.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:$o()}function b(f,g){Cf(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:bp(l),S:ap(l)})})}function c(f,g){Cf(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:bp(l),S:ap(l)})})}function d(f,g,h){var l=g.history,n=l[f];if(Fa(n))try{l[f]=function(m,r,t){n.apply(l,[].slice.call(arguments,0));h({source:f,state:m,url:bp($o()),
S:ap($o())})}}catch(m){}}function e(){var f={source:null,state:V("history").state||null,url:bp($o()),S:ap($o())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.S!=g.S){var n={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.S,"gtm.newUrlFragment":g.S,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;dp(n)}}}(function(f){X.__hl=f;X.__hl.g="hl";X.__hl.h=!0;X.__hl.priorityOverride=
0})(function(f){var g=V("self");if(!ip("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);jp("hl")}N(f.vtp_gtmOnSuccess)})}();
X.b.awct=["google"],function(){var a=!1,b=[],c=function(h){var l=V("google_trackConversion"),n=h.gtm_onFailure;"function"==typeof l?l(h)||n():n()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(h){function l(){
q("gdpr_consent",ql());}function n(w){var y=!0;y&&b.push(m)}Wj();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:h.vtp_conversionId,google_conversion_label:h.vtp_conversionLabel,
google_conversion_value:h.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:h.vtp_gtmOnSuccess,gtm_onFailure:h.vtp_gtmOnFailure,google_gtm:Ok()};h.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=cp(H.R)&&!1!==cp(H.R)&&(m.google_gtm_url_processor=function(w){return w=yj(w)});var r=function(w){return function(y,x,A){var C="DATA_LAYER"==w?cp(A):h[x];C&&(m[y]=C)}},t=r("JSON");t("google_conversion_currency","vtp_currencyCode");t("google_conversion_order_id","vtp_orderId");h.vtp_enableProductReporting&&
(t=r(h.vtp_productReportingDataSource),t("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),t("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),t("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),t("google_basket_discount","vtp_discount","discount"),t("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(w){return{value:w.price,
quantity:w.quantity,item_id:w.id}})));var q=function(w,y){void 0!==y&&((m.google_additional_conversion_params=m.google_additional_conversion_params||{})[w]=y)},u=function(w){return function(y,x,A,C){var z="DATA_LAYER"==w?cp(A):h[x];C(z)&&q(y,z)}};h.vtp_transportUrl&&(m.google_transport_url=h.vtp_transportUrl);var v=Ak(h.vtp_transportUrl,"/pagead/conversion_async.js");v||(v=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?
"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js");h.vtp_enableNewCustomerReporting&&(t=u(h.vtp_newCustomerReportingDataSource),t("vdnc","vtp_awNewCustomer","new_customer",function(w){return void 0!=w&&""!==w}),t("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(w){return void 0!=w&&""!==w}));!h.hasOwnProperty("vtp_enableConversionLinker")||h.vtp_enableConversionLinker?(h.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=
h.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=!1):m.google_read_gcl_cookie_opt_out=!0;"1"===ti(!1)._up&&q("gtm_up","1");l();(function(){Vf()?dg(function(){l();var w=bg(H.o),y=!w&&void 0!=cp(H.R)&&!1!==cp(H.R);!h.vtp_transportUrl&&y&&(m.google_transport_url="https://pagead2.googlesyndication.com/");q("gcs",cg());n(w);w||Yf(function(){l();m=E(m);!h.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;q("gcs",cg());q("gcu","1");n(!0)},H.o)},[H.o]):n(!0)})();a||(a=
!0,P(v,f(),e(v)))};X.__awct=g;X.__awct.g="awct";X.__awct.h=!0;X.__awct.priorityOverride=0}();X.b.smm=["google"],function(){(function(a){X.__smm=a;X.__smm.g="smm";X.__smm.h=!0;X.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Sp(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



X.b.paused=[],function(){(function(a){X.__paused=a;X.__paused.g="paused";X.__paused.h=!0;X.__paused.priorityOverride=0})(function(a){N(a.vtp_gtmOnFailure)})}();
X.b.hid=["google"],function(){(function(a){X.__hid=a;X.__hid.g="hid";X.__hid.h=!0;X.__hid.priorityOverride=0})(function(){return no.Sb})}();
X.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var n=K.createElement("script");n.async=!1;n.type="text/javascript";n.id=h.id;n.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(n.charset=h.charset);var m=h.getAttribute("data-gtmsrc");m&&(n.src=m,xf(n,l));d.insertBefore(n,null);m||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(t){N(g)}}}var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=mp(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.ad,h=f.I;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(K.body,Gf(g),h,e)()}else Yo(function(){c(d)},
200)};X.__html=c;X.__html.g="html";X.__html.h=!0;X.__html.priorityOverride=0}();






X.b.lcl=[],function(){function a(){var c=V("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.Rg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=Hf(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=uo("lcl",h?"nv.mwt":"mwt",0),n;n=h?uo("lcl","nv.ids",[]):uo("lcl","ids",[]);if(n.length){var m=qo(g,"gtm.linkClick",n);if(b(f,g,c)&&!h&&l&&g.href){var r=String(lp(g,"rel")||""),t=!!Ja(r.split(" "),function(v){return"noreferrer"===v.toLowerCase()});
t&&I(36);var q=V((lp(g,"target")||"_self").substring(1)),u=!0;if(dp(m,go(function(){var v;if(v=u&&q){var w;a:if(t){var y;try{y=new MouseEvent(f.type)}catch(x){if(!c.createEvent){w=!1;break a}y=c.createEvent("MouseEvents");y.initEvent(f.type,!0,!0)}y.Rg=!0;f.target.dispatchEvent(y);w=!0}else w=!1;v=!w}v&&(q.location.href=lp(g,"href"))}),l))u=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else dp(m,function(){},l||2E3);return!0}}};Cf(c,"click",e,!1);Cf(c,"auxclick",e,!1)}function b(c,
d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=lp(d,"href"),g=f.indexOf("#"),h=lp(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=bp(f),n=bp(e.location);return l!==n}return!0}(function(c){X.__lcl=c;X.__lcl.g="lcl";X.__lcl.h=!0;X.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;
var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(n){return Math.max(f,n)};to("lcl","mwt",h,0);e||to("lcl","nv.mwt",h,0)}var l=function(n){n.push(g);return n};to("lcl","ids",l,[]);e||to("lcl","nv.ids",l,[]);ip("lcl")||(a(),jp("lcl"));N(c.vtp_gtmOnSuccess)})}();


var Pr={};Pr.macro=function(a){if(no.Oc.hasOwnProperty(a))return no.Oc[a]},Pr.onHtmlSuccess=no.De(!0),Pr.onHtmlFailure=no.De(!1);Pr.dataLayer=hh;Pr.callback=function(a){Dg.hasOwnProperty(a)&&Fa(Dg[a])&&Dg[a]();delete Dg[a]};function Qr(){O[Ld.C]=Pr;Wa(Eg,X.b);od=od||no;pd=Hd}
function Rr(){Kf.gtm_3pds=!0;Kf.gtag_cs_api=!0;O=B.google_tag_manager=B.google_tag_manager||{};var a=!1;ol(),a=!0;if(O[Ld.C]){var b=O.zones;b&&b.unregisterChild(Ld.C);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)hd.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)kd.push(f[g]);for(var h=c.predicates||[],l=0;l<h.length;l++)jd.push(h[l]);for(var n=c.rules||[],m=0;m<n.length;m++){for(var r=n[m],t={},q=0;q<r.length;q++)t[r[q][0]]=Array.prototype.slice.call(r[q],1);id.push(t)}md=X;nd=Mp;var u=data.permissions||{},v=data.sandboxed_scripts,w=data.security_groups;rn();Pd=new Od(u);if(void 0!==
v)for(var y=["sandboxedScripts"],x=0;x<v.length;x++){var A=v[x].replace(/^_*/,"");Eg[A]=y}un(w);Qr();mo();Ij=!1;Jj=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)Lj();else{Cf(K,"DOMContentLoaded",Lj);Cf(K,"readystatechange",Lj);if(K.createEventObject&&K.documentElement.doScroll){var C=!0;try{C=!B.frameElement}catch(L){}C&&Mj()}Cf(B,"load",Lj)}In=!1;"complete"===K.readyState?Kn():Cf(B,"load",Kn);a:{if(!Xg)break a;B.setInterval(Yg,864E5);}
Bg=(new Date).getTime();}}
(function(a){
a()})(Rr);

})()
