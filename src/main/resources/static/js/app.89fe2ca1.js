(function(t){function e(e){for(var i,n,r=e[0],c=e[1],l=e[2],u=0,v=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&v.push(s[n][0]),s[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=a[0]))}return t}var i={},s={app:0},o=[];function n(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=i,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(a,i,function(e){return t[e]}.bind(null,i));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("85ec"),s=a.n(i);s.a},"0a70":function(t,e,a){},4622:function(t,e,a){t.exports=a.p+"img/github_100x100.04475a48.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.connected,expression:"connected"}],staticClass:"container-fluid flex-column vh-100 "},[a("SpotifyHeader",{staticClass:"row h-auto"}),a("div",{staticClass:"row flex-fill d-flex justify-content-start "},[a("SpotifyMain",{staticClass:"col-10 pt-xl-5",attrs:{time:t.time,spotify:t.spotify}})],1)],1),a("SpotifyDisconnected",{directives:[{name:"show",rawName:"v-show",value:!t.connected,expression:"!connected"}]}),a("div",{staticClass:"percentBar"},[a("div",{style:{width:t.songPercent+"%"},attrs:{id:"percent"}})])],1)},o=[],n=(a("a9e3"),a("ab8b"),a("2dd8"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main-header"},[i("b-navbar",{staticClass:"vw-100",attrs:{type:"dark",variant:"dark"}},[i("b-navbar-nav",[i("b-navbar-brand",{attrs:{href:"#"}},[i("img",{staticClass:"pr-3",attrs:{src:a("e55d"),alt:""}}),t._v("Lovspotify ")])],1),i("b-navbar-nav",{staticClass:"ml-auto"},[i("b-nav-item-dropdown",{attrs:{text:"Settings",right:""}},[i("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-themes",modifiers:{"modal-themes":!0}}],attrs:{href:"#"}},[t._v("Themes")]),i("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-settings",modifiers:{"modal-settings":!0}}],attrs:{href:"#"},on:{click:t.getConfig}},[t._v("Device")]),i("b-dropdown-item",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-about",modifiers:{"modal-about":!0}}],attrs:{href:"#"}},[t._v("About")])],1)],1)],1),i("b-modal",{attrs:{id:"modal-themes",title:"Select a theme"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row pb-1"},[i("div",{staticClass:"col-auto"},[i("img",{attrs:{src:a("6d8d"),alt:""}})]),i("div",{staticClass:"col-auto"},[i("select",{staticStyle:{background:"lavender","min-width":"300px","max-width":"300px"}},[t._v(' v-model="themes"> '),t._l(t.themes,(function(e){return i("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)])])])]),i("b-modal",{attrs:{id:"modal-settings","ok-title":"Restart",title:"Local Settings"},on:{ok:t.setConfig}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row pb-1"},[i("div",{staticClass:"col-md-4 ",staticStyle:{}},[t._v(" Config-File: ")]),i("div",{staticClass:"col-md-8"},[i("code",[t._v("/opt/lovspotify/config.toml")])])]),i("div",{staticClass:"row "},[i("div",{staticClass:"col-md-4"},[t._v(" Device-Host: ")]),i("div",{staticClass:"col-md-7"},[i("code",[t._v(t._s(t.configdata.url))])])]),i("div",{staticClass:"row pb-1"},[i("div",{staticClass:"col-md-4"},[t._v(" Server-Port: ")]),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.configdata.serverPort,expression:"configdata.serverPort"}],attrs:{type:"text",name:"serverPort",placeholder:"8080"},domProps:{value:t.configdata.serverPort},on:{input:function(e){e.target.composing||t.$set(t.configdata,"serverPort",e.target.value)}}})])]),i("div",{staticClass:"row pb-1"},[i("div",{staticClass:"col-md-4"},[t._v(" Device-Name: ")]),i("div",{staticClass:"col-md-4"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.configdata.deviceName,expression:"configdata.deviceName"}],attrs:{type:"text",name:"deviceName",placeholder:"Device Name"},domProps:{value:t.configdata.deviceName},on:{input:function(e){e.target.composing||t.$set(t.configdata,"deviceName",e.target.value)}}})])]),i("div",{staticClass:"row pb-1"},[i("div",{staticClass:"col-md-4"},[t._v(" Device-Type: ")]),i("div",{staticClass:"col-md-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.configdata.deviceType,expression:"configdata.deviceType"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.configdata,"deviceType",e.target.multiple?a:a[0])}}},t._l(t.configdata.availableDeviceTypes,(function(e){return i("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])]),i("div",{staticClass:"row pb-1"},[i("div",{staticClass:"col-md-4"},[t._v(" Mixers: ")]),i("div",{staticClass:"col-md-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.configdata.chosenMixer,expression:"configdata.chosenMixer"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.configdata,"chosenMixer",e.target.multiple?a:a[0])}}},t._l(t.configdata.availableMixers,(function(e){return i("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])]),i("div",{staticClass:"row pb-1"},[i("div",{staticClass:"col-md-4"},[t._v(" LogLevel: ")]),i("div",{staticClass:"col-md-4"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.configdata.logLevel,expression:"configdata.logLevel"}],staticClass:"mdb-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.configdata,"logLevel",e.target.multiple?a:a[0])}}},t._l(t.configdata.availableLogLevels,(function(e){return i("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0)])])])]),i("b-modal",{attrs:{id:"modal-about",title:"About Lovspotify"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row pb-1"},[i("div",{staticClass:"col-auto"},[i("a",{attrs:{href:"https://github.com/spocon/lovspotify",target:"_blank"}},[i("img",{attrs:{src:a("4622"),alt:""}}),t._v(" Spocon (Spotify Connect Client)")])])])])])],1)}),r=[],c=a("bc3a").default,l={name:"MainHeader",props:{msg:String},data:function(){return{show:!0,configdata:[],selectedMixer:"",themes:["Default"]}},methods:{getConfig:function(){var t=this;c.get("/config/data").then((function(e){t.configdata=e.data})).catch((function(t){t.response.status}))},setConfig:function(){c.post("/config/data",this.configdata).catch((function(t){t.response.status}))}}},d=l,u=(a("c0b4"),a("2877")),v=Object(u["a"])(d,n,r,!1,null,"4cdfcc00",null),f=v.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row pb-lg-5"},[a("div",{staticClass:" col-2"}),a("div",{staticClass:"col-md-5 col-md-push-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row pb-lg-5"},[a("div",{staticClass:"col-auto"},[a("font-awesome-icon",{attrs:{icon:"music",inverse:"",size:"2x"}})],1),a("div",{staticClass:"col-auto"},[t._v(" "+t._s(t.spotify.track.name)+" ")])]),a("div",{staticClass:"row pb-lg-5"},[a("div",{staticClass:"col-auto"},[a("font-awesome-icon",{attrs:{icon:"user-tie",inverse:"",size:"2x"}})],1),a("div",{staticClass:"col-auto"},[t._v(" "+t._s(t.spotify.track.artist[0].name)+" ")])]),a("div",{staticClass:"row "},[a("div",{staticClass:"col-auto"},[a("font-awesome-icon",{attrs:{icon:"clock",inverse:"",size:"2x"}})],1),a("div",{staticClass:"col-auto"},[t._v(" "+t._s(t.time)+" ")])])])]),a("div",{staticClass:"col-md-3 col-md-pull-3"},[a("input",{attrs:{type:"image",src:"https://i.scdn.co/image/"+t.spotify.image.key,alt:""}})])]),a("div",{staticClass:"row pt-3"},[a("div",{staticClass:" col-md-2"}),a("div",{staticClass:"col-md-8 controller p-1"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-1"}),a("div",{staticClass:"col-2"},[a("font-awesome-icon",{staticClass:"cursor-pointer",attrs:{icon:"less-than",inverse:"",size:"2x"},on:{click:function(e){return t.callController("/player/previous")}}})],1),a("div",{staticClass:"col-2"},[a("font-awesome-icon",{staticClass:"cursor-pointer",attrs:{icon:"minus-circle",inverse:"",size:"2x"},on:{click:function(e){return t.callController("/player/volume/down")}}})],1),a("div",{staticClass:"col-2",on:{click:t.currentlyPlaying}},[a("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:!t.play,expression:"!play"}],staticClass:"cursor-pointer",attrs:{icon:"play-circle",inverse:"",size:"2x"}}),a("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:t.play,expression:"play"}],staticClass:"cursor-pointer",attrs:{icon:"pause-circle",inverse:"",size:"2x"}})],1),a("div",{staticClass:"col-2"},[a("font-awesome-icon",{staticClass:"cursor-pointer",attrs:{icon:"plus-circle",inverse:"",size:"2x"},on:{click:function(e){return t.callController("/player/volume/up")}}})],1),a("div",{staticClass:"col-2",on:{click:function(e){return t.callController("/player/next")}}},[a("font-awesome-icon",{staticClass:"cursor-pointer",attrs:{icon:"greater-than",inverse:"",size:"2x"}})],1)])])])])])},m=[],g=a("bc3a").default,h={name:"MainMiddle",props:{spotify:{type:Object,default:function(){return{track:{name:"No Connection"}}}},time:String,play:{type:Boolean,default:!0}},methods:{currentlyPlaying:function(){!0===this.play?(this.play=!1,this.callController("/player/pause")):(this.play=!0,this.callController("/player/resume"))},callController:function(t){g.get(t).catch((function(t){t.response.status}))}}},y=h,C=(a("ff77"),Object(u["a"])(y,p,m,!1,null,null,null)),b=C.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"clock"}},[a("p",{staticClass:"date"},[t._v(t._s(t.date))]),a("p",{staticClass:"time"},[t._v(t._s(t.time))]),a("h1",{staticStyle:{color:"white"}},[t._v("Spotify disconnected")])])},_=[],x=(a("fb6a"),{name:"MainDisconnected",data:function(){return{time:"",date:""}},methods:{updateTime:function(){var t=new Date,e=["SUN","MON","TUE","WED","THU","FRI","SAT"];this.time=this.zeroPadding(t.getHours(),2)+":"+this.zeroPadding(t.getMinutes(),2)+":"+this.zeroPadding(t.getSeconds(),2),this.date=this.zeroPadding(t.getFullYear(),4)+"-"+this.zeroPadding(t.getMonth()+1,2)+"-"+this.zeroPadding(t.getDate(),2)+" "+e[t.getDay()]},zeroPadding:function(t,e){for(var a="",i=0;i<e;i++)a+="0";return(a+t).slice(-e)}},created:function(){this.updateTime(),setInterval(function(){this.updateTime()}.bind(this),1100)}}),S=x,P=(a("f983"),Object(u["a"])(S,w,_,!1,null,"eefac6a4",null)),k=P.exports,M=a("bc3a").default,N={name:"App",components:{SpotifyHeader:f,SpotifyMain:b,SpotifyDisconnected:k},data:function(){return{spotify:[],connected:Boolean,time:String,songPercent:Number}},methods:{getCurrentSong:function(){var t=this;M.get("/player/current").then((function(e){t.spotify=e.data,t.connected=!0})).catch((function(e){e.response.status,t.connected=!1}))},getCurrentTime:function(){this.songPercent=this.spotify.trackTime/this.spotify.track.duration*100,this.time=T(this.spotify.trackTime,this.spotify.track.duration)}},created:function(){this.getCurrentSong(),setInterval(function(){this.getCurrentSong()}.bind(this),1100)},watch:{spotify:function(){this.getCurrentTime()}}};function T(t,e){return t.toHHMMSS()+" / "+e.toHHMMSS()}Number.prototype.toHHMMSS=function(){var t=parseInt(this,10)/1e3,e=Math.floor(t/3600),a=Math.floor((t-3600*e)/60),i=Math.floor(t-3600*e-60*a);return e<10&&(e="0"+e),a<10&&(a="0"+a),i<10&&(i="0"+i),e+":"+a+":"+i};var O=N,z=(a("034f"),Object(u["a"])(O,s,o,!1,null,null,null)),j=z.exports,D=a("5f5b"),H=a("b1e0"),L=a("ecee"),$=a("c074"),A=a("ad3d"),E=a("f2d1"),I=a("bc3a"),B=a.n(I);L["c"].add(E["a"],$["e"],$["i"],$["a"],$["b"],$["c"],$["d"],$["h"],$["g"],$["f"]),i["default"].config.productionTip=!1,i["default"].component("font-awesome-icon",A["a"]),i["default"].use(D["a"],H["a"]),i["default"].use(B.a),new i["default"]({render:function(t){return t(j)}}).$mount("#app")},"63a4":function(t,e,a){},"6d8d":function(t,e,a){t.exports=a.p+"img/lovspotify_100x100.1a1f1793.png"},"85ec":function(t,e,a){},"8c38":function(t,e,a){},c0b4:function(t,e,a){"use strict";var i=a("0a70"),s=a.n(i);s.a},e55d:function(t,e,a){t.exports=a.p+"img/lovspotify_50x50.45d39346.png"},f983:function(t,e,a){"use strict";var i=a("63a4"),s=a.n(i);s.a},ff77:function(t,e,a){"use strict";var i=a("8c38"),s=a.n(i);s.a}});
//# sourceMappingURL=app.89fe2ca1.js.map