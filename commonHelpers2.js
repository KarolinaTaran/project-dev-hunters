import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as p,i as I}from"./assets/vendor-8cce9181.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".button-header"),t=document.querySelector(".backdrop-menu-modal"),s=document.querySelector(".menu-modal-close-button");e.addEventListener("click",function(){t.classList.remove("is-hidden")}),s.addEventListener("click",function(){t.classList.add("is-hidden")})});const N="https://energyflow.b.goit.study/api/exercises",w="formValusForSearch",$=document.querySelector(".title-container"),R=document.querySelector(".placeholder-container"),u=document.querySelector(".placeholder-container"),d=document.querySelector(".training-search-form"),c=document.createElement("ul"),v=document.querySelector(".cansel-button-ex");v.addEventListener("click",()=>{v.classList.add("display-none"),d.firstElementChild.value="",sessionStorage.removeItem(w)});c.classList.add("search-result-list");R.addEventListener("click",F);d.addEventListener("submit",Y);d.addEventListener("input",j);d.querySelector('[name="exercise-name"]').value=sessionStorage.getItem(w)??"";const m={group:"",item:"",keyWord:""};function D(){d.classList.add("display-none"),$.innerHTML='<h2 class="exercises-title">Exercises</h2>'}function j(e){v.classList.remove("display-none"),sessionStorage.setItem(w,e.target.value)}async function Y(e){e.preventDefault(),v.classList.add("display-none"),m.keyWord=d.querySelector('[name="exercise-name"]').value.trim().toLowerCase().replace(/\s/g,""),d.querySelector('[name="exercise-name"]').value="",sessionStorage.removeItem(w);const{data:t}=await C(m,1);if(t.results.length===0){u.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=M(t),u.innerHTML="",u.appendChild(c),d.classList.remove("display-none"),$.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',T(c,t),t.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin")}async function F(e){if(m.keyWord="",e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;m.group=t.lastElementChild.textContent,m.item=t.firstChild.textContent;const{data:s}=await C(m);if(!s.results){u.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=M(s),u.innerHTML="",u.appendChild(c),d.classList.remove("display-none"),$.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',T(c,s),s.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin")}async function C({group:e,item:t,keyWord:s},a=1){let r=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return s===""?await p.get(`${N}?${e.toLowerCase()}=${t.toLowerCase()}&page=${a}&limit=${r}`):await p.get(`${N}?${e.toLowerCase()}=${t.toLowerCase()}&keyword=${s}&page=${a}&limit=${r}`)}catch(i){window.alert("something goes wrong"),console.log(i)}}function M({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:r,burnedCalories:i,time:o,_id:n})=>`<li class=exercises-serch-result>
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
            <p class=>Burned calories: <span class="info-from-back">${i} / ${o} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${r[0].toUpperCase()+r.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function T(e,{totalPages:t},s=0,a=7){if(t===1)return;const r=document.createElement("ul");r.classList.add("pagination-counter"),r.addEventListener("click",z);let i;s==1?i=Number(s)-1:s==2?i=Number(s)-2:Number(s)===3?i=Number(s)-3:Number(s)>3?i=Number(s)-4:i=Number(s);let o=0;for(let n=i;n<a+Number(s);n++){o+=1;const l=document.createElement("li");if(l.textContent=n+1,l.classList.add("one-count"),r.append(l),(n+1==s||s===0&&n===0)&&l.classList.add("active-count"),n+1===t)break;if(o===7)break}e.after(r),e.classList.add("exercises-margin-for-pagin")}async function z(e){if(e.target.nodeName==="UL")return;const{data:t}=await C(m,e.target.textContent);c.innerHTML=M(t),u.innerHTML="",u.appendChild(c),T(c,t,e.target.textContent)}const V=localStorage.getItem("active-category"),k=document.getElementById(V),H=document.querySelectorAll(".choose-category-button"),f=document.querySelector(".placeholder-container"),Z="https://energyflow.b.goit.study/api/filters";let E=1,U=null;function x(e,t){function s(){U=window.innerWidth<768?8:12}return s(),p.get(`${Z}?filter=${e}&page=${t}&limit=${U}`).then(a=>a.data.results.length?a.data:(console.error("No results found for this filter."),null)).catch(a=>{console.error("Error fetching images:",a)})}function K({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function L(e){if(e){let t="";e.results.forEach(a=>{t+=K(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,f.innerHTML="",f.appendChild(s),f.insertAdjacentHTML("beforeend","<div id='pagination' class='tui-pagination'></div>")}else f.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}H.forEach(e=>{e.addEventListener("click",async()=>{D(),H.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;x(t,E).then(s=>{L(s),b(s)})})});k?(k.classList.add("active-category"),x(k.innerText,E).then(e=>{L(e),b(e)})):(document.getElementById("muscles").classList.add("active-category"),x("Muscles",E).then(t=>{L(t),b(t)}));function b({page:e,results:t,totalPages:s}){const a=document.querySelector("#pagination");for(let i=1;i<=s;i++){const o=document.createElement("a");o.href="#",i==e?o.classList.add("tui-page-btn","tui-is-selected"):o.classList.add("tui-page-btn"),o.textContent=i,o.addEventListener("click",n=>{const l=n.target.textContent;x(t[0].filter,l).then(g=>{L(g),b(g)})}),a.appendChild(o)}const r=document.querySelectorAll(".tui-page-btn");r.forEach(i=>{i.addEventListener("click",o=>{o.preventDefault(),r.forEach(n=>{n.classList.remove("tui-is-selected")}),i.classList.add("tui-is-selected")})})}const _=document.querySelector("[data-exercise-modal-open]"),G=document.querySelector("[data-exercise-modal-close]"),h=document.querySelector("[data-exercise-modal]"),J=document.querySelector(".exercises-modal"),W=document.querySelector(".exercises-modal-content");let Q="64f389465ae26083f39b17a2";_.addEventListener("click",()=>{W.innerHTML="",h.classList.add("is-open"),P(),ae()});async function X(){return p.defaults.baseURL="https://energyflow.b.goit.study",await p.get(`/api/exercises/${Q}`)}async function P(){try{const t=(await X()).data;ee(t)}catch(e){se(e)}}function ee(e){const{bodyPart:t,burnedCalories:s,description:a,equipmen:r,gifUrl:i,name:o,popularity:n,rating:l,target:g,time:A}=e;let B=l.toFixed(1);const O=`
  <div class="exercises-modal-gif-container">
    <img src="${i}" alt="${o}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${o}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${B}</p>
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
              <p class="exercises-modal-block-paragraf">${r}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Popular</h5>
              <p class="exercises-modal-block-paragraf">${n}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${s}/${A} min</p>
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
  `;W.insertAdjacentHTML("beforeend",O),te(B)}function te(e){const s=[...J.querySelectorAll(".exercises-modal-star-icon")];for(let a=0;a<=e;a+=1)s[a].classList.add("selected-stars")}function se(e){console.log(e);const t=e.name,s=e.message;I.error({position:"topRight",message:`${t}: ${s}.`})}function ae(){document.addEventListener("keydown",s),G.addEventListener("click",e),h.addEventListener("click",t);function e(){h.classList.remove("is-open")}function t(a){a.target.hasAttribute("data-exercise-modal")&&e()}function s(a){a.code==="Escape"&&(h.classList.remove("is-open"),document.removeEventListener("keydown",s))}}p.defaults.baseURL="https://energyflow.b.goit.study/api";const S={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};S.form.addEventListener("submit",ie);async function ie(e){e.preventDefault();const t=S.form.email.value.trim();try{if(!t){y("Oooops! You forgot to enter the email! 🫣");return}if(!re(t))return;const s=await oe(t);y("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&y("Sorry! This email has already been declarated!")}finally{S.form.reset()}}async function oe(e){return(await p.post("subscription",{email:e})).data}function re(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(y("Please, enter the correct email!"),!1)}function y(e){I.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.8)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}const q=document.querySelector(".up-btn");q.addEventListener("click",ce);window.onscroll=function(){ne()};function ne(){window.scrollY>1?le():de()}function ce(){document.documentElement.scrollTop=0}function le(){q.classList.remove("is-hidden")}function de(){q.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
