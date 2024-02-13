import{a as p,i as d}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=c(o);fetch(o.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".button-header"),t=document.querySelector(".backdrop-menu-modal"),c=document.querySelector(".menu-modal-close-button"),s=document.querySelector(".modal-menu-button-home"),o=document.querySelector(".modal-menu-button-favorites"),r=document.querySelector(".header-logo"),n=window.location.pathname;e.addEventListener("click",function(){t.classList.remove("is-hidden"),document.body.style.position="fixed",r.style.display="none",n==="/project-dev-hunters/index.html"?(s.style.backgroundColor="var(--primary-white-color)",s.style.color="var( --main-black-color)",o.style.backgroundColor="",o.style.color=""):n==="/project-dev-hunters/favorites.html"&&(o.style.backgroundColor="var(--primary-white-color)",o.style.color=" var( --main-black-color)",s.style.backgroundColor="",s.style.color="")}),c.addEventListener("click",function(){t.classList.add("is-hidden"),r.style.display=""})});const h=document.querySelector(".up-btn");h.addEventListener("click",A);window.onscroll=function(){T()};function T(){window.scrollY>200?P():N()}function A(){document.documentElement.scrollTop=0}function P(){h.classList.remove("is-hidden")}function N(){h.classList.add("is-hidden")}const I="https://energyflow.b.goit.study/api/exercises",v=document.querySelector(".rating-form-container"),j=v.firstElementChild,k=document.querySelector(".exercises-modal"),i=document.querySelector(".rating-form"),y=document.querySelector(".radios"),w=document.querySelector(".stars-form-container");let S;y.addEventListener("click",J);j.addEventListener("click",B);i.addEventListener("submit",_);function U(){S=document.querySelector(".exercises-modal-button-rating"),S.addEventListener("click",H)}function B(){k.classList.remove("display-none-style"),v.classList.add("display-none-style")}function H(){k.classList.add("display-none-style"),v.classList.remove("display-none-style")}function J(e){if(e.target.nodeName!=="INPUT")return;const t=[...w.children];t.forEach(s=>{s.classList.remove("fill-gold")});const c=Number(e.target.dataset.rate);for(let s=0;s<c;s++)t[s].classList.add("fill-gold");y.previousElementSibling.textContent=c+".0"}function L(){[...i.elements.rating].forEach(c=>{c.checked=!1}),[...w.children].forEach(c=>{c.classList.remove("fill-gold")}),i.elements.email.value="",i.elements.comment.value="",y.previousElementSibling.textContent="0.0"}async function _(e){e.preventDefault();const t=[...i.elements.rating],[c]=t.filter(n=>{if(n.checked===!0)return!0}),{dataset:{rate:s}}=c,o=i.elements.email.value,r=i.elements.comment.value;try{if(!D(o))throw new Error("Please, enter the correct email!");const n=await p.patch(`${I}/${x}/rating`,{rate:Number(s),email:o,review:r});d.success({position:"topRight",message:"Thank you for your rating. Your opinion is very important to us."}),B(),L()}catch(n){if(console.dir(n),n.message==="Please, enter the correct email!"){d.error({position:"topRight",message:`${n}`});return}if(n.response.status===409){d.info({position:"topRight",message:"Thank you, but your feedback has already been considered."}),L();return}d.error({position:"topRight",message:`${n.name}: ${n.message}.`});return}}function D(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)!==null}let E;const Y=document.querySelector("[data-exercise-modal-close]"),m=document.querySelector("[data-exercise-modal]"),g=document.querySelector(".exercises-modal"),q=document.querySelector(".exercises-modal-content"),O=document.querySelector(".span-exercises-modal-loader");document.querySelector("body");const a="exerciseItems";let x;function ee(){E=document.querySelectorAll("[data-exercise-modal-open]"),E.forEach(e=>{e.addEventListener("click",t=>{l.disabledScroll(),O.classList.add("exercises-modal-loader"),x=t.currentTarget.dataset.id,q.innerHTML="",m.classList.add("is-open"),G(),W()})})}async function z(){return p.defaults.baseURL="https://energyflow.b.goit.study",await p.get(`/api/exercises/${x}`)}async function G(){try{const t=(await z()).data;K(t),Q(t)}catch(e){Z(e)}finally{O.classList.remove("exercises-modal-loader")}}function K({bodyPart:e,burnedCalories:t,description:c,equipment:s,gifUrl:o,name:r,popularity:n,rating:u,target:$,time:C}){let F=u.toFixed(1);const M=`
  <div class="exercises-modal-gif-container">
    <img src="${o}" alt="${r}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${r}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${F}</p>
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
              <p class="exercises-modal-block-paragraf">${$}</p>
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
              <p class="exercises-modal-block-paragraf lowercase-text">${t}/${C} min</p>
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
  `;q.insertAdjacentHTML("beforeend",M),V(Math.round(u));const R=document.querySelector(".exercises-modal-text"),b=document.querySelector(".exercises-modal-container-text");R.clientHeight>b.clientHeight&&b.classList.add("scroll-on"),U()}function V(e){const c=[...g.querySelectorAll(".exercises-modal-star-icon")];for(let s=0;s<e;s+=1)c[s].classList.add("selected-stars")}function Z(e){console.log(e);const t=e.name,c=e.message;d.error({position:"topRight",message:`${t}: ${c}.`})}function Q(e){const t=document.querySelector(".exercises-modal-button-favorites"),c=document.querySelector(".exercises-modal-button-remove");localStorage.getItem(a)!==null&&JSON.parse(localStorage.getItem(a)).find(n=>n._id===e._id)?(f(),c.addEventListener("click",o)):t.addEventListener("click",s),t.addEventListener("click",s),c.addEventListener("click",o);function s(){const r=JSON.parse(localStorage.getItem(a))||[];r.push(e),localStorage.setItem(a,JSON.stringify(r)),f()}function o(){const r=JSON.parse(localStorage.getItem(a)),n=r.find(u=>u._id===e._id);r.splice(r.indexOf(n),1),localStorage.setItem(a,JSON.stringify(r)),f()}}function f(){const e=g.querySelector(".exercises-modal-button-favorites"),t=g.querySelector(".exercises-modal-button-remove");e.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function W(){document.addEventListener("keydown",c),Y.addEventListener("click",e),m.addEventListener("click",t);function e(){m.classList.remove("is-open"),l.enabledScroll()}function t(s){s.target.hasAttribute("data-exercise-modal")&&e()}function c(s){s.code==="Escape"&&(m.classList.remove("is-open"),document.removeEventListener("keydown",c),l.enabledScroll())}}const l={scrollPosition:0,disabledScroll(){l.scrollPosition=window.scrollY,document.body.style.cssText=`
      owerflow: hidden;
      position: fixed;
      top: -${l.scrollPosition}px;
      width: 100%;
      height: 100%;
  
    `,document.documentElement.style.scrollBehavior="unset"},enabledScroll(){document.body.style.cssText="",window.scroll({top:l.scrollPosition}),document.documentElement.style.scrollBehavior=""}};export{ee as c};
//# sourceMappingURL=exercises-modal-35c32130.js.map
