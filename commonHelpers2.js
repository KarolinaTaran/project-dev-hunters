import"./assets/modal-menu-cd2320c3.js";import{a as u,i as j}from"./assets/vendor-8cce9181.js";let W=document.querySelector(".quote-text"),D=document.querySelector(".quote-author");u.defaults.baseURL="https://energyflow.b.goit.study/api";const F=new Date;if(localStorage.key!=="info")H("quote");else if(TimeInStorage!==F)localStorage.removeItem("info"),H("quote");else if(TimeInStorage===F){const e=JSON.parse(localStorage.getItem("info")),t=e.quote,s=e.author;W.textContent=t,D.textContent=s}async function H(e){const t={};t.date=new Date;const s=await u.get(`${e}`),{data:{quote:a,author:r}}=s;t.author=r,t.quote=a,localStorage.setItem("info",JSON.stringify(t));const o=JSON.parse(localStorage.getItem("info"));W.textContent=o.quote,D.textContent=o.author}let U;const Z=document.querySelector("[data-exercise-modal-close]"),v=document.querySelector("[data-exercise-modal]"),$=document.querySelector(".exercises-modal"),J=document.querySelector(".exercises-modal-content"),Y=document.querySelector(".span-exercises-modal-loader"),g="exerciseItems";let _;function T(){U=document.querySelectorAll("[data-exercise-modal-open]"),U.forEach(e=>{e.addEventListener("click",t=>{Y.classList.add("exercises-modal-loader"),t.target.nodeName==="BUTTON"&&(_=t.target.dataset.id,J.innerHTML="",v.classList.add("is-open"),G(),te())})})}async function K(){return u.defaults.baseURL="https://energyflow.b.goit.study",await u.get(`/api/exercises/${_}`)}async function G(){try{const t=(await K()).data;Q(t),ee(t)}catch(e){P(e)}finally{Y.classList.remove("exercises-modal-loader")}}function Q({bodyPart:e,burnedCalories:t,description:s,equipmen:a,gifUrl:r,name:o,popularity:i,rating:n,target:l,time:p}){let z=n.toFixed(1);const V=`
  <div class="exercises-modal-gif-container">
    <img src="${r}" alt="${o}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${o}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${z}</p>
          <ul class="exercises-modal-stars-list">
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
                  </svg>
              </li>
              <li class="exercises-modal-star-item">
                  <svg class="exercises-modal-star-icon" width="18" height="18">
                      <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-star"></use>
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
              <p class="exercises-modal-block-paragraf">${i}</p>
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
            <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-heart"></use>
          </svg>
      </button>
      <button class="exercises-modal-button-remove hidden-button" type="button">
        Remove from
        <svg class="exercises-modal-button-icon">
          <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-heart"></use>
        </svg>
      </button>
          <button class="exercises-modal-button-rating hidden-button" type="button">Give a rating</button>
      </div>
  </div>
  `;J.insertAdjacentHTML("beforeend",V),X(Math.round(n))}function X(e){const s=[...$.querySelectorAll(".exercises-modal-star-icon")];for(let a=0;a<e;a+=1)s[a].classList.add("selected-stars")}function P(e){console.log(e);const t=e.name,s=e.message;j.error({position:"topRight",message:`${t}: ${s}.`})}function ee(e){const t=document.querySelector(".exercises-modal-button-favorites"),s=document.querySelector(".exercises-modal-button-remove");localStorage.getItem(g)!==null&&JSON.parse(localStorage.getItem(g)).find(i=>i._id===e._id)?(E(),s.addEventListener("click",r)):t.addEventListener("click",a),t.addEventListener("click",a),s.addEventListener("click",r);function a(){const o=JSON.parse(localStorage.getItem(g))||[];o.push(e),localStorage.setItem(g,JSON.stringify(o)),E()}function r(){const o=JSON.parse(localStorage.getItem(g)),i=o.find(n=>n._id===e._id);o.splice(o.indexOf(i),1),localStorage.setItem(g,JSON.stringify(o)),E()}}function E(){const e=$.querySelector(".exercises-modal-button-favorites"),t=$.querySelector(".exercises-modal-button-remove");e.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function te(){document.addEventListener("keydown",s),Z.addEventListener("click",e),v.addEventListener("click",t);function e(){v.classList.remove("is-open")}function t(a){a.target.hasAttribute("data-exercise-modal")&&e()}function s(a){a.code==="Escape"&&(v.classList.remove("is-open"),document.removeEventListener("keydown",s))}}const A="https://energyflow.b.goit.study/api/exercises",w="formValusForSearch",B=document.querySelector(".title-container"),se=document.querySelector(".placeholder-container"),m=document.querySelector(".placeholder-container"),d=document.querySelector(".training-search-form"),c=document.createElement("ul"),x=document.querySelector(".cansel-button-ex");x.addEventListener("click",()=>{x.classList.add("display-none"),d.firstElementChild.value="",sessionStorage.removeItem(w)});c.classList.add("search-result-list");se.addEventListener("click",ie);d.addEventListener("submit",re);d.addEventListener("input",ae);d.querySelector('[name="exercise-name"]').value=sessionStorage.getItem(w)??"";const f={group:"",item:"",keyWord:""};function oe(){d.classList.add("display-none"),B.innerHTML='<h2 class="exercises-title">Exercises</h2>'}function ae(e){x.classList.remove("display-none"),sessionStorage.setItem(w,e.target.value)}async function re(e){e.preventDefault(),x.classList.add("display-none"),f.keyWord=d.querySelector('[name="exercise-name"]').value.trim().toLowerCase().replace(/\s/g,""),d.querySelector('[name="exercise-name"]').value="",sessionStorage.removeItem(w);const{data:t}=await I(f,1);if(t.results.length===0){m.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=M(t),m.innerHTML="",m.appendChild(c),d.classList.remove("display-none"),B.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',N(c,t),t.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin"),T()}async function ie(e){if(f.keyWord="",e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;f.group=t.lastElementChild.textContent,f.item=t.firstChild.textContent;const{data:s}=await I(f);if(!s.results){m.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=M(s),m.innerHTML="",m.appendChild(c),d.classList.remove("display-none"),B.innerHTML='<h2 class="exercises-title">Exercises /</h2><p>Waist</p>',N(c,s),s.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin"),T()}async function I({group:e,item:t,keyWord:s},a=1){let r=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return s===""?await u.get(`${A}?${e.toLowerCase()}=${t.toLowerCase()}&page=${a}&limit=${r}`):await u.get(`${A}?${e.toLowerCase()}=${t.toLowerCase()}&keyword=${s}&page=${a}&limit=${r}`)}catch(o){window.alert("something goes wrong"),console.log(o)}}function M({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:r,burnedCalories:o,time:i,_id:n})=>`<li class=exercises-serch-result>
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
            <p class=>Burned calories: <span class="info-from-back">${o} / ${i} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${r[0].toUpperCase()+r.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function N(e,{totalPages:t},s=0,a=7){if(t===1)return;const r=document.createElement("ul");r.classList.add("pagination-counter"),r.addEventListener("click",ne);let o;s==1?o=Number(s)-1:s==2?o=Number(s)-2:Number(s)===3?o=Number(s)-3:Number(s)>3?o=Number(s)-4:o=Number(s);let i=0;for(let n=o;n<a+Number(s);n++){i+=1;const l=document.createElement("li");if(l.textContent=n+1,l.classList.add("one-count"),r.append(l),(n+1==s||s===0&&n===0)&&l.classList.add("active-count"),n+1===t)break;if(i===7)break}e.after(r),e.classList.add("exercises-margin-for-pagin")}async function ne(e){if(e.target.nodeName==="UL")return;const{data:t}=await I(f,e.target.textContent);c.innerHTML=M(t),m.innerHTML="",m.appendChild(c),N(c,t,e.target.textContent),T()}const ce=localStorage.getItem("active-category"),k=document.getElementById(ce),R=document.querySelectorAll(".choose-category-button"),h=document.querySelector(".placeholder-container"),le="https://energyflow.b.goit.study/api/filters";let q=1;async function L(e,t){function s(){return window.innerWidth<768?8:12}try{const a=s(),r=await u.get(`${le}?filter=${e}&page=${t}&limit=${a}`);return r.data.results.length?r.data:(console.error("No results found for this filter."),null)}catch(a){console.error("Error fetching images:",a)}}function de({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function b(e){if(e){let t="";e.results.forEach(a=>{t+=de(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,h.innerHTML="",h.appendChild(s),h.insertAdjacentHTML("beforeend","<div id='pagination' class='tui-pagination'></div>")}else h.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}R.forEach(e=>{e.addEventListener("click",async()=>{oe(),R.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;(async()=>{const s=await L(t,q);s&&(b(s),S(s))})()})});k?(k.classList.add("active-category"),(async()=>{const e=await L(k.innerText,q);e&&(b(e),S(e))})()):(document.getElementById("muscles").classList.add("active-category"),(async()=>{const t=await L("Muscles",q);t&&(b(t),S(t))})());function S({page:e,results:t,totalPages:s}){const a=document.querySelector("#pagination");for(let o=1;o<=s;o++){const i=document.createElement("a");i.href="#",o==e?i.classList.add("tui-page-btn","tui-is-selected"):i.classList.add("tui-page-btn"),i.textContent=o,i.addEventListener("click",n=>{const l=n.target.textContent;(async()=>{const p=await L(t[0].filter,l);p&&(b(p),S(p))})()}),a.appendChild(i)}const r=document.querySelectorAll(".tui-page-btn");r.forEach(o=>{o.addEventListener("click",i=>{i.preventDefault(),r.forEach(n=>{n.classList.remove("tui-is-selected")}),o.classList.add("tui-is-selected")})})}u.defaults.baseURL="https://energyflow.b.goit.study/api";const C={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};C.form.addEventListener("submit",ue);async function ue(e){e.preventDefault();const t=C.form.email.value.trim();try{if(!t){y("Oooops! You forgot to enter the email! 🫣");return}if(!fe(t))return;const s=await me(t);y("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&y("Sorry! This email has already been declarated!")}finally{C.form.reset()}}async function me(e){return(await u.post("subscription",{email:e})).data}function fe(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(y("Please, enter the correct email!"),!1)}function y(e){j.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.9)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}const O=document.querySelector(".up-btn");O.addEventListener("click",pe);window.onscroll=function(){ge()};function ge(){window.scrollY>1?he():ve()}function pe(){document.documentElement.scrollTop=0}function he(){O.classList.remove("is-hidden")}function ve(){O.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
