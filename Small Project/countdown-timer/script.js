const dayEl = document.getElementById('day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')

const birthday = '30 Aug 2021'

function countdown(){
    const newBirthday = new Date(birthday)
    const today = new Date()

    let diff = (newBirthday - today) / 1000;

    let day = Math.floor(diff / 3600 / 24)
    let hour = Math.floor( (diff / 3600 ) % 24 )
    let minute = Math.floor( (diff / 60 ) % 60 )
    let second = Math.floor( diff % 60 )
   

    dayEl.innerHTML = day
    hourEl.innerHTML = format(hour)
    minuteEl.innerHTML = format(minute)
    secondEl.innerHTML = format(second)
}

function format(time){
    return time < 10 ? `0${time}` : time;
}
setInterval(countdown,1000)
