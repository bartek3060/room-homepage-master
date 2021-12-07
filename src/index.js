//import components
import changeNav from "./components/hamburgerWork"
import changeSlide from "./components/sliderWork"
// DOWNLOAD DOM
const burgerEl = document.querySelector('.nav-burger')
const closeBurger = document.querySelector('.closeBurger')
const prevSlide = document.querySelector('.slider-btn-prev')
const nextSlide = document.querySelector('.slider-brn-next')
// HAMBURGER
burgerEl.addEventListener('click', changeNav)
closeBurger.addEventListener('click', changeNav)
// SLIDER
nextSlide.addEventListener('click', changeSlide)
prevSlide.addEventListener('click', changeSlide)