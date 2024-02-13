import{a as g,i as u}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".button-header"),t=document.querySelector(".backdrop-menu-modal"),c=document.querySelector(".menu-modal-close-button"),s=document.querySelector(".modal-menu-button-home"),r=document.querySelector(".modal-menu-button-favorites"),o=document.querySelector(".header-logo"),n=window.location.pathname;e.addEventListener("click",function(){t.classList.remove("is-hidden"),document.body.style.position="fixed",o.style.display="none",n==="/project-dev-hunters/index.html"?(s.style.backgroundColor="var(--primary-white-color)",s.style.color="var( --main-black-color)",r.style.backgroundColor="",r.style.color=""):n==="/project-dev-hunters/favorites.html"&&(r.style.backgroundColor="var(--primary-white-color)",r.style.color=" var( --main-black-color)",s.style.backgroundColor="",s.style.color="")}),c.addEventListener("click",function(){t.classList.add("is-hidden"),o.style.display=""})});const v=document.querySelector(".up-btn");v.addEventListener("click",A);window.onscroll=function(){T()};function T(){window.scrollY>200?N():P()}function A(){document.documentElement.scrollTop=0}function N(){v.classList.remove("is-hidden")}function P(){v.classList.add("is-hidden")}const I="https://energyflow.b.goit.study/api/exercises",h=document.querySelector(".rating-form-container"),j=h.firstElementChild,k=document.querySelector(".exercises-modal"),i=document.querySelector(".rating-form"),y=document.querySelector(".radios"),w=document.querySelector(".stars-form-container");let S;y.addEventListener("click",J);j.addEventListener("click",B);i.addEventListener("submit",_);function U(){S=document.querySelector(".exercises-modal-button-rating"),S.addEventListener("click",H)}function B(){k.classList.remove("display-none-style"),h.classList.add("display-none-style")}function H(){k.classList.add("display-none-style"),h.classList.remove("display-none-style")}function J(e){if(e.target.nodeName!=="INPUT")return;const t=[...w.children];t.forEach(s=>{s.classList.remove("fill-gold")});const c=Number(e.target.dataset.rate);for(let s=0;s<c;s++)t[s].classList.add("fill-gold");y.previousElementSibling.textContent=c+".0"}function L(){[...i.elements.rating].forEach(c=>{c.checked=!1}),[...w.children].forEach(c=>{c.classList.remove("fill-gold")}),i.elements.email.value="",i.elements.comment.value="",y.previousElementSibling.textContent="0.0"}async function _(e){e.preventDefault();const t=[...i.elements.rating],[c]=t.filter(n=>{if(n.checked===!0)return!0}),{dataset:{rate:s}}=c,r=i.elements.email.value,o=i.elements.comment.value;console.log("before try");try{const n=await g.patch(`${I}/${x}/rating`,{rate:Number(s),email:r,review:o});u.success({position:"topRight",message:"Thank you for your rating. Your opinion is very important to us."}),B(),L(),console.log("in try")}catch(n){if(console.dir(n),console.log("in catch"),n.response.status===409){u.info({position:"topRight",message:"Thank you, but your feedback has already been considered."}),L();return}u.error({position:"topRight",message:`${n.name}: ${n.message}.`})}console.log("after")}let E;const D=document.querySelector("[data-exercise-modal-close]"),m=document.querySelector("[data-exercise-modal]"),p=document.querySelector(".exercises-modal"),q=document.querySelector(".exercises-modal-content"),O=document.querySelector(".span-exercises-modal-loader");document.querySelector("body");const l="exerciseItems";let x;function Z(){E=document.querySelectorAll("[data-exercise-modal-open]"),E.forEach(e=>{e.addEventListener("click",t=>{a.disabledScroll(),O.classList.add("exercises-modal-loader"),x=t.currentTarget.dataset.id,q.innerHTML="",m.classList.add("is-open"),z(),W()})})}async function Y(){return g.defaults.baseURL="https://energyflow.b.goit.study",await g.get(`/api/exercises/${x}`)}async function z(){try{const t=(await Y()).data;G(t),V(t)}catch(e){Q(e)}finally{O.classList.remove("exercises-modal-loader")}}function G({bodyPart:e,burnedCalories:t,description:c,equipment:s,gifUrl:r,name:o,popularity:n,rating:d,target:C,time:F}){let $=d.toFixed(1);const M=`
  <div class="exercises-modal-gif-container">
    <img src="${r}" alt="${o}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${o}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${$}</p>
          <ul class="exercises-modal-stars-list">
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
          </ul>
      </div>
      <ul class="exercises-modal-block-list">
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Target</h5>
              <p class="exercises-modal-block-paragraf">${C}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${e}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Equipment</h5>
              <p class="exercises-modal-block-paragraf">${s}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Popular</h5>
              <p class="exercises-modal-block-paragraf">${n}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${t}/${F} min</p>
          </li>
      </ul>
      <div class="exercises-modal-container-text" id="scrollTry">
      <p class="exercises-modal-text">${c}</p>
      </div>
      <div class="exercises-modal-buttons">
        <button class="exercises-modal-button-favorites" type="button">
          Add to favorites
          <svg class="exercises-modal-button-icon">
            <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-heart"></use>
          </svg>
      </button>
      <button class="exercises-modal-button-remove hidden-button" type="button">
        Remove from
        <svg class="exercises-modal-button-icon">
          <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-heart"></use>
        </svg>
      </button>
          <button class="exercises-modal-button-rating" type="button">Give a rating</button>
      </div>
  </div>
  `;q.insertAdjacentHTML("beforeend",M),K(Math.round(d));const R=document.querySelector(".exercises-modal-text"),b=document.querySelector(".exercises-modal-container-text");R.clientHeight>b.clientHeight&&b.classList.add("scroll-on"),U()}function K(e){const c=[...p.querySelectorAll(".exercises-modal-star-icon")];for(let s=0;s<e;s+=1)c[s].classList.add("selected-stars")}function Q(e){console.log(e);const t=e.name,c=e.message;u.error({position:"topRight",message:`${t}: ${c}.`})}function V(e){const t=document.querySelector(".exercises-modal-button-favorites"),c=document.querySelector(".exercises-modal-button-remove");localStorage.getItem(l)!==null&&JSON.parse(localStorage.getItem(l)).find(n=>n._id===e._id)?(f(),c.addEventListener("click",r)):t.addEventListener("click",s),t.addEventListener("click",s),c.addEventListener("click",r);function s(){const o=JSON.parse(localStorage.getItem(l))||[];o.push(e),localStorage.setItem(l,JSON.stringify(o)),f()}function r(){const o=JSON.parse(localStorage.getItem(l)),n=o.find(d=>d._id===e._id);o.splice(o.indexOf(n),1),localStorage.setItem(l,JSON.stringify(o)),f()}}function f(){const e=p.querySelector(".exercises-modal-button-favorites"),t=p.querySelector(".exercises-modal-button-remove");e.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function W(){document.addEventListener("keydown",c),D.addEventListener("click",e),m.addEventListener("click",t);function e(){m.classList.remove("is-open"),a.enabledScroll()}function t(s){s.target.hasAttribute("data-exercise-modal")&&e()}function c(s){s.code==="Escape"&&(m.classList.remove("is-open"),document.removeEventListener("keydown",c),a.enabledScroll())}}const a={scrollPosition:0,disabledScroll(){a.scrollPosition=window.scrollY,document.body.style.cssText=`
      owerflow: hidden;
      position: fixed;
      top: -${a.scrollPosition}px;
      width: 100%;
      height: 100%;
  
    `,document.documentElement.style.scrollBehavior="unset"},enabledScroll(){document.body.style.cssText="",window.scroll({top:a.scrollPosition}),document.documentElement.style.scrollBehavior=""}};export{Z as c};
//# sourceMappingURL=exercises-modal-f9761cc5.js.map
