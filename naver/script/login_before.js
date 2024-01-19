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

//====================================================
console.log('로그인 메세지 출력======================')
//  아이디 로그인 시 틀린 정보 또는 입력되지 않은 정보에 따라 error message 출력하기
// 1. 아이디 미입력 후 로그인 버튼 클릭 시 => '아이디를 입력해주세요'
// 2. 아이디를 입력 후 비밀번호를 미입력 후 로그인 버튼 클릭 시 => '비밀번호를 입력해주세요'
// 3. 아이디 , 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞지 않다면 => '아이디(로그인 전용 아이디)또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.'
// 4. 아이디, 비밀번호 입력 후 로그인 버튼 클릭 시 해당 정보가 맞다면 => 로그인 성공 팝업 '어서오세요 00님'

const useurIdInput = document.querySelector('#useurId')
const useurPwInput = document.querySelector('#useurPw')
const error_message = document.querySelector('.error_message')
const loginBtn = document.querySelector('#loginBtn')
const userList = [{
    id:'admin',
    pw: '1234'
}]
console.log(useurIdInput, useurPwInput, error_message, loginBtn)

loginBtn.addEventListener('click',()=>{
    if(useurIdInput.value == ''){ // 아이디 빈 문자열 검사 -> 참이라면
        error_message.innerText = '아이디를 입력해주세요.' // 참일 때 실행
    }else if(useurPwInput.value == ''){
        error_message.innerText = '비밀번호를 입력해주세요.'}
    else {
        if(userList[0].id == useurIdInput.value && userList[0].pw == useurPwInput.value){
            alert(`어서오세요 ${userList[0].id} 님`)
        }else{
            alert('아이디(로그인 전용 아이디)또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요.')
            useurPwInput.value = ''
        }
    }
})

// 인증번호를 미입력 후 로그인버튼 클릭시 error 메세지 출력

const disposableLoginBtn = document.querySelector('#disposableLoginBtn')
const disposable_num = document.querySelector('#disposable_num')
const error = document.querySelector('.error')

disposableLoginBtn.addEventListener('click', ()=>{
    if(disposable_num.value == ''){
        error.innerHTML = '일회용 로그인 번호를 입력하세요.'
    }
})