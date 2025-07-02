// Join club button
function joinClub() {
  alert('Welcome to CGU Space Club! Connect with us on social media to join our mission.');
}

// Toggle mobile menu
const menuToggle = document.getElementById('mobileMenu');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Back to top button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'flex' : 'none';
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Star & comet background animation
const canvas = document.getElementById('spaceCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let stars = [], comets = [];

for (let i = 0; i < 250; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.3 + 0.1
  });
}

for (let i = 0; i < 5; i++) {
  comets.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height / 2,
    size: Math.random() * 2 + 2,
    dx: -2 - Math.random() * 2,
    dy: 1 + Math.random() * 2
  });
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'white';
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();

    s.y += s.speed;
    if (s.y > canvas.height) s.y = 0;
  });

  comets.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,255,255,0.9)';
    ctx.arc(c.x, c.y, c.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.3)';
    ctx.moveTo(c.x, c.y);
    ctx.lineTo(c.x + 20, c.y - 20);
    ctx.stroke();

    c.x += c.dx;
    c.y += c.dy;
    if (c.x < -50 || c.y > canvas.height + 50) {
      c.x = canvas.width + Math.random() * 100;
      c.y = Math.random() * canvas.height / 2;
    }
  });

  requestAnimationFrame(animateStars);
}

animateStars();