const nav = document.querySelector('.nav')

// 스크롤링 색 변환 효과
window.addEventListener('scroll', () => {
    if (window.scrollY > nav.getBoundingClientRect().bottom) {


       console.log(nav.getBoundingClientRect().bottom, window.scrollY);


        nav.classList.add('down')
    } else {
        nav.classList.remove('down')
    }
})

// 네비게이션 메뉴 효과
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




