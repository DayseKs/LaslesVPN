const slideWapper = document.querySelector('[data-slide="wrapper"]');
const slideList = document.querySelector('[data-slide="list"]');
const controlsWrapper = document.querySelector(
  '[data-slide="controls-wrapper"]',
);
const btnPrev = document.querySelector('[data-slide="previus-button"]');
const btnNext = document.querySelector('[data-slide="next-button"]');
const slides = document.querySelectorAll('[data-slide="item"]');
const btnControls = document.querySelectorAll('[data-slide="control-button"]');

let currentIndex = 0;
let autoPlayInterval;

function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    nextSlider();
  }, 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

function hideSlider() {
  slides.forEach((item) => {
    item.classList.remove("active");
  });

  btnControls.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function showSlider() {
  slides[currentIndex].classList.add("active");
  btnControls[currentIndex].classList.add("active");
}

function nextSlider() {
  hideSlider();
  if (currentIndex === slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showSlider();
  moveSlider();
}

function prevSlider() {
  hideSlider();
  if (currentIndex === 0) {
    currentIndex = slides.length - 1;
  } else {
    currentIndex--;
  }
  showSlider();
  moveSlider();
}

function moveSlider() {
  let positionSlide = currentIndex * slides[0].clientWidth;
  slideList.style.transform = `translateX(-${positionSlide}px)`;
}

btnNext.addEventListener("click", nextSlider);
btnPrev.addEventListener("click", prevSlider);
startAutoPlay();
