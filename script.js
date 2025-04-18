let current = 0;
const slideshow = document.getElementById('slide-image');
const textOverlay = document.getElementById('text-overlay');
const slides=[{image:'images/download.jpeg',text:'welcome'},{image:'images/lights.jpeg',text:'discover'},{image:'images/Steak.jpeg',text:'experience'},{image:'images/drink.jpeg',text:'taste'},{image:'images/ingrdients.jpeg',text:'savour'}];
function updateSlideshow() {
  slideshow.style.backgroundImage = `url(${slides[current].image})`;
  textOverlay.textContent = slides[current].text;
  current = (current + 1) % slides.length;
}
setInterval(updateSlideshow, 8000);
updateSlideshow();


