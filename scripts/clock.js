const secondHand = document.querySelector('#second');
const minuteHand = document.querySelector('#minute');
const hourHand = document.querySelector('#hour');

const myClock = function(){
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 ) + 90;
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`

    
};

setInterval(myClock, 1000);