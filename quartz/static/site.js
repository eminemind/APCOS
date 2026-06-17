(function(){
"use strict";
var NS="http://www.w3.org/2000/svg";
var PAL={dawn:{sun:"#F2C079",sO:.45,sky:"#231A12",r:["#6B4F30","#4F3520","#362215"]},forest:{sun:"#CFE0A0",sO:.28,sky:"#1A2118",r:["#4A6344","#374D36","#253626"]},ember:{sun:"#E68A55",sO:.40,sky:"#241510",r:["#7A3A22","#55281A","#361A12"]},misty:{sun:"#C2D6D0",sO:.25,sky:"#181F1D",r:["#5E7A73","#435652","#2D3B37"]},blend:{sun:"#E2B98C",sO:.32,sky:"#201A14",r:["#7A5C38","#4A6344","#32301E"]},neutral:{sun:"#CBBCA2",sO:.28,sky:"#1E1914",r:["#6B6050","#4A4338","#332E26"]}};
function lcg(s){return function(){s=(s*1664525+1013904223)%4294967296;return s/4294967296}}
function ridge(w,h,by,amp,rnd,st){st=st||6;var pts=[];for(var i=0;i<=st;i++)pts.push([w*i/st,by-amp*(.35+.65*rnd())]);var d="M "+pts[0][0].toFixed(1)+" "+pts[0][1].toFixed(1);for(var j=0;j<pts.length-1;j++){var p0=pts[j-1]||pts[j],p1=pts[j],p2=pts[j+1],p3=pts[j+2]||pts[j+1];d+=" C "+(p1[0]+(p2[0]-p0[0])/6).toFixed(1)+" "+(p1[1]+(p2[1]-p0[1])/6).toFixed(1)+" "+(p2[0]-(p3[0]-p1[0])/6).toFixed(1)+" "+(p2[1]-(p3[1]-p1[1])/6).toFixed(1)+" "+p2[0].toFixed(1)+" "+p2[1].toFixed(1)}return d+" L "+w+" "+(h+2)+" L 0 "+(h+2)+" Z"}
function rect(svg,w,h,fill){var r=document.createElementNS(NS,"rect");r.setAttribute("width",w);r.setAttribute("height",h);r.setAttribute("fill",fill);svg.appendChild(r)}
function build(svg,key,o){o=o||{};var p=PAL[key]||PAL.neutral,w=o.w||400,h=o.h||130,seed=o.seed||(key.length*37+7);while(svg.firstChild)svg.removeChild(svg.firstChild);svg.setAttribute("viewBox","0 0 "+w+" "+h);if(o.sky!==false)rect(svg,w,h,p.sky);var sun=document.createElementNS(NS,"circle");sun.setAttribute("cx",w*(o.sx||.65));sun.setAttribute("cy",h*(o.sy||.48));sun.setAttribute("r",h*(o.sr||.36));sun.setAttribute("fill",p.sun);sun.setAttribute("opacity",p.sO);svg.appendChild(sun);var rnd=lcg(seed),n=p.r.length;for(var i=0;i<n;i++){var t=i/(n-1||1),by=h*(.42+.44*t),amp=h*(.14+.18*(1-t));var pa=document.createElementNS(NS,"path");pa.setAttribute("d",ridge(w,h,by,amp,rnd,o.st||6));pa.setAttribute("fill",p.r[i]);svg.appendChild(pa)}if(o.mist)for(var m=0;m<2;m++){var li=document.createElementNS(NS,"rect");li.setAttribute("x",0);li.setAttribute("y",h*(.52+m*.14));li.setAttribute("width",w);li.setAttribute("height",1.2);li.setAttribute("fill",p.sun);li.setAttribute("opacity",.08);svg.appendChild(li)}}
var hero=document.getElementById("heroArt");if(hero)build(hero,"dawn",{w:1200,h:380,seed:91,sx:.5,sy:.52,sr:.3,st:9,mist:true});
var foot=document.getElementById("footArt");if(foot)build(foot,"neutral",{w:1200,h:200,seed:23,sx:.5,sy:.7,sr:.28,st:9,sky:false});
document.querySelectorAll(".cd-art").forEach(function(el){if(el.dataset.b)return;el.dataset.b="1";var key=el.parentElement.getAttribute("data-art")||"neutral";var svg=document.createElementNS(NS,"svg");svg.setAttribute("preserveAspectRatio","xMidYMid slice");el.appendChild(svg);build(svg,key,{w:400,h:120,seed:key.length*53+11,st:6})});
document.querySelectorAll(".oa").forEach(function(el){if(el.dataset.b)return;el.dataset.b="1";var key=el.getAttribute("data-art")||"neutral";var svg=document.createElementNS(NS,"svg");svg.setAttribute("preserveAspectRatio","xMidYMid slice");el.appendChild(svg);build(svg,key,{w:120,h:80,seed:key.length*29+5,st:5,sr:.45})});
setTimeout(function(){document.querySelectorAll(".hero .lb,.hero h1,.hero .rl,.hero .s1,.hero .s2,.hero .cue").forEach(function(el){el.style.opacity="1";el.style.transform="none"})},100);
var bar=document.getElementById("apBar"),ticking=false;
function onScroll(){var y=window.pageYOffset,h=document.documentElement.scrollHeight-window.innerHeight;if(bar)bar.style.width=(h>0?(y/h*100):0)+"%";ticking=false}
window.addEventListener("scroll",function(){if(!ticking){requestAnimationFrame(onScroll);ticking=true}},{passive:true});
if("IntersectionObserver" in window){var ro=new IntersectionObserver(function(entries){entries.forEach(function(e){if(e.isIntersecting){var sibs=Array.prototype.filter.call(e.target.parentNode.children,function(c){return c.classList.contains("rv")});e.target.style.transitionDelay=(Math.min(sibs.indexOf(e.target),6)*0.07)+"s";e.target.classList.add("in");ro.unobserve(e.target)}})},{threshold:0.12,rootMargin:"0px 0px -6% 0px"});document.querySelectorAll(".rv").forEach(function(el){ro.observe(el)})}
document.querySelectorAll(".tab").forEach(function(tab){tab.addEventListener("click",function(){document.querySelectorAll(".tab").forEach(function(t){t.classList.remove("on")});tab.classList.add("on");var f=tab.getAttribute("data-f");document.querySelectorAll("#gd .cd").forEach(function(c){c.classList.toggle("hide",f!=="all"&&c.getAttribute("data-cat")!==f)})})});
var R="hello@apcoffee.example";
function v(id){var el=document.getElementById(id);return el?el.value.trim():""}
function ml(s,b){window.location.href="mailto:"+R+"?subject="+encodeURIComponent(s)+"&body="+encodeURIComponent(b)}
var form=document.getElementById("apF");
if(form){form.addEventListener("submit",function(e){e.preventDefault();var n=v("cf-n")||"\u2014",t=v("cf-t"),p=v("cf-p"),q=v("cf-q")||"\u2014",em=v("cf-e")||"\u2014",m=v("cf-m")||"\u2014";ml("Asia Pacific Coffee Supply \u304a\u554f\u3044\u5408\u308f\u305b\uff5c"+t,"Asia Pacific Coffee Supply \u3078\u306e\u304a\u554f\u3044\u5408\u308f\u305b\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u304a\u540d\u524d: "+n+"\n\u8fd4\u4fe1\u5148: "+em+"\n\u7a2e\u5225: "+t+"\n\u5546\u54c1: "+p+"\n\u6570\u91cf: "+q+"\n\n\u30e1\u30c3\u30bb\u30fc\u30b8:\n"+m+"\n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\uff08apcos.pages.dev \u306e\u30d5\u30a9\u30fc\u30e0\u3088\u308a\uff09")})}
document.querySelectorAll("[data-mailto]").forEach(function(btn){btn.addEventListener("click",function(){var k=btn.getAttribute("data-mailto");if(k==="wholesale"){ml("Asia Pacific Coffee Supply \u5378\u58f2\u306e\u304a\u554f\u3044\u5408\u308f\u305b","Asia Pacific Coffee Supply \u5378\u58f2\u306e\u304a\u554f\u3044\u5408\u308f\u305b\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n\u5e97\u8217\u540d: \n\u5e0c\u671b\u306e\u8c46: \n\u6708\u9593\u5fc5\u8981\u91cf: \n\u3054\u5e0c\u671b: \n\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500")}else{var c=document.getElementById("ct");if(c)c.scrollIntoView({behavior:"smooth"})}})});

var mapSvg=document.getElementById("seaMap");
if(mapSvg){
var proj=function(lon,lat){return[(lon-92)*22.2,(27-lat)*20]};
var countries={
vn:[[104.5,22.5],[106,22.5],[107.5,22],[108,21],[107,20],[107.5,18],[108.5,16],[109,13.5],[109,11.5],[108,11],[107,10.5],[106,9.5],[104.5,8.5],[105,9.5],[105.5,10.5],[106.5,11],[107,12],[107,14.5],[106,15.5],[105,17],[105.5,18],[105,20],[104.5,22.5]],
la:[[104.5,22.5],[105,20],[105.5,18],[105,17],[106,15.5],[107,14.5],[106,14.5],[105,14.5],[103.5,15],[102,16.5],[101,18],[100,20],[101,21.5],[103,22.5],[104.5,22.5]],
kh:[[105,14.5],[106,14.5],[107,14.5],[107,12],[106.5,11],[105.5,10.5],[104,10.5],[103,11],[103,12.5],[104,14],[105,14.5]],
th:[[98.5,10.5],[99,12],[99,14],[98.5,16],[99,18],[100,20],[101,18],[102,16.5],[103.5,15],[105,14.5],[104,14],[103,12.5],[103,11],[101.5,11.5],[100,13.5],[99.5,11.5],[99.5,9],[100,7],[100.5,6],[99.5,5],[98,5.5],[97.5,7],[98.5,10.5]],
mm:[[97,11],[97.5,14],[97.5,17],[98,19.5],[98.5,21.5],[100,21],[101,21.5],[100,20],[99,18],[98.5,16],[99,14],[99,12],[98.5,10.5],[97,11]],
cn:[[97.5,23],[98.5,21.5],[100,21],[101,21.5],[103,22.5],[104.5,22.5],[106,22.5],[107.5,22],[108.5,23],[109,24],[107,25],[104,25],[101,25],[98,24],[97.5,23]],
my:[[100,7],[101,6],[102,5],[103,4],[104,3],[104,2],[103,1.5],[101.5,3],[100.5,4.5],[100,5.5],[100,7]]
};
function drawCountry(key,pts,cls){
var d="";pts.forEach(function(p,i){var xy=proj(p[0],p[1]);d+=(i===0?"M":"L")+xy[0].toFixed(1)+","+xy[1].toFixed(1)});d+="Z";
var path=document.createElementNS(NS,"path");path.setAttribute("d",d);path.setAttribute("class","map-country"+(cls?" "+cls:""));mapSvg.appendChild(path)}
Object.keys(countries).forEach(function(k){drawCountry(k,countries[k],k==="vn"?"vn":"")});
var labels=[["Vietnam",[[107.5,15]]],["Laos",[[103.5,18]]],["Cambodia",[[105,12]]],["Thailand",[[100.5,10]]],["Myanmar",[[98,16]]],["China",[[103,24]]],["Malaysia",[[101.5,4]]]];
labels.forEach(function(l){var xy=proj(l[1][0][0],l[1][0][1]);var t=document.createElementNS(NS,"text");t.setAttribute("x",xy[0]);t.setAttribute("y",xy[1]);t.setAttribute("fill","rgba(237,229,214,.18)");t.setAttribute("font-family","'JetBrains Mono',monospace");t.setAttribute("font-size","8");t.setAttribute("letter-spacing",".1em");t.setAttribute("text-anchor","middle");t.textContent=l[0].toUpperCase();mapSvg.appendChild(t)});
var pins=[
{lon:108.46,lat:11.94,name:"\u0110\u00e0 L\u1ea1t",bean:"Highland Dawn",alt:"\u25b2 1,500m",desc:"\u706b\u5c71\u6027\u571f\u58cc\u3068\u671d\u9727\u306e\u9ad8\u539f\u3002\u83ef\u3084\u304b\u306a\u30a2\u30e9\u30d3\u30ab\u3002",future:false},
{lon:103.02,lat:21.39,name:"\u0110i\u1ec7n Bi\u00ean",bean:"Misty Peak",alt:"\u25b2 1,200m",desc:"\u9727\u6df1\u3044\u5c71\u5cb3\u5730\u3002\u77e5\u3089\u308c\u3056\u308b\u30a2\u30e9\u30d3\u30ab\u3002",future:false},
{lon:108.05,lat:12.9,name:"C\u01b0 M\u2019gar",bean:"Forest Whisper",alt:"\u25b2 800m",desc:"\u30d5\u30a1\u30a4\u30f3\u30ed\u30d6\u30b9\u30bf\u306e\u6700\u524d\u7dda\u3002",future:false},
{lon:107.6,lat:12.4,name:"Bu\u00f4n Ma Thu\u1ed9t",bean:"Sunset Ember",alt:"\u25b2 600m",desc:"\u300c\u30b3\u30fc\u30d2\u30fc\u306e\u9996\u90fd\u300d\u3002\u529b\u5f37\u304f\u6fc3\u539a\u3002",future:false},
{lon:106.5,lat:15.1,name:"Bolaven Plateau",bean:"",alt:"Laos",desc:"\u30e9\u30aa\u30b9\u5357\u90e8\u306e\u706b\u5c71\u6027\u9ad8\u539f\u3002\u30a2\u30e9\u30d3\u30ab\u306e\u65b0\u7523\u5730\u3002",future:true},
{lon:100.9,lat:22.8,name:"Pu\u2019er / Yunnan",bean:"",alt:"China",desc:"\u96f2\u5357\u7701\u306e\u9ad8\u5730\u3002\u4e2d\u56fd\u30b9\u30da\u30b7\u30e3\u30eb\u30c6\u30a3\u306e\u6ce8\u76ee\u7523\u5730\u3002",future:true}
];
pins.forEach(function(pin,idx){
var xy=proj(pin.lon,pin.lat);
var g=document.createElementNS(NS,"g");g.setAttribute("class","map-pin"+(pin.future?" future":""));g.setAttribute("transform","translate("+xy[0].toFixed(1)+","+xy[1].toFixed(1)+")");g.setAttribute("data-idx",idx);
var c1=document.createElementNS(NS,"circle");c1.setAttribute("class","outer");c1.setAttribute("r","12");
var c2=document.createElementNS(NS,"circle");c2.setAttribute("class","mid");c2.setAttribute("r","6");
var c3=document.createElementNS(NS,"circle");c3.setAttribute("class","inner");c3.setAttribute("r","3");
g.appendChild(c1);g.appendChild(c2);g.appendChild(c3);mapSvg.appendChild(g);
g.addEventListener("mouseenter",function(e){
var tip=document.getElementById("mapTip");
var box=document.getElementById("mapBox");
var rect=box.getBoundingClientRect();
var svgRect=mapSvg.getBoundingClientRect();
var px=xy[0]/600*svgRect.width;
var py=xy[1]/480*svgRect.height;
var tipX=px+20;var tipY=py-10;
if(tipX+180>rect.width)tipX=px-190;
if(tipY<0)tipY=py+20;
var h='<div class="tip-name">'+pin.name+'</div>';
if(pin.bean)h+='<div class="tip-origin">'+pin.bean+'</div>';
h+='<div class="tip-alt">'+pin.alt+'</div>';
h+='<div class="tip-desc">'+pin.desc+'</div>';
if(pin.future)h+='<div class="tip-future">Coming soon</div>';
tip.innerHTML=h;tip.style.left=tipX+"px";tip.style.top=tipY+"px";tip.classList.add("show")});
g.addEventListener("mouseleave",function(){document.getElementById("mapTip").classList.remove("show")});
});
}
onScroll();
})();