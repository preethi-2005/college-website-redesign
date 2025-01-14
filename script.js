const slider = document.querySelector('.slider');
let index = 0;

function autoSlide() {
  index++;
  if (index >= slider.children.length) {
    index = 0;
  }

  slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(autoSlide, 3000); // Change image every 3 seconds

document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.style.transform = 'scale(1.1)';
    });
    
    icon.addEventListener('mouseleave', () => {
        icon.style.transform = 'scale(1)';
    });
});


// Automatic Slider Functionality (if you want images to scroll automatically)
let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function moveToNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    const newTransformValue = -100 * currentSlide + '%';
    document.querySelector('.slider').style.transform = `translateX(${newTransformValue})`;
}

setInterval(moveToNextSlide, 3000); // Change image every 3 seconds
