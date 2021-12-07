
const clockContainer = document.querySelector('.clock-Container')

const updateClock = () => {
    let present = new Date()
    let horas = present.getHours()
    let min = present.getMinutes()
    let seg = present.getSeconds()
    min = zero(min)
    seg = zero(seg)
    function zero(x){
        
        if(x < 10){
            x = '0'+x
        }return x
    }
   const clockHTML = `${horas} : ${min} : ${seg}`
   clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000) 