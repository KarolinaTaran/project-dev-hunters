import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as m,i as S}from"./assets/vendor-8cce9181.js";(()=>{const e={openModalMenuButton:document.querySelectorAll(".button-header"),closeModalMenuButton:document.querySelector(".menu-modal-close-button"),modalMenu:document.querySelector(".backdrop-menu-modal")};e.openModalMenuButton.forEach(a=>{a.addEventListener("click",toggleModal)}),e.closeModalMenuButton.addEventListener("click",s),e.modalMenu.addEventListener("click",t);function t(a){a.target===a.currentTarget&&e.modalMenu.classList.add("is-hidden")}function s(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const M="https://energyflow.b.goit.study/api/exercises",H=document.querySelector(".placeholder-container");H.addEventListener("click",I);const c=document.querySelector(".placeholder-container"),g=document.querySelector(".training-search-form");g.addEventListener("submit",A);const o=document.createElement("ul");o.classList.add("search-result-list");const u={group:"",item:"",keyWord:""};function U(){g.classList.add("display-none")}async function A(e){e.preventDefault(),u.keyWord=g.querySelector('[name="exercise-name"]').value.trim(),g.querySelector('[name="exercise-name"]').value="";const{data:t}=await w(u,1);if(t.results.length===0){c.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}o.innerHTML=k(t),c.innerHTML="",c.appendChild(o),g.classList.remove("display-none"),$(o,t),t.totalPages>1?o.classList.add("additional-margin"):o.classList.remove("additional-margin")}async function I(e){if(u.keyWord="",e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;u.group=t.lastElementChild.textContent,u.item=t.firstChild.textContent;const{data:s}=await w(u);if(!s.results){c.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}o.innerHTML=k(s),c.innerHTML="",c.appendChild(o),g.classList.remove("display-none"),$(o,s),s.totalPages>1?o.classList.add("additional-margin"):o.classList.remove("additional-margin")}async function w({group:e,item:t,keyWord:s},a=1){let i=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return s===""?await m.get(`${M}?${e.toLowerCase()}=${t.toLowerCase()}&page=${a}&limit=${i}`):await m.get(`${M}?${e.toLowerCase()}=${t.toLowerCase()}&page=${a}&keyword=${s}&limit=${i}`)}catch(r){window.alert("something goes wrong"),console.log(r)}}function k({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:i,burnedCalories:r,time:l,_id:n})=>`<li class=exercises-serch-result>
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
            <button type="button" data-id=${n} data-exercise-modal-open>Start
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
            <p class=>Burned calories: <span class="info-from-back">${r} / ${l} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${i[0].toUpperCase()+i.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function $(e,{totalPages:t},s=0,a=7){if(t===1)return;const i=document.createElement("ul");i.classList.add("pagination-counter"),i.addEventListener("click",O);let r;s==1?r=Number(s)-1:s==2?r=Number(s)-2:Number(s)===3?r=Number(s)-3:Number(s)>3?r=Number(s)-4:r=Number(s);let l=0;for(let n=r;n<a+Number(s);n++){l+=1;const d=document.createElement("li");if(d.textContent=n+1,d.classList.add("one-count"),i.append(d),(n+1==s||s===0&&n===0)&&d.classList.add("active-count"),n+1===t)break;if(l===7)break}e.after(i),e.classList.add("exercises-margin-for-pagin")}async function O(e){if(e.target.nodeName==="UL")return;const{data:t}=await w(u,e.target.textContent);o.innerHTML=k(t),c.innerHTML="",c.appendChild(o),$(o,t,e.target.textContent)}const R=localStorage.getItem("active-category"),h=document.getElementById(R),C=document.querySelectorAll(".choose-category-button"),y=document.querySelector(".placeholder-container"),D="https://energyflow.b.goit.study/api/filters";let v=1;function x(e,t){return m.get(`${D}?filter=${e}&page=${t}&limit=12`).then(s=>s.data.results.length?s.data:(console.error("No results found for this filter."),null)).catch(s=>{console.error("Error fetching images:",s)})}function W({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function b(e){if(e){let t="";e.results.forEach(a=>{t+=W(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,y.innerHTML="",y.appendChild(s)}else y.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}C.forEach(e=>{e.addEventListener("click",async()=>{U(),C.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;x(t,v).then(s=>{b(s)})})});h?(h.classList.add("active-category"),x(h.innerHTML,v).then(e=>{b(e)})):(document.getElementById("muscles").classList.add("active-category"),x("Muscles",v).then(t=>{b(t)}));const j=document.querySelector("[data-exercise-modal-open]"),Y=document.querySelector("[data-exercise-modal-close]"),p=document.querySelector("[data-exercise-modal]"),z=document.querySelector(".exercises-modal"),B=document.querySelector(".exercises-modal-content");let Z="64f389465ae26083f39b17a2";j.addEventListener("click",()=>{B.innerHTML="",p.classList.add("is-open"),K(),J()});async function F(){return m.defaults.baseURL="https://energyflow.b.goit.study",await m.get(`/api/exercises/${Z}`)}async function K(){try{const t=(await F()).data;V(t)}catch(e){G(e)}}function V(e){const{bodyPart:t,burnedCalories:s,description:a,equipmen:i,gifUrl:r,name:l,popularity:n,rating:d,target:T,time:q}=e;let E=d.toFixed(1);const N=`
  <div class="exercises-modal-gif-container">
    <img src="${r}" alt="${l}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${l}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${E}</p>
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
              <p class="exercises-modal-block-paragraf">${T}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${t}</p>
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
              <p class="exercises-modal-block-paragraf lowercase-text">${s}/${q} min</p>
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
  `;B.insertAdjacentHTML("beforeend",N),_(E)}function _(e){const s=[...z.querySelectorAll(".exercises-modal-star-icon")];for(let a=0;a<=e;a+=1)s[a].classList.add("selected-stars")}function G(e){console.log(e);const t=e.name,s=e.message;S.error({position:"topRight",message:`${t}: ${s}.`})}function J(){document.addEventListener("keydown",s),Y.addEventListener("click",e),p.addEventListener("click",t);function e(){p.classList.remove("is-open")}function t(a){a.target.hasAttribute("data-exercise-modal")&&e()}function s(a){a.code==="Escape"&&(p.classList.remove("is-open"),document.removeEventListener("keydown",s))}}m.defaults.baseURL="https://energyflow.b.goit.study/api";const L={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};L.form.addEventListener("submit",Q);async function Q(e){e.preventDefault();const t=L.form.email.value.trim();try{if(!t){f("Oooops! You forgot to enter the email! 🫣");return}if(!P(t))return;const s=await X(t);f("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&f("Sorry! This email has been already declarated!")}finally{L.form.reset()}}async function X(e){return(await m.post("subscription",{email:e})).data}function P(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(f("Please, enter the valid email!"),!1)}function f(e){S.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.8)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}
//# sourceMappingURL=commonHelpers2.js.map
