const item = document.querySelectorAll('.item')
const button_wrap_a = document.querySelectorAll('.button_wrap a')

button_wrap_a.forEach((t, i)=>{
    t.addEventListener('click',(e)=>{
        e.preventDefault() // a태그의 href속성으로 정상적으로 이동을 방해할 때 막아주는 명령
        window.scrollTo(0,item[i].offsetTop)
    })
})