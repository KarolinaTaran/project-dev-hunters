import"./assets/arrow-button-39fffa09.js";import{a as u,i as N}from"./assets/vendor-8cce9181.js";let j=document.querySelector(".quote-text"),W=document.querySelector(".quote-author");u.defaults.baseURL="https://energyflow.b.goit.study/api";const R=new Date;if(localStorage.key!=="info")F("quote");else if(TimeInStorage!==R)localStorage.removeItem("info"),F("quote");else if(TimeInStorage===R){const e=JSON.parse(localStorage.getItem("info")),t=e.quote,s=e.author;j.textContent=t,W.textContent=s}async function F(e){const t={};t.date=new Date;const s=await u.get(`${e}`),{data:{quote:a,author:r}}=s;t.author=r,t.quote=a,localStorage.setItem("info",JSON.stringify(t));const o=JSON.parse(localStorage.getItem("info"));j.textContent=o.quote,W.textContent=o.author}let A;const te=document.querySelector("[data-exercise-modal-close]"),L=document.querySelector("[data-exercise-modal]"),$=document.querySelector(".exercises-modal"),_=document.querySelector(".exercises-modal-content"),D=document.querySelector(".span-exercises-modal-loader");document.querySelector("body");const f="exerciseItems";let Y;function z(){A=document.querySelectorAll("[data-exercise-modal-open]"),A.forEach(e=>{e.addEventListener("click",t=>{v.disabledScroll(),D.classList.add("exercises-modal-loader"),Y=t.currentTarget.dataset.id,_.innerHTML="",L.classList.add("is-open"),oe(),ce()})})}async function se(){return u.defaults.baseURL="https://energyflow.b.goit.study",await u.get(`/api/exercises/${Y}`)}async function oe(){try{const t=(await se()).data;ae(t),ne(t)}catch(e){ie(e)}finally{D.classList.remove("exercises-modal-loader")}}function ae({bodyPart:e,burnedCalories:t,description:s,equipmen:a,gifUrl:r,name:o,popularity:i,rating:n,target:l,time:y}){let Q=n.toFixed(1);const X=`
  <div class="exercises-modal-gif-container">
    <img src="${r}" alt="${o}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${o}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${Q}</p>
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
              <p class="exercises-modal-block-paragraf lowercase-text">${t}/${y} min</p>
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
  `;_.insertAdjacentHTML("beforeend",X),re(Math.round(n));const ee=document.querySelector(".exercises-modal-text"),H=document.querySelector(".exercises-modal-container-text");ee.clientHeight>H.clientHeight&&H.classList.add("exercises-modal-text-scroll")}function re(e){const s=[...$.querySelectorAll(".exercises-modal-star-icon")];for(let a=0;a<e;a+=1)s[a].classList.add("selected-stars")}function ie(e){console.log(e);const t=e.name,s=e.message;N.error({position:"topRight",message:`${t}: ${s}.`})}function ne(e){const t=document.querySelector(".exercises-modal-button-favorites"),s=document.querySelector(".exercises-modal-button-remove");localStorage.getItem(f)!==null&&JSON.parse(localStorage.getItem(f)).find(i=>i._id===e._id)?(I(),s.addEventListener("click",r)):t.addEventListener("click",a),t.addEventListener("click",a),s.addEventListener("click",r);function a(){const o=JSON.parse(localStorage.getItem(f))||[];o.push(e),localStorage.setItem(f,JSON.stringify(o)),I()}function r(){const o=JSON.parse(localStorage.getItem(f)),i=o.find(n=>n._id===e._id);o.splice(o.indexOf(i),1),localStorage.setItem(f,JSON.stringify(o)),I()}}function I(){const e=$.querySelector(".exercises-modal-button-favorites"),t=$.querySelector(".exercises-modal-button-remove");e.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function ce(){document.addEventListener("keydown",s),te.addEventListener("click",e),L.addEventListener("click",t);function e(){L.classList.remove("is-open"),v.enabledScroll()}function t(a){a.target.hasAttribute("data-exercise-modal")&&e()}function s(a){a.code==="Escape"&&(L.classList.remove("is-open"),document.removeEventListener("keydown",s))}}const v={scrollPosition:0,disabledScroll(){v.scrollPosition=window.scrollY,document.body.style.cssText=`
      owerflow: hidden;
      position: fixed;
      top: -${v.scrollPosition}px;
      width: 100%;
      height: 100%;
  
    `,document.documentElement.style.scrollBehavior="unset"},enabledScroll(){document.body.style.cssText="",window.scroll({top:v.scrollPosition}),document.documentElement.style.scrollBehavior=""}},J="https://energyflow.b.goit.study/api/exercises",C="formValusForSearch",P=document.querySelector(".title-container"),le=document.querySelector(".placeholder-container"),m=document.querySelector(".placeholder-container"),p=document.querySelector(".training-search-form"),d=document.createElement("ul"),b=document.querySelector(".cansel-button-ex"),V=document.querySelector(".exercises-container"),h="sessionResultOfSearch",x="pastSearchParams";let de=Number(sessionStorage.getItem("activeSearchPage"))??0,c={group:"",item:"",keyWord:""};b.addEventListener("click",()=>{b.classList.add("display-none"),p.firstElementChild.value="",sessionStorage.removeItem(C)});d.classList.add("search-result-list");le.addEventListener("click",he);p.addEventListener("submit",fe);p.addEventListener("input",pe);p.querySelector('[name="exercise-name"]').value=sessionStorage.getItem(C)??"";function ue(){sessionStorage.removeItem(h),sessionStorage.removeItem(x),sessionStorage.removeItem("activeSearchPage")}function Z(){V.classList.add("styles-for-ex-search-results")}function me(){V.classList.remove("styles-for-ex-search-results")}function ge(){p.classList.add("display-none"),P.innerHTML='<h2 class="exercises-title">Exercises</h2>'}function pe(e){b.classList.remove("display-none"),sessionStorage.setItem(C,e.target.value)}async function fe(e){e.preventDefault(),b.classList.add("display-none"),c.keyWord=p.querySelector('[name="exercise-name"]').value.trim().toLowerCase().replace(/\s/g,""),p.querySelector('[name="exercise-name"]').value="",sessionStorage.removeItem(C),m.innerHTML='<p><span class="exercises-modal-loader"></span></p>';const{data:t}=await B(c,1);if(t.results.length===0){m.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}sessionStorage.setItem(h,JSON.stringify(t)),sessionStorage.setItem(x,JSON.stringify(c)),O(t,c)}async function he(e){if(c.keyWord="",e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;c.group=t.lastElementChild.textContent,c.item=t.firstChild.textContent,m.innerHTML='<p><span class="exercises-modal-loader"></span></p>';const{data:s}=await B(c);if(!s.results){m.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}sessionStorage.setItem(h,JSON.stringify(s)),sessionStorage.setItem(x,JSON.stringify(c)),O(s,c)}async function B({group:e,item:t,keyWord:s},a=1){let r=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return s===""?await u.get(`${J}?${e.toLowerCase()}=${t.toLowerCase()}&page=${a}&limit=${r}`):await u.get(`${J}?${e.toLowerCase()}=${t.toLowerCase()}&keyword=${s}&page=${a}&limit=${r}`)}catch(o){window.alert("something goes wrong"),console.log(o)}}function K({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:r,burnedCalories:o,time:i,_id:n})=>`<li class=exercises-serch-result>
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
     
          </li>`).join("")}function G(e,{totalPages:t},s=0,a=7){if(t===1)return;const r=document.createElement("ul");r.classList.add("pagination-counter"),r.addEventListener("click",ye);let o;s==1?o=Number(s)-1:s==2?o=Number(s)-2:Number(s)==3?o=Number(s)-3:Number(s)>3?o=Number(s)-4:o=Number(s);let i=0;for(let n=o;n<a+Number(s);n++){i+=1;const l=document.createElement("li");if(l.textContent=n+1,l.classList.add("one-count"),r.append(l),(n+1==s||s===0&&n===0)&&l.classList.add("active-count"),n+1===t)break;if(i===7)break;sessionStorage.setItem("activeSearchPage",s)}e.after(r),e.classList.add("exercises-margin-for-pagin")}async function ye(e){if(e.target.nodeName==="UL")return;c.group===""&&(c={...JSON.parse(sessionStorage.getItem(x))}),m.innerHTML='<p><span class="exercises-modal-loader"></span></p>';const{data:t}=await B(c,e.target.textContent);ve(t,e)}function ve(e,t){d.innerHTML=K(e),m.innerHTML="",m.appendChild(d),G(d,e,t.target.textContent),Z(),z()}function O(e,t,s){d.innerHTML=K(e),m.innerHTML="",m.appendChild(d),p.classList.remove("display-none"),P.innerHTML=`<h2 class="exercises-title">Exercises /</h2><p>${t.item[0].toUpperCase()+t.item.slice(1,t.item.length)}</p>`,G(d,e,s),e.totalPages>1?d.classList.add("additional-margin"):d.classList.remove("additional-margin"),Z(),z()}function xe(){const e=JSON.parse(sessionStorage.getItem(h));if(e===null)return;const t=JSON.parse(sessionStorage.getItem(x));O(e,t,de)}const Se=localStorage.getItem("active-category"),S=document.getElementById(Se),U=document.querySelectorAll(".choose-category-button"),g=document.querySelector(".placeholder-container"),Le="https://energyflow.b.goit.study/api/filters";let q=1;async function w(e,t){function s(){return window.innerWidth<768?8:12}try{const a=s(),r=await u.get(`${Le}?filter=${e}&page=${t}&limit=${a}`);return r.data.results.length?r.data:(console.error("No results found for this filter."),null)}catch(a){console.error("Error fetching images:",a)}}function be({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function E(e){if(e){let t="";e.results.forEach(a=>{t+=be(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,g.innerHTML="",g.appendChild(s),g.insertAdjacentHTML("beforeend","<div id='pagination' class='tui-pagination'></div>")}else g.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}U.forEach(e=>{e.addEventListener("click",async()=>{ge(),me(),ue(),U.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;g.innerHTML='<p><span class="exercises-modal-loader"></span></p>',(async()=>{const s=await w(t,q);s&&(E(s),k(s))})()})});S&&sessionStorage.getItem(h)===null?(S.classList.add("active-category"),g.innerHTML='<p><span class="exercises-modal-loader"></span></p>',(async()=>{const e=await w(S.innerText,q);e&&(E(e),k(e))})()):sessionStorage.getItem(h)!==null?(S.classList.add("active-category"),xe()):(document.getElementById("muscles").classList.add("active-category"),g.innerHTML='<p><span class="exercises-modal-loader"></span></p>',(async()=>{const t=await w("Muscles",q);t&&(E(t),k(t))})());function k({page:e,results:t,totalPages:s}){const a=document.querySelector("#pagination");for(let o=1;o<=s;o++){const i=document.createElement("a");i.href="#",o==e?i.classList.add("tui-page-btn","tui-is-selected"):i.classList.add("tui-page-btn"),i.textContent=o,i.addEventListener("click",n=>{const l=n.target.textContent;g.innerHTML='<p><span class="exercises-modal-loader"></span></p>',(async()=>{const y=await w(t[0].filter,l);y&&(E(y),k(y))})()}),a.appendChild(i)}const r=document.querySelectorAll(".tui-page-btn");r.forEach(o=>{o.addEventListener("click",i=>{i.preventDefault(),r.forEach(n=>{n.classList.remove("tui-is-selected")}),o.classList.add("tui-is-selected")})})}u.defaults.baseURL="https://energyflow.b.goit.study/api";const T={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};T.form.addEventListener("submit",we);async function we(e){e.preventDefault();const t=T.form.email.value.trim();try{if(!t){M("Oooops! You forgot to enter the email!");return}ke(t);const s=await Ee(t);Ce("Thank you for subscribing! We're excited to have you on board! 🎉"),T.form.reset()}catch(s){s.response.status===409&&M("Sorry! This email has already been declarated!")}}async function Ee(e){return(await u.post("subscription",{email:e})).data}function ke(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;if(e.match(t)===null)return M("Please, enter the correct email!")}function Ce(e){N.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.9)",messageColor:"rgba(0, 0, 0, 0.7)",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}function M(e){N.show({message:e,backgroundColor:"rgba(205, 92, 92, 0.5)",messageColor:"rgba(0, 0, 0, 0.8)",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}
//# sourceMappingURL=commonHelpers2.js.map
