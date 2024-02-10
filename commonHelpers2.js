import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as d,i as k}from"./assets/vendor-8cce9181.js";(()=>{const e={openModalMenuButton:document.querySelectorAll(".button-header"),closeModalMenuButton:document.querySelector(".menu-modal-close-button"),modalMenu:document.querySelector(".backdrop-menu-modal")};e.openModalMenuButton.forEach(a=>{a.addEventListener("click",toggleModal)}),e.closeModalMenuButton.addEventListener("click",t),e.modalMenu.addEventListener("click",s);function s(a){a.target===a.currentTarget&&e.modalMenu.classList.add("is-hidden")}function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const q=localStorage.getItem("active-category"),f=document.getElementById(q),w=document.querySelectorAll(".choose-category-button"),h=document.querySelector(".placeholder-container"),N="https://energyflow.b.goit.study/api/filters";let y=1;function v(e,s){return d.get(`${N}?filter=${e}&page=${s}&limit=12`).then(t=>t.data.results.length?t.data:(console.error("No results found for this filter."),null)).catch(t=>{console.error("Error fetching images:",t)})}function H({imgUrl:e,name:s,filter:t}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${s}"><div class='list-history'>${s}<span>${t}</span></div></li>`}function x(e){if(e){let s="";e.results.forEach(a=>{s+=H(a)});let t=document.createElement("ul");t.classList.add("search-list"),t.innerHTML=s,h.innerHTML="",h.appendChild(t)}else h.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}w.forEach(e=>{e.addEventListener("click",async()=>{w.forEach(t=>{t.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const s=e.innerText;v(s,y).then(t=>{x(t)})})});f?(f.classList.add("active-category"),v(f.innerHTML,y).then(e=>{x(e)})):(document.getElementById("muscles").classList.add("active-category"),v("Muscles",y).then(s=>{x(s)}));const U="https://energyflow.b.goit.study/api/exercises",A=document.querySelector(".placeholder-container"),u=document.querySelector(".placeholder-container");A.addEventListener("click",I);const n=document.createElement("ul");n.classList.add("search-result-list");const m={group:"",item:""};async function I(e){if(e.target.nodeName==="UL")return;let s;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(s=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(s=e.target.parentNode),!s)return;m.group=s.lastElementChild.textContent,m.item=s.firstChild.textContent;const{data:t}=await E(m);if(!t.results){u.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}n.innerHTML=M(t),u.innerHTML="",u.appendChild(n),$(n,t),t.totalPages>1?n.classList.add("additional-margin"):n.classList.remove("additional-margin")}async function E({group:e,item:s},t=1){let a=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return await d.get(`${U}?${e.toLowerCase()}=${s.toLowerCase()}&page=${t}&limit=${a}`)}catch(o){window.alert("something goes wrong"),console.log(o)}}function M({results:e}){return e.map(({bodyPart:s,rating:t,name:a,target:o,burnedCalories:r,time:c,_id:i})=>`<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
                <p class="rating-num">${t.toFixed(1)}</p>
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
            <p class=>Burned calories: <span class="info-from-back">${r} / ${c} min</span></p>
            <p class=>Body part: <span class="info-from-back">${s[0].toUpperCase()+s.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${o[0].toUpperCase()+o.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function $(e,{totalPages:s},t=0,a=7){if(s===1)return;const o=document.createElement("ul");o.classList.add("pagination-counter"),o.addEventListener("click",R);let r;t==1?r=Number(t)-1:t==2?r=Number(t)-2:Number(t)===3?r=Number(t)-3:Number(t)>3?r=Number(t)-4:r=Number(t);let c=0;for(let i=r;i<a+Number(t);i++){c+=1;const l=document.createElement("li");if(l.textContent=i+1,l.classList.add("one-count"),o.append(l),(i+1==t||t===0&&i===0)&&l.classList.add("active-count"),i+1===s)break;if(c===7)break}e.after(o),e.classList.add("exercises-margin-for-pagin")}async function R(e){if(e.target.nodeName==="UL")return;const{data:s}=await E(m,e.target.textContent);n.innerHTML=M(s),u.innerHTML="",u.appendChild(n),$(n,s,e.target.textContent)}const O=document.querySelector("[data-exercise-modal-open]"),j=document.querySelector("[data-exercise-modal-close]"),g=document.querySelector("[data-exercise-modal]"),D=document.querySelector(".exercises-modal"),C=document.querySelector(".exercises-modal-content");let z="64f389465ae26083f39b17a2";O.addEventListener("click",()=>{C.innerHTML="",g.classList.add("is-open"),Y(),_()});async function W(){return d.defaults.baseURL="https://energyflow.b.goit.study",await d.get(`/api/exercises/${z}`)}async function Y(){try{const s=(await W()).data;Z(s)}catch(e){V(e)}}function Z(e){const{bodyPart:s,burnedCalories:t,description:a,equipmen:o,gifUrl:r,name:c,popularity:i,rating:l,target:S,time:B}=e;let L=l.toFixed(1);const T=`
  <div class="exercises-modal-gif-container">
    <img src="${r}" alt="${c}"/>
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
              <p class="exercises-modal-block-paragraf">${S}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${s}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Equipment</h5>
              <p class="exercises-modal-block-paragraf">${o}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Popular</h5>
              <p class="exercises-modal-block-paragraf">${i}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${t}/${B} min</p>
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
  `;C.insertAdjacentHTML("beforeend",T),F(L)}function F(e){const t=[...D.querySelectorAll(".exercises-modal-star-icon")];for(let a=0;a<=e;a+=1)t[a].classList.add("selected-stars")}function V(e){console.log(e);const s=e.name,t=e.message;k.error({position:"topRight",message:`${s}: ${t}.`})}function _(){document.addEventListener("keydown",t),j.addEventListener("click",e),g.addEventListener("click",s);function e(){g.classList.remove("is-open")}function s(a){a.target.hasAttribute("data-exercise-modal")&&e()}function t(a){a.code==="Escape"&&(g.classList.remove("is-open"),document.removeEventListener("keydown",t))}}d.defaults.baseURL="https://energyflow.b.goit.study/api";const b={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};b.form.addEventListener("submit",G);async function G(e){e.preventDefault();const s=b.form.email.value.trim();try{if(!s){p("Oooops! You forgot to enter the email! 🫣");return}if(!K(s))return;const t=await J(s);p("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(t){t.response.status===409&&p("Sorry! This email has been already declarated!")}finally{b.form.reset()}}async function J(e){return(await d.post("subscription",{email:e})).data}function K(e){let s=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(s)?!0:(p("Please, enter the valid email!"),!1)}function p(e){k.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.8)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}
//# sourceMappingURL=commonHelpers2.js.map
