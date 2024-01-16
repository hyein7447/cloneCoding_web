// 로그인 탭 제목 클릭시 해당 내용 활성화 JS
// 0. (초기) 로그인내용 O, 일회용내용X, QR코드내용X, ID로그인 제목 활성화 (css)
// 1. ID로그인을 클릭하면 로그인내용 O, 일회용내용X, QR코드내용X
// 2. 일회용을 클릭하면 로그인내용 X, 일회용내용O, QR코드내용X
// 3. QR코드를 클릭하면 로그인내용 X, 일회용내용X, QR코드내용O
// 제목 변수
const login_title = document.querySelectorAll('.login_title h2 > a')
// 내용 변수
const id_login_container = document.querySelector('.login_container .id_login')
const disposable_login_container = document.querySelector('.login_container .disposable_login')
const qr_login_container = document.querySelector('.login_container .qr_login')
console.log(id_login_container, disposable_login_container, qr_login_container)

// 초기 일회용 , qr 내용 숨기기
disposable_login_container.style.display = 'none'
qr_login_container.style.display = 'none'

// 초기값 ID로그인 활성화 시키기 (active) *클릭 전
login_title[0].parentElement.classList.add('active')

// 일회용을 클릭하면 로그인내용 X, 일회용내용O, QR코드내용X
login_title[1].addEventListener('click', ()=> {
    login_title[0].parentElement.classList.remove('active')
    login_title[1].parentElement.classList.add('active')
    login_title[2].parentElement.classList.remove('active')

    disposable_login_container.style.display = 'block'
    id_login_container.style.display = 'none'
    qr_login_container.style.display = 'none'
})
// ID로그인을 클릭하면 로그인내용 O, 일회용내용X, QR코드내용X
login_title[0].addEventListener('click',()=>{
    login_title[0].parentElement.classList.add('active')
    login_title[1].parentElement.classList.remove('active')
    login_title[2].parentElement.classList.remove('active')

    disposable_login_container.style.display = 'none'
    qr_login_container.style.display = 'none'
    id_login_container.style.display = 'block'
})
// QR코드를 클릭하면 로그인내용 X, 일회용내용X, QR코드내용O
login_title[2].addEventListener('click',()=>{
    login_title[0].parentElement.classList.remove('active')
    login_title[1].parentElement.classList.remove('active')
    login_title[2].parentElement.classList.add('active')

    id_login_container.style.display = 'none'
    disposable_login_container.style.display = 'none'
    qr_login_container.style.display = 'block'
})
