!function(){function e(){try{if("light"===localStorage.getItem("theme")||null!==localStorage.getItem("theme")){const e=document.body,t=document.querySelector(".moon"),o=document.querySelector(".toggleTheme"),n=document.querySelector(".toggleTheme-mobile");o.classList.toggle("day"),n.classList.toggle("day"),t.classList.toggle("sun"),e.classList.toggle("light")}else document.querySelector(".hero").classList.remove("dark"),document.querySelector("header").classList.remove("dark")}catch(e){console.log(e),console.log("Получається не зловило темну тему",localStorage)}}document.querySelector(".toggleTheme").addEventListener("click",(t=>{t.preventDefault(),"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","light"),e()})),document.querySelector(".toggleTheme-mobile").addEventListener("click",(t=>{t.preventDefault(),"dark"===localStorage.getItem("theme")?localStorage.removeItem("theme"):localStorage.setItem("theme","light"),e()})),e();const t=document.querySelector(".menu-btn"),o=document.querySelector(".menu");t.addEventListener("click",(()=>{t.classList.toggle("active"),o.classList.toggle("active")}));const n=document.querySelector(".close-btn");n.addEventListener("click",(()=>{n.classList.contains("white")?(n.classList.remove("white"),t.style.background="transparent"):(n.classList.add("white"),t.style.background="#e8e8e8")}));document.querySelectorAll(".menu-item").forEach((e=>{e.addEventListener("click",(()=>{t.classList.remove("active"),t.classList.remove("white"),o.classList.remove("active")}))}));new Swiper(".swiper1",{direction:"horizontal",loop:!0,speed:1e3,navigation:{nextEl:".swiper-button-next1",prevEl:".swiper-button-prev1"},mousewheel:{forceToAxis:!0}}),new Swiper(".swiper2",{direction:"horizontal",loop:!0,speed:1e3,navigation:{nextEl:".swiper-button-next2",prevEl:".swiper-button-prev2"},mousewheel:{forceToAxis:!0}}),new Swiper(".swiper3",{centeredSlides:!0,direction:"horizontal",loop:!0,speed:1e3,autoHeight:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next3",prevEl:".swiper-button-prev3"},mousewheel:{forceToAxis:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1,spaceBetween:30}}}),new Swiper(".swiper4",{centeredSlides:!0,direction:"horizontal",loop:!0,speed:1e3,autoHeight:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next4",prevEl:".swiper-button-prev4"},mousewheel:{forceToAxis:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:3}}});document.addEventListener("DOMContentLoaded",(function(){let e,t=document.getElementsByClassName("accordion");for(e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("active");let e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));document.querySelectorAll(".accordion-header").forEach((function(e){e.addEventListener("click",(function(){let e=this.parentNode;e.classList.toggle("active");let t=e.querySelector(".accordion-content");"flex"===t.style.display?t.style.display="none":t.style.display="flex"}))}))}));const s=document.querySelector(".up");window.addEventListener("scroll",(()=>{window.scrollY>100?s.style.display="flex":s.style.display="none"})),s.addEventListener("click",(()=>{window.scroll({top:0,left:0,behavior:"smooth"})}));let i;document.querySelector(".bank-details").onclick=e=>{const t=e.target;if(t.classList.contains("content-item__info")){const e=t.innerText;navigator.clipboard.writeText(e).then((()=>{const e=document.createElement("span");e.classList.add("copied"),e.textContent="Скопійовано",t.parentNode.appendChild(e),i=setTimeout((()=>{e.style.display="none",e.parentNode.removeChild(e)}),600)})),clearTimeout(i)}else copiedMessage.parentNode.removeChild(copiedMessage)};const r=document.querySelectorAll(".contacts-item");let a=[];r.forEach((e=>{e.onclick=e=>{const t=e.target;if(t.classList.contains("contacts-item__desc")){const e=t.innerText.replace(/\s+/g," ").trim();navigator.clipboard.writeText(e).then((()=>{const e=document.createElement("span");e.classList.add("copied"),e.textContent="Скопійовано",t.parentNode.appendChild(e);const o=setTimeout((()=>{e.style.display="none"}),600);a.push(o)}))}}}));var l={};Object.defineProperty(l,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var o=[],n=!0,s=!1,i=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);n=!0);}catch(e){s=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(s)throw i}}return o}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};l.default=function(e,t){var o=[],n=[];return function(){if(e&&e instanceof HTMLElement&&"SELECT"===e.tagName.toUpperCase())o.push(e);else if(e&&"string"==typeof e)for(var s=document.querySelectorAll(e),i=0,r=s.length;i<r;++i)s[i]instanceof HTMLElement&&"SELECT"===s[i].tagName.toUpperCase()&&o.push(s[i]);else if(e&&e.length)for(var a=0,l=e.length;a<l;++a)e[a]instanceof HTMLElement&&"SELECT"===e[a].tagName.toUpperCase()&&o.push(e[a]);for(var d=0,u=o.length;d<u;++d)n.push(v(o[d],c({},m,t)));return n}()};try{var u=new window.CustomEvent("test");if(u.preventDefault(),!0!==u.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var p=function(e,t){var o,n;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},(o=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n=o.preventDefault,o.preventDefault=function(){n.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},o};p.prototype=window.Event.prototype,window.CustomEvent=p}var m={containerClass:"custom-select-container",openerClass:"custom-select-opener",panelClass:"custom-select-panel",optionClass:"custom-select-option",optgroupClass:"custom-select-optgroup",isSelectedClass:"is-selected",hasFocusClass:"has-focus",isDisabledClass:"is-disabled",isOpenClass:"is-open"};function v(e,t){var o="customSelect",n=!1,s="",i=e,r=void 0,a=void 0,l=void 0,c=void 0,u=void 0,p=void 0,m=void 0,v="";function g(e){l&&l.classList.remove(t.hasFocusClass),void 0!==e?((l=e).classList.add(t.hasFocusClass),n&&(e.offsetTop<e.offsetParent.scrollTop||e.offsetTop>e.offsetParent.scrollTop+e.offsetParent.clientHeight-e.clientHeight)&&e.dispatchEvent(new CustomEvent("custom-select:focus-outside-panel",{bubbles:!0}))):l=void 0}function f(e){c&&(c.classList.remove(t.isSelectedClass),c.removeAttribute("id"),a.removeAttribute("aria-activedescendant")),void 0!==e?(e.classList.add(t.isSelectedClass),e.setAttribute("id","customSelect-"+s+"-selectedOption"),a.setAttribute("aria-activedescendant","customSelect-"+s+"-selectedOption"),c=e,a.children[0].textContent=c.customSelectOriginalOption.text):(c=void 0,a.children[0].textContent=""),g(e)}function h(e){var t=[].indexOf.call(i.options,l.customSelectOriginalOption);i.options[t+e]&&g(i.options[t+e].customSelectCstOption)}function C(e){if(e||void 0===e){var o=document.querySelector(".customSelect."+t.isOpenClass);o&&(o.customSelect.open=!1),r.classList.add(t.isOpenClass),r.classList.add(t.isOpenClass),a.setAttribute("aria-expanded","true"),c&&(u.scrollTop=c.offsetTop),r.dispatchEvent(new CustomEvent("custom-select:open")),n=!0}else r.classList.remove(t.isOpenClass),a.setAttribute("aria-expanded","false"),n=!1,g(c),r.dispatchEvent(new CustomEvent("custom-select:close"));return n}function b(e){e.target===a||a.contains(e.target)?n?C(!1):C():e.target.classList&&e.target.classList.contains(t.optionClass)&&u.contains(e.target)?(f(e.target),c.customSelectOriginalOption.selected=!0,C(!1),i.dispatchEvent(new CustomEvent("change"))):e.target===i?a!==document.activeElement&&i!==document.activeElement&&a.focus():n&&!r.contains(e.target)&&C(!1)}function E(e){e.target.classList&&e.target.classList.contains(t.optionClass)&&g(e.target)}function y(e){if(n)switch(e.keyCode){case 13:case 32:f(l),c.customSelectOriginalOption.selected=!0,i.dispatchEvent(new CustomEvent("change")),C(!1);break;case 27:C(!1);break;case 38:h(-1);break;case 40:h(1);break;default:if(e.keyCode>=48&&e.keyCode<=90){m&&clearTimeout(m),m=setTimeout((function(){v=""}),1500),v+=String.fromCharCode(e.keyCode);for(var t=0,o=i.options.length;t<o;t++)if(i.options[t].text.toUpperCase().substr(0,v.length)===v){g(i.options[t].customSelectCstOption);break}}}else 40!==e.keyCode&&38!==e.keyCode&&32!==e.keyCode||C()}function w(){var e=i.selectedIndex;f(-1===e?void 0:i.options[e].customSelectCstOption)}function S(e){var t=e.currentTarget,o=e.target;o.offsetTop<t.scrollTop?t.scrollTop=o.offsetTop:t.scrollTop=o.offsetTop+o.clientHeight-t.clientHeight}function L(){document.addEventListener("click",b),u.addEventListener("mouseover",E),u.addEventListener("custom-select:focus-outside-panel",S),i.addEventListener("change",w),r.addEventListener("keydown",y)}function T(){document.removeEventListener("click",b),u.removeEventListener("mouseover",E),u.removeEventListener("custom-select:focus-outside-panel",S),i.removeEventListener("change",w),r.removeEventListener("keydown",y)}function O(e){var o=e,n=[];if(void 0===o.length)throw new TypeError("Invalid Argument");for(var s=0,i=o.length;s<i;s++)if(o[s]instanceof HTMLElement&&"OPTGROUP"===o[s].tagName.toUpperCase()){var r=document.createElement("div");r.classList.add(t.optgroupClass),r.setAttribute("data-label",o[s].label),r.customSelectOriginalOptgroup=o[s],o[s].customSelectCstOptgroup=r;for(var a=O(o[s].children),l=0,c=a.length;l<c;l++)r.appendChild(a[l]);n.push(r)}else{if(!(o[s]instanceof HTMLElement&&"OPTION"===o[s].tagName.toUpperCase()))throw new TypeError("Invalid Argument");var d=document.createElement("div");d.classList.add(t.optionClass),d.textContent=o[s].text,d.setAttribute("data-value",o[s].value),d.setAttribute("role","option"),d.customSelectOriginalOption=o[s],o[s].customSelectCstOption=d,o[s].selected&&f(d),n.push(d)}return n}function x(e,t,o){var n=void 0;if(void 0===o||o===i)n=u;else{if(!(o instanceof HTMLElement&&"OPTGROUP"===o.tagName.toUpperCase()&&i.contains(o)))throw new TypeError("Invalid Argument");n=o.customSelectCstOptgroup}var s=e instanceof HTMLElement?[e]:e;if(t)for(var r=0,a=s.length;r<a;r++)n===u?i.appendChild(s[r]):n.customSelectOriginalOptgroup.appendChild(s[r]);for(var l=O(s),c=0,d=l.length;c<d;c++)n.appendChild(l[c]);return s}(r=document.createElement("div")).classList.add(t.containerClass,o),(a=document.createElement("span")).className=t.openerClass,a.setAttribute("role","combobox"),a.setAttribute("aria-autocomplete","list"),a.setAttribute("aria-expanded","false"),a.innerHTML="<span>\n   "+(-1!==i.selectedIndex?i.options[i.selectedIndex].text:"")+"\n   </span>",u=document.createElement("div");for(var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",k=0;k<5;k++)s+=A.charAt(Math.floor(Math.random()*A.length));return u.id="customSelect-"+s+"-panel",u.className=t.panelClass,u.setAttribute("role","listbox"),a.setAttribute("aria-owns",u.id),x(i.children,!1),r.appendChild(a),i.parentNode.replaceChild(r,i),r.appendChild(i),r.appendChild(u),document.querySelector('label[for="'+i.id+'"]')?p=document.querySelector('label[for="'+i.id+'"]'):"LABEL"===r.parentNode.tagName.toUpperCase()&&(p=r.parentNode),void 0!==p&&(p.setAttribute("id","customSelect-"+s+"-label"),a.setAttribute("aria-labelledby","customSelect-"+s+"-label")),i.disabled?r.classList.add(t.isDisabledClass):(a.setAttribute("tabindex","0"),i.setAttribute("tabindex","-1"),L()),r.customSelect={get pluginOptions(){return t},get open(){return n},set open(e){C(e)},get disabled(){return i.disabled},set disabled(e){!function(e){e&&!i.disabled?(r.classList.add(t.isDisabledClass),i.disabled=!0,a.removeAttribute("tabindex"),r.dispatchEvent(new CustomEvent("custom-select:disabled")),T()):!e&&i.disabled&&(r.classList.remove(t.isDisabledClass),i.disabled=!1,a.setAttribute("tabindex","0"),r.dispatchEvent(new CustomEvent("custom-select:enabled")),L())}(e)},get value(){return i.value},set value(e){var t,o;t=e,(o=i.querySelector("option[value='"+t+"']"))||(o=d(i.options,1)[0]),o.selected=!0,f(i.options[i.selectedIndex].customSelectCstOption)},append:function(e,t){return x(e,!0,t)},insertBefore:function(e,t){return function(e,t){var o=void 0;if(t instanceof HTMLElement&&"OPTION"===t.tagName.toUpperCase()&&i.contains(t))o=t.customSelectCstOption;else{if(!(t instanceof HTMLElement&&"OPTGROUP"===t.tagName.toUpperCase()&&i.contains(t)))throw new TypeError("Invalid Argument");o=t.customSelectCstOptgroup}var n=O(e.length?e:[e]);return o.parentNode.insertBefore(n[0],o),t.parentNode.insertBefore(e.length?e[0]:e,t)}(e,t)},remove:function(e){var t=void 0;if(e instanceof HTMLElement&&"OPTION"===e.tagName.toUpperCase()&&i.contains(e))t=e.customSelectCstOption;else{if(!(e instanceof HTMLElement&&"OPTGROUP"===e.tagName.toUpperCase()&&i.contains(e)))throw new TypeError("Invalid Argument");t=e.customSelectCstOptgroup}t.parentNode.removeChild(t);var o=e.parentNode.removeChild(e);return w(),o},empty:function(){for(var e=[];i.children.length;)u.removeChild(u.children[0]),e.push(i.removeChild(i.children[0]));return f(),e},destroy:function(){for(var e=0,t=i.options.length;e<t;e++)delete i.options[e].customSelectCstOption;for(var o=i.getElementsByTagName("optgroup"),n=0,s=o.length;n<s;n++)delete o.customSelectCstOptgroup;return T(),r.parentNode.replaceChild(i,r)},opener:a,select:i,panel:u,container:r},i.customSelect=r.customSelect,r.customSelect}const g=(0,l.default)("select");console.log(g)}();
//# sourceMappingURL=index.d206a4c0.js.map
