!function(){function e(){const e=document.body,t=document.querySelector(".moon"),n=document.querySelector(".toggleTheme"),s=document.querySelector(".toggleTheme-mobile"),o=document.querySelector(".other"),i=e.classList.contains("light")?"dark":"light";e.classList.toggle("light"),e.classList.toggle("dark"),t.classList.toggle("sun"),n.classList.toggle("day"),s.classList.toggle("day"),e.style.transition="all 1s ease-out",o.classList.toggle("light"),localStorage.setItem("theme",i)}document.addEventListener("DOMContentLoaded",(function(){const t=document.getElementById("themeToggle"),n=document.getElementById("themeToggleMobile");!function(){const e=document.body,t=localStorage.getItem("theme");e.classList.toggle("dark",!t),e.classList.toggle("light","light"===t)}(),t.addEventListener("click",e),n.addEventListener("click",e)}));const t=document.querySelector(".menu-btn"),n=document.querySelector(".menu");t.addEventListener("click",(()=>{t.classList.toggle("active"),t.classList.toggle("top"),n.classList.toggle("active"),document.body.classList.add("no-scroll")}));const s=document.querySelector(".close-btn");s.addEventListener("click",(()=>{s.classList.contains("white")?(s.classList.remove("white"),document.body.classList.remove("no-scroll"),t.style.background="transparent"):(s.classList.add("white"),t.style.background="#e8e8e8")}));document.querySelectorAll(".menu-item").forEach((e=>{e.addEventListener("click",(()=>{t.classList.remove("active"),t.classList.remove("white"),document.body.classList.remove("no-scroll"),n.classList.remove("active")}))}));new Swiper(".swiper1",{direction:"horizontal",loop:!0,speed:1e3,navigation:{nextEl:".swiper-button-next1",prevEl:".swiper-button-prev1"},mousewheel:{forceToAxis:!0}}),new Swiper(".swiper2",{direction:"horizontal",loop:!0,speed:1e3,navigation:{nextEl:".swiper-button-next2",prevEl:".swiper-button-prev2"},mousewheel:{forceToAxis:!0}}),new Swiper(".swiper3",{centeredSlides:!0,direction:"horizontal",loop:!0,speed:1e3,autoHeight:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next3",prevEl:".swiper-button-prev3"},mousewheel:{forceToAxis:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:1,spaceBetween:30}}}),new Swiper(".swiper4",{centeredSlides:!0,direction:"horizontal",loop:!0,speed:1e3,autoHeight:!0,slidesPerView:1,navigation:{nextEl:".swiper-button-next4",prevEl:".swiper-button-prev4"},mousewheel:{forceToAxis:!0},breakpoints:{375:{slidesPerView:1},768:{slidesPerView:1},1440:{slidesPerView:3}}});document.addEventListener("DOMContentLoaded",(function(){let e,t=document.getElementsByClassName("accordion");for(e=0;e<t.length;e++)t[e].addEventListener("click",(function(){this.classList.toggle("active");let e=this.nextElementSibling;e.style.maxHeight?e.style.maxHeight=null:e.style.maxHeight=e.scrollHeight+"px"}));document.querySelectorAll(".accordion-header").forEach((function(e){e.addEventListener("click",(function(){let e=this.parentNode;e.classList.toggle("active");let t=e.querySelector(".accordion-content");"flex"===t.style.display?t.style.display="none":t.style.display="flex"}))}))}));const o=document.querySelector(".up");window.addEventListener("scroll",(()=>{window.scrollY>100?o.style.display="flex":o.style.display="none"})),o.addEventListener("click",(()=>{window.scroll({top:0,left:0,behavior:"smooth"})}));let i;document.querySelector(".bank-details").onclick=e=>{const t=e.target;if(t.classList.contains("content-item__info")){const e=t.innerText;navigator.clipboard.writeText(e).then((()=>{const e=document.createElement("span");e.classList.add("copied"),e.textContent="Скопійовано",t.parentNode.appendChild(e),i=setTimeout((()=>{e.style.display="none",e.parentNode.removeChild(e)}),600)})),clearTimeout(i)}else copiedMessage.parentNode.removeChild(copiedMessage)};const a=document.querySelectorAll(".contacts-item");let l=[];a.forEach((e=>{e.onclick=e=>{const t=e.target;if(t.classList.contains("contacts-item__desc")){const e=t.innerText.replace(/\s+/g," ").trim();navigator.clipboard.writeText(e).then((()=>{const e=document.createElement("span");e.classList.add("copied"),e.textContent="Скопійовано",t.parentNode.appendChild(e);const n=setTimeout((()=>{e.style.display="none"}),600);l.push(n)}))}}}));var r={};Object.defineProperty(r,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},d=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],s=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(s=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);s=!0);}catch(e){o=!0,i=e}finally{try{!s&&l.return&&l.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};r.default=function(e,t){var n=[],s=[];return function(){if(e&&e instanceof HTMLElement&&"SELECT"===e.tagName.toUpperCase())n.push(e);else if(e&&"string"==typeof e)for(var o=document.querySelectorAll(e),i=0,a=o.length;i<a;++i)o[i]instanceof HTMLElement&&"SELECT"===o[i].tagName.toUpperCase()&&n.push(o[i]);else if(e&&e.length)for(var l=0,r=e.length;l<r;++l)e[l]instanceof HTMLElement&&"SELECT"===e[l].tagName.toUpperCase()&&n.push(e[l]);for(var d=0,u=n.length;d<u;++d)s.push(v(n[d],c({},m,t)));return s}()};try{var u=new window.CustomEvent("test");if(u.preventDefault(),!0!==u.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var p=function(e,t){var n,s;return t=t||{bubbles:!1,cancelable:!1,detail:void 0},(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),s=n.preventDefault,n.preventDefault=function(){s.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};p.prototype=window.Event.prototype,window.CustomEvent=p}var m={containerClass:"custom-select-container",openerClass:"custom-select-opener",panelClass:"custom-select-panel",optionClass:"custom-select-option",optgroupClass:"custom-select-optgroup",isSelectedClass:"is-selected",hasFocusClass:"has-focus",isDisabledClass:"is-disabled",isOpenClass:"is-open"};function v(e,t){var n="customSelect",s=!1,o="",i=e,a=void 0,l=void 0,r=void 0,c=void 0,u=void 0,p=void 0,m=void 0,v="";function g(e){r&&r.classList.remove(t.hasFocusClass),void 0!==e?((r=e).classList.add(t.hasFocusClass),s&&(e.offsetTop<e.offsetParent.scrollTop||e.offsetTop>e.offsetParent.scrollTop+e.offsetParent.clientHeight-e.clientHeight)&&e.dispatchEvent(new CustomEvent("custom-select:focus-outside-panel",{bubbles:!0}))):r=void 0}function f(e){c&&(c.classList.remove(t.isSelectedClass),c.removeAttribute("id"),l.removeAttribute("aria-activedescendant")),void 0!==e?(e.classList.add(t.isSelectedClass),e.setAttribute("id","customSelect-"+o+"-selectedOption"),l.setAttribute("aria-activedescendant","customSelect-"+o+"-selectedOption"),c=e,l.children[0].textContent=c.customSelectOriginalOption.text):(c=void 0,l.children[0].textContent=""),g(e)}function h(e){var t=[].indexOf.call(i.options,r.customSelectOriginalOption);i.options[t+e]&&g(i.options[t+e].customSelectCstOption)}function b(e){if(e||void 0===e){var n=document.querySelector(".customSelect."+t.isOpenClass);n&&(n.customSelect.open=!1),a.classList.add(t.isOpenClass),a.classList.add(t.isOpenClass),l.setAttribute("aria-expanded","true"),c&&(u.scrollTop=c.offsetTop),a.dispatchEvent(new CustomEvent("custom-select:open")),s=!0}else a.classList.remove(t.isOpenClass),l.setAttribute("aria-expanded","false"),s=!1,g(c),a.dispatchEvent(new CustomEvent("custom-select:close"));return s}function C(e){e.target===l||l.contains(e.target)?s?b(!1):b():e.target.classList&&e.target.classList.contains(t.optionClass)&&u.contains(e.target)?(f(e.target),c.customSelectOriginalOption.selected=!0,b(!1),i.dispatchEvent(new CustomEvent("change"))):e.target===i?l!==document.activeElement&&i!==document.activeElement&&l.focus():s&&!a.contains(e.target)&&b(!1)}function E(e){e.target.classList&&e.target.classList.contains(t.optionClass)&&g(e.target)}function L(e){if(s)switch(e.keyCode){case 13:case 32:f(r),c.customSelectOriginalOption.selected=!0,i.dispatchEvent(new CustomEvent("change")),b(!1);break;case 27:b(!1);break;case 38:h(-1);break;case 40:h(1);break;default:if(e.keyCode>=48&&e.keyCode<=90){m&&clearTimeout(m),m=setTimeout((function(){v=""}),1500),v+=String.fromCharCode(e.keyCode);for(var t=0,n=i.options.length;t<n;t++)if(i.options[t].text.toUpperCase().substr(0,v.length)===v){g(i.options[t].customSelectCstOption);break}}}else 40!==e.keyCode&&38!==e.keyCode&&32!==e.keyCode||b()}function y(){var e=i.selectedIndex;f(-1===e?void 0:i.options[e].customSelectCstOption)}function w(e){var t=e.currentTarget,n=e.target;n.offsetTop<t.scrollTop?t.scrollTop=n.offsetTop:t.scrollTop=n.offsetTop+n.clientHeight-t.clientHeight}function S(){document.addEventListener("click",C),u.addEventListener("mouseover",E),u.addEventListener("custom-select:focus-outside-panel",w),i.addEventListener("change",y),a.addEventListener("keydown",L)}function T(){document.removeEventListener("click",C),u.removeEventListener("mouseover",E),u.removeEventListener("custom-select:focus-outside-panel",w),i.removeEventListener("change",y),a.removeEventListener("keydown",L)}function O(e){var n=e,s=[];if(void 0===n.length)throw new TypeError("Invalid Argument");for(var o=0,i=n.length;o<i;o++)if(n[o]instanceof HTMLElement&&"OPTGROUP"===n[o].tagName.toUpperCase()){var a=document.createElement("div");a.classList.add(t.optgroupClass),a.setAttribute("data-label",n[o].label),a.customSelectOriginalOptgroup=n[o],n[o].customSelectCstOptgroup=a;for(var l=O(n[o].children),r=0,c=l.length;r<c;r++)a.appendChild(l[r]);s.push(a)}else{if(!(n[o]instanceof HTMLElement&&"OPTION"===n[o].tagName.toUpperCase()))throw new TypeError("Invalid Argument");var d=document.createElement("div");d.classList.add(t.optionClass),d.textContent=n[o].text,d.setAttribute("data-value",n[o].value),d.setAttribute("role","option"),d.customSelectOriginalOption=n[o],n[o].customSelectCstOption=d,n[o].selected&&f(d),s.push(d)}return s}function x(e,t,n){var s=void 0;if(void 0===n||n===i)s=u;else{if(!(n instanceof HTMLElement&&"OPTGROUP"===n.tagName.toUpperCase()&&i.contains(n)))throw new TypeError("Invalid Argument");s=n.customSelectCstOptgroup}var o=e instanceof HTMLElement?[e]:e;if(t)for(var a=0,l=o.length;a<l;a++)s===u?i.appendChild(o[a]):s.customSelectOriginalOptgroup.appendChild(o[a]);for(var r=O(o),c=0,d=r.length;c<d;c++)s.appendChild(r[c]);return o}(a=document.createElement("div")).classList.add(t.containerClass,n),(l=document.createElement("span")).className=t.openerClass,l.setAttribute("role","combobox"),l.setAttribute("aria-autocomplete","list"),l.setAttribute("aria-expanded","false"),l.innerHTML="<span>\n   "+(-1!==i.selectedIndex?i.options[i.selectedIndex].text:"")+"\n   </span>",u=document.createElement("div");for(var A="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",k=0;k<5;k++)o+=A.charAt(Math.floor(Math.random()*A.length));return u.id="customSelect-"+o+"-panel",u.className=t.panelClass,u.setAttribute("role","listbox"),l.setAttribute("aria-owns",u.id),x(i.children,!1),a.appendChild(l),i.parentNode.replaceChild(a,i),a.appendChild(i),a.appendChild(u),document.querySelector('label[for="'+i.id+'"]')?p=document.querySelector('label[for="'+i.id+'"]'):"LABEL"===a.parentNode.tagName.toUpperCase()&&(p=a.parentNode),void 0!==p&&(p.setAttribute("id","customSelect-"+o+"-label"),l.setAttribute("aria-labelledby","customSelect-"+o+"-label")),i.disabled?a.classList.add(t.isDisabledClass):(l.setAttribute("tabindex","0"),i.setAttribute("tabindex","-1"),S()),a.customSelect={get pluginOptions(){return t},get open(){return s},set open(e){b(e)},get disabled(){return i.disabled},set disabled(e){!function(e){e&&!i.disabled?(a.classList.add(t.isDisabledClass),i.disabled=!0,l.removeAttribute("tabindex"),a.dispatchEvent(new CustomEvent("custom-select:disabled")),T()):!e&&i.disabled&&(a.classList.remove(t.isDisabledClass),i.disabled=!1,l.setAttribute("tabindex","0"),a.dispatchEvent(new CustomEvent("custom-select:enabled")),S())}(e)},get value(){return i.value},set value(e){var t,n;t=e,(n=i.querySelector("option[value='"+t+"']"))||(n=d(i.options,1)[0]),n.selected=!0,f(i.options[i.selectedIndex].customSelectCstOption)},append:function(e,t){return x(e,!0,t)},insertBefore:function(e,t){return function(e,t){var n=void 0;if(t instanceof HTMLElement&&"OPTION"===t.tagName.toUpperCase()&&i.contains(t))n=t.customSelectCstOption;else{if(!(t instanceof HTMLElement&&"OPTGROUP"===t.tagName.toUpperCase()&&i.contains(t)))throw new TypeError("Invalid Argument");n=t.customSelectCstOptgroup}var s=O(e.length?e:[e]);return n.parentNode.insertBefore(s[0],n),t.parentNode.insertBefore(e.length?e[0]:e,t)}(e,t)},remove:function(e){var t=void 0;if(e instanceof HTMLElement&&"OPTION"===e.tagName.toUpperCase()&&i.contains(e))t=e.customSelectCstOption;else{if(!(e instanceof HTMLElement&&"OPTGROUP"===e.tagName.toUpperCase()&&i.contains(e)))throw new TypeError("Invalid Argument");t=e.customSelectCstOptgroup}t.parentNode.removeChild(t);var n=e.parentNode.removeChild(e);return y(),n},empty:function(){for(var e=[];i.children.length;)u.removeChild(u.children[0]),e.push(i.removeChild(i.children[0]));return f(),e},destroy:function(){for(var e=0,t=i.options.length;e<t;e++)delete i.options[e].customSelectCstOption;for(var n=i.getElementsByTagName("optgroup"),s=0,o=n.length;s<o;s++)delete n.customSelectCstOptgroup;return T(),a.parentNode.replaceChild(i,a)},opener:l,select:i,panel:u,container:a},i.customSelect=a.customSelect,a.customSelect}(0,r.default)("select");let g=window.location.href,f=document.getElementsByTagName("a");for(let e=0;e<f.length;e++){let t=f[e];t.href===g?t.classList.add("current"):t.classList.remove("current")}}();
//# sourceMappingURL=index.2285fad0.js.map
