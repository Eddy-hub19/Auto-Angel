function isMobileDevice(){return void 0!==window.orientation||-1!==navigator.userAgent.indexOf("IEMobile")}window.onload=function(){crear_select()};var li=new Array;function crear_select(){for(var e=document.querySelectorAll("[data-mate-select='active']"),t="",l=0;l<e.length;l++){e[l].setAttribute("data-indx-select",l),e[l].setAttribute("data-selec-open","false");var c=document.querySelectorAll("[data-indx-select='"+l+"'] > .cont_list_select_mate > ul");t=document.querySelectorAll("[data-indx-select='"+l+"'] >select")[0],isMobileDevice()&&t.addEventListener("change",(function(){_select_option(t.selectedIndex,l)}));var n=t.options;document.querySelectorAll("[data-indx-select='"+l+"']  > .selecionado_opcion ")[0].setAttribute("data-n-select",l),document.querySelectorAll("[data-indx-select='"+l+"']  > .icon_select_mate ")[0].setAttribute("data-n-select",l);for(var a=0;a<n.length;a++)li[a]=document.createElement("li"),1!=n[a].selected&&t.value!=n[a].innerHTML||(li[a].className="active",document.querySelector("[data-indx-select='"+l+"']  > .selecionado_opcion ").innerHTML=n[a].innerHTML),li[a].setAttribute("data-index",a),li[a].setAttribute("data-selec-index",l),li[a].addEventListener("click",(function(){_select_option(this.getAttribute("data-index"),this.getAttribute("data-selec-index"))})),li[a].innerHTML=n[a].innerHTML,c[0].appendChild(li[a])}}var cont_slc=0;function open_select(e){var t=e.getAttribute("data-n-select"),l=document.querySelectorAll("[data-indx-select='"+t+"'] .cont_select_int > li"),c=0,n=document.querySelectorAll("[data-indx-select='"+t+"']")[0].getAttribute("data-selec-open"),a=document.querySelectorAll("[data-indx-select='"+t+"'] select")[0];if(isMobileDevice())if(window.document.createEvent){var i=window.document.createEvent("MouseEvents");i.initMouseEvent("mousedown",!1,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),a.dispatchEvent(i)}else a.fireEvent?a.fireEvent("onmousedown"):a.click();else{for(var o=0;o<l.length;o++)c+=l[o].offsetHeight;"false"==n?(document.querySelectorAll("[data-indx-select='"+t+"']")[0].setAttribute("data-selec-open","true"),document.querySelectorAll("[data-indx-select='"+t+"'] > .cont_list_select_mate > ul")[0].style.height=c+"px",document.querySelectorAll("[data-indx-select='"+t+"'] > .icon_select_mate")[0].style.transform="rotate(180deg)"):(document.querySelectorAll("[data-indx-select='"+t+"']")[0].setAttribute("data-selec-open","false"),document.querySelectorAll("[data-indx-select='"+t+"'] > .icon_select_mate")[0].style.transform="rotate(0deg)",document.querySelectorAll("[data-indx-select='"+t+"'] > .cont_list_select_mate > ul")[0].style.height="0px")}}function salir_select(e){document.querySelectorAll("[data-indx-select='"+e+"'] > select")[0];document.querySelectorAll("[data-indx-select='"+e+"'] > .cont_list_select_mate > ul")[0].style.height="0px",document.querySelector("[data-indx-select='"+e+"'] > .icon_select_mate").style.transform="rotate(0deg)",document.querySelectorAll("[data-indx-select='"+e+"']")[0].setAttribute("data-selec-open","false")}function _select_option(e,t){isMobileDevice()&&(t-=1);for(var l=document.querySelectorAll("[data-indx-select='"+t+"'] > select")[0],c=document.querySelectorAll("[data-indx-select='"+t+"'] .cont_select_int > li"),n=(document.querySelectorAll("[data-indx-select='"+t+"'] > .selecionado_opcion")[0].innerHTML=c[e].innerHTML,document.querySelectorAll("[data-indx-select='"+t+"'] > select > option")),a=0;a<c.length;a++)"active"==c[a].className&&(c[a].className=""),c[e].className="active";n[e].selected=!0,l.selectedIndex=e,l.onchange(),salir_select(t)}
//# sourceMappingURL=index.9113550e.js.map