// 폼 작성완료 메시지 효과
const submit = document.querySelector('.login-btn')

if (submit) {
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        document.body.classList.add('complete')
    })
}

// 키워드 팝업효과
const keywordPopups = document.querySelectorAll('.keyword-popup')
if (keywordPopups) {
    keywordPopups.forEach(keywordPopup => {
        keywordPopup.addEventListener('click', (e) => {
            console.log('hi')
            document.body.classList.add('complete')
        })    
    });
}