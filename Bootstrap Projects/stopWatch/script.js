// const progress = document.getElementById('ps');
// progress.style.setProperty("--progress-degree", `40%`);
document.addEventListener("DOMContentLoaded", function(){
    const startTime = new Date().getTime();
    console.log(startTime);
    let totalDuration = 0;
    let duration = 0;
    let x;
    const setTime = document.getElementById("setTime");
    const startbtn = document.getElementById("startbtn");
    const pausebtn = document.getElementById("pausebtn");
    const resetbtn = document.getElementById("resetbtn");
    const resumebtn = document.getElementById("resumebtn");
    const duringCount = document.getElementById("duringCount");
    const progress = document.getElementById('ps');
    const dayBox = document.getElementById('days');
    const hoursBox = document.getElementById('hours');
    const minutesBox = document.getElementById('minutes');
    const secondsBox = document.getElementById('seconds');
    function updateTimer(){
        const days = Math.floor(duration / ( 1000 * 60 * 60 * 24));
        const hours = Math.floor(duration / (1000 * 60 * 60)) - days * 24;
        const minutes = Math.floor(duration / (1000 * 60)) - days * 24 * 60 - hours * 60;
        const seconds = Math.floor(duration / 1000 ) - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
        console.log(days , hours, minutes, seconds);
        const green = 100 * (totalDuration - duration) / totalDuration;
        duration -= 1000;
        progress.style.setProperty("--progress-degree", `${green}%`);
        dayBox.innerHTML = `${days}`;
        hoursBox.innerHTML = `${hours}`;
        minutesBox.innerHTML = `${minutes}`;
        secondsBox.innerHTML = `${seconds}`;
    
        // stoping the timer
        if(duration < 0){
            document.getElementById("countdounHead").innerHTML = "Time Up";
            document.getElementById("countdown").style.setProperty("display", "none");
            progress.style.setProperty("--progress-degree", `0%`);
            pausebtn.style.setProperty("display","none");
            resumebtn.style.setProperty("display", "none");
            clearInterval(x);
        }
    }
    startbtn.addEventListener("click",()=>{
        const daysInput = document.getElementById("daysInput");
        const hoursInput = document.getElementById("hrsInput");
        const minutesInput = document.getElementById("minsInput");
        const secondsInput = document.getElementById("secsInput");
        let days, hours, minutes, seconds;
        try{
            days = daysInput.value;
            hours = hoursInput.value;
            minutes = minutesInput.value;
            seconds = secondsInput.value;
            days = days != null ? days : 0;
            hours = hours != null ? hours : 0;
            minutes = minutes != null ? minutes : 0;
            seconds = seconds != null ? seconds : 0;
            duration = (((days * 24 + hours) * 60 + minutes) * 60 + seconds)*1000;
            console.log(duration);
            let flag = true;
            if(hours > 24 || hours < 0){
                alert("hours must be 0-23");
                hoursInput.value = '';
                flag = false;
            }
            if(minutes > 60 || minutes < 0){
                alert("minutes must be 0-59");
                minutesInput.value = '';
                flag = false;
            }
            if(seconds > 60 || seconds < 0){
                alert("seconds must be 0-59");
                secondsInput.value = '';
                flag = false;
            }
            if(duration <= 0){
                alert("timer not set");
            }
            else if(flag){
                totalDuration = duration;
                daysInput.value = '';
                hoursInput.value = '';
                minutesInput.value = '';
                secondsInput.value = '';
                setTime.style.setProperty("display", "none");
                duringCount.style.setProperty("display", "flex");
                pausebtn.style.setProperty("display","unset");
                document.getElementById("countdounHead").innerHTML = "Clock's Ticking";
                x = setInterval(updateTimer, 1000);
            }
        }
        catch(e){
            console.log(e.message);
        }
    });
    pausebtn.addEventListener("click", () =>{
        clearInterval(x);
        pausebtn.style.setProperty("display","none");
        resumebtn.style.setProperty("display", "unset");
    })
    resetbtn.addEventListener("click",() =>{
        setTime.style.setProperty("display", "flex");
        duringCount.style.setProperty("display", "none");
        document.getElementById("countdown").style.setProperty("display", "flex");
    })
    resumebtn.addEventListener("click", () =>{
        x = setInterval(updateTimer, 1000);
        pausebtn.style.setProperty("display","unset");
        resumebtn.style.setProperty("display", "none");
    })
})