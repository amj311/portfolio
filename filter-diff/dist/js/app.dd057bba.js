(function(t){function a(a){for(var i,r,l=a[0],c=a[1],o=a[2],d=0,f=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(a);while(f.length)f.shift()();return n.push.apply(n,o||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],i=!0,l=1;l<e.length;l++){var c=e[l];0!==s[c]&&(i=!1)}i&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},s={app:0},n=[];function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(e,i,function(a){return t[a]}.bind(null,i));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var p=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},"186d":function(t,a,e){},"308d":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t.dataIsLoading?e("div",{staticStyle:{"margin-top":"48vh",height:"3rem","text-align":"center",color:"#fff"}},[t._v(" Loading... ")]):e("div",{staticStyle:{display:"none"},style:{display:t.dataIsLoading?"none":"block !important"}},[e("div",{attrs:{id:"fancytop"}},[e("svg",{attrs:{viewBox:"0 0 500 10",preserveAspectRatio:"none"}},[e("rect",{staticStyle:{fill:"#fff",opacity:".07",transform:"rotate(-2deg)","transform-origin":"bottom left"},attrs:{width:"500",height:"10",x:"0",y:"0"}}),e("rect",{staticStyle:{fill:"#fff",opacity:".04",transform:"rotate(1deg)","transform-origin":"bottom right"},attrs:{y:"0",x:"0",height:"10",width:"500"}})])]),e("HeroSection",{attrs:{id:"hero",imgurl:"https://portfolio.simplyoliveapps.com/filter-diff/src/assets/images/hero.jpg"}},[e("div",{},[e("h1",{staticStyle:{"font-size":"3em"}},[t._v(t._s(t.data.bio.firstname)+" "+t._s(t.data.bio.lastname))]),e("h4",[t._v(t._s(t.data.bio.subtitle))]),e("hr"),e("ContactLinks",{staticStyle:{"font-size":"1.5em"},attrs:{links:t.data.contact}})],1)]),e("BannerSection",[e("div",{staticStyle:{display:"flex","flex-wrap":"wrap","align-items":"center","justify-content":"space-between"}},[e("div",{staticStyle:{width:"70%"}},[e("h2",[t._v("Hey there!")]),e("p",{staticStyle:{"font-size":"1.2em"}},[t._v(t._s(t.data.bio.intro)+" Feel free to say hi to me!")])]),e("div",[e("a",{staticClass:"btn btn-primary shadow-sm btn-lg",attrs:{target:"blank",href:t.data.contact.email.url}},[t._v("👋 Say Hi!")])])])]),e("BannerSection",{staticClass:"bg-shade",staticStyle:{"text-align":"center"},attrs:{id:"skills"}},[e("h2",[t._v("What I Love To Do")]),e("div",{staticClass:"flex-grid-container lg"},[e("div",{staticClass:"icon-tile flex-grid-item"},[e("div",{staticClass:"icon-tile-icon"},[e("i",{staticClass:"fa fa-laptop-code"})]),e("div",{staticClass:"icon-tile-label"},[t._v("Web & Mobile Development")])]),e("div",{staticClass:"icon-tile flex-grid-item"},[e("div",{staticClass:"icon-tile-icon"},[e("i",{staticClass:"fa fa-cubes"})]),e("div",{staticClass:"icon-tile-label"},[t._v("Quality Software Architecture")])]),e("div",{staticClass:"icon-tile flex-grid-item"},[e("div",{staticClass:"icon-tile-icon"},[e("i",{staticClass:"fa fa-database"})]),e("div",{staticClass:"icon-tile-label"},[t._v("Design Servers and APIs")])]),e("div",{staticClass:"icon-tile flex-grid-item"},[e("div",{staticClass:"icon-tile-icon"},[e("i",{staticClass:"fa fa-palette"})]),e("div",{staticClass:"icon-tile-label"},[t._v("UI/UX Design")])]),e("div",{staticClass:"icon-tile flex-grid-item"},[e("div",{staticClass:"icon-tile-icon"},[e("i",{staticClass:"fa fa-lightbulb"})]),e("div",{staticClass:"icon-tile-label"},[t._v("Creative Problem Solving")])]),e("div",{staticClass:"icon-tile flex-grid-item"},[e("div",{staticClass:"icon-tile-icon"},[e("i",{staticClass:"fa fa-graduation-cap"})]),e("div",{staticClass:"icon-tile-label"},[t._v("Learn New Things")])])])]),e("BannerSection",{attrs:{id:"apps"}},[e("h2",[t._v("My Work")]),e("br"),e("div",{attrs:{id:"liveapps"}},[e("h4",[t._v("Solo Projects")]),e("div",{staticClass:"flex-grid-container"},t._l(t.filterApps((function(t){return t.previewUrl&&!t.team})),(function(a){return e("div",{key:a.title,staticClass:"flex-grid-item"},[e("AppCard",{attrs:{app:a,logos:t.logos}})],1)})),0)])]),e("BannerSection",{staticClass:"bg-shade"},[e("div",{staticStyle:{display:"flex","flex-wrap":"wrap","align-items":"center","justify-content":"space-between"}},[e("div",{staticStyle:{width:"70%"}},[e("h2",[t._v("Let's work together!")])]),e("div",[e("p",[e("a",{staticClass:"btn btn-secondary shadow-sm btn-lg",attrs:{target:"blank",href:t.data.contact.email.url}},[t._v("Email Me!")])])])]),e("ContactLinks",{staticStyle:{"font-size":"1.5em"},attrs:{links:t.data.contact}})],1)],1)])},n=[],r=e("1da1"),l=(e("4de4"),e("96cf"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("BannerSection",{staticClass:"hero-wrapper bg-dark",style:{backgroundImage:"url("+t.imgurl+")"}},[t._t("default",[t._v("I'm a hero section!")])],2)}),c=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"section-wrapper"},[e("div",{staticClass:"section-content-wrapper max-content-width"},[t._t("default",[e("h2",[t._v("I'm a section!")]),e("h4",[t._v("This is a subtitle for a section")])])],2)])},p=[],d={name:"BannerSection"},f=d,u=(e("cba0"),e("2877")),v=Object(u["a"])(f,o,p,!1,null,"ce6d0542",null),g=v.exports,b={name:"HeroSection",components:{BannerSection:g},props:["imgurl"]},h=b,m=(e("c36f"),Object(u["a"])(h,l,c,!1,null,"7e89a32f",null)),C=m.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"contact-links-group"},[e("a",{attrs:{href:t.links.email.url,title:t.links.email.display,target:"blank"}},[e("i",{staticClass:"fa fa-envelope"})]),e("a",{attrs:{href:t.links.linkedin.url,title:t.links.linkedin.display,target:"blank"}},[e("i",{staticClass:"fab fa-linkedin"})]),e("a",{attrs:{href:t.links.github.url,title:t.links.github.display,target:"blank"}},[e("i",{staticClass:"fab fa-github"})]),e("a",{attrs:{href:t.links.twitter.url,title:t.links.twitter.display,target:"blank"}},[e("i",{staticClass:"fab fa-twitter"})])])},_=[],k={name:"ContactLinks",props:["links"]},w=k,S=(e("e914"),Object(u["a"])(w,y,_,!1,null,"6a69de78",null)),x=S.exports,j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-card card shadow-sm"},[t.app.previewUrl?e("div",{staticClass:"preview-wrapper"},[e("div",{staticClass:"preview-spacer"}),e("img",{staticClass:"preview-img",attrs:{src:t.app.previewUrl,alt:"Preview of app"}})]):t._e(),e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[t._v(t._s(t.app.title))]),e("p",{staticClass:"card-text"},[t._v(t._s(t.app.summary))]),e("p",{staticClass:"card-text stack-icons"},[e("span",[t._v("Stack: ")]),t._l(t.app.stack,(function(a){return e("span",{key:a,staticClass:"stack-icon",attrs:{title:a}},[t.logos[a]?e("i",{style:{backgroundImage:"url("+t.logos[a]+")"}}):t._e()])}))],2),e("div",{staticClass:"source-links"},[t.app.liveUrl?e("a",{staticClass:"btn btn-primary card-link",attrs:{href:t.app.liveUrl,target:"blank"}},[t._v("See It")]):t._e(),t.app.repoUrl?e("a",{staticClass:"card-link",attrs:{href:t.app.repoUrl,target:"blank"}},[e("i",{staticClass:"fa fa-code"})]):t._e(),t.app.npmUrl?e("a",{staticClass:"card-link",attrs:{href:t.app.npmUrl,target:"blank"}},[e("i",{staticClass:"fab fa-npm"})]):t._e()])])])},O=[],I={name:"AppdCard",props:["app","logos"]},L=I,P=(e("c177"),Object(u["a"])(L,j,O,!1,null,null,null)),U=P.exports,A={name:"App",components:{HeroSection:C,BannerSection:g,ContactLinks:x,AppCard:U},data:function(){return{dataIsLoading:!0,data:null,logos:null}},beforeMount:function(){this.getData()},methods:{getData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.dataIsLoading=!0,t.data=portfolioData,t.logos=logos,setTimeout((function(){t.dataIsLoading=!1}),50);case 4:case"end":return a.stop()}}),a)})))()},filterApps:function(t){return this.data.apps.filter((function(a){return t(a)}))}},computed:{}},B=A,M=(e("034f"),Object(u["a"])(B,s,n,!1,null,null,null)),D=M.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(D)}}).$mount("#app"),console.log(logos)},"70d4":function(t,a,e){},"85ec":function(t,a,e){},c177:function(t,a,e){"use strict";e("308d")},c36f:function(t,a,e){"use strict";e("70d4")},cba0:function(t,a,e){"use strict";e("f5f5")},e914:function(t,a,e){"use strict";e("186d")},f5f5:function(t,a,e){}});
//# sourceMappingURL=app.dd057bba.js.map