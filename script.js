
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
document.addEventListener("DOMContentLoaded",()=>{
 const saved=localStorage.getItem("pid-theme"); if(saved==="dark") document.body.classList.add("dark");
 const theme=$("#themeToggle"); if(theme) theme.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("pid-theme",document.body.classList.contains("dark")?"dark":"light");showToast(document.body.classList.contains("dark")?"Dark mode enabled":"Light mode enabled")});
 const menu=$("#menuBtn"),links=$(".nav-links"); if(menu) menu.addEventListener("click",()=>{links.style.display=links.style.display==="flex"?"":"flex";if(links.style.display==="flex"){links.style.position="absolute";links.style.top="76px";links.style.left="0";links.style.right="0";links.style.padding="16px 4%";links.style.background="var(--paper)";links.style.flexDirection="column";links.style.alignItems="flex-start"}});
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});$$(".reveal").forEach(x=>obs.observe(x));
 $$(".filter").forEach(btn=>btn.addEventListener("click",()=>{$$(".filter").forEach(x=>x.classList.remove("active"));btn.classList.add("active");const t=btn.dataset.filter;$$(".project-card").forEach(c=>c.style.display=(t==="all"||c.dataset.type===t)?"":"none")}));
 $$(".lead-form").forEach(f=>f.addEventListener("submit",e=>{e.preventDefault();showToast("Thank you! Your consultation request is ready.");f.reset()}));
 const calc=$("#calc"); if(calc) calc.addEventListener("submit",e=>{e.preventDefault();let a=+$("#area").value||0,b=+$("#bhk").value||1,s=+$("#style").value||1;$("#estimate").textContent="₹"+Math.round(a*s+b*35000).toLocaleString("en-IN")});
 $$(".consult-btn").forEach(b=>b.addEventListener("click",()=>$("#consultModal")?.classList.add("open")));
 $$(".modal-close").forEach(b=>b.addEventListener("click",()=>b.closest(".modal").classList.remove("open")));
 $$(".modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("open")}));
 $$(".detail-btn").forEach(b=>b.addEventListener("click",()=>showToast(b.dataset.msg||"Design selected — scroll to consultation to continue.")));
});
function showToast(msg){let t=$("#toast");if(!t){t=document.createElement("div");t.id="toast";t.className="toast";document.body.appendChild(t)}t.textContent=msg;t.classList.add("show");clearTimeout(window.tt);window.tt=setTimeout(()=>t.classList.remove("show"),3000)}
