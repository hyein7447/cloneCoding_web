const body =document.querySelector('html,body')
const link_a =document.querySelectorAll('.link a')
const bg = document.querySelectorAll('.bg')
const nav_a = document.querySelectorAll('nav a')
// 1.classList 로 링크 걸어놓기

link_a[0].classList.add('active')

// 높이가 100vh라서 크기 변할수있음 
bg.forEach((obj,idx)=>{
    console.log(bg[idx].offsetTop)
})

//스크롤 했을 떄 / 각bg의 위치에 닿으면 / link -a 색상이 변경되고 싶다
// window.scroll  / if offsetTop / class list
window.addEventListener('scroll',()=>{
    link_a.forEach((obj,idx)=>{
        console.log('.')
        if(body.scrollTop >= bg[idx].offsetTop-200){
            console.log('..')
            // 함수 호출
            link_a_remove()
            link_a[idx].classList.add('active')
        }
    })
})

//클래스 초기화 함수 생성
const link_a_remove = ()=> {
    for(let i of link_a){i.classList.remove('active')}
    // 
}



// D클릭시 bg 4로 이동
// nav_a[3].addEventListener('click',(e)=>{
    //     e.preventDefault()
    //     window.scrollTo(0, bg[3].offsetTop)
    // })
//nav a 클릭시 각 bg1~4 위치로 이동
nav_a.forEach((obj,idx)=>{
    obj.addEventListener('click',(e)=>{
        e.preventDefault()
        window.scrollTo(0,bg[idx].offsetTop)
    })
})
const circle = document.querySelector('.circle')
window.addEventListener('mousemove',(e)=>{
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})