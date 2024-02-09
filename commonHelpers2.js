import{a as l,i as w}from"./assets/vendor-8cce9181.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.forEach(a=>{a.addEventListener("click",s)}),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",t);function t(a){a.target===a.currentTarget&&e.modal.classList.add("is-hidden")}function s(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const k=localStorage.getItem("active-category"),d=document.getElementById(k),v=document.querySelectorAll(".choose-category-button"),u=document.querySelector(".placeholder-container"),$="https://energyflow.b.goit.study/api/filters";let m=1;function p(e,t){return l.get(`${$}?filter=${e}&page=${t}&limit=12`).then(s=>s.data.results.length?s.data:(console.error("No results found for this filter."),null)).catch(s=>{console.error("Error fetching images:",s)})}function M({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function f(e){if(e){let t="";e.results.forEach(a=>{t+=M(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,u.innerHTML="",u.appendChild(s)}else u.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}v.forEach(e=>{e.addEventListener("click",async()=>{v.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;p(t,m).then(s=>{f(s)})})});d?(d.classList.add("active-category"),p(d.innerHTML,m).then(e=>{f(e)})):(document.getElementById("muscles").classList.add("active-category"),p("Muscles",m).then(t=>{f(t)}));const C="https://energyflow.b.goit.study/api/exercises",S=document.querySelector(".placeholder-container"),g=document.querySelector(".placeholder-container");S.addEventListener("click",B);async function B(e){if(e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;const{data:s}=await q(t.firstChild.textContent,t.lastElementChild.textContent);if(!s.results){g.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}const a=document.createElement("ul");a.classList.add("search-result-list"),a.innerHTML=T(s),g.innerHTML="",g.appendChild(a),O(a,s),console.log(s)}async function q(e,t,s=1){t=t.toLowerCase(),t==="body parts"&&(t=t.slice(0,t.length-1).replace(/\s/g,""));try{return await l.get(`${C}?${t.toLowerCase()}=${e.toLowerCase()}&page=${s}&limit=12`)}catch(a){window.alert("something goes wrong"),console.log(a)}}function T({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:o,burnedCalories:i,time:r,_id:n})=>`<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
                <p class="rating-num">${s.toFixed(1)}</p>
                <svg class="rating-star-svg" width="16" height="16">
                    <use href="./img/sprite.svg#rating-star"></use>
                </svg>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${n} data-modal-open>Start
                <svg class="start-svg" width="18" height="18">
                    <use href="./img/sprite.svg#icon-arrow-right"></use>
                </svg>
            </button>
        </div>
      </div>
      <div class="info-about-exercise">
        <div class="exercise-name">
            <svg class="runnig-svg" width="24" height="24">
                <use href="./img/sprite.svg#running-man"></use>
            </svg>
            <h2>${a[0].toUpperCase()+a.slice(1)}</h2>
        </div>
        <div class="additional-information">
            <p class=>Burned calories: <span class="info-from-back">${i} / ${r} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${o[0].toUpperCase()+o.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function O(e,{totalPages:t}){if(t===1)return;const s=document.createElement("ul");s.classList.add("pagination-counter"),s.addEventListener("click",U);for(let a=0;a<t;a++){const o=document.createElement("li");o.textContent=a+1,o.classList.add("one-count"),s.append(o),a===0&&o.classList.add("active-count")}e.after(s),e.classList.add("exercises-margin-for-pagin")}function U(e){e.target.nodeName!=="UL"&&console.log("click")}const A=document.querySelector("[data-modal-open]"),H=document.querySelector("[data-modal-close]"),c=document.querySelector("[data-modal]"),y=document.querySelector(".exercises-modal");let I="64f389465ae26083f39b17a2";A.addEventListener("click",()=>{c.classList.add("is-open"),R(),F()});async function P(){return l.defaults.baseURL="https://energyflow.b.goit.study",await l.get(`/api/exercises/${I}`)}async function R(){try{const e=await P();console.log(e.data);const t=e.data;N(t)}catch(e){D(e)}}function N(e){const{bodyPart:t,burnedCalories:s,description:a,equipmen:o,gifUrl:i,name:r,popularity:n,rating:x,target:L,time:b}=e;let h=x.toFixed(1);const E=`
  <div class="exercises-modal-gif-container">
    <img src="${i}" alt="${r}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${r}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${h}</p>
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
              <p class="exercises-modal-block-paragraf">${L}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${t}</p>
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
              <p class="exercises-modal-block-paragraf lowercase-text">${s}/${b} min</p>
          </li>
      </ul>
      <div class="exercises-modal-container-text">
      <p class="exercises-modal-text">${a}</p>
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
  `;y.insertAdjacentHTML("beforeend",E),j(h)}function j(e){const s=[...y.querySelectorAll(".exercises-modal-star-icon")];console.log(s);for(let a=0;a<=e;a+=1)s[a].classList.add("selected-stars")}function D(e){console.log(e);const t=e.name,s=e.message;w.error({position:"topRight",message:`${t}: ${s}.`})}function F(){document.addEventListener("keydown",s),H.addEventListener("click",e),c.addEventListener("click",t);function e(){c.classList.remove("is-open")}function t(a){a.target.hasAttribute("data-modal")&&e()}function s(a){a.code==="Escape"&&(c.classList.remove("is-open"),document.removeEventListener("keydown",s))}}
//# sourceMappingURL=commonHelpers2.js.map
