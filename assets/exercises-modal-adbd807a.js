import{i as w,a as v}from"./vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(o){if(o.ep)return;o.ep=!0;const e=r(o);fetch(o.href,e)}})();document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".button-header"),t=document.querySelector(".backdrop-menu-modal"),r=document.querySelector(".menu-modal-close-button"),c=document.querySelector(".modal-menu-button-home"),o=document.querySelector(".modal-menu-button-favorites"),e=document.querySelector(".header-logo"),i=window.location.pathname;s.addEventListener("click",function(){t.classList.remove("is-hidden"),document.body.style.position="fixed",e.style.display="none",i==="/index.html"?(c.style.backgroundColor="pink",o.style.backgroundColor=""):i==="/favorites.html"&&(o.style.backgroundColor="pink",c.style.backgroundColor="")}),r.addEventListener("click",function(){t.classList.add("is-hidden"),e.style.display=""})});const f=document.querySelector(".up-btn");f.addEventListener("click",q);window.onscroll=function(){B()};function B(){window.scrollY>1?F():O()}function q(){document.documentElement.scrollTop=0}function F(){f.classList.remove("is-hidden")}function O(){f.classList.add("is-hidden")}let x;const $=document.querySelector("[data-exercise-modal-close]"),d=document.querySelector("[data-exercise-modal]"),m=document.querySelector(".exercises-modal"),h=document.querySelector(".exercises-modal-content"),g=document.querySelector(".span-exercises-modal-loader");document.querySelector("body");const l="exerciseItems";let y;function H(){x=document.querySelectorAll("[data-exercise-modal-open]"),x.forEach(s=>{s.addEventListener("click",t=>{n.disabledScroll(),g.classList.add("exercises-modal-loader"),y=t.currentTarget.dataset.id,h.innerHTML="",d.classList.add("is-open"),M(),A()})})}async function C(){return v.defaults.baseURL="https://energyflow.b.goit.study",await v.get(`/api/exercises/${y}`)}async function M(){try{const t=(await C()).data;T(t),N(t)}catch(s){P(s)}finally{g.classList.remove("exercises-modal-loader")}}function T({bodyPart:s,burnedCalories:t,description:r,equipmen:c,gifUrl:o,name:e,popularity:i,rating:a,target:b,time:S}){let L=a.toFixed(1);const k=`
  <div class="exercises-modal-gif-container">
    <img src="${o}" alt="${e}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${e}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${L}</p>
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
              <p class="exercises-modal-block-paragraf">${b}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${s}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Equipment</h5>
              <p class="exercises-modal-block-paragraf">${c}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Popular</h5>
              <p class="exercises-modal-block-paragraf">${i}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${t}/${S} min</p>
          </li>
      </ul>
      <div class="exercises-modal-container-text">
      <p class="exercises-modal-text">${r}</p>
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
          <button class="exercises-modal-button-rating hidden-button" type="button">Give a rating</button>
      </div>
  </div>
  `;h.insertAdjacentHTML("beforeend",k),I(Math.round(a));const E=document.querySelector(".exercises-modal-text"),p=document.querySelector(".exercises-modal-container-text");E.clientHeight>p.clientHeight&&p.classList.add("exercises-modal-text-scroll")}function I(s){const r=[...m.querySelectorAll(".exercises-modal-star-icon")];for(let c=0;c<s;c+=1)r[c].classList.add("selected-stars")}function P(s){console.log(s);const t=s.name,r=s.message;w.error({position:"topRight",message:`${t}: ${r}.`})}function N(s){const t=document.querySelector(".exercises-modal-button-favorites"),r=document.querySelector(".exercises-modal-button-remove");localStorage.getItem(l)!==null&&JSON.parse(localStorage.getItem(l)).find(i=>i._id===s._id)?(u(),r.addEventListener("click",o)):t.addEventListener("click",c),t.addEventListener("click",c),r.addEventListener("click",o);function c(){const e=JSON.parse(localStorage.getItem(l))||[];e.push(s),localStorage.setItem(l,JSON.stringify(e)),u()}function o(){const e=JSON.parse(localStorage.getItem(l)),i=e.find(a=>a._id===s._id);e.splice(e.indexOf(i),1),localStorage.setItem(l,JSON.stringify(e)),u()}}function u(){const s=m.querySelector(".exercises-modal-button-favorites"),t=m.querySelector(".exercises-modal-button-remove");s.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function A(){document.addEventListener("keydown",r),$.addEventListener("click",s),d.addEventListener("click",t);function s(){d.classList.remove("is-open"),n.enabledScroll()}function t(c){c.target.hasAttribute("data-exercise-modal")&&s()}function r(c){c.code==="Escape"&&(d.classList.remove("is-open"),document.removeEventListener("keydown",r),n.enabledScroll())}}const n={scrollPosition:0,disabledScroll(){n.scrollPosition=window.scrollY,document.body.style.cssText=`
      owerflow: hidden;
      position: fixed;
      top: -${n.scrollPosition}px;
      width: 100%;
      height: 100%;
  
    `,document.documentElement.style.scrollBehavior="unset"},enabledScroll(){document.body.style.cssText="",window.scroll({top:n.scrollPosition}),document.documentElement.style.scrollBehavior=""}};export{H as c};
//# sourceMappingURL=exercises-modal-adbd807a.js.map
