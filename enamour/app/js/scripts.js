history.scrollRestoration="manual",document.addEventListener("DOMContentLoaded",(function(){d(".header");let e=d(".header__hamb"),t=d(".header__mob-nav"),n=d(".header .close");e.onclick=()=>{t.classList.add("active")},n.onclick=()=>{t.classList.remove("active")};let i=new IntersectionObserver((function(e,t){e.forEach(e=>{e.isIntersecting?e.target.classList.add("in-view"):e.target.classList.remove("in-view")})}),{threshold:.7});u(".animated").forEach(e=>{i?i.observe(e):e.classList.add("in-view")});let o,r=d(".how__line"),a=d(".how__line-active"),c=0,s=u(".how__number");const l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame;function d(e,t){return t?t.querySelector(e):document.querySelector(e)}function u(e,t){return t?t.querySelectorAll(e):document.querySelectorAll(e)}!function e(){o=d(".how__line").clientHeight,c=(r.getBoundingClientRect().bottom-o-window.innerHeight/2)/-o,function(e){var t=e.getBoundingClientRect();return t.bottom>=0&&t.top-window.innerHeight<=0}(r)&&(a.style.transform=`scale3d(1,${c},1)`),s.forEach(e=>{(function(e){return e.getBoundingClientRect().top-window.innerHeight/2})(e)<=0?e.classList.add("active"):e.classList.remove("active")}),l(e)}()}));