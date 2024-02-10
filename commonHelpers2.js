import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as f,i as R}from"./assets/vendor-8cce9181.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".button-header"),t=document.querySelector(".backdrop-menu-modal"),s=document.querySelector(".menu-modal-close-button");e.addEventListener("click",function(){t.classList.remove("is-hidden")}),s.addEventListener("click",function(){t.classList.add("is-hidden")})});const A="https://energyflow.b.goit.study/api/exercises",w="formValusForSearch",T=document.querySelector(".title-container"),J=document.querySelector(".placeholder-container"),u=document.querySelector(".placeholder-container"),d=document.querySelector(".training-search-form"),c=document.createElement("ul"),x=document.querySelector(".cansel-button-ex");x.addEventListener("click",()=>{x.classList.add("display-none"),d.firstElementChild.value="",sessionStorage.removeItem(w)});c.classList.add("search-result-list");J.addEventListener("click",K);d.addEventListener("submit",_);d.addEventListener("input",Z);d.querySelector('[name="exercise-name"]').value=sessionStorage.getItem(w)??"";const m={group:"",item:"",keyWord:""};function V(){d.classList.add("display-none"),T.innerHTML='<h2 class="exercises-title">Exercises</h2>'}function Z(e){x.classList.remove("display-none"),sessionStorage.setItem(w,e.target.value)}async function _(e){e.preventDefault(),x.classList.add("display-none"),m.keyWord=d.querySelector('[name="exercise-name"]').value.trim().toLowerCase().replace(/\s/g,""),d.querySelector('[name="exercise-name"]').value="",sessionStorage.removeItem(w);const{data:t}=await M(m,1);if(t.results.length===0){u.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=q(t),u.innerHTML="",u.appendChild(c),d.classList.remove("display-none"),T.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',N(c,t),t.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin")}async function K(e){if(m.keyWord="",e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;m.group=t.lastElementChild.textContent,m.item=t.firstChild.textContent;const{data:s}=await M(m);if(!s.results){u.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=q(s),u.innerHTML="",u.appendChild(c),d.classList.remove("display-none"),T.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',N(c,s),s.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin")}async function M({group:e,item:t,keyWord:s},o=1){let i=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return s===""?await f.get(`${A}?${e.toLowerCase()}=${t.toLowerCase()}&page=${o}&limit=${i}`):await f.get(`${A}?${e.toLowerCase()}=${t.toLowerCase()}&keyword=${s}&page=${o}&limit=${i}`)}catch(r){window.alert("something goes wrong"),console.log(r)}}function q({results:e}){return e.map(({bodyPart:t,rating:s,name:o,target:i,burnedCalories:r,time:a,_id:n})=>`<li class=exercises-serch-result>
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
            <h2>${o[0].toUpperCase()+o.slice(1)}</h2>
        </div>
        <div class="additional-information">
            <p class=>Burned calories: <span class="info-from-back">${r} / ${a} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${i[0].toUpperCase()+i.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function N(e,{totalPages:t},s=0,o=7){if(t===1)return;const i=document.createElement("ul");i.classList.add("pagination-counter"),i.addEventListener("click",G);let r;s==1?r=Number(s)-1:s==2?r=Number(s)-2:Number(s)===3?r=Number(s)-3:Number(s)>3?r=Number(s)-4:r=Number(s);let a=0;for(let n=r;n<o+Number(s);n++){a+=1;const l=document.createElement("li");if(l.textContent=n+1,l.classList.add("one-count"),i.append(l),(n+1==s||s===0&&n===0)&&l.classList.add("active-count"),n+1===t)break;if(a===7)break}e.after(i),e.classList.add("exercises-margin-for-pagin")}async function G(e){if(e.target.nodeName==="UL")return;const{data:t}=await M(m,e.target.textContent);c.innerHTML=q(t),u.innerHTML="",u.appendChild(c),N(c,t,e.target.textContent)}const Q=localStorage.getItem("active-category"),k=document.getElementById(Q),O=document.querySelectorAll(".choose-category-button"),h=document.querySelector(".placeholder-container"),X="https://energyflow.b.goit.study/api/filters";let E=1,U=null;function L(e,t){function s(){U=window.innerWidth<768?8:12}return s(),f.get(`${X}?filter=${e}&page=${t}&limit=${U}`).then(o=>o.data.results.length?o.data:(console.error("No results found for this filter."),null)).catch(o=>{console.error("Error fetching images:",o)})}function P({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function b(e){if(e){let t="";e.results.forEach(o=>{t+=P(o)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,h.innerHTML="",h.appendChild(s),h.insertAdjacentHTML("beforeend","<div id='pagination' class='tui-pagination'></div>")}else h.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}O.forEach(e=>{e.addEventListener("click",async()=>{V(),O.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;L(t,E).then(s=>{b(s),S(s)})})});k?(k.classList.add("active-category"),L(k.innerText,E).then(e=>{b(e),S(e)})):(document.getElementById("muscles").classList.add("active-category"),L("Muscles",E).then(t=>{b(t),S(t)}));function S({page:e,results:t,totalPages:s}){const o=document.querySelector("#pagination");for(let r=1;r<=s;r++){const a=document.createElement("a");a.href="#",r==e?a.classList.add("tui-page-btn","tui-is-selected"):a.classList.add("tui-page-btn"),a.textContent=r,a.addEventListener("click",n=>{const l=n.target.textContent;L(t[0].filter,l).then(p=>{b(p),S(p)})}),o.appendChild(a)}const i=document.querySelectorAll(".tui-page-btn");i.forEach(r=>{r.addEventListener("click",a=>{a.preventDefault(),i.forEach(n=>{n.classList.remove("tui-is-selected")}),r.classList.add("tui-is-selected")})})}const ee=document.querySelector("[data-exercise-modal-open]"),te=document.querySelector("[data-exercise-modal-close]"),v=document.querySelector("[data-exercise-modal]"),$=document.querySelector(".exercises-modal"),W=document.querySelector(".exercises-modal-content"),g="exerciseItems",D="64f389465ae26083f39b17a2";ee.addEventListener("click",()=>{W.innerHTML="",v.classList.add("is-open"),oe(),de()});async function se(){return f.defaults.baseURL="https://energyflow.b.goit.study",await f.get(`/api/exercises/${D}`)}async function oe(){try{const t=(await se()).data;re(t),ie(t)}catch(e){F(e)}}function re(e){const{bodyPart:t,burnedCalories:s,description:o,equipmen:i,gifUrl:r,name:a,popularity:n,rating:l,target:p,time:j}=e;let H=l.toFixed(1);const z=`
  <div class="exercises-modal-gif-container">
    <img src="${r}" alt="${a}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${a}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${H}</p>
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
              <p class="exercises-modal-block-paragraf">${p}</p>
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
              <p class="exercises-modal-block-paragraf lowercase-text">${s}/${j} min</p>
          </li>
      </ul>
      <div class="exercises-modal-container-text">
      <p class="exercises-modal-text">${o}</p>
      </div>
      <div class="exercises-modal-buttons">
        <button class="exercises-modal-button-favorites " type="button">
          Add to favorites
          <svg class="exercises-modal-button-icon">
            <use href="./img/sprite.svg#icon-heart"></use>
          </svg>
      </button>
      <button class="exercises-modal-button-remove hidden-button" type="button">
        Remove from
        <svg class="exercises-modal-button-icon">
          <use href="./img/sprite.svg#icon-heart"></use>
        </svg>
      </button>
          <button class="exercises-modal-button-rating hidden-button" type="button">Give a rating</button>
      </div>
  </div>
  `;W.insertAdjacentHTML("beforeend",z),ae(H)}function ae(e){const s=[...$.querySelectorAll(".exercises-modal-star-icon")];for(let o=0;o<=e;o+=1)s[o].classList.add("selected-stars")}function F(e){console.log(e);const t=e.name,s=e.message;R.error({position:"topRight",message:`${t}: ${s}.`})}function ie(e){ne(e),ce()}function ne(e){document.querySelector(".exercises-modal-button-favorites").addEventListener("click",()=>{if(localStorage.getItem(g)){const s=JSON.parse(localStorage.getItem(g)).push(e);console.log(s),C(s)}localStorage.getItem(g)||C([e]),Y()})}function ce(){document.querySelector(".exercises-modal-button-remove").addEventListener("click",()=>{localStorage.getItem(g)&&JSON.parse(localStorage.getItem(g)).length!==0&&le(),Y()})}function C(e){console.log(e);try{localStorage.setItem(g,JSON.stringify(e))}catch(t){console.log(t),F(t)}}function le(){try{let e=localStorage.getItem(g);const t=JSON.parse(e);if(t.length!==0){const s=t.find(o=>o._id===D);t.splice(t.indexOf(s),1),C(t)}else return}catch(e){console.log(e),F(e)}}function Y(){const e=$.querySelector(".exercises-modal-button-favorites"),t=$.querySelector(".exercises-modal-button-remove");e.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function de(){document.addEventListener("keydown",s),te.addEventListener("click",e),v.addEventListener("click",t);function e(){v.classList.remove("is-open")}function t(o){o.target.hasAttribute("data-exercise-modal")&&e()}function s(o){o.code==="Escape"&&(v.classList.remove("is-open"),document.removeEventListener("keydown",s))}}f.defaults.baseURL="https://energyflow.b.goit.study/api";const B={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};B.form.addEventListener("submit",ue);async function ue(e){e.preventDefault();const t=B.form.email.value.trim();try{if(!t){y("Oooops! You forgot to enter the email! 🫣");return}if(!ge(t))return;const s=await me(t);y("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&y("Sorry! This email has already been declarated!")}finally{B.form.reset()}}async function me(e){return(await f.post("subscription",{email:e})).data}function ge(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(y("Please, enter the correct email!"),!1)}function y(e){R.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.8)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}const I=document.querySelector(".up-btn");I.addEventListener("click",pe);window.onscroll=function(){fe()};function fe(){window.scrollY>1?he():ve()}function pe(){document.documentElement.scrollTop=0}function he(){I.classList.remove("is-hidden")}function ve(){I.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
