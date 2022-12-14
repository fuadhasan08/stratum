const btn = document.querySelector('.btn-wrap')
const btnClose = document.querySelector('.mobile-menu-close')
const toggle = document.querySelectorAll('.toggle')

btn.addEventListener('click', () => {
  toggle.forEach((element) => {
    if (element.classList.contains('show')) {
      element.classList.remove('show')
    } else {
      element.classList.add('show')
    }
  })
})

btnClose.addEventListener('click', () => {
  toggle.forEach((element) => {
    element.classList.remove('show')
  })
})

// Scroll Reveal General Setting
window.sr = ScrollReveal({ reset: true })

sr.reveal('.title', {
  distance: '30px',
  origin: 'bottom',
  duration: 1000,
  delay: 100,
})

sr.reveal('.desc', { opacity: 0, duration: 1000, delay: 200 })

sr.reveal('.btn_box', {
  distance: '30px',
  origin: 'bottom',
  duration: 1000,
  delay: 300,
})

sr.reveal('section .image_box', {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
  delay: 500,
})

sr.reveal('.home .image_box', {
  distance: '30px',
  origin: 'bottom',
  duration: 1000,
  delay: 500,
})

sr.reveal('.gifts .item_block:nth-child(1)', {
  distance: '50px',
  opacity: 0,
  origin: 'bottom',
  duration: 1000,
  delay: 200,
})

sr.reveal('.gifts .item_block:nth-child(2)', {
  distance: '50px',
  opacity: 0,
  origin: 'bottom',
  duration: 1000,
  delay: 400,
})

sr.reveal('.gifts .item_block:nth-child(3)', {
  distance: '50px',
  opacity: 0,
  origin: 'bottom',
  duration: 1000,
  delay: 600,
})

sr.reveal('.footer', {
  opacity: 0,
  duration: 1000,
})
