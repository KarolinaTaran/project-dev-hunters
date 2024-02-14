import{a as v,i as d}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function c(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(s){if(s.ep)return;s.ep=!0;const r=c(s);fetch(s.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".button-header"),t=document.querySelector(".backdrop-menu-modal"),c=document.querySelector(".menu-modal-close-button"),o=document.querySelector(".modal-menu-button-home"),s=document.querySelector(".modal-menu-button-favorites"),r=document.querySelector(".header-logo"),n=window.location.pathname;e.addEventListener("click",function(){t.classList.remove("is-hidden"),document.body.style.position="fixed",r.style.display="none",n==="/project-dev-hunters/index.html"?(o.style.backgroundColor="var(--primary-white-color)",o.style.color="var( --main-black-color)",s.style.backgroundColor="",s.style.color=""):n==="/project-dev-hunters/favorites.html"&&(s.style.backgroundColor="var(--primary-white-color)",s.style.color=" var( --main-black-color)",o.style.backgroundColor="",o.style.color="")}),c.addEventListener("click",function(){t.classList.add("is-hidden"),r.style.display="",document.body.style.position="relative"})});const h=document.querySelector(".up-btn");h.addEventListener("click",A);window.onscroll=function(){T()};function T(){window.scrollY>200?P():N()}function A(){document.documentElement.scrollTop=0}function P(){h.classList.remove("is-hidden")}function N(){h.classList.add("is-hidden")}const I="https://energyflow.b.goit.study/api/exercises",j=document.querySelector(".rating-form-container"),u=document.querySelector(".rating-form-backdrop"),U=j.firstElementChild,p=document.querySelector(".exercises-modal"),S=document.querySelector(".backdrop-exercises-modal"),i=document.querySelector(".rating-form"),x=document.querySelector(".radios"),B=document.querySelector(".stars-form-container");let E;x.addEventListener("click",Y);i.addEventListener("submit",z);function H(){E=document.querySelector(".exercises-modal-button-rating"),E.addEventListener("click",_)}function J(){p.classList.remove("display-none-style"),u.classList.add("display-none-style")}function _(){p.classList.add("display-none-style"),u.classList.add("is-open"),D()}function D(){document.addEventListener("keydown",c),U.addEventListener("click",e),u.addEventListener("click",t);function e(){u.classList.remove("is-open"),p.classList.remove("display-none-style")}function t(s){s.target.hasAttribute("data-rating-modal")&&e()}function c(s){s.code==="Escape"&&(u.classList.remove("is-open"),p.classList.remove("display-none-style"),S.classList.add("is-open"),document.removeEventListener("keydown",c),document.addEventListener("keydown",o))}function o(s){s.code==="Escape"&&S.classList.remove("is-open")}}function Y(e){if(e.target.nodeName!=="INPUT")return;const t=[...B.children];t.forEach(o=>{o.classList.remove("fill-gold")});const c=Number(e.target.dataset.rate);for(let o=0;o<c;o++)t[o].classList.add("fill-gold");x.previousElementSibling.textContent=c+".0"}function k(){[...i.elements.rating].forEach(c=>{c.checked=!1}),[...B.children].forEach(c=>{c.classList.remove("fill-gold")}),i.elements.email.value="",i.elements.comment.value="",x.previousElementSibling.textContent="0.0"}async function z(e){e.preventDefault();const t=[...i.elements.rating],[c]=t.filter(n=>{if(n.checked===!0)return!0}),{dataset:{rate:o}}=c,s=i.elements.email.value,r=i.elements.comment.value;try{if(!G(s))throw new Error("Please, enter the correct email!");const n=await v.patch(`${I}/${b}/rating`,{rate:Number(o),email:s,review:r});d.success({position:"topRight",message:"Thank you for your rating. Your opinion is very important to us."}),J(),k()}catch(n){if(console.dir(n),n.message==="Please, enter the correct email!"){d.error({position:"topRight",message:`${n}`});return}if(n.response.status===409){d.info({position:"topRight",message:"Thank you, but your feedback has already been considered."}),k();return}d.error({position:"topRight",message:`${n.name}: ${n.message}.`});return}}function G(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)!==null}let w;const K=document.querySelector("[data-exercise-modal-close]"),f=document.querySelector("[data-exercise-modal]"),y=document.querySelector(".exercises-modal"),q=document.querySelector(".exercises-modal-content"),O=document.querySelector(".span-exercises-modal-loader");document.querySelector("body");const a="exerciseItems";let b;function oe(){w=document.querySelectorAll("[data-exercise-modal-open]"),w.forEach(e=>{e.addEventListener("click",t=>{l.disabledScroll(),O.classList.add("exercises-modal-loader"),b=t.currentTarget.dataset.id,q.innerHTML="",f.classList.add("is-open"),Z(),te()})})}async function V(){return v.defaults.baseURL="https://energyflow.b.goit.study",await v.get(`/api/exercises/${b}`)}async function Z(){try{const t=(await V()).data;Q(t),ee(t)}catch(e){X(e)}finally{O.classList.remove("exercises-modal-loader")}}function Q({bodyPart:e,burnedCalories:t,description:c,equipment:o,gifUrl:s,name:r,popularity:n,rating:m,target:$,time:C}){let R=m.toFixed(1);const F=`
  <div class="exercises-modal-gif-container">
    <img src="${s}" alt="${r}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${r}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${R}</p>
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
              <p class="exercises-modal-block-paragraf">${o}</p>
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
  `;q.insertAdjacentHTML("beforeend",F),W(Math.round(m));const M=document.querySelector(".exercises-modal-text"),L=document.querySelector(".exercises-modal-container-text");M.clientHeight>L.clientHeight&&L.classList.add("scroll-on"),H()}function W(e){const c=[...y.querySelectorAll(".exercises-modal-star-icon")];for(let o=0;o<e;o+=1)c[o].classList.add("selected-stars")}function X(e){console.log(e);const t=e.name,c=e.message;d.error({position:"topRight",message:`${t}: ${c}.`})}function ee(e){const t=document.querySelector(".exercises-modal-button-favorites"),c=document.querySelector(".exercises-modal-button-remove");localStorage.getItem(a)!==null&&JSON.parse(localStorage.getItem(a)).find(n=>n._id===e._id)?(g(),c.addEventListener("click",s)):t.addEventListener("click",o),t.addEventListener("click",o),c.addEventListener("click",s);function o(){const r=JSON.parse(localStorage.getItem(a))||[];r.push(e),localStorage.setItem(a,JSON.stringify(r)),g()}function s(){const r=JSON.parse(localStorage.getItem(a)),n=r.find(m=>m._id===e._id);r.splice(r.indexOf(n),1),localStorage.setItem(a,JSON.stringify(r)),g()}}function g(){const e=y.querySelector(".exercises-modal-button-favorites"),t=y.querySelector(".exercises-modal-button-remove");e.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function te(){document.addEventListener("keydown",c),K.addEventListener("click",e),f.addEventListener("click",t);function e(){f.classList.remove("is-open"),l.enabledScroll()}function t(o){o.target.hasAttribute("data-exercise-modal")&&e()}function c(o){o.code==="Escape"&&(f.classList.remove("is-open"),document.removeEventListener("keydown",c),l.enabledScroll())}}const l={scrollPosition:0,disabledScroll(){l.scrollPosition=window.scrollY,document.body.style.cssText=`
      owerflow: hidden;
      position: fixed;
      top: -${l.scrollPosition}px;
      width: 100%;
      height: 100%;
  
    `,document.documentElement.style.scrollBehavior="unset"},enabledScroll(){document.body.style.cssText="",window.scroll({top:l.scrollPosition}),document.documentElement.style.scrollBehavior=""}};export{oe as c};
//# sourceMappingURL=exercises-modal-090fb4ec.js.map
