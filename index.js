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

/*let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slides img").length;

function showSlide(i){
  slides.style.transform = `translateX(-${i * 100}%)`;
}

setInterval(()=>{
  index = (index + 1) % total;
  showSlide(index);
},3000);*/
l/*et index = 0;
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
});*/
/*let index = 0;
const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slides img").length;

let startX = 0;
let endX = 0;

function showSlide(i){
  slides.style.transform = `translateX(-${i * 100}%)`;
}

// TOUCH START
slider.addEventListener("touchstart", (e)=>{
  startX = e.touches[0].clientX;
});

// TOUCH END
slider.addEventListener("touchend", (e)=>{
  endX = e.changedTouches[0].clientX;

  let diff = startX - endX;

  if(diff > 50){
    // swipe left
    index = (index + 1) % total;
  }
  else if(diff < -50){
    // swipe right
    index = (index - 1 + total) % total;
  }

  showSlide(index);
});*/

// show first slide
/*showSlide(index);
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

// stop auto when user interacts
dots.forEach(dot=>{
  dot.addEventListener("click", ()=> clearInterval(auto));
});*/
let index = 0;

const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dots span");

const total = images.length;

let startX = 0;
let endX = 0;

// SHOW SLIDE FUNCTION
function showSlide(i){
  slides.style.transform = `translateX(-${i * 100}%)`;

  // update dots
  dots.forEach(dot => dot.classList.remove("active"));
  dots[i].classList.add("active");
}

// DOT CLICK
dots.forEach((dot, i)=>{
  dot.addEventListener("click", ()=>{
    index = i;
    showSlide(index);
  });
});

// TOUCH START
slider.addEventListener("touchstart", (e)=>{
  startX = e.touches[0].clientX;
});

// TOUCH END
slider.addEventListener("touchend", (e)=>{
  endX = e.changedTouches[0].clientX;

  let diff = startX - endX;

  if(diff > 50){
    // swipe left
    index = (index + 1) % total;
  }
  else if(diff < -50){
    // swipe right
    index = (index - 1 + total) % total;
  }

  showSlide(index);
});

// INITIAL LOAD
showSlide(index);