const clockContainer = document.querySelector('.clock-Container')

const updateClock = () => {
    const present = new Date()
    const horas = present.getHours()
    const min = present.getMinutes()
    const seg = present.getSeconds()

    const clockHTML = `
        <span>${string(horas).length === 1 ? `0${horas}`: horas}</span> :
        <span>${string(min).length === 1 ? `0${min}`: min}</span> :
        <span>${string(seg).length === 1 ? `0${seg}`: seg}</span>
    `
   clockContainer.innerHTML = clockHTML
}

setInterval(updateClock, 1000)