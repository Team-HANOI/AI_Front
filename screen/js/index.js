const nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > nav.getBoundingClientRect().bottom) {
        nav.classList.add('down')
    } else {
        nav.classList.remove('down')
    }
})