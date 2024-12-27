let msmain = document.querySelector('#ms')
let smain = document.querySelector('#s')
let mmain = document.querySelector('#m')
const ul  =document.querySelector('.flag')
const btn = document.querySelectorAll('.btns button')
let set = 0
let ms = 0
let s = 0
let m = 0
let num = 1
console.log(m);


btn[0].addEventListener('click', (e)=>{
    let li = document.createElement('li')
    li.innerHTML=`  <span>${num}</span>
                <div id="flagnum">
                    <span>${m}</span>
                    <span>:</span>
                    <span>${s}</span>
                    <span>:</span>
                    <span>${ms}</span>
                </div>
                <i id="X">✖</i>`
            num++

    ul.appendChild(li)
      const X = document.querySelectorAll('#X')   
      console.log(X);
   X.forEach((val) => {
    val.addEventListener('click' , (e)=>{
        val.parentElement.remove()
         num--
     })
   });
            
})
btn[1].addEventListener('click', (e)=>{

    if(e.target.getAttribute('data-status') == 'off'   ){
        set = setInterval(timer, 1)
        e.target.setAttribute('data-status', 'on')
        btn[1].style.border.radius='50%'
        e.target.innerHTML='<svg style=" pointer-events: none;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"/></svg>'
    }else{
         e.target.setAttribute('data-status', 'off')
        e.target.innerHTML='<svg style=" pointer-events: none;" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#fff"><path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/></svg>'
        clearInterval(set)
    }
   
          
})
btn[2].addEventListener('click', (e)=>{
    ms=0
    m=0
    s=0
     msmain.innerHTML=ms+'0'
     smain.innerHTML =s+'0'
     mmain.innerHTML= m+'0'
     if(btn[1].getAttribute('data-status') == 'on'){
        btn[1].click()
     }

})
function timer(){
    if(ms<99){
        ms++
        mmain.innerHTML = ms
    }else{
        ms=0
        if(s<59){
            s++
            smain.innerHTML = s
        }else{
            s=0
            m++
            msmain.innerHTML = m
        }
    }
}
