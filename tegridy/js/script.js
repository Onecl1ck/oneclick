'use strict';
//Timer
let //deadline = '2019-06-14';
    deadline = new Date();

function getTimeRemaming(endtime) {
    let //t = Date.parse(endtime) - Date.parse(new Date()),
        t = Date.parse(endtime) + 100000000 - Date.parse(new Date()),
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

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = document.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    

    function updateClock() {
        let t = getTimeRemaming(endtime);
        if (t.hours < 10)  hours.textContent = "0" + t.hours; 
        else  hours.textContent = t.hours; 


        if (t.minutes < 10)  minutes.textContent = "0" + t.minutes; 
        else  minutes.textContent = t.minutes; 
    

        if (t.seconds < 10) seconds.textContent = "0" + t.seconds; 
        else seconds.textContent = t.seconds; 
      

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }
}
setClock('timer', deadline);

//MODAL

let more = document.querySelector('.learn_more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

console.log(more);

more.addEventListener('click', function () {
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
});