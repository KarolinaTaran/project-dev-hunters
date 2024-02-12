import"./assets/arrow-button-39fffa09.js";import{a as v}from"./assets/vendor-8cce9181.js";v.defaults.baseURL="https://energyflow.b.goit.study/api/";const x={quoteText:document.querySelector(".js-quote-text"),quoteAuthor:document.querySelector(".js-quote-author")},{quoteText:p,quoteAuthor:f}=x,i=document.createElement("ul");i.classList.add("search-result-list");const m="info",n=JSON.parse(localStorage.getItem(m)),h=new Date().getDate();n===null||h!==n.date?g("quote"):(p.textContent=n.quote,f.textContent=n.author);async function g(s){try{const t=await v.get(`${s}`),{data:{author:e,quote:o}}=t,a={author:e,quote:o,date:h};localStorage.setItem(m,JSON.stringify(a)),p.textContent=a.quote,f.textContent=a.author}catch(t){console.log(t.message)}}const c=document.querySelector(".js-favor-content"),u="exerciseItems",r=JSON.parse(localStorage.getItem(u)),b='<div class="favor-plug-wrap"><div class="favor-icon-wrap"><img class="favor-icon-item" src="./img/dumbbell/dumbbell-desktop.png" alt=""></div><div class="favor-text">It appears that you haven&#8216t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future</div></div>';function l(){c.innerHTML=b}r===null||r!==null&&r.length===0?l():r.length>0&&(S(r),y());function S(s){i.innerHTML=s.map(({bodyPart:t,name:e,target:o,burnedCalories:a,time:q,_id:d})=>`<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
              <button type="button" data-id=${d} data-delete-from-favorites>
                <svg class="icon-trash-svg" width="16" height="16">
                    <use href="./img/sprite.svg#icon-trash"></use>
                </svg>
              </button>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${d} data-exercise-modal-open>Start
                <svg class="start-svg" width="18" height="18">
                    <use href="./img/sprite.svg#icon-arrow-right"></use>
                </svg>
            </button>
        </div>
      </div>
      <div class="info-about-exercise">
        <div class="exercise-name">
            <svg class="runnig-svg" width="24" height="24">
                <use href="./img/sprite.svg#running-man"></use>
            </svg>
            <h2>${e[0].toUpperCase()+e.slice(1)}</h2>
        </div>
        <div class="additional-information">
            <p class=>Burned calories: <span class="info-from-back">${a} / ${q} min</span></p>
            <p class=>Body part: <span class="info-from-back">${t[0].toUpperCase()+t.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${o[0].toUpperCase()+o.slice(1)}</span></p>
        </div>
     
          </li>`).join(""),c.innerHTML="",c.prepend(i)}function y(){document.querySelectorAll("[data-delete-from-favorites]").forEach(t=>{t.addEventListener("click",L)})}function L(s){const t=s.currentTarget.dataset.id,e=JSON.parse(localStorage.getItem(u)).filter(({_id:o})=>{if(o!==t)return!0});if(localStorage.setItem(u,JSON.stringify(e)),e.length===0){l();return}S(e),y()}
//# sourceMappingURL=commonHelpers.js.map
