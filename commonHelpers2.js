import"./assets/modulepreload-polyfill-3cfb730f.js";import{a as u,i as W}from"./assets/vendor-8cce9181.js";let D=document.querySelector(".quote-text"),J=document.querySelector(".quote-author");u.defaults.baseURL="https://energyflow.b.goit.study/api";const O=new Date;if(localStorage.key!=="info")H("quote");else if(TimeInStorage!==O)localStorage.removeItem("info"),H("quote");else if(TimeInStorage===O){const e=JSON.parse(localStorage.getItem("info")),t=e.quote,s=e.author;D.textContent=t,J.textContent=s}async function H(e){const t={};t.date=new Date;const s=await u.get(`${e}`),{data:{quote:a,author:i}}=s;t.author=i,t.quote=a,localStorage.setItem("info",JSON.stringify(t));const o=JSON.parse(localStorage.getItem("info"));D.textContent=o.quote,J.textContent=o.author}let A;const V=document.querySelector("[data-exercise-modal-close]"),y=document.querySelector("[data-exercise-modal]"),$=document.querySelector(".exercises-modal"),Y=document.querySelector(".exercises-modal-content"),f="exerciseItems";let _;function B(){A=document.querySelectorAll("[data-exercise-modal-open]"),A.forEach(e=>{e.addEventListener("click",()=>{_=event.target.dataset.id,Y.innerHTML="",y.classList.add("is-open"),K(),ee()})})}async function Z(){return u.defaults.baseURL="https://energyflow.b.goit.study",await u.get(`/api/exercises/${_}`)}async function K(){try{const t=(await Z()).data;G(t),P(t)}catch(e){X(e)}}function G({bodyPart:e,burnedCalories:t,description:s,equipmen:a,gifUrl:i,name:o,popularity:r,rating:n,target:l,time:p}){let j=n.toFixed(1);const z=`
  <div class="exercises-modal-gif-container">
    <img src="${i}" alt="${o}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${o}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${j}</p>
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
              <p class="exercises-modal-block-paragraf">${a}</p>
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
  `;Y.insertAdjacentHTML("beforeend",z),Q(Math.round(n))}function Q(e){const s=[...$.querySelectorAll(".exercises-modal-star-icon")];for(let a=0;a<e;a+=1)s[a].classList.add("selected-stars")}function X(e){console.log(e);const t=e.name,s=e.message;W.error({position:"topRight",message:`${t}: ${s}.`})}function P(e){const t=document.querySelector(".exercises-modal-button-favorites"),s=document.querySelector(".exercises-modal-button-remove");localStorage.getItem(f)!==null&&JSON.parse(localStorage.getItem(f)).find(r=>r._id===e._id)?(E(),s.addEventListener("click",i)):t.addEventListener("click",a),t.addEventListener("click",a),s.addEventListener("click",i);function a(){const o=JSON.parse(localStorage.getItem(f))||[];o.push(e),localStorage.setItem(f,JSON.stringify(o)),E()}function i(){const o=JSON.parse(localStorage.getItem(f)),r=o.find(n=>n._id===e._id);console.log(r),o.splice(o.indexOf(r),1),localStorage.setItem(f,JSON.stringify(o)),E()}}function E(){const e=$.querySelector(".exercises-modal-button-favorites"),t=$.querySelector(".exercises-modal-button-remove");e.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function ee(){document.addEventListener("keydown",s),V.addEventListener("click",e),y.addEventListener("click",t);function e(){y.classList.remove("is-open")}function t(a){a.target.hasAttribute("data-exercise-modal")&&e()}function s(a){a.code==="Escape"&&(y.classList.remove("is-open"),document.removeEventListener("keydown",s))}}const U="https://energyflow.b.goit.study/api/exercises",w="formValusForSearch",T=document.querySelector(".title-container"),te=document.querySelector(".placeholder-container"),m=document.querySelector(".placeholder-container"),d=document.querySelector(".training-search-form"),c=document.createElement("ul"),x=document.querySelector(".cansel-button-ex");x.addEventListener("click",()=>{x.classList.add("display-none"),d.firstElementChild.value="",sessionStorage.removeItem(w)});c.classList.add("search-result-list");te.addEventListener("click",ie);d.addEventListener("submit",ae);d.addEventListener("input",oe);d.querySelector('[name="exercise-name"]').value=sessionStorage.getItem(w)??"";const g={group:"",item:"",keyWord:""};function se(){d.classList.add("display-none"),T.innerHTML='<h2 class="exercises-title">Exercises</h2>'}function oe(e){x.classList.remove("display-none"),sessionStorage.setItem(w,e.target.value)}async function ae(e){e.preventDefault(),x.classList.add("display-none"),g.keyWord=d.querySelector('[name="exercise-name"]').value.trim().toLowerCase().replace(/\s/g,""),d.querySelector('[name="exercise-name"]').value="",sessionStorage.removeItem(w);const{data:t}=await I(g,1);if(t.results.length===0){m.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=M(t),m.innerHTML="",m.appendChild(c),d.classList.remove("display-none"),T.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',N(c,t),t.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin"),B()}async function ie(e){if(g.keyWord="",e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;g.group=t.lastElementChild.textContent,g.item=t.firstChild.textContent;const{data:s}=await I(g);if(!s.results){m.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=M(s),m.innerHTML="",m.appendChild(c),d.classList.remove("display-none"),T.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',N(c,s),s.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin"),B()}async function I({group:e,item:t,keyWord:s},a=1){let i=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return s===""?await u.get(`${U}?${e.toLowerCase()}=${t.toLowerCase()}&page=${a}&limit=${i}`):await u.get(`${U}?${e.toLowerCase()}=${t.toLowerCase()}&keyword=${s}&page=${a}&limit=${i}`)}catch(o){window.alert("something goes wrong"),console.log(o)}}function M({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:i,burnedCalories:o,time:r,_id:n})=>`<li class=exercises-serch-result>
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
            <p class=>Burned calories: <span class="info-from-back">${o} / ${r} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${i[0].toUpperCase()+i.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function N(e,{totalPages:t},s=0,a=7){if(t===1)return;const i=document.createElement("ul");i.classList.add("pagination-counter"),i.addEventListener("click",re);let o;s==1?o=Number(s)-1:s==2?o=Number(s)-2:Number(s)===3?o=Number(s)-3:Number(s)>3?o=Number(s)-4:o=Number(s);let r=0;for(let n=o;n<a+Number(s);n++){r+=1;const l=document.createElement("li");if(l.textContent=n+1,l.classList.add("one-count"),i.append(l),(n+1==s||s===0&&n===0)&&l.classList.add("active-count"),n+1===t)break;if(r===7)break}e.after(i),e.classList.add("exercises-margin-for-pagin")}async function re(e){if(e.target.nodeName==="UL")return;const{data:t}=await I(g,e.target.textContent);c.innerHTML=M(t),m.innerHTML="",m.appendChild(c),N(c,t,e.target.textContent),B()}const ne=localStorage.getItem("active-category"),k=document.getElementById(ne),R=document.querySelectorAll(".choose-category-button"),h=document.querySelector(".placeholder-container"),ce="https://energyflow.b.goit.study/api/filters";let C=1;async function L(e,t){function s(){return window.innerWidth<768?8:12}try{const a=s(),i=await u.get(`${ce}?filter=${e}&page=${t}&limit=${a}`);return i.data.results.length?i.data:(console.error("No results found for this filter."),null)}catch(a){console.error("Error fetching images:",a)}}function le({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function b(e){if(e){let t="";e.results.forEach(a=>{t+=le(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,h.innerHTML="",h.appendChild(s),h.insertAdjacentHTML("beforeend","<div id='pagination' class='tui-pagination'></div>")}else h.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}R.forEach(e=>{e.addEventListener("click",async()=>{se(),R.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;(async()=>{const s=await L(t,C);s&&(b(s),S(s))})()})});k?(k.classList.add("active-category"),(async()=>{const e=await L(k.innerText,C);e&&(b(e),S(e))})()):(document.getElementById("muscles").classList.add("active-category"),(async()=>{const t=await L("Muscles",C);t&&(b(t),S(t))})());function S({page:e,results:t,totalPages:s}){const a=document.querySelector("#pagination");for(let o=1;o<=s;o++){const r=document.createElement("a");r.href="#",o==e?r.classList.add("tui-page-btn","tui-is-selected"):r.classList.add("tui-page-btn"),r.textContent=o,r.addEventListener("click",n=>{const l=n.target.textContent;(async()=>{const p=await L(t[0].filter,l);p&&(b(p),S(p))})()}),a.appendChild(r)}const i=document.querySelectorAll(".tui-page-btn");i.forEach(o=>{o.addEventListener("click",r=>{r.preventDefault(),i.forEach(n=>{n.classList.remove("tui-is-selected")}),o.classList.add("tui-is-selected")})})}u.defaults.baseURL="https://energyflow.b.goit.study/api";const q={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};q.form.addEventListener("submit",de);async function de(e){e.preventDefault();const t=q.form.email.value.trim();try{if(!t){v("Oooops! You forgot to enter the email! 🫣");return}if(!me(t))return;const s=await ue(t);v("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&v("Sorry! This email has already been declarated!")}finally{q.form.reset()}}async function ue(e){return(await u.post("subscription",{email:e})).data}function me(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(v("Please, enter the correct email!"),!1)}function v(e){W.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.8)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}const F=document.querySelector(".up-btn");F.addEventListener("click",fe);window.onscroll=function(){ge()};function ge(){window.scrollY>1?pe():he()}function fe(){document.documentElement.scrollTop=0}function pe(){F.classList.remove("is-hidden")}function he(){F.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
