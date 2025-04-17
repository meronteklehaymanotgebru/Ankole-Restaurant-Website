const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const slide  = document.querySelectorAll('.testimony');
let currentIndex = 0;
function showSlide(i) {
  if (i >= slide.length) i = 0;
  if (i < 0)           i = slide.length - 1;
  slide.forEach(s => s.classList.remove('active'));
  slide[i].classList.add('active');
  currentIndex = i;
}
prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
showSlide(0);
