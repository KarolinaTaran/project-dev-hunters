import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as p,i as H}from"./assets/vendor-8cce9181.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".button-header"),t=document.querySelector(".backdrop-menu-modal"),s=document.querySelector(".menu-modal-close-button");e.addEventListener("click",function(){t.classList.remove("is-hidden")}),s.addEventListener("click",function(){t.classList.add("is-hidden")})});const q="https://energyflow.b.goit.study/api/exercises",E="formValusForSearch",$=document.querySelector(".title-container"),A=document.querySelector(".placeholder-container"),d=document.querySelector(".placeholder-container"),u=document.querySelector(".training-search-form"),c=document.createElement("ul");c.classList.add("search-result-list");A.addEventListener("click",j);u.addEventListener("submit",D);u.addEventListener("input",R);u.querySelector('[name="exercise-name"]').value=sessionStorage.getItem(E)??"";const m={group:"",item:"",keyWord:""};function O(){u.classList.add("display-none"),$.innerHTML='<h2 class="exercises-title">Exercises</h2>'}function R(e){sessionStorage.setItem(E,e.target.value)}async function D(e){e.preventDefault(),m.keyWord=u.querySelector('[name="exercise-name"]').value.trim().toLowerCase().replace(/\s/g,""),u.querySelector('[name="exercise-name"]').value="",sessionStorage.removeItem(E);const{data:t}=await S(m,1);if(t.results.length===0){d.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=C(t),d.innerHTML="",d.appendChild(c),u.classList.remove("display-none"),$.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',M(c,t),t.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin")}async function j(e){if(m.keyWord="",e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;m.group=t.lastElementChild.textContent,m.item=t.firstChild.textContent;const{data:s}=await S(m);if(!s.results){d.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=C(s),d.innerHTML="",d.appendChild(c),u.classList.remove("display-none"),$.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',M(c,s),s.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin")}async function S({group:e,item:t,keyWord:s},a=1){let o=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return s===""?await p.get(`${q}?${e.toLowerCase()}=${t.toLowerCase()}&page=${a}&limit=${o}`):await p.get(`${q}?${e.toLowerCase()}=${t.toLowerCase()}&keyword=${s}&page=${a}&limit=${o}`)}catch(i){window.alert("something goes wrong"),console.log(i)}}function C({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:o,burnedCalories:i,time:r,_id:n})=>`<li class=exercises-serch-result>
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
            <p class=>Burned calories: <span class="info-from-back">${i} / ${r} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${o[0].toUpperCase()+o.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function M(e,{totalPages:t},s=0,a=7){if(t===1)return;const o=document.createElement("ul");o.classList.add("pagination-counter"),o.addEventListener("click",Y);let i;s==1?i=Number(s)-1:s==2?i=Number(s)-2:Number(s)===3?i=Number(s)-3:Number(s)>3?i=Number(s)-4:i=Number(s);let r=0;for(let n=i;n<a+Number(s);n++){r+=1;const l=document.createElement("li");if(l.textContent=n+1,l.classList.add("one-count"),o.append(l),(n+1==s||s===0&&n===0)&&l.classList.add("active-count"),n+1===t)break;if(r===7)break}e.after(o),e.classList.add("exercises-margin-for-pagin")}async function Y(e){if(e.target.nodeName==="UL")return;const{data:t}=await S(m,e.target.textContent);c.innerHTML=C(t),d.innerHTML="",d.appendChild(c),M(c,t,e.target.textContent)}const z=localStorage.getItem("active-category"),b=document.getElementById(z),B=document.querySelectorAll(".choose-category-button"),f=document.querySelector(".placeholder-container"),F="https://energyflow.b.goit.study/api/filters";let w=1,N=null;function v(e,t){function s(){N=window.innerWidth<768?8:12}return s(),p.get(`${F}?filter=${e}&page=${t}&limit=${N}`).then(a=>a.data.results.length?a.data:(console.error("No results found for this filter."),null)).catch(a=>{console.error("Error fetching images:",a)})}function V({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function x(e){if(e){let t="";e.results.forEach(a=>{t+=V(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,f.innerHTML="",f.appendChild(s),f.insertAdjacentHTML("beforeend","<div id='pagination' class='tui-pagination'></div>")}else f.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}B.forEach(e=>{e.addEventListener("click",async()=>{O(),B.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;v(t,w).then(s=>{x(s),L(s)})})});b?(b.classList.add("active-category"),v(b.innerText,w).then(e=>{x(e),L(e)})):(document.getElementById("muscles").classList.add("active-category"),v("Muscles",w).then(t=>{x(t),L(t)}));function L({page:e,results:t,totalPages:s}){const a=document.querySelector("#pagination");for(let i=1;i<=s;i++){const r=document.createElement("a");r.href="#",i==e?r.classList.add("tui-page-btn","tui-is-selected"):r.classList.add("tui-page-btn"),r.textContent=i,r.addEventListener("click",n=>{const l=n.target.textContent;v(t[0].filter,l).then(g=>{x(g),L(g)})}),a.appendChild(r)}const o=document.querySelectorAll(".tui-page-btn");o.forEach(i=>{i.addEventListener("click",r=>{r.preventDefault(),o.forEach(n=>{n.classList.remove("tui-is-selected")}),i.classList.add("tui-is-selected")})})}const Z=document.querySelector("[data-exercise-modal-open]"),K=document.querySelector("[data-exercise-modal-close]"),h=document.querySelector("[data-exercise-modal]"),_=document.querySelector(".exercises-modal"),U=document.querySelector(".exercises-modal-content");let G="64f389465ae26083f39b17a2";Z.addEventListener("click",()=>{U.innerHTML="",h.classList.add("is-open"),Q(),te()});async function J(){return p.defaults.baseURL="https://energyflow.b.goit.study",await p.get(`/api/exercises/${G}`)}async function Q(){try{const t=(await J()).data;X(t)}catch(e){ee(e)}}function X(e){const{bodyPart:t,burnedCalories:s,description:a,equipmen:o,gifUrl:i,name:r,popularity:n,rating:l,target:g,time:I}=e;let T=l.toFixed(1);const W=`
  <div class="exercises-modal-gif-container">
    <img src="${i}" alt="${r}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${r}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${T}</p>
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
              <p class="exercises-modal-block-paragraf">${g}</p>
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
              <p class="exercises-modal-block-paragraf lowercase-text">${s}/${I} min</p>
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
  `;U.insertAdjacentHTML("beforeend",W),P(T)}function P(e){const s=[..._.querySelectorAll(".exercises-modal-star-icon")];for(let a=0;a<=e;a+=1)s[a].classList.add("selected-stars")}function ee(e){console.log(e);const t=e.name,s=e.message;H.error({position:"topRight",message:`${t}: ${s}.`})}function te(){document.addEventListener("keydown",s),K.addEventListener("click",e),h.addEventListener("click",t);function e(){h.classList.remove("is-open")}function t(a){a.target.hasAttribute("data-exercise-modal")&&e()}function s(a){a.code==="Escape"&&(h.classList.remove("is-open"),document.removeEventListener("keydown",s))}}p.defaults.baseURL="https://energyflow.b.goit.study/api";const k={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};k.form.addEventListener("submit",se);async function se(e){e.preventDefault();const t=k.form.email.value.trim();try{if(!t){y("Oooops! You forgot to enter the email! 🫣");return}if(!ie(t))return;const s=await ae(t);y("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&y("Sorry! This email has been already declarated!")}finally{k.form.reset()}}async function ae(e){return(await p.post("subscription",{email:e})).data}function ie(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(y("Please, enter the valid email!"),!1)}function y(e){H.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.8)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}
//# sourceMappingURL=commonHelpers2.js.map
