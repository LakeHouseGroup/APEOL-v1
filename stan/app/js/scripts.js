history.scrollRestoration="manual",document.addEventListener("DOMContentLoaded",(function(){let e=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting?e.target.classList.add("in-view"):e.target.classList.remove("in-view")})}),{threshold:0});l(".animated").forEach(t=>{e?e.observe(t):t.classList.add("in-view")});let t=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting&&e.target.classList.add("in-view")})}),{threshold:.4});l(".animated_threshold").forEach(e=>{t?t.observe(e):e.classList.add("in-view")});let i=c(".team__hero"),n=c(".team__hero-img"),s=0;const o=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;function r(e){return e.getBoundingClientRect().bottom}!function e(){var t=i.clientHeight;s=100+10*(t-r(i))/t,r(i)>=0&&(n.style.transform=`scale3d(${s}%,${s}%,1)`),o(e)}();var a=new Swiper(".team__swiper",{slidesPerView:1,speed:800,loop:!0,allowTouchMove:!1,simulateTouch:!1,effect:"creative"});function c(e,t){return t?t.querySelector(e):document.querySelector(e)}function l(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}c(".swiper-button-prev").onclick=function(e){l(".swiper-slide-active, .swiper-slide-duplicate-active").forEach(e=>e.classList.add("scale-down-prev")),setTimeout((function(){a.slidePrev()}),200),setTimeout((function(){l(".swiper-slide").forEach(e=>e.classList.remove("scale-down-prev"))}),1e3)},c(".swiper-button-next").onclick=function(e){l(".swiper-slide-active, .swiper-slide-duplicate-active").forEach(e=>e.classList.add("scale-down-next")),setTimeout((function(){a.slideNext()}),200),setTimeout((function(){l(".swiper-slide").forEach(e=>e.classList.remove("scale-down-next"))}),1e3)}}));