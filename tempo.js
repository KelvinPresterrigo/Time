var sec=00
var min=00
var hora=00
var interval
function doisdigitos(digit){
    if(digit<10){
        return('0'+digit)
    } else {
    return(digit)
    }
}
function start(){
    pulso()
    clearInterval(interval)
    interval= setInterval(pulso,1000)
    

}

function stop(){
    clearInterval(interval)

}

function reload (){
    clearInterval(interval)
    sec =0 
    min =0
    //window.alert("tou´ve stopped at : "+document.getElementById('pulso').innerText)
    document.getElementById('pulso').innerText="00:00:00"
}
function pulso(){
     sec++
     if(sec==60){
         min++
         sec= 0
         if(min==60){
             min=0
             hora++
         }

     }
     document.getElementById("pulso").innerText= doisdigitos(hora)+':'+ doisdigitos(min)+':'+ doisdigitos(sec)}
   

const clockContainer = document.querySelector("clock-Container")
const updateClock = () => {
    const present = new Date()
    const horus = present.getHours()
    const minu = present.getMinutes()
    const seg = present.getSeconds()
    

    minu = zero(minu)
    seg = zero(seg)
    
    function zero(x){
        if(x<10){
            x = '0'+x
        }return x
    }
   const clockHTML = `${horus} : ${minu} : ${seg}`
   clockContainer.innerHTML = clockHTML
}
setInterval(updateClock, 1000)