const item = document.querySelectorAll('.item')
const page_btn = document.querySelectorAll('.page_btn button')
console.log(item, page_btn)

page_btn.forEach((t,i)=>{
    t.addEventListener('click',()=>{
        window.scrollTo(0,item[i].offsetTop)
    })
})