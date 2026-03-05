let testimonials = document.querySelectorAll(".testimonial-card");
let index = 0;

function showTestimonial(){

  testimonials.forEach(card => {
    card.classList.remove("active");
  });

  testimonials[index].classList.add("active");

  index++;

  if(index === testimonials.length){
    index = 0;
  }

}

showTestimonial();

setInterval(showTestimonial, 8000);

let galleryImages = document.querySelectorAll(".gallery img");
let lightbox = document.getElementById("lightbox");
let lightboxImg = document.getElementById("lightbox-img");
let closeBtn = document.querySelector(".close");

galleryImages.forEach(image => {

  image.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = image.src;
  });

});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

let menuToggle = document.getElementById("menu-toggle");
let navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});