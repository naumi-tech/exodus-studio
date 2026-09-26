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
