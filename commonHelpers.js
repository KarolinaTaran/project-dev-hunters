import{c as u}from"./assets/exercises-modal-ac6fa363.js";import{a as S}from"./assets/vendor-8cce9181.js";S.defaults.baseURL="https://energyflow.b.goit.study/api/";const w={quoteText:document.querySelector(".js-quote-text"),quoteAuthor:document.querySelector(".js-quote-author")},{quoteText:y,quoteAuthor:q}=w,t=document.createElement("ul"),k=document.querySelector("[data-exercise-modal]");t.classList.add("search-result-list");t.id="scrollTry";const x="info",i=JSON.parse(localStorage.getItem(x)),L=new Date().getDate();i===null||L!==i.date?h("quote"):(y.textContent=i.quote,q.textContent=i.author);async function h(o){try{const e=await S.get(`${o}`),{data:{author:s,quote:r}}=e,a={author:s,quote:r,date:L};localStorage.setItem(x,JSON.stringify(a)),y.textContent=a.quote,q.textContent=a.author}catch(e){console.log(e.message)}}const l=document.querySelector(".js-favor-content"),c="exerciseItems",n=JSON.parse(localStorage.getItem(c)),I='<div class="favor-plug-wrap"><div class="favor-icon-wrap"><img class="favor-icon-item" src="./img/dumbbell/dumbbell-desktop.png" alt=""></div><div class="favor-text">It appears that you haven&#8216t added any exercises to your favorites yet. To get started, you can add exercises that you like to your favorites for easier access in the future</div></div>';function d(){l.innerHTML=I}n===null||n!==null&&n.length===0?d():n.length>0&&(f(n),p(),u(),v());function f(o){t.innerHTML=o.map(({bodyPart:e,name:s,target:r,burnedCalories:a,time:b,_id:g})=>`<li class=exercises-serch-result>
      <div class="rating-start-container">
        <div class="rating">
            <p class="workout">Workout</p>
            <div class="rating-cont">
              <button type="button" data-id=${g} data-delete-from-favorites>
                <svg class="icon-trash-svg" width="16" height="16">
                    <use href="/project-dev-hunters/assets/sprite-f8222074.svg#icon-trash"></use>
                </svg>
              </button>
            </div>
        </div>
        <div class="start-button-container">
            <button type="button" data-id=${g} data-exercise-modal-open>Start
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
     
          </li>`).join(""),l.innerHTML="",l.prepend(t)}function p(){document.querySelectorAll("[data-delete-from-favorites]").forEach(e=>{e.addEventListener("click",T)})}function T(o){const e=o.currentTarget.dataset.id,s=JSON.parse(localStorage.getItem(c)).filter(({_id:r})=>{if(r!==e)return!0});if(localStorage.setItem(c,JSON.stringify(s)),s.length===0){d();return}f(s),p(),u(),v()}function v(){window.innerWidth>=768&&window.innerWidth<1440&&t.children.length>8||window.innerWidth>=1440&&t.children.length>9?m():E()}function m(){t.classList.add("scroll-on"),t.classList.add("padding-for-scroll-list"),document.querySelector(".favor-wrapper").classList.add("padding-for-scroll-container")}function E(){t.classList.remove("scroll-on"),t.classList.remove("padding-for-scroll-list"),document.querySelector(".favor-wrapper").classList.remove("padding-for-scroll-container")}k.addEventListener("mouseout",()=>{f(JSON.parse(localStorage.getItem(c))),p(),u(),v()});
//# sourceMappingURL=commonHelpers.js.map
