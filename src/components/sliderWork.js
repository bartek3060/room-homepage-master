const paragrapgs = [...document.querySelectorAll('.paragraphs')]
const imagesURL = ['./images/desktop-image-hero-1.jpg', './images/desktop-image-hero-2.jpg', './images/desktop-image-hero-3.jpg']
const imgSlider = document.querySelector('.imgSlider')
let count = 0
const changeSlide = (e) => {
    if (e.target.closest('button').className == 'slider-btn-prev') {
        count > 0 ? count-- : count = paragrapgs.length - 1
    } else {
        count < 2 ? count++ : count = 0;
    }
    paragrapgs.map(p => p.classList.remove('active'))
    paragrapgs[count].classList.add('active')
    imgSlider.style.backgroundImage = `url(${imagesURL[count]})`
}
export default changeSlide