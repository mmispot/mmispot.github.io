
  let index = 0;
  const slides = document.querySelector('.slides');
  const total = document.querySelectorAll('.slide').length;

  function updateSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % total;
    updateSlide();
  }

  function prevSlide() {
    index = (index - 1 + total) % total;
    updateSlide();
  }