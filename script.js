// script.js

// Key messages auto-rotation and navigation
const messages = document.querySelectorAll('.key-messages .message');
const leftArrow = document.querySelector('.nav-arrow.left');
const rightArrow = document.querySelector('.nav-arrow.right');
let currentIndex = 0;

function showMessage(index) {
  messages.forEach((msg, i) => {
    msg.classList.remove('active');
    if (i === index) {
      msg.classList.add('active');
    }
  });
}

function nextMessage() {
  currentIndex = (currentIndex + 1) % messages.length;
  showMessage(currentIndex);
}

function prevMessage() {
  currentIndex = (currentIndex - 1 + messages.length) % messages.length;
  showMessage(currentIndex);
}

if (messages.length > 0) {
  showMessage(currentIndex);
  setInterval(nextMessage, 5000);
  if (leftArrow && rightArrow) {
    leftArrow.addEventListener('click', prevMessage);
    rightArrow.addEventListener('click', nextMessage);
  }
}

// Blog horizontal scroll buttons
const scrollContainer = document.querySelector('.blog-items');
const scrollLeft = document.querySelector('.scroll-left');
const scrollRight = document.querySelector('.scroll-right');

if (scrollContainer && scrollLeft && scrollRight) {
  scrollLeft.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -300, behavior: 'smooth' });
  });

  scrollRight.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 300, behavior: 'smooth' });
  });
}

// Mission & Vision scroll animation (basic slide-in effect)
window.addEventListener('scroll', () => {
  const mission = document.querySelector('.mission');
  const vision = document.querySelector('.vision');
  const triggerBottom = window.innerHeight * 0.85;

  [mission, vision].forEach((element, i) => {
    const boxTop = element.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      element.style.transform = i === 0 ? 'translateX(0)' : 'translateX(0)';
      element.style.opacity = 1;
    } else {
      element.style.transform = i === 0 ? 'translateX(-100px)' : 'translateX(100px)';
      element.style.opacity = 0;
    }
  });
});

// Contact form basic validation
const form = document.querySelector('.contact-form form');
if (form) {
  form.addEventListener('submit', (e) => {
    const requiredFields = form.querySelectorAll('[required]');
    let allValid = true;
    requiredFields.forEach(field => {
      if (!field.value.trim()) {
        allValid = false;
        field.style.border = '2px solid red';
      } else {
        field.style.border = '';
      }
    });
    if (!allValid) {
      e.preventDefault();
      alert('Please fill all required fields.');
    }
  });
}
