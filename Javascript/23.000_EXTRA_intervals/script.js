const seconds = document.querySelector('.seconds')
const minutes = document.querySelector('.minutes')
const hours = document.querySelector('.hours')
setInterval(() => {
    let today = new Date();    
    let calcseconds = today.getSeconds();
    let calcminutes = today.getMinutes();
    let calchours = today.getHours();

    if (calchours < 10)
        hours.innerText = `0${calchours}`;
    else
        hours.innerText = `${calchours}`;
    if (calcminutes < 10)
        minutes.innerText = `0${calcminutes}`;
    else
        minutes.innerText = `${calcminutes}`;
    if (calcseconds < 10)
        seconds.innerText = `0${calcseconds}`;
    else
        seconds.innerText = `${calcseconds}`;
}, 200);
