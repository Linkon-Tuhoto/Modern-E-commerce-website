// Navbar color change on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(175, 87, 87, 0.9)'; // Semi-transparent when scrolled
        header.style.backdropFilter = 'blur(10px)'; // Add blur effect
    } else {
        header.style.background = '#d8d7d7'; // Original color
        header.style.backdropFilter = 'none';
    }
}); 
let index = 0;
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dots span");

function showSlide(i){
  slides.style.transform = `translateX(-${i * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

dots.forEach((dot, i)=>{
  dot.addEventListener("click", ()=>{
    index = i;
    showSlide(index);
  });
});


// show first slide
showSlide(index);
let startX = 0;

slides.addEventListener("touchstart", (e)=>{
  startX = e.touches[0].clientX;
});

slides.addEventListener("touchend", (e)=>{
  let endX = e.changedTouches[0].clientX;

  if(startX - endX > 50){
    // swipe left
    index = (index + 1) % total;
  }
  else if(endX - startX > 50){
    // swipe right
    index = (index - 1 + total) % total;
  }

  showSlide(index);
});
let auto = setInterval(nextSlide, 3000);

function nextSlide(){
  index = (index + 1) % total;
  showSlide(index);
}

dots.forEach(dot=>{
  dot.addEventListener("click", ()=> clearInterval(auto));
});
