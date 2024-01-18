// 왼쪽 썸네일 이미지 JS
// 1. small_thumnail-a 마우스를 올리면 small2 마우스를 올렸다면
// 2. big_thumnail-img(src) 값이 변경된다. ex) big1이 big2 이미지 변경

const item_detail = document.querySelector('.item_detail')
const small_thum = item_detail.querySelectorAll('.small_thumnail a')
const big_thum = item_detail.querySelector('.big_thumnail img')
console.log(item_detail, small_thum, big_thum)

small_thum[0].addEventListener('mouseover',function(){
    big_thum.src="./dog_images/big1.jpg";
})
small_thum[1].addEventListener('mouseover',function(){
    big_thum.src="./dog_images/big2.jpg";
})

// 가격 할인 정보 클릭 시 나오는 정보 팝업
// 1. 팝업 숨기기
// 2. i 클릭하면 팝업 보이기

const price_info = item_detail.querySelector('.price i[class$=info')
const price_info_open = item_detail.querySelector('.price .open')
console.log(price_info, price_info_open)

price_info_open.style.display = 'none'

price_info.addEventListener('click', function(){
    price_info_open.style.display='block';
})

// 내일 출발 i 클릭 시 팝업 출력하고 팝업 내 X 클릭 시 팝업 닫히기 JS
// 1. 팝업 숨기기
// 2. i 클릭 시 팝업 출력
// 3. x 클릭 시 팝업 닫히기

const benefit_open = item_detail.querySelector('.benefit_shipping .open')
const benefit_info = item_detail.querySelector('.benefit_shipping i[class$=info')
const close = item_detail.querySelector('.open .close')
console.log(benefit_open, benefit_info, close)

benefit_open.style.display = "none"

benefit_info.addEventListener('click', function(){
    benefit_open.style.display = "block"
})

close.addEventListener('click', function(){
    benefit_open.style.display = "none"
})

// 배송 정보 보기 도착예정 94% 클릭 시 팝업 출력

const delivery_menu = item_detail.querySelector('.delivery_menu')
const menu_open = item_detail.querySelector('.delivery_menu_open')
const icon = item_detail.querySelector('.delivery_menu i[class$=down')
console.log(delivery_menu, menu_open, icon)

menu_open.style.display = 'none'

let delivery_menu_opne_status = false // 현재 상태 변수 (false == 숨김)
delivery_menu.addEventListener('click', function(){
    if(delivery_menu_opne_status == false){
        console.log(delivery_menu_opne_status) //open
        menu_open.style.display = 'flex';
        delivery_menu.style ='border-bottom-left-radius:0; border-bottom-right-radius:0;'
        icon.style.transform = `scaleY(-1)`;
        delivery_menu_opne_status = !delivery_menu_opne_status
    }else{
        console.log(delivery_menu_opne_status)// close
        menu_open.style.display = 'none';
        delivery_menu.style ='border-bottom-left-radius:5; border-bottom-right-radius:5;'
        icon.style.transform = `scaleY(1)`
        delivery_menu_opne_status = !delivery_menu_opne_status
    }
})

/* 상품 색상, 사이즈 옵션을 선택했을 때 선택 정보가 selectResult에 결과값으로 출력되고
unm_resulr의 구매수량에 따라 order_price에 가격이 출력되는 결과 */

// 상세절차 : 상품-색상, 사이즈 옵션을 선택했을 때

// 색상 미선택시 사이즈 옵션 선택 불가
// 품절 옵션 선택 불가
// 색상, 사이즈 모두 선택시 결과 팝업 출력
// 결과 팝업을 토대로 주문금액 출력
// 결과 팝업에서 수량 변경 시 주문금액 
// 색상 클릭 시 색상기본 선택/bg_color 
// 옵션 선택시 mouseover 했을 때 bg_color
// 같은 사이즈,색상 선택시 중복 팝업 출력
// 사이즈, 색상 서로 다르게 선택시 결과 위로 쌓이면서 출력

