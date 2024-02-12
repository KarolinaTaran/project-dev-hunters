import"./assets/modal-menu-79888197.js";import{a as u,i as U}from"./assets/vendor-8cce9181.js";let J=document.querySelector(".quote-text"),j=document.querySelector(".quote-author");u.defaults.baseURL="https://energyflow.b.goit.study/api";const O=new Date;if(localStorage.key!=="info")H("quote");else if(TimeInStorage!==O)localStorage.removeItem("info"),H("quote");else if(TimeInStorage===O){const e=JSON.parse(localStorage.getItem("info")),t=e.quote,s=e.author;J.textContent=t,j.textContent=s}async function H(e){const t={};t.date=new Date;const s=await u.get(`${e}`),{data:{quote:a,author:r}}=s;t.author=r,t.quote=a,localStorage.setItem("info",JSON.stringify(t));const o=JSON.parse(localStorage.getItem("info"));J.textContent=o.quote,j.textContent=o.author}let F;const X=document.querySelector("[data-exercise-modal-close]"),S=document.querySelector("[data-exercise-modal]"),C=document.querySelector(".exercises-modal"),_=document.querySelector(".exercises-modal-content"),W=document.querySelector(".span-exercises-modal-loader"),f="exerciseItems";let D;function Y(){F=document.querySelectorAll("[data-exercise-modal-open]"),F.forEach(e=>{e.addEventListener("click",t=>{W.classList.add("exercises-modal-loader"),D=t.currentTarget.dataset.id,_.innerHTML="",S.classList.add("is-open"),te(),ne()})})}async function ee(){return u.defaults.baseURL="https://energyflow.b.goit.study",await u.get(`/api/exercises/${D}`)}async function te(){try{const t=(await ee()).data;se(t),re(t)}catch(e){ae(e)}finally{W.classList.remove("exercises-modal-loader")}}function se({bodyPart:e,burnedCalories:t,description:s,equipmen:a,gifUrl:r,name:o,popularity:n,rating:i,target:l,time:v}){let G=i.toFixed(1);const Q=`
  <div class="exercises-modal-gif-container">
    <img src="${r}" alt="${o}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${o}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${G}</p>
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
              <p class="exercises-modal-block-paragraf">${n}</p>
          </li>
          <li class="exercises-modal-block-item">
              <h5 class="exercises-modal-block-title">Burned Calories</h5>
              <p class="exercises-modal-block-paragraf lowercase-text">${t}/${v} min</p>
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
  `;_.insertAdjacentHTML("beforeend",Q),oe(Math.round(i))}function oe(e){const s=[...C.querySelectorAll(".exercises-modal-star-icon")];for(let a=0;a<e;a+=1)s[a].classList.add("selected-stars")}function ae(e){console.log(e);const t=e.name,s=e.message;U.error({position:"topRight",message:`${t}: ${s}.`})}function re(e){const t=document.querySelector(".exercises-modal-button-favorites"),s=document.querySelector(".exercises-modal-button-remove");localStorage.getItem(f)!==null&&JSON.parse(localStorage.getItem(f)).find(n=>n._id===e._id)?($(),s.addEventListener("click",r)):t.addEventListener("click",a),t.addEventListener("click",a),s.addEventListener("click",r);function a(){const o=JSON.parse(localStorage.getItem(f))||[];o.push(e),localStorage.setItem(f,JSON.stringify(o)),$()}function r(){const o=JSON.parse(localStorage.getItem(f)),n=o.find(i=>i._id===e._id);o.splice(o.indexOf(n),1),localStorage.setItem(f,JSON.stringify(o)),$()}}function $(){const e=C.querySelector(".exercises-modal-button-favorites"),t=C.querySelector(".exercises-modal-button-remove");e.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function ne(){document.addEventListener("keydown",s),X.addEventListener("click",e),S.addEventListener("click",t);function e(){S.classList.remove("is-open")}function t(a){a.target.hasAttribute("data-exercise-modal")&&e()}function s(a){a.code==="Escape"&&(S.classList.remove("is-open"),document.removeEventListener("keydown",s))}}const R="https://energyflow.b.goit.study/api/exercises",I="formValusForSearch",z=document.querySelector(".title-container"),ie=document.querySelector(".placeholder-container"),m=document.querySelector(".placeholder-container"),p=document.querySelector(".training-search-form"),d=document.createElement("ul"),b=document.querySelector(".cansel-button-ex"),V=document.querySelector(".exercises-container"),h="sessionResultOfSearch",y="pastSearchParams";let ce=Number(sessionStorage.getItem("activeSearchPage"))??0,c={group:"",item:"",keyWord:""};b.addEventListener("click",()=>{b.classList.add("display-none"),p.firstElementChild.value="",sessionStorage.removeItem(I)});d.classList.add("search-result-list");ie.addEventListener("click",pe);p.addEventListener("submit",ge);p.addEventListener("input",me);p.querySelector('[name="exercise-name"]').value=sessionStorage.getItem(I)??"";function le(){sessionStorage.removeItem(h),sessionStorage.removeItem(y),sessionStorage.removeItem("activeSearchPage")}function Z(){V.classList.add("styles-for-ex-search-results")}function de(){V.classList.remove("styles-for-ex-search-results")}function ue(){p.classList.add("display-none"),z.innerHTML='<h2 class="exercises-title">Exercises</h2>'}function me(e){b.classList.remove("display-none"),sessionStorage.setItem(I,e.target.value)}async function ge(e){e.preventDefault(),b.classList.add("display-none"),c.keyWord=p.querySelector('[name="exercise-name"]').value.trim().toLowerCase().replace(/\s/g,""),p.querySelector('[name="exercise-name"]').value="",sessionStorage.removeItem(I),m.innerHTML='<p><span class="exercises-modal-loader"></span></p>';const{data:t}=await M(c,1);if(t.results.length===0){m.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}sessionStorage.setItem(h,JSON.stringify(t)),sessionStorage.setItem(y,JSON.stringify(c)),N(t,c)}async function pe(e){if(c.keyWord="",e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;c.group=t.lastElementChild.textContent,c.item=t.firstChild.textContent,m.innerHTML='<p><span class="exercises-modal-loader"></span></p>';const{data:s}=await M(c);if(!s.results){m.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}sessionStorage.setItem(h,JSON.stringify(s)),sessionStorage.setItem(y,JSON.stringify(c)),N(s,c)}async function M({group:e,item:t,keyWord:s},a=1){let r=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return s===""?await u.get(`${R}?${e.toLowerCase()}=${t.toLowerCase()}&page=${a}&limit=${r}`):await u.get(`${R}?${e.toLowerCase()}=${t.toLowerCase()}&keyword=${s}&page=${a}&limit=${r}`)}catch(o){window.alert("something goes wrong"),console.log(o)}}function K({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:r,burnedCalories:o,time:n,_id:i})=>`<li class=exercises-serch-result>
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
            <p class=>Burned calories: <span class="info-from-back">${o} / ${n} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${r[0].toUpperCase()+r.slice(1)}</span></p>
        </div>
     
          </li>`).join("")}function P(e,{totalPages:t},s=0,a=7){if(t===1)return;const r=document.createElement("ul");r.classList.add("pagination-counter"),r.addEventListener("click",fe);let o;s==1?o=Number(s)-1:s==2?o=Number(s)-2:Number(s)==3?o=Number(s)-3:Number(s)>3?o=Number(s)-4:o=Number(s);let n=0;for(let i=o;i<a+Number(s);i++){n+=1;const l=document.createElement("li");if(l.textContent=i+1,l.classList.add("one-count"),r.append(l),(i+1==s||s===0&&i===0)&&l.classList.add("active-count"),i+1===t)break;if(n===7)break;sessionStorage.setItem("activeSearchPage",s)}e.after(r),e.classList.add("exercises-margin-for-pagin")}async function fe(e){if(e.target.nodeName==="UL")return;c.group===""&&(c={...JSON.parse(sessionStorage.getItem(y))}),m.innerHTML='<p><span class="exercises-modal-loader"></span></p>';const{data:t}=await M(c,e.target.textContent);he(t,e)}function he(e,t){d.innerHTML=K(e),m.innerHTML="",m.appendChild(d),P(d,e,t.target.textContent),Z(),Y()}function N(e,t,s){d.innerHTML=K(e),m.innerHTML="",m.appendChild(d),p.classList.remove("display-none"),z.innerHTML=`<h2 class="exercises-title">Exercises /</h2><p>${t.item[0].toUpperCase()+t.item.slice(1,t.item.length)}</p>`,P(d,e,s),e.totalPages>1?d.classList.add("additional-margin"):d.classList.remove("additional-margin"),Z(),Y()}function ve(){const e=JSON.parse(sessionStorage.getItem(h));if(e===null)return;const t=JSON.parse(sessionStorage.getItem(y));N(e,t,ce)}const ye=localStorage.getItem("active-category"),x=document.getElementById(ye),A=document.querySelectorAll(".choose-category-button"),g=document.querySelector(".placeholder-container"),xe="https://energyflow.b.goit.study/api/filters";let q=1;async function w(e,t){function s(){return window.innerWidth<768?8:12}try{const a=s(),r=await u.get(`${xe}?filter=${e}&page=${t}&limit=${a}`);return r.data.results.length?r.data:(console.error("No results found for this filter."),null)}catch(a){console.error("Error fetching images:",a)}}function Se({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function E(e){if(e){let t="";e.results.forEach(a=>{t+=Se(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,g.innerHTML="",g.appendChild(s),g.insertAdjacentHTML("beforeend","<div id='pagination' class='tui-pagination'></div>")}else g.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}A.forEach(e=>{e.addEventListener("click",async()=>{ue(),de(),le(),A.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;g.innerHTML='<p><span class="exercises-modal-loader"></span></p>',(async()=>{const s=await w(t,q);s&&(E(s),k(s))})()})});x&&sessionStorage.getItem(h)===null?(x.classList.add("active-category"),g.innerHTML='<p><span class="exercises-modal-loader"></span></p>',(async()=>{const e=await w(x.innerText,q);e&&(E(e),k(e))})()):sessionStorage.getItem(h)!==null?(x.classList.add("active-category"),ve()):(document.getElementById("muscles").classList.add("active-category"),g.innerHTML='<p><span class="exercises-modal-loader"></span></p>',(async()=>{const t=await w("Muscles",q);t&&(E(t),k(t))})());function k({page:e,results:t,totalPages:s}){const a=document.querySelector("#pagination");for(let o=1;o<=s;o++){const n=document.createElement("a");n.href="#",o==e?n.classList.add("tui-page-btn","tui-is-selected"):n.classList.add("tui-page-btn"),n.textContent=o,n.addEventListener("click",i=>{const l=i.target.textContent;g.innerHTML='<p><span class="exercises-modal-loader"></span></p>',(async()=>{const v=await w(t[0].filter,l);v&&(E(v),k(v))})()}),a.appendChild(n)}const r=document.querySelectorAll(".tui-page-btn");r.forEach(o=>{o.addEventListener("click",n=>{n.preventDefault(),r.forEach(i=>{i.classList.remove("tui-is-selected")}),o.classList.add("tui-is-selected")})})}u.defaults.baseURL="https://energyflow.b.goit.study/api";const T={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};T.form.addEventListener("submit",Le);async function Le(e){e.preventDefault();const t=T.form.email.value.trim();try{if(!t){L("Oooops! You forgot to enter the email! 🫣");return}if(!we(t))return;const s=await be(t);L("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&L("Sorry! This email has already been declarated!")}finally{T.form.reset()}}async function be(e){return(await u.post("subscription",{email:e})).data}function we(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(L("Please, enter the correct email!"),!1)}function L(e){U.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.9)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}const B=document.querySelector(".up-btn");B.addEventListener("click",ke);window.onscroll=function(){Ee()};function Ee(){window.scrollY>1?Ie():$e()}function ke(){document.documentElement.scrollTop=0}function Ie(){B.classList.remove("is-hidden")}function $e(){B.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
