import{S as d,N as u,K as v,a as p}from"./assets/vendor-D5tVdYkC.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const a=[{title:"Wallet webservice",tech:"React, JavaScript, Node JS, Git",image1x:"../img/project3.jpg",image2x:"../img/project3@2x.jpg",alt:"Wallet webservice",link:"#"},{title:"Green harvest webservice",tech:"React, JavaScript, Node JS, Git",image1x:"../img/project7.jpg",image2x:"../img/project7@2x.jpg",alt:"Green harvest webservice",link:"#"},{title:"English Exellence website",tech:"React, JavaScript, Node JS, Git",image1x:"../img/project5.jpg",image2x:"../img/project5@2x.jpg",alt:"English Exellence website",link:"#"},{title:"PORTFOLIO WEBSITE",tech:"HTML, SCSS, JavaScript",image1x:"../img/project4.jpg",image2x:"../img/project4@2x.jpg",alt:"Portfolio Website",link:"#"},{title:"TRAVEL AGENCY SITE",tech:"React, TypeScript, Tailwind",image1x:"../img/project6.jpg",image2x:"../img/project6@2x.jpg",alt:"Travel Agency Website",link:"#"},{title:"VYSHYVANKA VIBES LANDING PAGE",tech:"HTML, SCSS, JavaScript",image1x:"../img/project2.jpg",image2x:"../img/project2@2x.jpg",alt:"VYSHYVANKA VIBES LANDING PAGE",link:"#"},{title:"POWER PULSE WEBSERVICE",tech:"HTML, SCSS, JavaScript",image1x:"../img/project1.jpg",image2x:"../img/project1@2x.jpg",alt:"POWER PULSE WEBSERVICE",link:"#"},{title:"CHEGO JEWELRY WEBSITE",tech:"HTML, SCSS, JavaScript",image1x:"../img/project8.jpg",image2x:"../img/project8@2x.jpg",alt:"CHEGO JEWELRY WEBSITE",link:"#"},{title:"FRUITBOX ONLINE STORE",tech:"HTML, SCSS, JavaScript",image1x:"../img/project9.jpg",image2x:"../img/project9@2x.jpg",alt:"FRUITBOX ONLINE STORE",link:"#"},{title:"STARLIGHT STUDIO LANDING PAGE",tech:"HTML, SCSS, JavaScript",image1x:"../img/project10.jpg",image2x:"../img/project10@2x.jpg",alt:"STARLIGHT STUDIO LANDING PAGE",link:"#"}];let n=0;const l=3,E=document.getElementById("projectsList"),g=document.getElementById("loadMoreBtn"),S=e=>{const i=document.createElement("li");return i.className="project-card",i.innerHTML=`
    <img 
      src="${e.image1x}" 
      srcset="${e.image1x} 1x, ${e.image2x} 2x" 
      alt="${e.alt}" 
      class="project-img">
    <p class="project-tech">${e.tech}</p>
    <div class="link-visit">
      <h3 class="project-title">${e.title}</h3>
      <a href="${e.link}" class="project-btn" target="_blank" rel="noopener noreferrer">
        VISIT
        <svg class="icon-project" width="18" height="18">
          <use href="../img/icons.svg#arrow-visit"></use>
        </svg>
      </a>
    </div>
  `,setTimeout(()=>i.classList.add("show"),10),i},h=()=>{const e=a.slice(n,n+l),i=[];return e.forEach(r=>{const c=S(r);E.appendChild(c),i.push(c)}),n+=l,n>=a.length&&(g.style.display="none"),i},j=e=>{e.length>0&&setTimeout(()=>{e[0].scrollIntoView({behavior:"smooth",block:"start"})},200)},m=(e=!1)=>{const i=h();e||j(i)};m(!0);g.addEventListener("click",()=>m());d.use([u,v]);const w=document.querySelector("#reviews-container"),L=document.querySelector(".error-message"),f=document.querySelector(".swiper-btns");p.defaults.baseURL="https://portfolio-js.b.goit.study/api";document.addEventListener("DOMContentLoaded",I);const x=new d(".swiper",{keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{100:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:1,spaceBetween:30},1280:{slidesPerView:2,spaceBetween:32}}});async function y(){try{const{data:e}=await p.get("/reviews");return e}catch{console.log("Error fetching reviews"),T(),B()}}function b(e){const i=e.map(({author:r,avatar_url:c,review:t})=>`
          <li class="swiper-slide libox">
            <div class="review-card">
            <p class="review-text">${t}</p>
            <div class="review-info">
              <img src="${c}" alt="${r}" class="review-avatar" />
              <h3 class="review-author">${r}</h3>
              </div>

            </div>
          </li>
        `).join("");w.insertAdjacentHTML("beforeend",i),x.update()}async function I(){const e=await y();e&&b(e)}function T(){L.classList.remove("visually-hidden")}function B(){f.classList.add("visually-hidden")}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("menuBtn"),i=document.getElementById("closeBtn"),r=document.getElementById("mobileMenu"),c=document.querySelectorAll(".mobile-link"),t=()=>{r.classList.remove("hidden"),r.classList.add("show"),document.body.classList.add("no-scroll")},s=()=>{r.classList.remove("show"),setTimeout(()=>{r.classList.add("hidden")},300),document.body.classList.remove("no-scroll")};e.addEventListener("click",t),i.addEventListener("click",s),c.forEach(o=>o.addEventListener("click",s))});
//# sourceMappingURL=index.js.map
