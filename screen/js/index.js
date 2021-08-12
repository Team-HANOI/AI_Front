const nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    if (window.scrollY > nav.getBoundingClientRect().bottom) {
        nav.classList.add('down')
    } else {
        nav.classList.remove('down')
    }
})

const navMenus = document.querySelectorAll('.nav-menu li')

navMenus.forEach(navMenu => {
    navMenu.addEventListener('click', (e) => {
        e.preventDefault()
        removeActive()
        navMenu.classList.add('active')
    })
});

function removeActive() {
    navMenus.forEach(navMenu => {
        navMenu.classList.remove('active')
    });
}





