!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"KKDwgMuwO176ACEF",ck:"KKDwgMuwO176ACEF"});

(function() {
  var script = document.createElement("script");
  script.id = "LA-DATA-WIDGET";
  script.className = "heng";
  script.crossOrigin = "anonymous";
  script.charset = "UTF-8";
  // script.src = "https://v6-widget.51.la/v6/Jf8rVs7oam5pFYhA/quote.js?theme=#FFFFFF,#E0E0E0,#E0E0E0,#E0E0E0,#FFFFFF,#FFFFFF,14&f=14&display=0,1,0,1,0,0,1,0";
  // script.src = "https://v6-widget.51.la/v6/KKDwgMuwO176ACEF/quote.js?theme=#FFFFFF,#E0E0E0,#E0E0E0,#E0E0E0,#FFFFFF,#FFFFFF,14&f=14&display=0,1,0,1,0,0,1,0";
  // script.src = "https://v6-widget.51.la/v6/KKDwgMuwO176ACEF/quote.js?theme=#FFFFFF,#E0E0E0,#E0E0E0,#E0E0E0,#FFFFFF,#FFFFFF,14&f=14&display=0,0,0,1,0,0,0,1";
  // script.src = "https://v6-widget.51.la/v6/KKDwgMuwO176ACEF/quote.js?theme=#FFFFFF,#E0E0E0,#E0E0E0,#E0E0E0,#FFFFFF,#FFFFFF,14&f=14&display=0,0,0,1,0,0,0,0";
  script.src = "https://v6-widget.51.la/v6/KKDwgMuwO176ACEF/quote.js?theme=#FFFFFF,#E0E0E0,#E0E0E0,#E0E0E0,#FFFFFF,#FFFFFF,14&f=14&display=0,1,0,1,0,0,0,0";
  // document.head.appendChild(script);
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(script, s);
})();


window.addEventListener("load", function() {
  const element = document.querySelector(".md-copyright");
  const la51 = document.querySelector(".la-data-widget__container").innerHTML;
  element.insertAdjacentHTML('afterend', `<div>${la51}</div>`);
});
