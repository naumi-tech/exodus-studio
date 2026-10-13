(()=>{
  const fmt=s=>isFinite(s)?Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0'):'0:00';
  const players=[...document.querySelectorAll('.rp-player')];
  players.forEach(p=>{
    const a=new Audio();a.preload='metadata';a.src=p.dataset.src;
    const btn=p.querySelector('.rp-play'),bar=p.querySelector('.rp-bar'),fill=bar.querySelector('span'),time=p.querySelector('.rp-time');
    p._audio=a;
    const upd=()=>{fill.style.width=(a.duration?a.currentTime/a.duration*100:0)+'%';time.textContent=fmt(a.currentTime)+' / '+fmt(a.duration)};
    a.addEventListener('loadedmetadata',upd);a.addEventListener('timeupdate',upd);
    a.addEventListener('ended',()=>p.classList.remove('playing'));
    a.addEventListener('error',()=>{p.classList.add('unavailable');time.textContent='Coming soon';btn.disabled=true});
    btn.addEventListener('click',()=>{
      if(a.paused){players.forEach(o=>{if(o!==p&&o._audio){o._audio.pause();o.classList.remove('playing')}});a.play();p.classList.add('playing')}
      else{a.pause();p.classList.remove('playing')}
    });
    bar.addEventListener('click',e=>{if(!a.duration)return;const r=bar.getBoundingClientRect();a.currentTime=(e.clientX-r.left)/r.width*a.duration});
  });
})();
