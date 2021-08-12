
const nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > nav.getBoundingClientRect().bottom) {
       console.log(nav.getBoundingClientRect().bottom, window.scrollY);
        nav.classList.add('down')
    } else {
        nav.classList.remove('down')
    }
})

