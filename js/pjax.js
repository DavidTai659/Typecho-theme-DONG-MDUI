var body=document.documentElement||document.body;window.onload=function(){ff();bbbc();zz();cc();bbb();ffdd();ccde();aa();ccd();addEvent(lamu,"click",function(a){bsk(a);aaa(body,{scrollTop:0})})};function ffed(a){var b=bb("loader")[0];switch(a){case "on":tre(b,"display");break;case "off":setTimeout(function(){aaaa(b,"display")},300)}}
function ccde(){const codeBlocks=document.querySelectorAll('pre');Array.prototype.forEach.call(codeBlocks,(codeBlock)=>{codeBlock.innerHTML="<table><tbody><td>"+codeBlock.textContent.trim().replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/^/,'<div class="code-line-bg"><span class="code-line">').replace(/\n/g,'</span></div>\n<div class="code-line-bg"><span class="code-line">').replace(/$/,'</span></div>')+"</table></tbody></td>"})}function ff(){var a=bb("box")[0];a&&(a.ajaxEnable=!0,a.currentPage=1,a.page="",addEvent(window,"scroll",function(a){a=bsk(a);a=document.documentElement.scrollTop||document.body.scrollTop;var b=document.documentElement.offsetHeight||document.body.offsetHeight,c=document.documentElement.clientHeight||document.body.clientHeight,f=bb("box")[0];f&&a>b-c-100&&f.ajaxEnable&&(f.ajaxEnable=!1,f.currentPage++,-1<window.location.pathname.indexOf("/author/")||-1<window.location.pathname.indexOf("/category/")||
-1<window.location.pathname.indexOf("/search/")||-1<window.location.pathname.indexOf("/tag/")?f.page="":f.page="/page/",ffed("on"),ajaxGet(window.location.protocol+"//"+window.location.hostname+window.location.pathname+f.page+f.currentPage+"/",function(a){if(-1<a.indexOf("article")){var b=document.createElement("div");b.innerHTML=a;tmpEles=bb("box",b)[0].childNodes;for(a=0;a<tmpEles.length;a++)1==tmpEles[a].nodeType&&f.appendChild(tmpEles[a]);f.ajaxEnable=!0;tmpEles=null;ppp("noChange")}else a=
document.createElement("p"),a.className="ajax-over",a.innerHTML="\u518d\u600e\u4e48\u62c9\u4e5f\u6ca1\u6709\u5566\uff01",f.appendChild(a);ffed("off")}))}));if(a=bb("comment-list")[0]){a.ajaxEnable=!0;var b=bb("current",bb("page-navigator")[0])[0];b&&b.getElementsByTagName("a")[0]&&NaN!=parseInt(b.getElementsByTagName("a")[0].innerHTML)?a.currentPage=parseInt(b.getElementsByTagName("a")[0].innerHTML):a.currentPage=1;addEvent(window,"scroll",function(a){a=bsk(a);
a=document.documentElement.scrollTop||document.body.scrollTop;var b=document.documentElement.clientHeight||document.body.clientHeight,c=bb("comment-list")[0];c&&a>c.offsetTop+c.offsetHeight-b-100&&c.ajaxEnable&&(c.ajaxEnable=!1,c.currentPage++,a=window.location.protocol+"//"+window.location.hostname+window.location.pathname,b=window.location.href.indexOf(".sb/comment-page-"),-1<b&&(a=window.location.href.substring(0,b+5)),ffed("on"),ajaxGet(a+"/comment-page-"+c.currentPage,function(a){var b=
document.createElement("div");b.innerHTML=a;if(bb("comment-list",b)[0]){a=bb("comment-list",b)[0].childNodes;for(b=0;b<a.length;b++)1==a[b].nodeType&&c.appendChild(a[b]);c.ajaxEnable=!0;ppp("noChange")}else a=document.createElement("li"),a.className="ajax-over",a.innerHTML="\u518d\u600e\u4e48\u62c9\u4e5f\u6ca1\u6709\u5566\uff01",c.appendChild(a);ffed("off")}))})}}
function zz(){for(var a=iid("m"),b=document.getElementsByTagName("a"),c=0;c<b.length;c++){var d=b[c];d.host!=window.location.host||d.ajaxed||"comment-reply"==d.parentNode.className||d.dataset.noajax||"_blank"==d.target||(addEvent(b[c],"click",function(b){b=bsk(b);stopPropagetion(b);preventDefault(b);var c=this;ffed("on");ajaxGet(c.href,function(b){a.innerHTML=b;b=(b=bb("m-post")[0])?b.getElementsByTagName("bt")[0]:null;var d=iid("blog-bt").innerHTML;document.title=
"";document.title=b?b.innerHTML+" - "+d:d;history.pushState({title:document.title,url:c.href,content:a.innerHTML},document.title,c.href);ppp();ffed("off");aaa(body,{scrollTop:0})})}),b[c].ajaxed=!0)}}
function bbbc(){var a=iid("submit"),b=iid("cancel-comment-reply-link"),c=iid("comments"),d=iid("textarea"),e=null,f=function(a){return(a=iid(a))?encodeURI(a.value):""};a&&(c.ajaxCommented||(c.ajaxCommented=!0,addEvent(c,"click",function(a){a=bsk(a);a.target=yut(a);"A"==a.target.nodeName&&"comment-reply"==a.target.parentNode.className&&(preventDefault(a),e=a.target.dataset.theid.substring(8))})),b.ajaxCommented||(b.ajaxCommented=!0,addEvent(b,"click",function(){e=
""})),a.ajaxCommented||(a.ajaxCommented=!0,addEvent(a,"click",function(a){a=bsk(a);preventDefault(a);ffed("on");iid("submit").value="\u5bc4\u51fa\u4e2d\u00b7\u00b7\u00b7";var b=new XMLHttpRequest;b.open("POST",iid("comment-form").action);a="author="+f("author")+"&mail="+f("mail")+"&url="+f("url")+"&text="+f("textarea")+"&parent="+e;b.setRequestHeader("Content-Type","application/x-www-form-urlencoded");b.setRequestHeader("X-Requested-With","XMLHttpRequest");b.send(a);b.onreadystatechange=
function(){if(4==b.readyState&&200==b.status){var a=document.createElement("div");a.innerHTML=b.responseText;tmpTitle=a.getElementsByTagName("title")[0]?a.getElementsByTagName("title")[0].innerHTML:null;"Error"==tmpTitle?(errorMessage=bb("container",a)[0],tip(errorMessage.innerHTML)):(d.value=null,iid("m").innerHTML=b.responseText,ppp())}ffed("off");iid("submit").value="\u5bc4\u51fa";tip("\u5bc4\u51fa\u6210\u529f\uff01")}}),addEvent(d,"keydown",function(b){b=bsk(b);
13==b.keyCode&&b.ctrlKey&&(preventDefault(b),a.click())})))}function cc(){var a=iid("m");addEvent(window,"popstate",function(b){b=bsk(b);b.state&&(a.innerHTML=b.state.content,document.title=b.state.title,ppp())})}function ppp(a){"noChange"!=a&&ff();bbbc();zz();cc();bbb();ffdd();ccde();aa();ccd()}
function bbb(){var a=bb("comment-border");if(0<a.length)for(var b=0;b<a.length;b++){var c=a[b].getElementsByTagName("a")[0];c?c.setAttribute("target","_blank"):null}}function bsk(a){return a||window.evnet}function stopPropagetion(a){a=bsk(a);a.stopPropagetion?a.stopPropagetion():a.cancelBubble=!0}function addEvent(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent?a.attachEvent("on"+b,c):a["on"+b]=c}
function removeEvent(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent?a.detachEvent("on"+b,c):a["on"+b]=null}function preventDefault(a){a.preventDefault?a.preventDefault():a.returnValue=!1}function yut(a){return a.target||a.srcElement}function each(a,b,c){if(a.forEach)a.forEach(b,c);else for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a)}function asd(a){(a=a.nextSibling)&&1!=a.nodeType&&(a=a.nextSibling);return a}
function bb(a,b){var c=[];b=(b?b:document).getElementsByTagName("*");for(var d=0,e=b.length;d<e;d++)-1<(b[d].className.baseVal?b[d].className.baseVal:b[d].className).split(" ").indexOf(a)&&c.push(b[d]);return c}function iid(a){return document.getElementById(a)}function opq(a,b){return a.currentStyle?a.currentStyle[b]:getComputedStyle(a,!1)[b]}function ipo(a,b){return a.className?(index=a.className.split(" ").indexOf(b),-1<index?!0:!1):!1}
function aaaa(a,b){var c=a.className.split(" ");index=c.indexOf(b);ipo(a,b)&&(c.splice(index,1),a.className=c.join(" "))}function tre(a,b){ipo(a,b)||(a.className+=" "+b)}var ajaxGet=function(a,b){var c=null;window.XMLHttpRequest?c=new window.XMLHttpRequest:window.ActiveXObject&&(c=new ActiveXObject("Msxml2.XMLHTTP"));c.onreadystatechange=function(){4==c.readyState&&200==c.status&&b(c.responseText)};c.open("GET",a,!0);c.setRequestHeader("X-Requested-With","XMLHttpRequest");c.send(null)};
function aaa(a,b,c){a==body&&(a=document.documentElement.scrollTop?document.documentElement:document.body);clearInterval(a.timer);a.timer=setInterval(function(){var d=!0,e;for(e in b)cust="opacity"==e?Math.round(100*parseFloat(opq(a,e))):"scrollTop"==e?parseInt(a[e]):parseInt(opq(a,e)),speed=b[e]>cust?Math.ceil((b[e]-cust)/5):Math.floor((b[e]-cust)/5),cust!=b[e]&&(d=!1),"opacity"==e?(a.style.filter="alpha(opacity="+cust+speed+")",a.style.opacity=(cust+speed)/100):"scrollTop"==e?a[e]=
cust+speed:a.style[e]=cust+speed+"px";d&&(clearInterval(a.timer),c&&c())},20)}function ffdd(){if(iid("td3h")){iid("td2h").style.display="none";var a=0,b=iid("td"),c=iid("td3h").innerText;b.style.display="block";b.className="tdtitle";var d=function(){a<=c.length?(b.innerHTML=c.slice(0,a++),setTimeout(d,100)):b.innerHTML=c};d()}else iid("td2h").style.display="block",iid("td").style.display="none"}
function display(a){a=iid(a);a.style.display="none"==a.style.display?"":"none"}
function aa(){if(iid("postid"))var a=iid("postid").innerText;window.TypechoComment={dom:function(a){return iid(a)},create:function(a,c){a=document.createElement(a);for(var b in c)a.setAttribute(b,c[b]);return a},reply:function(b,c){b=this.dom(b);var d=this.dom(a),e=this.dom("comment-parent"),f="form"==d.tagName?d:d.getElementsByTagName("form")[0],g=d.getElementsByTagName("textarea")[0];null==e&&(e=this.create("input",{type:"hidden",name:"parent",id:"comment-parent"}),f.appendChild(e));
e.setAttribute("value",c);null==this.dom("comment-form-place-holder")&&(c=this.create("div",{id:"comment-form-place-holder"}),d.parentNode.insertBefore(c,d));b.appendChild(d);this.dom("cancel-comment-reply-link").style.display="";null!=g&&"text"==g.name&&g.focus();return!1},cancelReply:function(){var b=this.dom(a),c=this.dom("comment-form-place-holder"),d=this.dom("comment-parent");null!=d&&d.parentNode.removeChild(d);if(null==c)return!0;this.dom("cancel-comment-reply-link").style.display="none";
c.parentNode.insertBefore(b,c);return!1}}}aa();function ccd(){for(var a=bb("at"),b=0;b<a.length;b++)a[b].parentNode.parentNode.style="margin-left:30px"}function tip(a){var b=iid("tip");b.innerHTML=a;b.style.marginLeft=-(b.offsetWidth/2)+"px";tre(b,"display");setTimeout(function(){aaaa(b,"display")},3E3)};