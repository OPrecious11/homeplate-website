// HAMBURGER MENU
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// TESTIMONIALS SLIDER
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showNextTestimonial(){

testimonials[index].classList.remove("active");

index++;

if(index >= testimonials.length){
index = 0;
}

testimonials[index].classList.add("active");

}

setInterval(showNextTestimonial, 8000); // changes every 4 seconds

// LIGHTBOX
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

galleryItems.forEach(item => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = item.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if(e.target === lightbox) lightbox.style.display = "none";
});
