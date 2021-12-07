var sec=00
var min=00
var hora=00

var interval

function Watch(interval) {
    interval = setInterval ()
    var data = new Date()
    var horasRelogio = data.getHours()
    var minutesRelogio = data.getMinutes()
    var secRelogio = data.getSeconds()
    
    var tempoTotal = `${horasRelogio} : ${minutesRelogio} : ${secRelogio}`
    var tempo = document.getElementById("div_relogio")
    tempoTotal.innerText = tempo
    
} 
setInterval(Watch, 500)

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
     document.getElementById("pulso").innerText= doisdigitos(hora)+':'+ doisdigitos(min)+':'+ doisdigitos(sec)

 }