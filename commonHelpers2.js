import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as c,i as E}from"./assets/vendor-8cce9181.js";(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.forEach(a=>{a.addEventListener("click",t)}),e.closeModalBtn.addEventListener("click",t),e.modal.addEventListener("click",s);function s(a){a.target===a.currentTarget&&e.modal.classList.add("is-hidden")}function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const w=localStorage.getItem("active-category"),d=document.getElementById(w),v=document.querySelectorAll(".choose-category-button"),u=document.querySelector(".placeholder-container"),$="https://energyflow.b.goit.study/api/filters";let m=1;function p(e,s){return c.get(`${$}?filter=${e}&page=${s}&limit=12`).then(t=>t.data.results.length?t.data:(console.error("No results found for this filter."),null)).catch(t=>{console.error("Error fetching images:",t)})}function C({imgUrl:e,name:s,filter:t}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${s}"><div class='list-history'>${s}<span>${t}</span></div></li>`}function h(e){if(e){let s="";e.results.forEach(a=>{s+=C(a)});let t=document.createElement("ul");t.classList.add("search-list"),t.innerHTML=s,u.innerHTML="",u.appendChild(t)}else u.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}v.forEach(e=>{e.addEventListener("click",async()=>{v.forEach(t=>{t.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const s=e.innerText;p(s,m).then(t=>{h(t)})})});d?(d.classList.add("active-category"),p(d.innerHTML,m).then(e=>{h(e)})):(document.getElementById("muscles").classList.add("active-category"),p("Muscles",m).then(s=>{h(s)}));const M="https://energyflow.b.goit.study/api/exercises",S=document.querySelector(".placeholder-container"),g=document.querySelector(".placeholder-container");S.addEventListener("click",B);async function B(e){if(e.target.nodeName==="UL")return;let s;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(s=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(s=e.target.parentNode),!s)return;const{data:t}=await q(s.firstChild.textContent,s.lastElementChild.textContent);if(!t.results){g.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}const a=document.createElement("ul");a.classList.add("search-result-list"),a.innerHTML=T(t),g.innerHTML="",g.appendChild(a),U(a,t),console.log(t)}async function q(e,s,t=1){s=s.toLowerCase(),s==="body parts"&&(s=s.slice(0,s.length-1).replace(/\s/g,""));try{return await c.get(`${M}?${s.toLowerCase()}=${e.toLowerCase()}&page=${t}&limit=12`)}catch(a){window.alert("something goes wrong"),console.log(a)}}function T({results:e}){return e.map(({bodyPart:s,rating:t,name:a,target:i,burnedCalories:l,time:o,_id:n})=>`<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
                <p class="rating-num">${t.toFixed(1)}</p>
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
            <p class=>Burned calories: <span class="info-from-back">${l} / ${o} min</span></p>
            <p class=>Body part: <span class="info-from-back">${s[0].toUpperCase()+s.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${i[0].toUpperCase()+i.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function U(e,{totalPages:s}){if(s===1)return;const t=document.createElement("ul");t.classList.add("pagination-counter"),t.addEventListener("click",A);for(let a=0;a<s;a++){const i=document.createElement("li");i.textContent=a+1,i.classList.add("one-count"),t.append(i),a===0&&i.classList.add("active-count")}e.after(t),e.classList.add("exercises-margin-for-pagin")}function A(e){e.target.nodeName!=="UL"&&console.log("click")}const H=document.querySelector("[data-modal-open]"),I=document.querySelector("[data-modal-close]"),r=document.querySelector("[data-modal]"),x=document.querySelector(".exercises-modal");let R="64f389465ae26083f39b17a2";H.addEventListener("click",()=>{r.classList.add("is-open"),P(),z()});async function O(){return c.defaults.baseURL="https://energyflow.b.goit.study",await c.get(`/api/exercises/${R}`)}async function P(){try{const e=await O();console.log(e.data);const s=e.data;j(s)}catch(e){Z(e)}}function j(e){const{bodyPart:s,burnedCalories:t,description:a,equipmen:i,gifUrl:l,name:o,popularity:n,rating:y,target:L,time:b}=e;let f=y.toFixed(1);const k=`
  <div class="exercises-modal-gif-container">
    <img src="${l}" alt="${o}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${o}</h4>
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
              <p class="exercises-modal-block-paragraf">${L}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${s}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Equipment</h5>
              <p class="exercises-modal-block-paragraf">${i}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Popular</h5>
              <p class="exercises-modal-block-paragraf">${n}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${t}/${b} min</p>
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
  `;x.insertAdjacentHTML("beforeend",k),D(f)}function D(e){const t=[...x.querySelectorAll(".exercises-modal-star-icon")];console.log(t);for(let a=0;a<=e;a+=1)t[a].classList.add("selected-stars")}function Z(e){console.log(e);const s=e.name,t=e.message;E.error({position:"topRight",message:`${s}: ${t}.`})}function z(){document.addEventListener("keydown",t),I.addEventListener("click",e),r.addEventListener("click",s);function e(){r.classList.remove("is-open")}function s(a){a.target.hasAttribute("data-modal")&&e()}function t(a){a.code==="Escape"&&(r.classList.remove("is-open"),document.removeEventListener("keydown",t))}}
//# sourceMappingURL=commonHelpers2.js.map
