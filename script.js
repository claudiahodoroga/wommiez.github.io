//Like counter for like button
let likeCounter = 0;

function updateLikeCounter(){
    document.getElementById("like-counter").textContent = likeCounter;
}

document.getElementById("heart").addEventListener("click", function(){
    likeCounter++;
    updateLikeCounter()
});

updateLikeCounter();

//Current time clock
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");

setInterval(()=>{
    let currentTime = new Date();

    hour.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    minute.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
},1000);


//Current date calendar
date = new Date();
d = (date.getDate()<10?"0":"") + date.getDate();
m = date.getMonth()+1;
y = date.getFullYear();

document.getElementById("date").innerHTML = d + "/" + m + "/" + y;



