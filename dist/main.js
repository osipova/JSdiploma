!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{let e=document.querySelector(".add-sentence-btn"),t=document.querySelectorAll(".hidden"),n=document.querySelector(".visible-sm-block");e.addEventListener("click",()=>{t.forEach(e=>{e.classList.remove("hidden")}),n.classList.remove("visible-sm-block"),e.classList.add("hidden")})};var o=()=>{let e=document.querySelector(".questions"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".panel-collapse");e.addEventListener("click",e=>{let l=e.target;null!==(l=l.closest(".panel-heading"))&&t.forEach((e,t)=>{e===l&&(e=>{for(let t=4;t<n.length;t++)t!==e?n[t].classList.remove("in"):n[t].classList.contains("in")?n[t].classList.remove("in"):n[t].classList.add("in")})(t)})})};var c=()=>{let e=document.querySelector(".constructor"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".panel-collapse"),l=document.querySelectorAll(".construct-btn");e.addEventListener("click",e=>{let o=e.target;o.closest(".construct-btn")?null!==(o=o.closest(".construct-btn"))&&l.forEach((e,t)=>{e===o&&(e=>{n[e].classList.add("in")})(t+1)}):null!==(o=o.closest(".panel-heading"))&&t.forEach((e,t)=>{e===o&&(e=>{n[e].classList.contains("in")?n[e].classList.remove("in"):n[e].classList.add("in")})(t)})})};var s=e=>{const t=document.querySelectorAll(".capture-form"),n=document.createElement("div");n.style.color="#000",n.style.csstext="font-size: 2rem",n.classList.add("request");document.getElementById("calc-result");t.forEach(t=>{t.addEventListener("input",e=>{e.target.matches(".phone-user")&&(e.target.value=e.target.value.replace(/[^\+\d]/g,""))}),t.addEventListener("submit",o=>{o.preventDefault(),t.appendChild(n),n.textContent="Загурзка...";const c=new FormData(t);let s,r={};c.forEach((e,t)=>{r[t]=e}),s=0!==Object.keys(e).length?Object.assign(r,e):Object.assign({},r);const a=document.querySelector(".director-input").value;console.log(a),a&&(s.question=a),l(s).then(e=>{if(200!==e.status)throw new Error("status network not 200 ");n.textContent="Спасибо! Мы скоро с вами свяжемся."}).catch(e=>{n.textContent="Что-то пошло не так...",console.error(e)}),t.reset()})});const l=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};var r=()=>{const e=document.getElementById("constructor"),t=document.getElementById("myonoffswitch"),n=document.getElementById("myonoffswitch-two"),l=document.querySelectorAll(".title-text"),o=document.querySelectorAll(".select-box"),c=document.querySelectorAll(".form-control"),s=document.getElementById("calc-result");let r={};return e.addEventListener("change",e=>{const a=e.target;(a.matches("select")||a.matches("input"))&&(()=>{let e=1e4,a=1;t.checked?t.checked&&(e=1e4,a=1,l[1].removeAttribute("style"),l[1].style.display="none",o[2].style.display="none",o[3].style.display="none"):(e=15e3,a=2,l[1].style.display="inline-block",o[2].style.display="inline-block",o[3].style.display="inline-block"),1===c[0].selectedIndex&&(e+=e/100*20),1===c[1].selectedIndex?e+=e/100*30:2===o[1].selectedIndex&&(e+=e/100*50),"none"!==o[2].style.display&&"none"!==o[3].style.display&&(1===c[2].selectedIndex&&(e+=e/100*20),1===c[3].selectedIndex?e+=e/100*30:2===c[3].selectedIndex&&(e+=e/100*50)),n.checked&&1===a?e+=1e3:n.checked&&2===a&&(e+=2e3),r.camers=a,r.diametr1=c[0].options[c[0].selectedIndex].value,r.countRings1=c[1].options[c[1].selectedIndex].value,"none"!==o[2].style.display&&"none"!==o[3].style.display?(r.diametr2=c[2].options[c[2].selectedIndex].value,r.countRings2=c[3].options[c[3].selectedIndex].value):(r.diametr2=0,r.countRings2=0),r.bottom=n.checked,r.distance=document.getElementById("distance").value,r.sum=e,s.setAttribute("placeholder",e)})()}),r};(()=>{let e=document.querySelector("body");const t=e=>{document.querySelector(e).style.display="block"},n=()=>{document.querySelectorAll(".popup").forEach(e=>{e&&(e.style.display="none")})};e.addEventListener("click",e=>{let l=e.target;l.classList.contains("call-btn")?t(".popup-call"):l.classList.contains("check-btn")?t(".popup-check"):l.classList.contains("consultation-btn")?t(".popup-consultation"):l.classList.contains("discount-btn")?t(".popup-discount"):l.classList.contains("popup-close")?n():l.closest(".popup-content")||n()})})(),l(),o(),c(),s(r())}]);