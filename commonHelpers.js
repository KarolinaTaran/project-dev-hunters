import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as d}from"./assets/vendor-8cce9181.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".button-header"),o=document.querySelector(".backdrop-menu-modal"),r=document.querySelector(".menu-modal-close-button"),u=document.querySelector(".modal-menu-button-home"),t=document.querySelector(".modal-menu-button-favorites"),c=window.location.pathname;e.addEventListener("click",function(){o.classList.remove("is-hidden"),c==="/index.html"?(u.style.backgroundColor="pink",t.style.backgroundColor=""):c==="/favorites.html"&&(t.style.backgroundColor="pink",u.style.backgroundColor="")}),r.addEventListener("click",function(){o.classList.add("is-hidden")})});const i={quoteСont:document.querySelector(".js-info-quote"),quoteAuthor:document.querySelector(".js-quote-author")},{quoteСont:s,quoteAuthor:a}=i,n={},l={};n.date=new Date;d.defaults.baseURL="https://energyflow.b.goit.study/api/";async function m(e){const o=await d.get(`${e}`);console.log(o);const{data:{author:r,quote:u}}=o;n.author=r,n.quote=u,console.log(n),localStorage.setItem("qouteData1",JSON.stringify(n));const t=JSON.parse(localStorage.getItem("qouteData1"));console.log(t),s.textContent=t.quote,a.textContent=t.author}m("quote");try{s.textContent=l.quote,a.textContent=l.author}catch(e){console.log(e)}finally{s.textContent="Strength does not come from winning. Your struggles develop your strengths.",a.textContent="Arnold Schwarzenegger"}
//# sourceMappingURL=commonHelpers.js.map