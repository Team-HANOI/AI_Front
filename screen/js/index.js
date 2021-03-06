const nav = document.querySelector('.nav')

// 스크롤 다운 효과
const sun = document.querySelector('.sun')
window.addEventListener('scroll', () => {
    // 헤더 색 변환
    if (window.scrollY > nav.getBoundingClientRect().bottom) {
        nav.classList.add('down')
    } else {
        nav.classList.remove('down')
    }

    // 태양 숨김
    if (window.scrollY > 450) {
        sun.style.opacity = '0'
        sun.style.animation = 'none'
    } else {
        sun.style.opacity = '1'
    }
})

// 네비게이션 메뉴 클릭 시 위치표시 효과
const navMenus = document.querySelectorAll('.nav-menu li')
function removeActive() {
    navMenus.forEach(navMenu => {
        navMenu.classList.remove('active')
    });
}

window.addEventListener('load', () => {
    let url = window.location.href
    let urlParts = url.split('/')
    let fileName = urlParts[4]
    if (fileName.startsWith('board')) {
        removeActive()
        navMenus[6].classList.add('active')
    } else if(fileName.startsWith('interview')) {
        removeActive()
        navMenus[1].classList.add('active')
    } else if(fileName.startsWith('recruit')) {
        removeActive()
        navMenus[13].classList.add('active')
    } else {
        removeActive()
        navMenus[0].classList.add('active')
    }
})

// 네비게이션 메뉴 마우스 커서 올릴 때 하위 메뉴 배경 효과
const navBoxes = document.querySelectorAll('.nav-sub-box')
const navSubLists = document.querySelectorAll('.nav-sub-sub li')

navBoxes.forEach((navBox, menuIndex) => {
    let subIndex = 0
    navBox.addEventListener('mouseenter', () => {
        navSubLists.forEach(navSubList => {
            if (subIndex % 2 === 0) {
                navSubList.style.transform = `translateX(${35}px)`
            } else {
                navSubList.style.transform = `translateX(${-135}px)`
            }
            if (navSubList.className === 'sub-last-item') {
                subIndex = -1
            }
            subIndex++ 
        });
    })
});

navBoxes.forEach(navBox => {
    navBox.addEventListener('mouseleave', () => {
        navSubLists.forEach((navSubList, idx) => {
            navSubList.style.transform = `translateX(${-50}px)`
        });
    })
});

// copyright 날짜
const copyDate = document.querySelector('.copyright-date')
const date = new Date()
copyDate.innerHTML = 
    date.getFullYear() + '. ' 
    + date.getMonth() + '. ' + 
    date.getDay() + '.'
    const submits = document.querySelector('.apply')
        if (submit) {
            submits.forEach(submit => {
                submit.addEventListener('click', (e) => {
                e.preventDefault()
                document.body.classList.add('complete')
                })
            });
        }
