import{c as v}from"./assets/exercises-modal-adbd807a.js";import{a as p}from"./assets/vendor-8cce9181.js";p.defaults.baseURL="https://energyflow.b.goit.study/api/";const b={quoteText:document.querySelector(".js-quote-text"),quoteAuthor:document.querySelector(".js-quote-author")},{quoteText:m,quoteAuthor:h}=b,t=document.createElement("ul");t.classList.add("search-result-list");t.id="scrollTry";const S="info",i=JSON.parse(localStorage.getItem(S)),y=new Date().getDate();i===null||y!==i.date?f("quote"):(m.textContent=i.quote,h.textContent=i.author);async function f(o){try{const e=await p.get(`${o}`),{data:{author:s,quote:r}}=e,a={author:s,quote:r,date:y};localStorage.setItem(S,JSON.stringify(a)),m.textContent=a.quote,h.textContent=a.author}catch(e){console.log(e.message)}}const c=document.querySelector(".js-favor-content"),l="exerciseItems",n=JSON.parse(localStorage.getItem(l)),k='<div class="favor-plug-wrap"><div class="favor-icon-wrap"><img class="favor-icon-item" src="./img/dumbbell/dumbbell-desktop.png" alt=""></div><div class="favor-text">It appears that you haven&#8216t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future</div></div>';function d(){c.innerHTML=k}n===null||n!==null&&n.length===0?d():n.length>0&&(q(n),w(),v(),x());function q(o){t.innerHTML=o.map(({bodyPart:e,name:s,target:r,burnedCalories:a,time:L,_id:u})=>`<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
              <button type="button" data-id=${u} data-delete-from-favorites>
                <svg class="icon-trash-svg" width="16" height="16">
                    <use href="./img/sprite.svg#icon-trash"></use>
                </svg>
              </button>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${u} data-exercise-modal-open>Start
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
            <h2>${s[0].toUpperCase()+s.slice(1)}</h2>
        </div>
        <div class="additional-information">
            <p class=>Burned calories: <span class="info-from-back">${a} / ${L} min</span></p>
            <p class=>Body part: <span class="info-from-back">${e[0].toUpperCase()+e.slice(1)}</span></p>
            <p class=>Target: <span class="info-from-back">${r[0].toUpperCase()+r.slice(1)}</span></p>
        </div>
     
          </li>`).join(""),c.innerHTML="",c.prepend(t)}function w(){document.querySelectorAll("[data-delete-from-favorites]").forEach(e=>{e.addEventListener("click",T)})}function T(o){const e=o.currentTarget.dataset.id,s=JSON.parse(localStorage.getItem(l)).filter(({_id:r})=>{if(r!==e)return!0});if(localStorage.setItem(l,JSON.stringify(s)),s.length===0){d();return}q(s),w(),v(),x()}function x(){window.innerWidth>=768&&window.innerWidth<1440&&t.children.length>8||window.innerWidth>=1440&&t.children.length>9?g():I()}function g(){t.classList.add("scroll-on"),t.classList.add("padding-for-scroll-list"),document.querySelector(".favor-wrapper").classList.add("padding-for-scroll-container")}function I(){t.classList.remove("scroll-on"),t.classList.remove("padding-for-scroll-list"),document.querySelector(".favor-wrapper").classList.remove("padding-for-scroll-container")}
//# sourceMappingURL=commonHelpers.js.map
