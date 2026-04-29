
const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.mobile-nav');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => mobileNav.classList.toggle('open'));
}
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
  });
},{threshold:.12});
document.querySelectorAll('.reveal, .service-card, .workflow-card, .case-card, .testimonial, .stat, .list-card').forEach(el=>observer.observe(el));
const counters = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(!entry.isIntersecting) return;
    const el = entry.target; const end = Number(el.dataset.count); const suffix = el.dataset.suffix || ''; let start = 0; const duration = 1500; const t0 = performance.now();
    function tick(now){ const p = Math.min((now-t0)/duration,1); const value = Math.floor(end*(1-Math.pow(1-p,3))); el.textContent = value + suffix; if(p<1) requestAnimationFrame(tick); }
    requestAnimationFrame(tick); counterObserver.unobserve(el);
  });
},{threshold:.3});
counters.forEach(c=>counterObserver.observe(c));
const form = document.querySelector('[data-contact-form]');
if(form){form.addEventListener('submit',(e)=>{e.preventDefault(); const msg=document.querySelector('.success'); if(msg) msg.style.display='block'; form.reset();});}
