
(() => {
 const root=document.documentElement;
 try{
  const theme=localStorage.getItem('aquavera-theme'); if(theme) root.dataset.theme=theme;
  const dir=localStorage.getItem('aquavera-dir'); if(dir) root.dir=dir;
 }catch(e){}
 const menuBtn=document.querySelector('.menu-toggle');
 const nav=document.querySelector('.nav-links');
 const navWrap=document.querySelector('.nav-wrap');
 const closeMenu=()=>{if(menuBtn&&nav){menuBtn.setAttribute('aria-expanded','false');nav.classList.remove('mobile-open');navWrap.classList.remove('mobile-menu-open');document.body.classList.remove('menu-lock')}};
 if(menuBtn&&nav){
  menuBtn.addEventListener('click',()=>{
   const open=menuBtn.getAttribute('aria-expanded')!=='true';
   menuBtn.setAttribute('aria-expanded',String(open));
   nav.classList.toggle('mobile-open',open);navWrap.classList.toggle('mobile-menu-open',open);
   document.body.classList.toggle('menu-lock',open);
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!menuBtn.contains(e.target))closeMenu()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu()});
 }
 document.querySelectorAll('.theme-toggle').forEach(btn=>btn.addEventListener('click',()=>{
  root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';
  try{localStorage.setItem('aquavera-theme',root.dataset.theme)}catch(e){}
 }));
 document.querySelectorAll('.dir-toggle').forEach(btn=>btn.addEventListener('click',()=>{
  root.dir=root.dir==='rtl'?'ltr':'rtl';
  try{localStorage.setItem('aquavera-dir',root.dir)}catch(e){}
 }));
 document.querySelectorAll('img[data-fallback]').forEach(img=>img.addEventListener('error',()=>{const frame=img.parentElement;frame.classList.add('image-unavailable');frame.setAttribute('data-fallback-label',img.alt||'AquaVera water systems');img.remove()}));
 const io=('IntersectionObserver' in window)?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');io.unobserve(entry.target)}}),{threshold:.12}):null;
 document.querySelectorAll('.reveal').forEach(el=>{el.classList.add('aquavera-premium-reveal');io?io.observe(el):el.classList.add('in-view')});
 document.querySelectorAll('.faq-question').forEach(btn=>btn.addEventListener('click',()=>{
  const item=btn.closest('.faq-item');const open=item.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));
 }));
 const form=document.querySelector('#distributorForm');
 if(form)form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;document.querySelector('#formFeedback').textContent='Thank you. Your enquiry is ready for the AquaVera team (demo form — no email was sent).';form.reset()});
 const newsletter=document.querySelector('.footer-newsletter');
 if(newsletter)newsletter.addEventListener('submit',e=>{e.preventDefault();const input=newsletter.querySelector('input');const msg=newsletter.nextElementSibling;if(input.checkValidity()){msg.textContent='Thanks — newsletter signup demo received.';input.value=''}});
 const topBtn=document.querySelector('.back-top');
 const header=document.querySelector('.site-header');
 if(header){const onScroll=()=>header.classList.toggle('scrolled',window.scrollY>20);window.addEventListener('scroll',onScroll,{passive:true});onScroll()}
 if(topBtn){window.addEventListener('scroll',()=>topBtn.classList.toggle('visible',window.scrollY>500));topBtn.addEventListener('click',e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})})}
 document.querySelectorAll('[data-report]').forEach(btn=>btn.addEventListener('click',()=>{const modal=document.querySelector('#reportModal');if(modal)modal.classList.add('open')}));
 const modal=document.querySelector('#reportModal');
 if(modal){modal.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>modal.classList.remove('open')));modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.remove('open')});document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.classList.remove('open')})}
})();
