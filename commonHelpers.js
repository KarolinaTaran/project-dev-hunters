import{c as f}from"./assets/exercises-modal-35c32130.js";import{a as S}from"./assets/vendor-8cce9181.js";S.defaults.baseURL="https://energyflow.b.goit.study/api/";const I={quoteText:document.querySelector(".js-quote-text"),quoteAuthor:document.querySelector(".js-quote-author")},{quoteText:y,quoteAuthor:q}=I,t=document.createElement("ul"),k=document.querySelector("[data-exercise-modal]");t.classList.add("search-result-list");t.id="scrollTry";const w="info",c=JSON.parse(localStorage.getItem(w)),x=new Date().getDate(),L=new Date().getMonth();c===null||x!==c.date||L!==c.month?d("quote"):(y.textContent=c.quote,q.textContent=c.author);async function d(r){try{const e=await S.get(`${r}`),{data:{author:s,quote:a}}=e,n={author:s,quote:a,date:x,month:L};localStorage.setItem(w,JSON.stringify(n)),y.textContent=n.quote,q.textContent=n.author}catch(e){console.log(e.message)}}const u=document.querySelector(".js-favor-content"),o="exerciseItems",i=JSON.parse(localStorage.getItem(o)),O='<div class="favor-plug-wrap"><div class="favor-icon-wrap"><img class="favor-icon-item" src="/project-dev-hunters/assets/dumbbell-desktop-dca4f14b.png" alt=""></div><div class="favor-text">It appears that you haven&#8216t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future</div></div>';function l(){u.innerHTML=O}i===null||i!==null&&i.length===0?l():i.length>0&&(p(i),g(),f(),v());function p(r){t.innerHTML=r.map(({bodyPart:e,name:s,target:a,burnedCalories:n,time:b,_id:h})=>`<li class=exercises-serch-result>
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
            <p class=>Burned calories: <span class="info-from-back">${n} / ${b} min</span></p>
            <p class=>Body part: <span class="info-from-back">${e[0].toUpperCase()+e.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${a[0].toUpperCase()+a.slice(1)}</span></p>
        </div>
     
          </li>`).join(""),u.innerHTML="",u.prepend(t)}function g(){document.querySelectorAll("[data-delete-from-favorites]").forEach(e=>{e.addEventListener("click",T)})}function T(r){const e=r.currentTarget.dataset.id,s=JSON.parse(localStorage.getItem(o)).filter(({_id:a})=>{if(a!==e)return!0});if(localStorage.setItem(o,JSON.stringify(s)),s.length===0){l();return}p(s),g(),f(),v()}function v(){window.innerWidth>=768&&window.innerWidth<1440&&t.children.length>8||window.innerWidth>=1440&&t.children.length>9?m():E()}function m(){t.classList.add("scroll-on"),t.classList.add("padding-for-scroll-list"),document.querySelector(".favor-wrapper").classList.add("padding-for-scroll-container")}function E(){t.classList.remove("scroll-on"),t.classList.remove("padding-for-scroll-list"),document.querySelector(".favor-wrapper").classList.remove("padding-for-scroll-container")}k.addEventListener("mouseout",()=>{p(JSON.parse(localStorage.getItem(o))),g(),f(),v(),(JSON.parse(localStorage.getItem(o))===null||JSON.parse(localStorage.getItem(o))!==null&&JSON.parse(localStorage.getItem(o)).length===0)&&l()});
//# sourceMappingURL=commonHelpers.js.map
