document.querySelector('.nav-toggle')?.addEventListener('click',e=>{
  const nav=e.currentTarget.closest('.nav');
  e.currentTarget.setAttribute('aria-expanded',nav.classList.toggle('open'));
});
document.querySelectorAll('.nav-right a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open')));
document.querySelectorAll('.photo img, .hero-bg img').forEach(img=>{
  const hide=()=>img.style.visibility='hidden';
  if(img.complete&&!img.naturalWidth)hide();else img.addEventListener('error',hide);
});
document.getElementById('year').textContent=new Date().getFullYear();

(()=>{
  const els=document.querySelectorAll('body > section, body > footer');
  if(!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('reveal-on');
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-in');io.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -40px 0px'});
  els.forEach(el=>{
    if(el.getBoundingClientRect().top<innerHeight*.9){el.classList.add('is-in');return;}
    el.classList.add('reveal');io.observe(el);
  });
})();
