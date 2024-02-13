import{c as f}from"./assets/exercises-modal-71a4bcb2.js";import{a as S}from"./assets/vendor-8cce9181.js";S.defaults.baseURL="https://energyflow.b.goit.study/api/";const k={quoteText:document.querySelector(".js-quote-text"),quoteAuthor:document.querySelector(".js-quote-author")},{quoteText:y,quoteAuthor:q}=k,t=document.createElement("ul"),I=document.querySelector("[data-exercise-modal]");t.classList.add("search-result-list");t.id="scrollTry";const w="info",n=JSON.parse(localStorage.getItem(w)),x=new Date().getDate(),L=new Date().getMonth();n===null||x!==n.date||L!==n.month?l("quote"):(y.textContent=n.quote,q.textContent=n.author);async function l(o){try{const e=await S.get(`${o}`),{data:{author:s,quote:r}}=e,a={author:s,quote:r,date:x,month:L};localStorage.setItem(w,JSON.stringify(a)),y.textContent=a.quote,q.textContent=a.author}catch(e){console.log(e.message)}}const d=document.querySelector(".js-favor-content"),c="exerciseItems",i=JSON.parse(localStorage.getItem(c)),T='<div class="favor-plug-wrap"><div class="favor-icon-wrap"><img class="favor-icon-item" src="./img/dumbbell/dumbbell-desktop.png" alt=""></div><div class="favor-text">It appears that you haven&#8216t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future</div></div>';function u(){d.innerHTML=T}i===null||i!==null&&i.length===0?u():i.length>0&&(p(i),v(),f(),g());function p(o){t.innerHTML=o.map(({bodyPart:e,name:s,target:r,burnedCalories:a,time:b,_id:h})=>`<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
              <button type="button" data-id=${h} data-delete-from-favorites>
                <svg class="icon-trash-svg" width="16" height="16">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-trash"></use>
                </svg>
              </button>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${h} data-exercise-modal-open>Start
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
            <h2>${s[0].toUpperCase()+s.slice(1)}</h2>
        </div>
        <div class="additional-information">
            <p class=>Burned calories: <span class="info-from-back">${a} / ${b} min</span></p>
            <p class=>Body part: <span class="info-from-back">${e[0].toUpperCase()+e.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${r[0].toUpperCase()+r.slice(1)}</span></p>
        </div>
     
          </li>`).join(""),d.innerHTML="",d.prepend(t)}function v(){document.querySelectorAll("[data-delete-from-favorites]").forEach(e=>{e.addEventListener("click",E)})}function E(o){const e=o.currentTarget.dataset.id,s=JSON.parse(localStorage.getItem(c)).filter(({_id:r})=>{if(r!==e)return!0});if(localStorage.setItem(c,JSON.stringify(s)),s.length===0){u();return}p(s),v(),f(),g()}function g(){window.innerWidth>=768&&window.innerWidth<1440&&t.children.length>8||window.innerWidth>=1440&&t.children.length>9?m():F()}function m(){t.classList.add("scroll-on"),t.classList.add("padding-for-scroll-list"),document.querySelector(".favor-wrapper").classList.add("padding-for-scroll-container")}function F(){t.classList.remove("scroll-on"),t.classList.remove("padding-for-scroll-list"),document.querySelector(".favor-wrapper").classList.remove("padding-for-scroll-container")}I.addEventListener("mouseout",()=>{p(JSON.parse(localStorage.getItem(c))),v(),f(),g()});
//# sourceMappingURL=commonHelpers.js.map
