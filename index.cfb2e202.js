const section=document.querySelector(".content");section.onclick=e=>{const t=e.target;t.classList.contains("content-item__info")&&(console.log(t),navigator.clipboard.writeText(t.innerHTML).then((()=>{document.querySelector(".copied").style.display="inline-block";setTimeout((()=>{document.querySelector(".copied").style.display="none"}),800)})))};
//# sourceMappingURL=index.cfb2e202.js.map
