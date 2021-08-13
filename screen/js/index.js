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

// 네비게이션 메뉴 클릭 시 위치표시 효과
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

// 네비게이션 메뉴 마우스 커서 올릴 때 하위 메뉴 표시 효과
const navBoxes = document.querySelectorAll('.nav-sub-box')
const navSubLists = document.querySelectorAll('.nav-sub-sub li')

navBoxes.forEach((navBox, menuIndex) => {
    navBox.addEventListener('mouseenter', () => {
        let subIndex = 0
        let flag = false
        navSubLists.forEach(navSubList => {
            if (menuIndex % 2 != 0 && subIndex != 1) {
                flag = true
                subIndex = 0
            } 
            if ( subIndex % 2 === 0) {
                navSubList.style.transform = `translateX(${50}px)`
            }
            subIndex++ 
            console.log(menuIndex, subIndex, flag)
        });
    })
});
//
navBoxes.forEach(navBox => {
    navBox.addEventListener('mouseleave', () => {
        navSubLists.forEach((navSubList, idx) => {
            navSubList.style.transform = `translateX(${-50}px)`
        });
    })
});




