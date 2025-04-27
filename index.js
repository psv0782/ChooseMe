import{S as a,N as d,K as l,a as c}from"./assets/vendor-D5tVdYkC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();a.use([d,l]);const u=document.querySelector("#reviews-container"),p=document.querySelector(".error-message");c.defaults.baseURL="https://portfolio-js.b.goit.study/api";document.addEventListener("DOMContentLoaded",m);const f=new a(".swiper",{keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{100:{slidesPerView:1,spaceBetween:20},768:{slidesPerView:1,spaceBetween:30},1280:{slidesPerView:2,spaceBetween:32}}});async function w(){try{const{data:t}=await c.get("/reviews");return t}catch{console.log("Error fetching reviews"),y()}}function v(t){const s=t.map(({author:i,avatar_url:o,review:e})=>`
          <li class="swiper-slide libox">
            <div class="review-card">
            <p class="review-text">${e}</p>
            <div class="review-info">
              <img src="${o}" alt="${i}" class="review-avatar" />
              <h3 class="review-author">${i}</h3>
              </div>

            </div>
          </li>
        `).join("");u.insertAdjacentHTML("beforeend",s),f.update()}async function m(){const t=await w();t&&v(t)}function y(){p.classList.remove("hidden")}
//# sourceMappingURL=index.js.map