/* ------------------------------------------------------------------
1. 색상(옵션1) 선택 전 사이즈(옵션2) 비활성화
2. 옵션1 선택 시 옵션2 활성화
2-1. 옵션1에 대한 option테이터에 따라 옵션2의 각 다른 select 활성화
3. 옵션1 선택 후 옵션2 클릭 시 결과 출력
3-1. (위) 조건 달성 기준 결과 출력이 되어있는 상태라면 같은 옵션 클릭시 중복 데이터 결과 팝업 출력
3-2 (위) 조건 달성 기준 결과 출력과 다른 옵션을 클릭 시 추가 데이터 기존 데이터 (위) 출력
3-3. (위) 조건 달성 기준 옵션1, 옵션2의 선택 데이터는 초기화 됨.
*/
const colorOpt = document.querySelector('#colorOpt')
const sizeOpt = document.querySelector('#sizeOpt')
console.log(colorOpt, sizeOpt)
console.log(colorOpt.options[1].value);
console.log(colorOpt.options[1].value.text);



// colorOpt, sizeOpt text 데이터를 모두 변수로 수집 후 
// createElement, appendChild 를 이용해서 opt1, opt2 선택 테이터 출력하기
const opt1 = document.createElement('span')
const opt2 = document.createElement('span')
const result = document.querySelectorAll('.opt_list span')
const selectResult = document.querySelector('.selectResult')
const selectResult_close = selectResult.querySelector('.close')
const num_count = document.querySelector('#num_count')
const order_price = selectResult.querySelector('.order_price')
const last_price = document.querySelector('fieldset:nth-child(2) .order_price')
console.log(num_count)

let num = 1;
let price = 36900;

console.log(opt1, opt2, result)
selectResult.style.display = 'none'
sizeOpt.disabled = true

/* select 옵션 선택시 옵션값 출력되는 함수 */
colorOpt.addEventListener('change', function(){
    console.log(colorOpt.value)
    console.log(colorOpt.options[colorOpt.selectedIndex].text)
    opt1.innerText = colorOpt.options[colorOpt.selectedIndex].text
    console.log(opt1)
    sizeOpt.disabled = false
})
sizeOpt.addEventListener('change', function(){
    // 선택 option 데이터 저장하기
    console.log(sizeOpt.options[sizeOpt.selectedIndex].text)
    opt2.innerText = sizeOpt.options[sizeOpt.selectedIndex].text
    console.log(opt2)
    
    // 선택 option 부모 보이기
    selectResult.style.display = 'grid'; /* 색상,사이즈를 다 선택하면 결과 팝업 나오게 */
    selectResult_status = true
    // 선택 옵션 적용 대상에 위 option 데이터값 출력하기
    result[0].appendChild(opt1)
    result[1].appendChild(opt2)
    // 선택옵션의 수량(num) 출력하기
    num_count.value = num
    
    // 선택옵션의 가격(price) 출력하기
    order_price.innerHTML = price.toLocaleString('ko-kr')+'원'
    last_price.innerHTML = price.toLocaleString('ko-kr')+'원'
})

// selectResult 안 x 클릭시 x의 부모 (selectResult)를 DOM관계로 선택해서 숨기기

selectResult_close.addEventListener('click',function(){
    selectResult_close.parentElement.style.display = 'none'
    selectResult_status = false
})

// 수량 -,+ 클릭 시 수량값이 변경되며 그에 따라 가격 변동
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
let total = 0
console.log(minus, plus)

// 최소 구매수량 1, 최대 구매수량 7
// 최소 구매 수량입니다.
// 재고 7개로 더 구매할 수 없습니다. 
plus.addEventListener('click',()=>{
    if(num < 7){
        // 1. 수량 1증가
        num++
        // 1-1. 수량 1증가한 값 표시
        num_count.value = num;
        // 2. 수량*가격 = 구매 가격
        total = num*price;
        // 3. 구매가 세자리 콤마 표시
        order_price.innerHTML = total.toLocaleString('ko-kr')+'원'
        last_price.innerHTML = total.toLocaleString('ko-kr')+'원'
    }
    else{
        alert('재고 7개로 더이상 구매할 수 없습니다.')
    }
})
minus.addEventListener('click', ()=>{
    if(num > 1){/*  */
        num--
        num_count.value = num;
        total = num*price;
        order_price.innerHTML = total.toLocaleString('ko-kr')+'원'
        last_price.innerHTML = total.toLocaleString('ko-kr')+'원'
    }
    else{
        alert('최소 구매 수량입니다.')
    }
})
const cart = document.querySelector('#cart')
let selectResult_status = false

cart.addEventListener('click',()=>{
    if(selectResult_status == false ){
        alert('상품의 옵션을 선택해 주세요')
    }
    else{
        alert('장바구니에 상품이 담겼습니다.')
    }
})