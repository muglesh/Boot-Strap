const EndDate = new Date("17 march, 2025, 9:35:00").getTime();
const startDate = new Date().getTime();
const duration = EndDate - startDate;
const progressBar = document.getElementById("progress-bar");
const dayBox = document.getElementById("days");
const hoursBox = document.getElementById("hours");
const minutesBox = document.getElementById("minutes");
const secondsBox = document.getElementById("seconds");
console.log(duration);

function updateTimer(){
    const now = new Date().getTime();
    const timeRemaining = EndDate - now;
    
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(timeRemaining / (60 * 60 *1000)) - days * 24;
    const minutes = Math.floor(timeRemaining / (60 *1000)) - days * 24 * 60 - hours * 60;
    const seconds = Math.floor(timeRemaining / 1000) - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
    console.log(days , hours, minutes, seconds);
    const progress = 100 * (now - startDate) / duration;

    progressBar.style.setProperty("width" , `${progress}%`);
    dayBox.innerHTML = `${days}`;
    hoursBox.innerHTML = `${hours}`;
    minutesBox.innerHTML = `${minutes}`;
    secondsBox.innerHTML = `${seconds}`;

    // stoping the timer
    if(timeRemaining < 0){
        document.getElementById("countdown").innerHTML = "Expired";
        progressBar.style.setProperty("width" , `100%`);
        clearInterval(x);
    }
}
let x = setInterval(updateTimer, 1000);