import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as u,i as U}from"./assets/vendor-8cce9181.js";let _=document.querySelector(".quote-text"),j=document.querySelector(".quote-author");u.defaults.baseURL="https://energyflow.b.goit.study/api";async function R(){return await u.get("quote").then(({data:e})=>e).then(e=>{const t={};t.data=new Date,localStorage.setItem("data",JSON.stringify(e+t.data)),_.textContent=e.quote,j.textContent=e.author})}const z=localStorage.getItem("data"),V=JSON.parse(z);console.log(V);const Z=localStorage.getItem("data"),K=new Date;Z!==K&&(localStorage.removeItem("data"),R());R().then();let H;const G=document.querySelector("[data-exercise-modal-close]"),y=document.querySelector("[data-exercise-modal]"),$=document.querySelector(".exercises-modal"),W=document.querySelector(".exercises-modal-content"),f="exerciseItems";let D;function B(){H=document.querySelectorAll("[data-exercise-modal-open]"),H.forEach(e=>{e.addEventListener("click",()=>{D=event.target.dataset.id,W.innerHTML="",y.classList.add("is-open"),X(),ae()})})}async function Q(){return u.defaults.baseURL="https://energyflow.b.goit.study",await u.get(`/api/exercises/${D}`)}async function X(){try{const t=(await Q()).data;P(t),se(t)}catch(e){te(e)}}function P({bodyPart:e,burnedCalories:t,description:s,equipmen:o,gifUrl:i,name:a,popularity:r,rating:n,target:l,time:p}){let J=n.toFixed(1);const Y=`
  <div class="exercises-modal-gif-container">
    <img src="${i}" alt="${a}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${a}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${J}</p>
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
              <p class="exercises-modal-block-paragraf">${l}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Body Part</h5>
              <p class="exercises-modal-block-paragraf">${e}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Equipment</h5>
              <p class="exercises-modal-block-paragraf">${o}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Popular</h5>
              <p class="exercises-modal-block-paragraf">${r}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${t}/${p} min</p>
          </li>
      </ul>
      <div class="exercises-modal-container-text">
      <p class="exercises-modal-text">${s}</p>
      </div>
      <div class="exercises-modal-buttons">
        <button class="exercises-modal-button-favorites" type="button">
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
  `;W.insertAdjacentHTML("beforeend",Y),ee(Math.round(n))}function ee(e){const s=[...$.querySelectorAll(".exercises-modal-star-icon")];for(let o=0;o<e;o+=1)s[o].classList.add("selected-stars")}function te(e){console.log(e);const t=e.name,s=e.message;U.error({position:"topRight",message:`${t}: ${s}.`})}function se(e){const t=document.querySelector(".exercises-modal-button-favorites"),s=document.querySelector(".exercises-modal-button-remove");localStorage.getItem(f)!==null&&JSON.parse(localStorage.getItem(f)).find(r=>r._id===e._id)?(E(),s.addEventListener("click",i)):t.addEventListener("click",o),t.addEventListener("click",o),s.addEventListener("click",i);function o(){const a=JSON.parse(localStorage.getItem(f))||[];a.push(e),localStorage.setItem(f,JSON.stringify(a)),E()}function i(){const a=JSON.parse(localStorage.getItem(f)),r=a.find(n=>n._id===e._id);console.log(r),a.splice(a.indexOf(r),1),localStorage.setItem(f,JSON.stringify(a)),E()}}function E(){const e=$.querySelector(".exercises-modal-button-favorites"),t=$.querySelector(".exercises-modal-button-remove");e.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function ae(){document.addEventListener("keydown",s),G.addEventListener("click",e),y.addEventListener("click",t);function e(){y.classList.remove("is-open")}function t(o){o.target.hasAttribute("data-exercise-modal")&&e()}function s(o){o.code==="Escape"&&(y.classList.remove("is-open"),document.removeEventListener("keydown",s))}}const O="https://energyflow.b.goit.study/api/exercises",S="formValusForSearch",T=document.querySelector(".title-container"),oe=document.querySelector(".placeholder-container"),m=document.querySelector(".placeholder-container"),d=document.querySelector(".training-search-form"),c=document.createElement("ul"),x=document.querySelector(".cansel-button-ex");x.addEventListener("click",()=>{x.classList.add("display-none"),d.firstElementChild.value="",sessionStorage.removeItem(S)});c.classList.add("search-result-list");oe.addEventListener("click",ce);d.addEventListener("submit",ne);d.addEventListener("input",re);d.querySelector('[name="exercise-name"]').value=sessionStorage.getItem(S)??"";const g={group:"",item:"",keyWord:""};function ie(){d.classList.add("display-none"),T.innerHTML='<h2 class="exercises-title">Exercises</h2>'}function re(e){x.classList.remove("display-none"),sessionStorage.setItem(S,e.target.value)}async function ne(e){e.preventDefault(),x.classList.add("display-none"),g.keyWord=d.querySelector('[name="exercise-name"]').value.trim().toLowerCase().replace(/\s/g,""),d.querySelector('[name="exercise-name"]').value="",sessionStorage.removeItem(S);const{data:t}=await M(g,1);if(t.results.length===0){m.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=I(t),m.innerHTML="",m.appendChild(c),d.classList.remove("display-none"),T.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',N(c,t),t.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin"),B()}async function ce(e){if(g.keyWord="",e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;g.group=t.lastElementChild.textContent,g.item=t.firstChild.textContent;const{data:s}=await M(g);if(!s.results){m.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=I(s),m.innerHTML="",m.appendChild(c),d.classList.remove("display-none"),T.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',N(c,s),s.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin"),B()}async function M({group:e,item:t,keyWord:s},o=1){let i=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return s===""?await u.get(`${O}?${e.toLowerCase()}=${t.toLowerCase()}&page=${o}&limit=${i}`):await u.get(`${O}?${e.toLowerCase()}=${t.toLowerCase()}&keyword=${s}&page=${o}&limit=${i}`)}catch(a){window.alert("something goes wrong"),console.log(a)}}function I({results:e}){return e.map(({bodyPart:t,rating:s,name:o,target:i,burnedCalories:a,time:r,_id:n})=>`<li class=exercises-serch-result>
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
            <p class=>Burned calories: <span class="info-from-back">${a} / ${r} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${i[0].toUpperCase()+i.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function N(e,{totalPages:t},s=0,o=7){if(t===1)return;const i=document.createElement("ul");i.classList.add("pagination-counter"),i.addEventListener("click",le);let a;s==1?a=Number(s)-1:s==2?a=Number(s)-2:Number(s)===3?a=Number(s)-3:Number(s)>3?a=Number(s)-4:a=Number(s);let r=0;for(let n=a;n<o+Number(s);n++){r+=1;const l=document.createElement("li");if(l.textContent=n+1,l.classList.add("one-count"),i.append(l),(n+1==s||s===0&&n===0)&&l.classList.add("active-count"),n+1===t)break;if(r===7)break}e.after(i),e.classList.add("exercises-margin-for-pagin")}async function le(e){if(e.target.nodeName==="UL")return;const{data:t}=await M(g,e.target.textContent);c.innerHTML=I(t),m.innerHTML="",m.appendChild(c),N(c,t,e.target.textContent),B()}const de=localStorage.getItem("active-category"),k=document.getElementById(de),A=document.querySelectorAll(".choose-category-button"),h=document.querySelector(".placeholder-container"),ue="https://energyflow.b.goit.study/api/filters";let C=1;async function L(e,t){function s(){return window.innerWidth<768?8:12}try{const o=s(),i=await u.get(`${ue}?filter=${e}&page=${t}&limit=${o}`);return i.data.results.length?i.data:(console.error("No results found for this filter."),null)}catch(o){console.error("Error fetching images:",o)}}function me({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function b(e){if(e){let t="";e.results.forEach(o=>{t+=me(o)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,h.innerHTML="",h.appendChild(s),h.insertAdjacentHTML("beforeend","<div id='pagination' class='tui-pagination'></div>")}else h.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}A.forEach(e=>{e.addEventListener("click",async()=>{ie(),A.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;(async()=>{const s=await L(t,C);s&&(b(s),w(s))})()})});k?(k.classList.add("active-category"),(async()=>{const e=await L(k.innerText,C);e&&(b(e),w(e))})()):(document.getElementById("muscles").classList.add("active-category"),(async()=>{const t=await L("Muscles",C);t&&(b(t),w(t))})());function w({page:e,results:t,totalPages:s}){const o=document.querySelector("#pagination");for(let a=1;a<=s;a++){const r=document.createElement("a");r.href="#",a==e?r.classList.add("tui-page-btn","tui-is-selected"):r.classList.add("tui-page-btn"),r.textContent=a,r.addEventListener("click",n=>{const l=n.target.textContent;(async()=>{const p=await L(t[0].filter,l);p&&(b(p),w(p))})()}),o.appendChild(r)}const i=document.querySelectorAll(".tui-page-btn");i.forEach(a=>{a.addEventListener("click",r=>{r.preventDefault(),i.forEach(n=>{n.classList.remove("tui-is-selected")}),a.classList.add("tui-is-selected")})})}u.defaults.baseURL="https://energyflow.b.goit.study/api";const q={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};q.form.addEventListener("submit",ge);async function ge(e){e.preventDefault();const t=q.form.email.value.trim();try{if(!t){v("Oooops! You forgot to enter the email! 🫣");return}if(!pe(t))return;const s=await fe(t);v("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&v("Sorry! This email has already been declarated!")}finally{q.form.reset()}}async function fe(e){return(await u.post("subscription",{email:e})).data}function pe(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(v("Please, enter the correct email!"),!1)}function v(e){U.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.8)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}const F=document.querySelector(".up-btn");F.addEventListener("click",ye);window.onscroll=function(){he()};function he(){window.scrollY>1?ve():xe()}function ye(){document.documentElement.scrollTop=0}function ve(){F.classList.remove("is-hidden")}function xe(){F.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
