'use strict';
//Timer
let deadline = '2019-06-12';

function getTimeRemaming(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000 / 60) % 60),
        hours = Math.floor(t / 1000 / 60 / 60);

    return { 
        'total' : t,
        'seconds' : seconds,
        'minutes': minutes,
        'hours' : hours

    };
}

//console.log(getTimeRemaming(deadline));
//console.log(getTimeRemaming(deadline).hours);

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = document.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    

    function updateClock() {
        let t = getTimeRemaming(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}
setClock('timer', deadline);