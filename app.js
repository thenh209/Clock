var sec=0;
var min=0;
var hor=0;
var d=new Date(); //to get current time
setInterval(()=>{
    d=new Date();
    sec=d.getSeconds()*6; //360/60
    min=d.getMinutes()*6; //360/60
    hor=d.getHours()*30 + Math.round(min/12);  //360/12
    sec=document.getElementById("second").style.transform="rotate("+ sec + "deg)";
    min=document.getElementById("minute").style.transform="rotate("+ min + "deg)";
    hor=document.getElementById("hour").style.transform="rotate("+ hor  + "deg)";
},1000);
setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();

    let hoursOfDay = timeNow.getHours();
    let minutes = timeNow.getMinutes();
    let seconds = timeNow.getSeconds();
    let weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let today = weekDay[timeNow.getDay()];
    let months = timeNow.toLocaleString("default", {month: "long"});
    let year = timeNow.getFullYear();
    let period = "AM";
    let date=timeNow.getDate();

    if (hoursOfDay >= 12) {
        hoursOfDay-= 12;
        period = "PM";
    }

    if (hoursOfDay === 0) {
        hoursOfDay = 12;
        period = "AM";
    }

    hoursOfDay = hoursOfDay < 10 ? "0" + hoursOfDay : hoursOfDay;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let time = hoursOfDay + ":" + minutes + ":" + seconds +" "+period;

    document.getElementById("time").innerHTML = time;
    document.getElementById("date").innerHTML =date + "-" + months + "-" + year +"("+today+")";

}




 