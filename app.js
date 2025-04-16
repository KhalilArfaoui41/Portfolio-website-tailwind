const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav li')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('close')
  nav.classList.toggle('open')
})

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('close')
    nav.classList.remove('open')
  })
})
