// Navbar scroll + solid for inner pages
(function(){
  const nav = document.getElementById('navbar');
  if(!nav) return;
  // If not home page, always solid
  if(!document.getElementById('hero')){
    nav.classList.add('solid');
  }
  window.addEventListener('scroll', () => {
    if(document.getElementById('hero')){
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }
  });
})();

// Highlight active nav link based on current page
(function(){
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if(href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active-page');
    }
  });
})();

// Mobile nav toggle
function toggleMenu(){
  const nav = document.getElementById('mobile-nav');
  if(!nav) return;
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Form submit handlers
function submitAdmission(e){
  e.preventDefault();
  const s = document.getElementById('form-success');
  if(s){ s.style.display = 'block'; }
  e.target.querySelectorAll('input,select,textarea').forEach(el => el.value='');
  if(s) s.scrollIntoView({behavior:'smooth', block:'center'});
}

function submitContact(e){
  e.preventDefault();
  const s = document.getElementById('contact-success');
  if(s){ s.style.display = 'block'; }
  e.target.querySelectorAll('input,textarea').forEach(el => el.value='');
}

// Intersection Observer for fade-in
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(en => { if(en.isIntersecting) en.target.classList.add('visible'); });
  }, {threshold: 0.12});
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});