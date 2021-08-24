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

// join-person 주요기술 팝업
function showTech(){
    document.getElementById("popTech").style.display="block";
}

function subAdmit(){
    document.getElementById("popTech").style.display="none";
}

function subCancel(){
    document.getElementById("popTech").style.display='none';
}