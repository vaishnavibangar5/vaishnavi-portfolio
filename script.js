const menu=document.querySelector(".menu-toggle"),links=document.getElementById("navLinks");
menu?.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
const reveal=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");reveal.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>reveal.observe(el));
const sections=document.querySelectorAll("main section[id]"),navItems=document.querySelectorAll(".nav-links a");
const active=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){navItems.forEach(a=>a.classList.remove("active"));document.querySelector(`.nav-links a[href="#${e.target.id}"]`)?.classList.add("active")}}),{threshold:.42});
sections.forEach(s=>active.observe(s));
const light=document.querySelector(".mouse-light");
window.addEventListener("pointermove",e=>{if(innerWidth>800&&light){light.style.left=e.clientX+"px";light.style.top=e.clientY+"px"}});
if(matchMedia("(pointer:fine)").matches){document.querySelectorAll(".skill-card,.capability,.screen-card").forEach(card=>{card.addEventListener("pointermove",e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.transform=`perspective(700px) rotateX(${(-y*2).toFixed(2)}deg) rotateY(${(x*2).toFixed(2)}deg) translateY(-4px)`});card.addEventListener("pointerleave",()=>card.style.transform="")})}
