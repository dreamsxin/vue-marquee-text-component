(function(t){function e(e){for(var s,i,o=e[0],u=e[1],l=e[2],d=0,p=[];d<o.length;d++)i=o[d],n[i]&&p.push(n[i][0]),n[i]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);c&&c(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var u=a[o];0!==n[u]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-marquee-text-component/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("31c5"),n=a.n(s);n.a},"31c5":function(t,e,a){var s=a("5fc7");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=a("499e").default;n("f155f63c",s,!0,{sourceMap:!1,shadowMode:!1})},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var s,n,r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t._m(0),a("main",{staticClass:"container",attrs:{role:"main"}},[t._m(1),a("section",{staticClass:"my-4"},[a("h3",{staticClass:"mb-3"},[t._v("\n        Demo\n        "),a("button",{staticClass:"btn btn-sm btn-outline-primary",class:{active:t.isPaused},attrs:{type:"button"},on:{click:function(e){t.isPaused=!t.isPaused}}},[t._v("\n          Pause\n        ")])]),a("div",{staticClass:"text-right font-italic small"},[t._v("TEST DATA")]),a("marquee-text",{staticClass:"py-2 bg-dark text-white",attrs:{duration:45,repeat:3,paused:t.isPaused}},[a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,38%")]),t._v(" ATX\n        "),a("span",{staticClass:"badge badge-danger ml-2"},[t._v("0,16%")]),t._v(" DAX\n        "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,04%")]),t._v(" TecDax\n        "),a("span",{staticClass:"badge badge-danger ml-2"},[t._v("0,19%")]),t._v(" MDAX\n        "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,03%")]),t._v(" ESTX50\n        "),a("span",{staticClass:"badge badge-info ml-2"},[t._v("0,00%")]),t._v(" NIKKEI\n        "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,03%")]),t._v(" EUR/CHF\n      ")]),a("marquee-text",{staticClass:"py-2 bg-dark text-white mt-2",attrs:{duration:3,repeat:3,paused:t.isPaused}},[a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,38%")]),t._v(" ATX\n        "),a("span",{staticClass:"badge badge-danger ml-2"},[t._v("0,16%")]),t._v(" DAX\n        "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,04%")]),t._v(" TecDax\n        "),a("span",{staticClass:"badge badge-danger ml-2"},[t._v("0,19%")]),t._v(" MDAX\n        "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,03%")]),t._v(" ESTX50\n        "),a("span",{staticClass:"badge badge-info ml-2"},[t._v("0,00%")]),t._v(" NIKKEI\n        "),a("span",{staticClass:"badge badge-success ml-2"},[t._v("0,03%")]),t._v(" EUR/CHF\n      ")]),a("marquee-text",{staticClass:"py-2 mt-2 bg-light",attrs:{duration:20,paused:t.isPaused}},[t._v("\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n      ")]),a("marquee-text",{staticClass:"py-2 mt-2",attrs:{duration:10,paused:t.isPaused}},[t._v("\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.\n      ")])],1),a("section",{staticClass:"my-4"},[a("h4",{staticClass:"mb-3"},[t._v("To small content")]),t._m(2),a("p",{staticClass:"font-italic"},[t._v("Default we clone default slot two times")]),a("marquee-text",{attrs:{duration:1}},[a("span",{staticClass:"badge badge-success"},[t._v("START")]),t._v("\n        Short text =(\n        "),a("span",{staticClass:"badge badge-danger"},[t._v("END")])]),t._v("\n      after add prop "),a("code",{staticClass:"font-weight-bold"},[t._v('{ :repeat="10" }')]),a("marquee-text",{attrs:{duration:1,repeat:10}},[a("span",{staticClass:"badge badge-success"},[t._v("START")]),t._v("\n        Short text =(\n        "),a("span",{staticClass:"badge badge-danger"},[t._v("END")])])],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-light py-5"},[a("header",{staticClass:"container"},[a("ul",{staticClass:"nav float-right"},[a("li",[a("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"https://github.com/EvodiaAut/vue-marquee-text-component",target:"_blank"}},[t._v("\n            Github\n          ")])])]),a("h1",[t._v("vue-marquee-text-component")]),a("p",{staticClass:"lead"},[t._v("\n        ["),a("a",{attrs:{href:"https://www.smashingmagazine.com/2016/12/gpu-animation-doing-it-right/",target:"_blank"}},[t._v("CSS GPU Animation")]),t._v("]\n          Marquee Text for vuejs\n      ")]),a("div",{staticClass:"d-flex flex-wrap"},[a("a",{attrs:{href:"https://www.npmjs.com/package/vue-marquee-text-component",target:"_blank"}},[a("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/npm/v/vue-marquee-text-component.svg?style=for-the-badge",alt:"vue-marquee-text-component npm"}})]),a("a",{attrs:{href:"https://github.com/EvodiaAut/vue-marquee-text-component/blob/master/LICENSE.md",target:"_blank"}},[a("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/github/license/mashape/apistatus.svg?style=for-the-badge",alt:"vue-marquee-text-component license"}})]),a("a",{attrs:{href:"https://www.npmjs.com/package/vue-marquee-text-component",target:"_blank"}},[a("img",{staticClass:"m-1",attrs:{src:"https://img.shields.io/npm/dt/vue-marquee-text-component.svg?style=for-the-badge",alt:"vue-marquee-text-component npm"}})])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"my-4"},[a("h2",{staticClass:"mb-3"},[t._v("Props")]),a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-sm"},[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("Name")]),a("th",{attrs:{scope:"col"}},[t._v("Description")]),a("th",{attrs:{scope:"col"}},[t._v("Config")])])]),a("tbody",[a("tr",[a("th",{attrs:{scope:"row"}},[t._v("duration")]),a("td",[t._v("Animation Duration")]),a("td",[a("code",[t._v("{ type: Number, default: 15 }")])])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("repeat")]),a("td",[t._v("Number of repeat the Slot "),a("b",[t._v("(It's important for to short content)")])]),a("td",[a("code",[t._v("{ type: Number, default: 2 }")])])]),a("tr",[a("th",{attrs:{scope:"row"}},[t._v("paused")]),a("td",[t._v("The property specifies whether the animation is running or paused")]),a("td",[a("code",[t._v("{ type: Boolean, default: false }")])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"font-weight-bold mb-0"},[t._v("use prop "),a("code",[t._v('{ :repeat="NUMBER" }')]),t._v(" when you know the content is not wider than parent")])}],u=(a("6c7b"),a("14b9"),a("c5f6"),{name:"MarqueeText",functional:!0,props:{duration:{type:Number,default:15},repeat:{type:Number,default:2,validator:function(t){return t>=2}},paused:{type:Boolean,default:!1}},render:function(t,e){var a=e.$style,s=e.props,n=s.duration,r=s.repeat,i=s.paused,o=e.children,u=e.data,l=u.staticClass,c=u.key,d=t("div",{class:a.text,style:{animationDuration:"".concat(n,"s")}},o);return t("div",{key:c,class:[l,a.wrap]},[t("div",{class:[i?a.paused:void 0,a.content]},Array(r).fill(d))])}}),l=u,c=a("6edf"),d=a("2877");function p(t){this["$style"]=c["default"].locals||c["default"]}var m=Object(d["a"])(l,s,n,!1,p,null,null);m.options.__file="MarqueeText.vue";var v=m.exports,f={name:"App",components:{MarqueeText:v},data:function(){return{isPaused:!1}}},b=f,g=(a("034f"),Object(d["a"])(b,i,o,!1,null,null,null));g.options.__file="App.vue";var _=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(_)}}).$mount("#app")},"5fc7":function(t,e,a){e=t.exports=a("2350")(!1),e.i(a("efc1"),""),e.push([t.i,"\ntable code{white-space:nowrap\n}",""])},"6edf":function(t,e,a){"use strict";var s=a("bae7"),n=a.n(s);e["default"]=n.a},8623:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"\n.marquee-text-wrap{overflow:hidden\n}\n.marquee-text-content{width:100000px\n}\n.marquee-text-text{-webkit-animation-name:marquee-text-animation;animation-name:marquee-text-animation;-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;float:left\n}\n.marquee-text-paused .marquee-text-text{-webkit-animation-play-state:paused;animation-play-state:paused\n}\n@-webkit-keyframes marquee-text-animation{\n0%{-webkit-transform:translateX(0);transform:translateX(0)\n}\nto{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n}\n@keyframes marquee-text-animation{\n0%{-webkit-transform:translateX(0);transform:translateX(0)\n}\nto{-webkit-transform:translateX(-100%);transform:translateX(-100%)\n}\n}",""]),e.locals={wrap:"marquee-text-wrap",content:"marquee-text-content",text:"marquee-text-text",animation:"marquee-text-animation",paused:"marquee-text-paused"}},bae7:function(t,e,a){var s=a("8623");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var n=a("499e").default;n("585afa26",s,!0,{sourceMap:!1,shadowMode:!1})}});
//# sourceMappingURL=app.1eb6c368.js.map