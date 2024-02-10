import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as d,i as k}from"./assets/vendor-8cce9181.js";(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.forEach(a=>{a.addEventListener("click",s)}),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",t);function t(a){a.target===a.currentTarget&&e.modal.classList.add("is-hidden")}function s(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const q=localStorage.getItem("active-category"),f=document.getElementById(q),w=document.querySelectorAll(".choose-category-button"),h=document.querySelector(".placeholder-container"),N="https://energyflow.b.goit.study/api/filters";let y=1;function v(e,t){return d.get(`${N}?filter=${e}&page=${t}&limit=12`).then(s=>s.data.results.length?s.data:(console.error("No results found for this filter."),null)).catch(s=>{console.error("Error fetching images:",s)})}function H({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function x(e){if(e){let t="";e.results.forEach(a=>{t+=H(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,h.innerHTML="",h.appendChild(s)}else h.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}w.forEach(e=>{e.addEventListener("click",async()=>{w.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;v(t,y).then(s=>{x(s)})})});f?(f.classList.add("active-category"),v(f.innerHTML,y).then(e=>{x(e)})):(document.getElementById("muscles").classList.add("active-category"),v("Muscles",y).then(t=>{x(t)}));const U="https://energyflow.b.goit.study/api/exercises",A=document.querySelector(".placeholder-container"),u=document.querySelector(".placeholder-container");A.addEventListener("click",I);const n=document.createElement("ul");n.classList.add("search-result-list");const m={group:"",item:""};async function I(e){if(e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;m.group=t.lastElementChild.textContent,m.item=t.firstChild.textContent;const{data:s}=await E(m);if(!s.results){u.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}n.innerHTML=$(s),u.innerHTML="",u.appendChild(n),C(n,s),s.totalPages>1?n.classList.add("additional-margin"):n.classList.remove("additional-margin")}async function E({group:e,item:t},s=1){let a=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return await d.get(`${U}?${e.toLowerCase()}=${t.toLowerCase()}&page=${s}&limit=${a}`)}catch(r){window.alert("something goes wrong"),console.log(r)}}function $({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:r,burnedCalories:o,time:c,_id:i})=>`<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
                <p class="rating-num">${s.toFixed(1)}</p>
                <svg class="rating-star-svg" width="16" height="16">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#rating-star"></use>
                </svg>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${i} data-exercise-modal-open>Start
                <svg class="start-svg" width="18" height="18">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-arrow-right"></use>
                </svg>
            </button>
        </div>
      </div>
      <div class="info-about-exercise">
        <div class="exercise-name">
            <svg class="runnig-svg" width="24" height="24">
                <use href="/project-dev-hunters/assets/sprite-f8222074.svg#running-man"></use>
            </svg>
            <h2>${a[0].toUpperCase()+a.slice(1)}</h2>
        </div>
        <div class="additional-information">
            <p class=>Burned calories: <span class="info-from-back">${o} / ${c} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${r[0].toUpperCase()+r.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function C(e,{totalPages:t},s=0,a=7){if(t===1)return;const r=document.createElement("ul");r.classList.add("pagination-counter"),r.addEventListener("click",R);let o;s==1?o=Number(s)-1:s==2?o=Number(s)-2:Number(s)===3?o=Number(s)-3:Number(s)>3?o=Number(s)-4:o=Number(s);let c=0;for(let i=o;i<a+Number(s);i++){c+=1;const l=document.createElement("li");if(l.textContent=i+1,l.classList.add("one-count"),r.append(l),(i+1==s||s===0&&i===0)&&l.classList.add("active-count"),i+1===t)break;if(c===7)break}e.after(r),e.classList.add("exercises-margin-for-pagin")}async function R(e){if(e.target.nodeName==="UL")return;const{data:t}=await E(m,e.target.textContent);n.innerHTML=$(t),u.innerHTML="",u.appendChild(n),C(n,t,e.target.textContent)}const O=document.querySelector("[data-exercise-modal-open]"),j=document.querySelector("[data-exercise-modal-close]"),g=document.querySelector("[data-exercise-modal]"),D=document.querySelector(".exercises-modal"),S=document.querySelector(".exercises-modal-content");let z="64f389465ae26083f39b17a2";O.addEventListener("click",()=>{S.innerHTML="",g.classList.add("is-open"),Y(),_()});async function W(){return d.defaults.baseURL="https://energyflow.b.goit.study",await d.get(`/api/exercises/${z}`)}async function Y(){try{const t=(await W()).data;Z(t)}catch(e){V(e)}}function Z(e){const{bodyPart:t,burnedCalories:s,description:a,equipmen:r,gifUrl:o,name:c,popularity:i,rating:l,target:M,time:B}=e;let L=l.toFixed(1);const T=`
  <div class="exercises-modal-gif-container">
    <img src="${o}" alt="${c}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${c}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${L}</p>
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
              <p class="exercises-modal-block-paragraf">${M}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${t}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Equipment</h5>
              <p class="exercises-modal-block-paragraf">${r}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Popular</h5>
              <p class="exercises-modal-block-paragraf">${i}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${s}/${B} min</p>
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
  `;S.insertAdjacentHTML("beforeend",T),F(L)}function F(e){const s=[...D.querySelectorAll(".exercises-modal-star-icon")];for(let a=0;a<=e;a+=1)s[a].classList.add("selected-stars")}function V(e){console.log(e);const t=e.name,s=e.message;k.error({position:"topRight",message:`${t}: ${s}.`})}function _(){document.addEventListener("keydown",s),j.addEventListener("click",e),g.addEventListener("click",t);function e(){g.classList.remove("is-open")}function t(a){a.target.hasAttribute("data-exercise-modal")&&e()}function s(a){a.code==="Escape"&&(g.classList.remove("is-open"),document.removeEventListener("keydown",s))}}d.defaults.baseURL="https://energyflow.b.goit.study/api";const b={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};b.form.addEventListener("submit",G);async function G(e){e.preventDefault();const t=b.form.email.value.trim();try{if(!t){p("Oooops! You forgot to enter the email! 🫣");return}if(!K(t))return;const s=await J(t);p("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&p("Sorry! This email has been already declarated!")}finally{b.form.reset()}}async function J(e){return(await d.post("subscription",{email:e})).data}function K(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(p("Please, enter the valid email!"),!1)}function p(e){k.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.8)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}
//# sourceMappingURL=commonHelpers2.js.map
