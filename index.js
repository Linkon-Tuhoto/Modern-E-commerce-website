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

document.querySelectorAll(".slider").forEach((slider) => {

  let index = 0;

  const slides = slider.querySelector(".slides");
  const images = slider.querySelectorAll("img");
  const dots = slider.querySelectorAll(".dots span");

  const total = images.length;

  let startX = 0;

  function showSlide(i){
    slides.style.transform = `translateX(-${i * 100}%)`;

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
    let endX = e.changedTouches[0].clientX;
    let diff = startX - endX;

    if(diff > 50){
      index = (index + 1) % total;
    }
    else if(diff < -50){
      index = (index - 1 + total) % total;
    }

    showSlide(index);
  });

  showSlide(index);

});
