import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as i,i as b}from"./assets/vendor-8cce9181.js";(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};e.openModalBtn.forEach(a=>{a.addEventListener("click",s)}),e.closeModalBtn.addEventListener("click",s),e.modal.addEventListener("click",t);function t(a){a.target===a.currentTarget&&e.modal.classList.add("is-hidden")}function s(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}})();const S=localStorage.getItem("active-category"),u=document.getElementById(S),x=document.querySelectorAll(".choose-category-button"),m=document.querySelector(".placeholder-container"),C="https://energyflow.b.goit.study/api/filters";let p=1;function f(e,t){return i.get(`${C}?filter=${e}&page=${t}&limit=12`).then(s=>s.data.results.length?s.data:(console.error("No results found for this filter."),null)).catch(s=>{console.error("Error fetching images:",s)})}function M({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function h(e){if(e){let t="";e.results.forEach(a=>{t+=M(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,m.innerHTML="",m.appendChild(s)}else m.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}x.forEach(e=>{e.addEventListener("click",async()=>{x.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;f(t,p).then(s=>{h(s)})})});u?(u.classList.add("active-category"),f(u.innerHTML,p).then(e=>{h(e)})):(document.getElementById("muscles").classList.add("active-category"),f("Muscles",p).then(t=>{h(t)}));const B="https://energyflow.b.goit.study/api/exercises",q=document.querySelector(".placeholder-container"),g=document.querySelector(".placeholder-container");q.addEventListener("click",T);async function T(e){if(e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;const{data:s}=await U(t.firstChild.textContent,t.lastElementChild.textContent);if(!s.results){g.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}const a=document.createElement("ul");a.classList.add("search-result-list"),a.innerHTML=A(s),g.innerHTML="",g.appendChild(a),H(a,s),console.log(s)}async function U(e,t,s=1){t=t.toLowerCase(),t==="body parts"&&(t=t.slice(0,t.length-1).replace(/\s/g,""));try{return await i.get(`${B}?${t.toLowerCase()}=${e.toLowerCase()}&page=${s}&limit=12`)}catch(a){window.alert("something goes wrong"),console.log(a)}}function A({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:o,burnedCalories:l,time:r,_id:d})=>`<li class=exercises-serch-result>
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
            <button type="button" data-id=${d} data-modal-open>Start
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
            <p class=>Burned calories: <span class="info-from-back">${l} / ${r} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${o[0].toUpperCase()+o.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function H(e,{totalPages:t}){if(t===1)return;const s=document.createElement("ul");s.classList.add("pagination-counter"),s.addEventListener("click",I);for(let a=0;a<t;a++){const o=document.createElement("li");o.textContent=a+1,o.classList.add("one-count"),s.append(o),a===0&&o.classList.add("active-count")}e.after(s),e.classList.add("exercises-margin-for-pagin")}function I(e){e.target.nodeName!=="UL"&&console.log("click")}const R=document.querySelector("[data-modal-open]"),O=document.querySelector("[data-modal-close]"),c=document.querySelector("[data-modal]"),L=document.querySelector(".exercises-modal");let P="64f389465ae26083f39b17a2";R.addEventListener("click",()=>{c.classList.add("is-open"),D(),Y()});async function z(){return i.defaults.baseURL="https://energyflow.b.goit.study",await i.get(`/api/exercises/${P}`)}async function D(){try{const e=await z();console.log(e.data);const t=e.data;Z(t)}catch(e){W(e)}}function Z(e){const{bodyPart:t,burnedCalories:s,description:a,equipmen:o,gifUrl:l,name:r,popularity:d,rating:k,target:w,time:E}=e;let y=k.toFixed(1);const $=`
  <div class="exercises-modal-gif-container">
    <img src="${l}" alt="${r}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${r}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${y}</p>
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
              <p class="exercises-modal-block-paragraf">${w}</p>
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
              <p class="exercises-modal-block-paragraf">${d}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${s}/${E} min</p>
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
  `;L.insertAdjacentHTML("beforeend",$),j(y)}function j(e){const s=[...L.querySelectorAll(".exercises-modal-star-icon")];console.log(s);for(let a=0;a<=e;a+=1)s[a].classList.add("selected-stars")}function W(e){console.log(e);const t=e.name,s=e.message;b.error({position:"topRight",message:`${t}: ${s}.`})}function Y(){document.addEventListener("keydown",s),O.addEventListener("click",e),c.addEventListener("click",t);function e(){c.classList.remove("is-open")}function t(a){a.target.hasAttribute("data-modal")&&e()}function s(a){a.code==="Escape"&&(c.classList.remove("is-open"),document.removeEventListener("keydown",s))}}i.defaults.baseURL="https://energyflow.b.goit.study/api";const v={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};v.form.addEventListener("submit",F);async function F(e){e.preventDefault();const t=v.form.email.value.trim();try{if(!t){n("Oooops! You forgot to enter the email! 🫣");return}if(!V(t))return;const s=await N(t);n("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&n("Sorry! This email has been already declarated!")}finally{v.form.reset()}}async function N(e){return(await i.post("subscription",{email:e})).data}function V(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(n("Please, enter the valid email!"),!1)}function n(e){b.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.8)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}
//# sourceMappingURL=commonHelpers2.js.map
