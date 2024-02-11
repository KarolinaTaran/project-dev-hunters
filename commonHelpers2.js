import"./assets/modal-menu-cd2320c3.js";import{a as m,i as D}from"./assets/vendor-8cce9181.js";let W=document.querySelector(".quote-text"),J=document.querySelector(".quote-author");m.defaults.baseURL="https://energyflow.b.goit.study/api";const O=new Date;if(localStorage.key!=="info")U("quote");else if(TimeInStorage!==O)localStorage.removeItem("info"),U("quote");else if(TimeInStorage===O){const e=JSON.parse(localStorage.getItem("info")),t=e.quote,s=e.author;W.textContent=t,J.textContent=s}async function U(e){const t={};t.date=new Date;const s=await m.get(`${e}`),{data:{quote:a,author:r}}=s;t.author=r,t.quote=a,localStorage.setItem("info",JSON.stringify(t));const o=JSON.parse(localStorage.getItem("info"));W.textContent=o.quote,J.textContent=o.author}let A;const G=document.querySelector("[data-exercise-modal-close]"),v=document.querySelector("[data-exercise-modal]"),$=document.querySelector(".exercises-modal"),Y=document.querySelector(".exercises-modal-content"),_=document.querySelector(".span-exercises-modal-loader"),g="exerciseItems";let z;function T(){A=document.querySelectorAll("[data-exercise-modal-open]"),A.forEach(e=>{e.addEventListener("click",t=>{_.classList.add("exercises-modal-loader"),z=t.currentTarget.dataset.id,Y.innerHTML="",v.classList.add("is-open"),X(),oe()})})}async function Q(){return m.defaults.baseURL="https://energyflow.b.goit.study",await m.get(`/api/exercises/${z}`)}async function X(){try{const t=(await Q()).data;P(t),se(t)}catch(e){te(e)}finally{_.classList.remove("exercises-modal-loader")}}function P({bodyPart:e,burnedCalories:t,description:s,equipmen:a,gifUrl:r,name:o,popularity:i,rating:n,target:d,time:p}){let Z=n.toFixed(1);const K=`
  <div class="exercises-modal-gif-container">
    <img src="${r}" alt="${o}"/>
  </div>
  <div>
      <h4 class="exercises-modal-title">${o}</h4>
      <div class="exercises-modal-rating">
          <p class="exercises-modal-rating-number">${Z}</p>
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
              <p class="exercises-modal-block-paragraf">${d}</p>
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
  `;Y.insertAdjacentHTML("beforeend",K),ee(Math.round(n))}function ee(e){const s=[...$.querySelectorAll(".exercises-modal-star-icon")];for(let a=0;a<e;a+=1)s[a].classList.add("selected-stars")}function te(e){console.log(e);const t=e.name,s=e.message;D.error({position:"topRight",message:`${t}: ${s}.`})}function se(e){const t=document.querySelector(".exercises-modal-button-favorites"),s=document.querySelector(".exercises-modal-button-remove");localStorage.getItem(g)!==null&&JSON.parse(localStorage.getItem(g)).find(i=>i._id===e._id)?(E(),s.addEventListener("click",r)):t.addEventListener("click",a),t.addEventListener("click",a),s.addEventListener("click",r);function a(){const o=JSON.parse(localStorage.getItem(g))||[];o.push(e),localStorage.setItem(g,JSON.stringify(o)),E()}function r(){const o=JSON.parse(localStorage.getItem(g)),i=o.find(n=>n._id===e._id);o.splice(o.indexOf(i),1),localStorage.setItem(g,JSON.stringify(o)),E()}}function E(){const e=$.querySelector(".exercises-modal-button-favorites"),t=$.querySelector(".exercises-modal-button-remove");e.classList.toggle("hidden-button"),t.classList.toggle("hidden-button")}function oe(){document.addEventListener("keydown",s),G.addEventListener("click",e),v.addEventListener("click",t);function e(){v.classList.remove("is-open")}function t(a){a.target.hasAttribute("data-exercise-modal")&&e()}function s(a){a.code==="Escape"&&(v.classList.remove("is-open"),document.removeEventListener("keydown",s))}}const R="https://energyflow.b.goit.study/api/exercises",w="formValusForSearch",B=document.querySelector(".title-container"),ae=document.querySelector(".placeholder-container"),f=document.querySelector(".placeholder-container"),u=document.querySelector(".training-search-form"),c=document.createElement("ul"),x=document.querySelector(".cansel-button-ex"),V=document.querySelector(".exercises-container");x.addEventListener("click",()=>{x.classList.add("display-none"),u.firstElementChild.value="",sessionStorage.removeItem(w)});c.classList.add("search-result-list");ae.addEventListener("click",le);u.addEventListener("submit",ce);u.addEventListener("input",ne);u.querySelector('[name="exercise-name"]').value=sessionStorage.getItem(w)??"";const l={group:"",item:"",keyWord:""};function I(){V.classList.add("styles-for-ex-search-results")}function re(){V.classList.remove("styles-for-ex-search-results")}function ie(){u.classList.add("display-none"),B.innerHTML='<h2 class="exercises-title">Exercises</h2>'}function ne(e){x.classList.remove("display-none"),sessionStorage.setItem(w,e.target.value)}async function ce(e){e.preventDefault(),x.classList.add("display-none"),l.keyWord=u.querySelector('[name="exercise-name"]').value.trim().toLowerCase().replace(/\s/g,""),u.querySelector('[name="exercise-name"]').value="",sessionStorage.removeItem(w);const{data:t}=await M(l,1);if(t.results.length===0){f.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=N(t),f.innerHTML="",f.appendChild(c),u.classList.remove("display-none"),B.innerHTML=`<h2 class="exercises-title">Exercises /</h2><p>${l.item[0].toUpperCase()+l.item.slice(1,l.item.length)}</p>`,F(c,t),t.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin"),T(),I()}async function le(e){if(l.keyWord="",e.target.nodeName==="UL")return;let t;if(e.target.nodeName==="DIV"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target),e.target.nodeName==="SPAN"&&(e.target.classList.value===""||e.target.classList.value==="list-history")&&(t=e.target.parentNode),!t)return;l.group=t.lastElementChild.textContent,l.item=t.firstChild.textContent;const{data:s}=await M(l);if(!s.results){f.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>";return}c.innerHTML=N(s),f.innerHTML="",f.appendChild(c),u.classList.remove("display-none"),B.innerHTML=`<h2 class="exercises-title">Exercises /</h2><p>${l.item[0].toUpperCase()+l.item.slice(1,l.item.length)}</p>`,F(c,s),s.totalPages>1?c.classList.add("additional-margin"):c.classList.remove("additional-margin"),I(),T()}async function M({group:e,item:t,keyWord:s},a=1){let r=window.innerWidth<=1439?8:9;e=e.toLowerCase(),e==="body parts"&&(e=e.slice(0,e.length-1).replace(/\s/g,""));try{return s===""?await m.get(`${R}?${e.toLowerCase()}=${t.toLowerCase()}&page=${a}&limit=${r}`):await m.get(`${R}?${e.toLowerCase()}=${t.toLowerCase()}&keyword=${s}&page=${a}&limit=${r}`)}catch(o){window.alert("something goes wrong"),console.log(o)}}function N({results:e}){return e.map(({bodyPart:t,rating:s,name:a,target:r,burnedCalories:o,time:i,_id:n})=>`<li class=exercises-serch-result>
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
     
          </li>`).join("")}function F(e,{totalPages:t},s=0,a=7){if(t===1)return;const r=document.createElement("ul");r.classList.add("pagination-counter"),r.addEventListener("click",de);let o;s==1?o=Number(s)-1:s==2?o=Number(s)-2:Number(s)===3?o=Number(s)-3:Number(s)>3?o=Number(s)-4:o=Number(s);let i=0;for(let n=o;n<a+Number(s);n++){i+=1;const d=document.createElement("li");if(d.textContent=n+1,d.classList.add("one-count"),r.append(d),(n+1==s||s===0&&n===0)&&d.classList.add("active-count"),n+1===t)break;if(i===7)break}e.after(r),e.classList.add("exercises-margin-for-pagin")}async function de(e){if(e.target.nodeName==="UL")return;const{data:t}=await M(l,e.target.textContent);c.innerHTML=N(t),f.innerHTML="",f.appendChild(c),F(c,t,e.target.textContent),I(),T()}const ue=localStorage.getItem("active-category"),k=document.getElementById(ue),j=document.querySelectorAll(".choose-category-button"),h=document.querySelector(".placeholder-container"),me="https://energyflow.b.goit.study/api/filters";let C=1;async function L(e,t){function s(){return window.innerWidth<768?8:12}try{const a=s(),r=await m.get(`${me}?filter=${e}&page=${t}&limit=${a}`);return r.data.results.length?r.data:(console.error("No results found for this filter."),null)}catch(a){console.error("Error fetching images:",a)}}function fe({imgUrl:e,name:t,filter:s}){return`<li class="list-item"><img class="list-image" src="${e}" data-source="${e}" loading="lazy" alt="${t}"><div class='list-history'>${t}<span>${s}</span></div></li>`}function b(e){if(e){let t="";e.results.forEach(a=>{t+=fe(a)});let s=document.createElement("ul");s.classList.add("search-list"),s.innerHTML=t,h.innerHTML="",h.appendChild(s),h.insertAdjacentHTML("beforeend","<div id='pagination' class='tui-pagination'></div>")}else h.innerHTML="<p>Unfortunately, <span>no results</span> were found. You may want to consider other search options to find the exercise you are looking for.Our range is wide and you have the opportunity to find more options that suit your needs.</p>"}j.forEach(e=>{e.addEventListener("click",async()=>{ie(),re(),j.forEach(s=>{s.classList.remove("active-category")}),e.classList.add("active-category"),localStorage.setItem("active-category",e.id);const t=e.innerText;(async()=>{const s=await L(t,C);s&&(b(s),S(s))})()})});k?(k.classList.add("active-category"),(async()=>{const e=await L(k.innerText,C);e&&(b(e),S(e))})()):(document.getElementById("muscles").classList.add("active-category"),(async()=>{const t=await L("Muscles",C);t&&(b(t),S(t))})());function S({page:e,results:t,totalPages:s}){const a=document.querySelector("#pagination");for(let o=1;o<=s;o++){const i=document.createElement("a");i.href="#",o==e?i.classList.add("tui-page-btn","tui-is-selected"):i.classList.add("tui-page-btn"),i.textContent=o,i.addEventListener("click",n=>{const d=n.target.textContent;(async()=>{const p=await L(t[0].filter,d);p&&(b(p),S(p))})()}),a.appendChild(i)}const r=document.querySelectorAll(".tui-page-btn");r.forEach(o=>{o.addEventListener("click",i=>{i.preventDefault(),r.forEach(n=>{n.classList.remove("tui-is-selected")}),o.classList.add("tui-is-selected")})})}m.defaults.baseURL="https://energyflow.b.goit.study/api";const q={form:document.querySelector(".footer-form"),input:document.querySelector(".footer-form-input")};q.form.addEventListener("submit",ge);async function ge(e){e.preventDefault();const t=q.form.email.value.trim();try{if(!t){y("Oooops! You forgot to enter the email! 🫣");return}if(!he(t))return;const s=await pe(t);y("Thank you for subscribing! We're excited to have you on board! 🎉")}catch(s){s.response.status===409&&y("Sorry! This email has already been declarated!")}finally{q.form.reset()}}async function pe(e){return(await m.post("subscription",{email:e})).data}function he(e){let t=/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;return e.match(t)?!0:(y("Please, enter the correct email!"),!1)}function y(e){D.show({message:e,backgroundColor:"rgba(246, 246, 246, 0.9)",messageColor:"black",maxWidth:300,position:"bottomRight",timeout:4e3,progressBar:!1,transitionIn:"bounceInBottom",transitionOut:"fadeOutRight",messageSize:14})}const H=document.querySelector(".up-btn");H.addEventListener("click",ye);window.onscroll=function(){ve()};function ve(){window.scrollY>1?xe():Le()}function ye(){document.documentElement.scrollTop=0}function xe(){H.classList.remove("is-hidden")}function Le(){H.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers2.js.map
