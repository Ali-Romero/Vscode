(function(e){function t(t){for(var o,s,c=t[0],l=t[1],a=t[2],f=0,d=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,c=1;c<n.length;c++){var l=n[c];0!==i[l]&&(o=!1)}o&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},r=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var a=0;a<c.length;a++)t(c[a]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"042c":function(e,t,n){e.exports=n.p+"img/browserlist.358d7305.svg"},"0dcb":function(e,t,n){e.exports=n.p+"img/vue.14806e4a.svg"},"0e5a":function(e,t,n){e.exports=n.p+"img/git.af4d6639.svg"},1061:function(e,t,n){},"13ba":function(e,t,n){},"168d":function(e,t,n){e.exports=n.p+"img/footer-icon.274c5983.svg"},2087:function(e,t,n){e.exports=n.p+"img/js.85461141.svg"},"2ea6":function(e,t,n){e.exports=n.p+"img/folder-images-open.69d7f152.svg"},"307d":function(e,t,n){"use strict";n("93bb")},"4ada":function(e,t,n){},"4d56":function(e,t,n){e.exports=n.p+"img/folder-resource.45f987e4.svg"},"50bf":function(e,t,n){e.exports=n.p+"img/folder-images.68713028.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function i(e,t,n,i,r,s){var c=Object(o["p"])("Menu"),l=Object(o["p"])("Toolbar"),a=Object(o["p"])("FolderView"),u=Object(o["p"])("Layout");return Object(o["m"])(),Object(o["d"])(u,null,{menu:Object(o["s"])((function(){return[Object(o["i"])(c)]})),toolbar:Object(o["s"])((function(){return[Object(o["i"])(l)]})),explorer:Object(o["s"])((function(){return[Object(o["i"])(a,{name:"$",folders:e.folders,files:e.files},null,8,["folders","files"])]})),_:1})}var r=n("d0b5"),s=n.n(r),c=n("168d"),l=n.n(c),a={class:"layout"},u={class:"layout__header"},f=Object(o["g"])("div",{class:"layout__logo"},[Object(o["g"])("img",{src:s.a,alt:"logo",width:"24",height:"24"})],-1),d={class:"layout__wrapper"},p={class:"layout__toolbar"},g=Object(o["g"])("div",{class:"layout__title"},"explorer",-1),m={class:"layout__main"},b=Object(o["g"])("footer",{class:"layout__footer"},[Object(o["g"])("div",{class:"footer"},[Object(o["g"])("div",{class:"footer__item"},[Object(o["g"])("div",{class:"footer__icon"},[Object(o["g"])("img",{src:l.a,alt:"logo",width:"16",height:"16"})]),Object(o["g"])("div",{class:"footer__description"},"Visual Studio Code ")])])],-1);function v(e,t,n,i,r,s){return Object(o["m"])(),Object(o["f"])("div",a,[Object(o["g"])("header",u,[f,Object(o["o"])(e.$slots,"menu")]),Object(o["g"])("div",d,[Object(o["g"])("aside",p,[Object(o["o"])(e.$slots,"toolbar")]),Object(o["g"])("aside",{class:"layout__explorer",style:Object(o["l"])(s.explorer_styles)},[g,Object(o["g"])("div",{class:"layout__resize",onMousedown:t[0]||(t[0]=function(){return s.mousedown&&s.mousedown.apply(s,arguments)})},null,32),Object(o["g"])("div",{class:Object(o["k"])(["layout__explorer-inner",s.explorer_classes])},[Object(o["o"])(e.$slots,"explorer")],2)],4),Object(o["g"])("main",m,[Object(o["o"])(e.$slots,"main")])]),b])}var j=150,h=600,_={data:function(){return{inactive:!1,explorer_width:250}},computed:{explorer_styles:function(){return{point:0,point_width:0,width:"".concat(this.explorer_width,"px")}},explorer_classes:function(){return{"layout__explorer-inner--inactive":this.inactive}}},methods:{mousemove:function(e){var t=this.point_width+(e.clientX-this.point);this.explorer_width=Math.max(Math.min(t,h),j)},mouseup:function(){this.inactive=!1,document.removeEventListener("mousemove",this.mousemove),document.removeEventListener("mouseup",this.mouseup)},mousedown:function(e){e.preventDefault(),this.inactive=!0,this.point=e.clientX,this.point_width=this.explorer_width,document.addEventListener("mousemove",this.mousemove),document.addEventListener("mouseup",this.mouseup)}}};n("307d");_.render=v;var O=_,y=(n("b0c0"),["data-deep"]),w={class:"folder__list"};function x(e,t,n,i,r,s){var c=Object(o["p"])("Item"),l=Object(o["p"])("FolderView",!0),a=Object(o["p"])("CollapseTransition");return Object(o["m"])(),Object(o["f"])("div",{class:"folder","data-deep":n.deep},[Object(o["g"])("div",{class:"folder__line",style:Object(o["l"])({left:"".concat(n.deep,"px")})},null,4),Object(o["i"])(c,{folder:"",deep:n.deep,open:r.show,icon:s.getFolderIcon(n.name),label:n.name,onClick:t[0]||(t[0]=function(e){return r.show=!r.show})},null,8,["deep","open","icon","label"]),n.folders.length||n.files.length?(Object(o["m"])(),Object(o["d"])(a,{key:0},{default:Object(o["s"])((function(){return[Object(o["t"])(Object(o["g"])("ul",w,[(Object(o["m"])(!0),Object(o["f"])(o["a"],null,Object(o["n"])(n.folders,(function(e,t){return Object(o["m"])(),Object(o["f"])("li",{key:t,class:"folder__child folder__child--folder"},[Object(o["i"])(l,{name:e.name,folders:e.folders,files:e.files,deep:s.computed_deep},null,8,["name","folders","files","deep"])])})),128)),(Object(o["m"])(!0),Object(o["f"])(o["a"],null,Object(o["n"])(n.files,(function(e,t){return Object(o["m"])(),Object(o["f"])("li",{key:t,class:"folder__child folder__child--file"},[Object(o["i"])(c,{deep:s.computed_deep,icon:s.getFileIcon(e.name),label:e.name},null,8,["deep","icon","label"])])})),128))],512),[[o["r"],r.show]])]})),_:1})):Object(o["e"])("",!0)],8,y)}n("a9e3"),n("ac1f"),n("1276"),n("99af"),n("a15b");function E(e,t,n,i,r,s){return Object(o["m"])(),Object(o["d"])(o["b"],Object(o["j"])({key:Date.now()+Math.random(),name:"collapse"},e.$attrs,{onBeforeEnter:s.beforeEnter,onEnter:s.enter,onAfterEnter:s.afterEnter,onBeforeLeave:s.beforeLeave,onLeave:s.leave}),{default:Object(o["s"])((function(){return[Object(o["o"])(e.$slots,"default",{},void 0,!0)]})),_:3},16,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave"])}var k={methods:{beforeEnter:function(e){requestAnimationFrame((function(){e.style.height||(e.style.height="0px"),e.style.display=null}))},enter:function(e){requestAnimationFrame((function(){requestAnimationFrame((function(){e.style.height="".concat(e.scrollHeight,"px")}))}))},afterEnter:function(e){e.style.height=null},beforeLeave:function(e){requestAnimationFrame((function(){e.style.height||(e.style.height="".concat(e.offsetHeight,"px"))}))},leave:function(e){requestAnimationFrame((function(){requestAnimationFrame((function(){e.style.height="0px"}))}))},afterLeave:function(e){e.style.height=null}}};n("e4e9");k.render=E,k.__scopeId="data-v-7c34e01a";var F=k,L=n("c874"),A=n.n(L),M={key:0,class:"item__arrow"},q=Object(o["g"])("img",{src:A.a,alt:"arrow",width:"10",height:"10"},null,-1),S=[q],$={class:"item__icon"},T=["src"],I={class:"item__text"};function P(e,t,i,r,s,c){return Object(o["m"])(),Object(o["f"])("div",Object(o["j"])(e.$attrs,{class:["item",c.classes]}),[Object(o["g"])("div",{style:Object(o["l"])(c.styles),class:"item__wrapper"},[i.folder?(Object(o["m"])(),Object(o["f"])("div",M,S)):Object(o["e"])("",!0),Object(o["g"])("div",$,[Object(o["g"])("img",{src:n("67f7")("./".concat(i.icon)),alt:"icon",width:"18",height:"18"},null,8,T)]),Object(o["g"])("div",I,Object(o["q"])(i.label),1)],4)],16)}var B={props:{icon:{type:String,required:!0},label:{type:String,required:!0},folder:{type:Boolean,default:!1},open:{type:Boolean,default:!1},deep:{type:Number,required:!0}},computed:{classes:function(){return{"item--open":this.open}},file_padding:function(){return"".concat(this.deep+18,"px")},folder_padding:function(){return"".concat(this.deep,"px")},styles:function(){var e=this.folder?this.folder_padding:this.file_padding;return{"padding-left":e}}}};n("9bdf");B.render=P;var V=B,C={name:"FolderView",components:{CollapseTransition:F,Item:V},props:{name:String,folders:Array,files:Array,deep:{type:Number,default:0}},data:function(){return{show:"$"===this.name,file_icons:{svg:"svg.svg",jpeg:"image.svg",jpg:"image.svg",png:"image.svg",browserslistrc:"browserlist.svg",gitignore:"git.svg",js:"js.svg",json:"nodejs.svg"},folder_icons:{assets:"folder-resource.svg",icons:"folder-images.svg",backgrounds:"folder-images.svg"}}},computed:{computed_deep:function(){return this.deep+10}},methods:{getFileIcon:function(e){var t=e.split(".").pop();return this.file_icons[t]||"file.svg"},getFolderIcon:function(e){var t=this.folder_icons[e]||"folder-meta.svg";if(this.show){var n=t.split("."),o=n.pop();return"".concat(n.join("."),"-open.").concat(o)}return t}}};n("7272");C.render=x;var D=C,N=n("9b6a"),H=n.n(N),J=n("6023"),U=n.n(J),X=n("a2fd"),z=n.n(X),G={class:"toolbar"},R=Object(o["g"])("ul",{class:"toolbar__list"},[Object(o["g"])("li",{class:"toolbar__item"},[Object(o["g"])("img",{src:H.a,width:"30",height:"30",alt:"icon"})]),Object(o["g"])("li",{class:"toolbar__item"},[Object(o["g"])("img",{src:U.a,width:"30",height:"30",alt:"icon"})]),Object(o["g"])("li",{class:"toolbar__item"},[Object(o["g"])("img",{src:z.a,width:"30",height:"30",alt:"icon"})])],-1),K=[R];function Q(e,t){return Object(o["m"])(),Object(o["f"])("nav",G,K)}n("f8e4");const W={};W.render=Q;var Y=W,Z={class:"menu"},ee=Object(o["h"])('<ul class="menu__list"><li class="menu__item">File</li><li class="menu__item">Edit</li><li class="menu__item">Selection</li><li class="menu__item">View</li><li class="menu__item">Go</li><li class="menu__item">Run</li><li class="menu__item">Terminal</li><li class="menu__item">Help</li></ul>',1),te=[ee];function ne(e,t){return Object(o["m"])(),Object(o["f"])("nav",Z,te)}n("d63d");const oe={};oe.render=ne;var ie=oe,re={folders:[{name:"assets",folders:[{name:"icons",folders:[],files:[{name:"close.svg",type:"image/svg",length:"1024"},{name:"open.svg",type:"image/svg",length:"1024"},{name:"exit.svg",type:"image/svg",length:"1024"},{name:"relocat.svg",type:"image/svg",length:"1024"}]},{name:"backgrounds",folders:[],files:[{name:"common.jpeg",type:"image/jpeg",length:"1024"},{name:"secondary.jpg",type:"image/jpeg",length:"1024"},{name:"overlay.png",type:"image/png",length:"1024"}]}],files:[]}],files:[{name:".browserslistrc",type:"application/octet-stream",length:"1024"},{name:".gitignore",type:"text/plain",length:"231"},{name:"babel.config.js",type:"application/javascript",length:"73"},{name:"package-lock.json",type:"application/json",length:"47941"}]},se={name:"App",components:{FolderView:D,Layout:O,Toolbar:Y,Menu:ie},data:function(){return re}};se.render=i;var ce=se;n("b718"),n("1061");Object(o["c"])(ce).mount("#app")},"5fec":function(e,t,n){e.exports=n.p+"img/nodejs.26f74953.svg"},6023:function(e,t,n){e.exports=n.p+"img/toolbar-search.ff6856b8.svg"},"67f7":function(e,t,n){var o={"./arrow-down.svg":"c874","./browserlist.svg":"042c","./file.svg":"a147","./folder-images-open.svg":"2ea6","./folder-images.svg":"50bf","./folder-meta-open.svg":"9c41","./folder-meta.svg":"6e61","./folder-resource-open.svg":"9919","./folder-resource.svg":"4d56","./footer-icon.svg":"168d","./git.svg":"0e5a","./image.svg":"931c","./js.svg":"2087","./nodejs.svg":"5fec","./svg.svg":"9bb4","./toolbar-extensions.svg":"a2fd","./toolbar-file.svg":"9b6a","./toolbar-search.svg":"6023","./vscode.svg":"d0b5","./vue.svg":"0dcb"};function i(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id="67f7"},"6e61":function(e,t,n){e.exports=n.p+"img/folder-meta.228d6248.svg"},7272:function(e,t,n){"use strict";n("c522")},"931c":function(e,t,n){e.exports=n.p+"img/image.9b8ac1d9.svg"},"93bb":function(e,t,n){},9919:function(e,t,n){e.exports=n.p+"img/folder-resource-open.f2d8e810.svg"},"9b6a":function(e,t,n){e.exports=n.p+"img/toolbar-file.4a8336bd.svg"},"9bb4":function(e,t,n){e.exports=n.p+"img/svg.8087f161.svg"},"9bdf":function(e,t,n){"use strict";n("ab27")},"9c41":function(e,t,n){e.exports=n.p+"img/folder-meta-open.8a217f84.svg"},a147:function(e,t,n){e.exports=n.p+"img/file.34ee63fa.svg"},a2fd:function(e,t,n){e.exports=n.p+"img/toolbar-extensions.4aa03491.svg"},ab27:function(e,t,n){},b718:function(e,t,n){},c522:function(e,t,n){},c874:function(e,t,n){e.exports=n.p+"img/arrow-down.5315b6d8.svg"},c98e:function(e,t,n){},d0b5:function(e,t,n){e.exports=n.p+"img/vscode.b523c57c.svg"},d63d:function(e,t,n){"use strict";n("c98e")},e4e9:function(e,t,n){"use strict";n("4ada")},f8e4:function(e,t,n){"use strict";n("13ba")}});
//# sourceMappingURL=app.716b2f56.js.map