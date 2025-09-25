//   cr8ease JS
//   Features:



document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // Animate elements on scroll
  // =========================
  const elements = document.querySelectorAll('.animate-rotate-fade');
  function animateOnScroll() {
    const windowBottom = window.innerHeight;
    elements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowBottom - 100) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  }
  if (elements.length) {
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();
  }

  // =========================
  // Hero Slider
  // =========================
  const heroSliderTrack = document.querySelector('.hero-slider-track');
  const heroSliderItems = document.querySelectorAll('.hero-slider-item');
  if (heroSliderTrack && heroSliderItems.length) {
    let heroCurrentSlide = 0;
    const heroFirstClone = heroSliderItems[0].cloneNode(true);
    heroSliderTrack.appendChild(heroFirstClone);

    function nextHeroSlide() {
      heroCurrentSlide++;
      heroSliderTrack.style.transition = 'transform 1s ease-in-out';
      heroSliderTrack.style.transform = `translateX(-${heroCurrentSlide * 100}%)`;
      if (heroCurrentSlide === heroSliderItems.length) {
        setTimeout(() => {
          heroSliderTrack.style.transition = 'none';
          heroSliderTrack.style.transform = 'translateX(0)';
          heroCurrentSlide = 0;
        }, 1000);
      }
    }
    setInterval(nextHeroSlide, 4000);
  }

  // =========================
  // Navbar
  // =========================
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;
  if (toggle) {
    toggle.addEventListener('click', () => {
      const isOpen = body.classList.contains('nav-open');
      body.classList.toggle('nav-open', !isOpen);
      toggle.setAttribute('aria-expanded', !isOpen);
      toggle.setAttribute('aria-label', !isOpen ? 'Close menu' : 'Open menu');
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') body.classList.remove('nav-open');
    });
  }

  // =========================
  // Partner Section Swiper
  // =========================
  if (typeof Swiper !== 'undefined' && document.querySelector('.partners-swiper')) {
    const swiper = new Swiper('.partners-swiper', {
      loop: true,
      speed: 5000,
      slidesPerView: 5,
      spaceBetween: 30,
      freeMode: true,
      freeModeMomentum: false,
      autoplay: { delay: 0, disableOnInteraction: false },
      breakpoints: {
        320: { slidesPerView: 1 },
        480: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      },
    });
  }

  // =========================
  // Testimonial Slider
  // =========================
  const slides = document.querySelectorAll('.testimonial-slide');
  const dotsContainer = document.querySelector('.dots');
  if (slides.length && dotsContainer) {
    let currentIndex = 0;
    const dots = [];
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
      });
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });
    function showSlide(index) {
      slides.forEach((slide, i) => slide.classList.toggle('active', i === index));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }
    showSlide(currentIndex);
    setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }, 5000);
  }


  // =========================
  // CTA Particles
  // =========================
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Particle class
class Particle {
  constructor(){
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.9;
    this.speedY = (Math.random() - 0.5) * 0.9;
    this.opacity = Math.random() * 0.5 + 0.6;
  }
  update(){
    this.x += this.speedX;
    this.y += this.speedY;
    if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;
    ctx.fill();
  }
}

// Initialize particles
const particles = [];
for(let i=0;i<50;i++) particles.push(new Particle());

// Animate particles
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  requestAnimationFrame(animate);
}
animate();

// Responsive canvas
window.addEventListener('resize', ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});




  // =========================
  // Meet The Team Flip
  // =========================
  const members = document.querySelectorAll(".team-member");
  if (members.length) {
    members.forEach(member => {
      member.addEventListener("click", () => member.classList.toggle("flip"));
    });
  }




});







