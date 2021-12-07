const header = document.querySelector('.header')
const navigation = document.querySelector('.nav-ul')
const background = document.querySelector('.nav')
const burgerEl = document.querySelector('.nav-burger')
const changeTab = [navigation, burgerEl, header, background]
// HAMBURGER
const changeNav = (e) => {
    changeTab.map(item => item.classList.toggle('active'))
}

export default changeNav