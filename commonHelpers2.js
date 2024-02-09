import{a as d,i as E}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function s(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=s(a);fetch(a.href,i)}})();(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.forEach(o=>{o.addEventListener("click",s)}),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",t);function t(o){o.target===o.currentTarget&&e.modal.classList.add("is-hidden")}function s(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const k=localStorage.getItem("active-category"),l=document.getElementById(k),p=document.querySelectorAll(".choose-category-button"),n=document.querySelector(".placeholder-container"),$="https://energyflow.b.goit.study/api/filters";let u=1;function m(e,t){return d.get(`${$}?filter=${e}&page=${t}&limit=12`).then(s=>s.data.results.length?s.data:(console.error("No results found for this filter."),null)).catch(s=>{console.error("Error fetching images:",s)})}function w({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function g(e){if(e){let t="";e.results.forEach(o=>{t+=w(o)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,n.innerHTML="",n.appendChild(s)}else n.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}p.forEach(e=>{e.addEventListener("click",async()=>{p.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;m(t,u).then(s=>{g(s)})})});l?(l.classList.add("active-category"),m(l.innerHTML,u).then(e=>{g(e)})):(document.getElementById("muscles").classList.add("active-category"),m("Muscles",u).then(t=>{g(t)}));const M=document.querySelector("[data-modal-open]"),B=document.querySelector("[data-modal-close]"),c=document.querySelector("[data-modal]"),h=document.querySelector(".exercises-modal");let S="64f389465ae26083f39b17a2";M.addEventListener("click",()=>{c.classList.add("is-open"),O(),P()});async function q(){return d.defaults.baseURL="https://energyflow.b.goit.study",await d.get(`/api/exercises/${S}`)}async function O(){try{const e=await q();console.log(e.data);const t=e.data;T(t)}catch(e){A(e)}}function T(e){const{bodyPart:t,burnedCalories:s,description:o,equipmen:a,gifUrl:i,name:r,popularity:v,rating:y,target:x,time:b}=e;let f=y.toFixed(1);const L=`
  <div class="exercises-modal-gif-container">
    <img src="${i}" alt="${r}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${r}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${f}</p>
          <ul class="exercises-modal-stars-list">
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="./img/sprite.svg#icon-star"></use>
                  </svg>
              </li>
          </ul>
      </div>
      <ul class="exercises-modal-block-list">
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Target</h5>
              <p class="exercises-modal-block-paragraf">${x}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${t}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Equipment</h5>
              <p class="exercises-modal-block-paragraf">${a}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Popular</h5>
              <p class="exercises-modal-block-paragraf">${v}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${s}/${b} min</p>
          </li>
      </ul>
      <div class="exercises-modal-container-text">
      <p class="exercises-modal-text">${o}</p>
      </div>
      <div class="exercises-modal-buttons">
          <button class="exercises-modal-button-favorites" type="button">
              Add to favorites
              <svg class="exercises-modal-button-icon">
                  <use href="./img/sprite.svg#icon-heart"></use>
              </svg>
          </button>
          <button class="exercises-modal-button-rating" type="button">Give a rating</button>
      </div>
  </div>
  `;h.insertAdjacentHTML("beforeend",L),C(f)}function C(e){const s=[...h.querySelectorAll(".exercises-modal-star-icon")];console.log(s);for(let o=0;o<=e;o+=1)s[o].classList.add("selected-stars")}function A(e){console.log(e);const t=e.name,s=e.message;E.error({position:"topRight",message:`${t}: ${s}.`})}function P(){document.addEventListener("keydown",s),B.addEventListener("click",e),c.addEventListener("click",t);function e(){c.classList.remove("is-open")}function t(o){o.target.hasAttribute("data-modal")&&e()}function s(o){o.code==="Escape"&&(c.classList.remove("is-open"),document.removeEventListener("keydown",s))}}
//# sourceMappingURL=commonHelpers2.js.map
