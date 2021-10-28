const images = ['assets/slide-1.jpg', 'assets/slide-2.jpg', 'assets/slide-3.jpg'];
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.slider__prev-btn');
const nextBtn = document.querySelector('.slider__next-btn');
let currentSlideNumber = 0;

slider.style.backgroundImage = `url(${images[0]})`;

const prevImage = () => {
  if (currentSlideNumber !== 0) {
    currentSlideNumber -= 1;
    slider.style.backgroundImage = `url(${images[currentSlideNumber]})`;
  } else {
    currentSlideNumber = images.length - 1;
    slider.style.backgroundImage = `url(${images[currentSlideNumber]})`;
  }
};

const nextImage = () => {
  if (currentSlideNumber !== (images.length - 1)) {
    currentSlideNumber += 1;
    slider.style.backgroundImage = `url(${images[currentSlideNumber]})`;
  } else {
    currentSlideNumber = 0;
    slider.style.backgroundImage = `url(${images[currentSlideNumber]})`;
  }
};

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
