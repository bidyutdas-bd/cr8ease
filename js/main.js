/*
  cr8ease Navbar JS
  Features:
    - Mobile menu toggle
    - Cross button to close
    - ESC key closes menu
*/

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const body = document.body;

  toggle.addEventListener('click', () => {
    const isOpen = body.classList.contains('nav-open');
    body.classList.toggle('nav-open', !isOpen);
    toggle.setAttribute('aria-expanded', !isOpen);
    toggle.setAttribute('aria-label', !isOpen ? 'Close menu' : 'Open menu');
  });

  // ESC key closes menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') body.classList.remove('nav-open');
  });
});
/*
  cr8ease Navbar JS End
*/





/*
 Partner JS
 for sliding partner section
*/
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.partners-swiper', {
    loop: true,                     // infinite loop
    speed: 5000,                     // smooth glide speed (adjust as needed)
    slidesPerView: 5,                // visible logos
    spaceBetween: 30,
    freeMode: true,                  // enables continuous glide
    freeModeMomentum: false,         // prevents stop at end
    autoplay: {
      delay: 0,                      // continuous sliding
      disableOnInteraction: false,
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      480: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 },
    },
  });
});

/*
 Partner JS End
*/





/*
CTA JS
Call to Action Section
*/

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
/* CTA Particles JS End */





/*
Testimoni Section JS Start 
*/
const slides = document.querySelectorAll('.testimonial-slide');
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;

// Generate dots automatically
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => {
    currentIndex = i;
    showSlide(currentIndex);
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

// Auto slide every 5 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);

/*
Testimoni Section JS End
*/




/* ===== About Page Animations ===== */
/* ===== About Page Animations ===== */




/* ===== Meet The Team Page Animations ===== */

// Simple fade-in animation on scroll
// Enable flip on mobile/touch devices
document.addEventListener("DOMContentLoaded", () => {
  const members = document.querySelectorAll(".team-member");

  members.forEach(member => {
    member.addEventListener("click", () => {
      member.classList.toggle("flip");
    });
  });
});





// Service Card Clickable in Home Page - Service Section
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.service-card');

  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      if(e.target.tagName !== 'A') {
        window.location = card.dataset.link;
      }
    });
  });
  // Blog cards
  const blogCards = document.querySelectorAll('.blog-card');
  blogCards.forEach(card => {
    card.addEventListener('click', function(e) {
      if(e.target.tagName !== 'A') {
        window.location = card.dataset.link;
      }
    });
  });
 
});





