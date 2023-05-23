var button=document.querySelector(".up"),displayButton=function(){window.addEventListener("scroll",(function(){window.scrollY>100?button.style.display="flex":button.style.display="none"}))},scrollToTop=function(){button.addEventListener("click",(function(){window.scroll({top:0,left:0,behavior:"smooth"})}))};displayButton(),scrollToTop();
//# sourceMappingURL=public-offer.db376bad.js.map
