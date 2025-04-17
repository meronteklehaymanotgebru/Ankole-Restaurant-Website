const slideshow=document.getElementById('slide-image');
 const textOverlay=document.getElementById('text-overlay');
 const slides=[{image:'images/download.jpeg',text:'welcome'},{image:'images/lights.jpeg',text:'discover'},{image:'images/Steak.jpeg',text:'experience'},{image:'images/drink.jpeg',text:'taste'},{image:'images/ingrdients.jpeg',text:'savour'}];

 let current=0;
 function backgrounds(){
    //  slideshow.style.opacity=0

     if(current == 0){
        slideshow.style.backgroundImage=`url(${slides[current].image})`;
        textOverlay.textContent=slides[current].text;
        slideshow.style.opacity=1;
        current=(current+1)%slides.length;

     }
     setTimeout(()=>{
        console.log('are we here');
        
         slideshow.style.backgroundImage=`url(${slides[current].image})`;
         textOverlay.textContent=slides[current].text;
         slideshow.style.opacity=1;
         current=(current+1)%slides.length;
 
 
     },3000)
 }
 backgrounds();
 setInterval(backgrounds,7000);
//  const buttons = document.querySelectorAll('.filter-btn');
//  const sections = document.querySelectorAll('.menu-section');
 
//  buttons.forEach(button => {
//    button.addEventListener('click', function() {savour

//      // Get the target section from the button data-target attribute
//      const targetSection = document.getElementById(button.getAttribute('data-target'));
     
//      // Scroll smoothly to the target section
//      targetSection.scrollIntoView({ behavior: 'smooth' });
     
//      // Remove active class from all buttons
//      buttons.forEach(btn => btn.classList.remove('active'));
     
//      // Add active class to the clicked button
//      button.classList.add('active');
//    });
//  });
// const items = document.querySelectorAll('.menu-item');
// const navLinks = document.querySelectorAll('.salad-nav a');

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const sectionId = entry.target.id;
//             navLinks.forEach(link => {
//                 link.classList.remove('thai-beef-active', 'keen-wa-active', 'caesar-active', 'active');
//                 if (link.getAttribute('data-section') === sectionId) {
//                     link.classList.add(`${sectionId}-active`, 'active');
//                 }
//             });
//         }
//     });
// }, {
//     threshold: 0.5,
//     root: document.querySelector('.menu-scroll')
// });

// items.forEach(item => observer.observe(item));
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');
// const slide = document.querySelectorAll('.testimonials-slider');
// let currentIndex = 0;
// function showSlide(index) {
//     currentIndex = (index >= slide.length) ? 0 :
//                    (index < 0) ? slide.length - 1 : index;
//     slide.forEach(slide => slide.classList.remove('active'));
//     slide[currentIndex].classList.add('active');
// }
// if (prevBtn) prevBtn.onclick = () => showSlide(currentIndex - 1);
// if (nextBtn) nextBtn.onclick = () => showSlide(currentIndex + 1);
// // Initialize slideshow
// showSlide(0);
//     currentIndex = (index >= slide.length) ? 0 : 
//                    (index < 0) ? slide.length - 1 : index;
//     slide.forEach(slide => slide.classList.remove('active'));
//     slide[currentIndex].classList.add('active');
// }
// if (prevBtn) prevBtn.onclick = () => showSlide(currentIndex - 1);
// if (nextBtn) nextBtn.onclick = () => showSlide(currentIndex + 1);

// // Initialize slideshow
// showSlide(0);
// script.js

  